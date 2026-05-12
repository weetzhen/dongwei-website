import { useEffect, useState } from 'react';
import { isVideoUrl, isExternalVideoUrl, parseVideoTimeHash, getExternalVideoPoster, getVimeoPosterAsync } from '@/utils/media';

interface CarouselMediaItemProps {
  url: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  onPlayClick?: () => void;
  showPlayButton?: boolean;
}

// 缓存每个视频URL提取出的封面图，避免重复计算
const posterCache = new Map<string, string>();

function VideoThumbnailItem({
  url,
  className,
  onPlayClick,
  showPlayButton,
}: {
  url: string;
  className?: string;
  onPlayClick?: () => void;
  showPlayButton: boolean;
}) {
  const [posterUrl, setPosterUrl] = useState<string | null>(posterCache.get(url) ?? null);
  const { cleanUrl, seekTime } = parseVideoTimeHash(url);
  const isExternal = isExternalVideoUrl(url);

  useEffect(() => {
    // 外部视频（Vimeo / YouTube）尝试获取平台缩略图
    if (isExternal) {
      if (posterCache.has(url)) {
        setPosterUrl(posterCache.get(url)!);
        return;
      }

      const youtubePoster = getExternalVideoPoster(url);
      if (youtubePoster) {
        posterCache.set(url, youtubePoster);
        setPosterUrl(youtubePoster);
        return;
      }

      // Vimeo 需要异步获取缩略图
      let cancelled = false;
      getVimeoPosterAsync(url).then((poster) => {
        if (!cancelled) {
          if (poster) {
            posterCache.set(url, poster);
            setPosterUrl(poster);
          } else {
            setPosterUrl(null);
          }
        }
      });

      return () => {
        cancelled = true;
      };
    }

    if (posterCache.has(url)) {
      setPosterUrl(posterCache.get(url)!);
      return;
    }

    let cancelled = false;
    const video = document.createElement('video');
    video.src = cleanUrl;
    video.preload = 'metadata';
    video.muted = true;
    video.playsInline = true;

    const generatePoster = async () => {
      await new Promise<void>((resolve) => {
        video.onloadedmetadata = () => resolve();
      });
      if (cancelled) return;

      const duration = video.duration || 0;
      // 如果 URL 里有 #t=xxx，优先用那个时间点，再配合百分比候选
      const candidates: number[] = [];
      if (seekTime != null) {
        candidates.push(seekTime);
      }
      candidates.push(
        Math.min(Math.max(duration * 0.1, 0.5), 2),
        Math.min(Math.max(duration * 0.2, 1), 4),
        Math.min(Math.max(duration * 0.3, 2), 6),
        Math.min(Math.max(duration * 0.5, 3), 10),
      );

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setPosterUrl(null);
        return;
      }

      for (const time of candidates) {
        video.currentTime = time;
        await new Promise<void>((resolve) => {
          video.onseeked = () => resolve();
        });
        if (cancelled) return;

        // 先用小画布快速检测亮度
        canvas.width = 160;
        canvas.height = 90;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let total = 0;
        let count = 0;
        // 每20个像素采样一次
        for (let i = 0; i < data.length; i += 80) {
          const brightness = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          total += brightness;
          count++;
        }

        const avg = total / count;

        // 平均亮度 > 25 认为是可以看清的帧
        if (avg > 25) {
          // 用视频原始分辨率生成高质量封面，上限 1920x1080 避免 data URL 过大
          const vw = video.videoWidth || 1280;
          const vh = video.videoHeight || 720;
          const maxW = 1920;
          const maxH = 1080;
          const scale = Math.min(maxW / vw, maxH / vh);
          canvas.width = Math.round(vw * scale);
          canvas.height = Math.round(vh * scale);
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
          posterCache.set(url, dataUrl);
          if (!cancelled) setPosterUrl(dataUrl);
          return;
        }
      }

      // 所有候选帧都太暗，回退到视频元素直接显示
      if (!cancelled) setPosterUrl(null);
    };

    generatePoster();

    return () => {
      cancelled = true;
      video.onloadedmetadata = null;
      video.onseeked = null;
      video.src = '';
    };
  }, [url, cleanUrl, seekTime, isExternal]);

  // 有提取到的封面图，直接显示图片
  if (posterUrl) {
    return (
      <div className={`relative overflow-hidden ${className || ''}`}>
        <img src={posterUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* 轻量毛玻璃质感遮罩 */}
        <div className="absolute inset-0 backdrop-blur-[1.7px] bg-black/15 pointer-events-none" />
        {showPlayButton && onPlayClick ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPlayClick();
            }}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group z-10"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <i className="ri-play-fill text-2xl md:text-3xl text-[#f6444e] ml-1" />
            </div>
          </button>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/80">
              <i className="ri-play-fill text-xs text-[#f6444e] ml-0.5" />
            </div>
          </div>
        )}
      </div>
    );
  }

  // 回退：渐变背景 + CSS增亮，确保不会死黑
  // 外部视频（Vimeo / YouTube）直接显示渐变背景 + 播放按钮
  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900" />
      {!isExternal && (
        <video
          src={url}
          preload="metadata"
          muted
          playsInline
          style={{ filter: 'brightness(1.15) contrast(1.05)' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {showPlayButton && onPlayClick ? (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPlayClick();
          }}
          className="absolute inset-0 flex items-center justify-center cursor-pointer group z-10"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <i className="ri-play-fill text-2xl md:text-3xl text-[#f6444e] ml-1" />
          </div>
        </button>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/80">
            <i className="ri-play-fill text-xs text-[#f6444e] ml-0.5" />
          </div>
        </div>
      )}
    </div>
  );
}

export function CarouselMediaItem({
  url,
  alt,
  className,
  imageClassName,
  onPlayClick,
  showPlayButton = true,
}: CarouselMediaItemProps) {
  if (isVideoUrl(url)) {
    return (
      <VideoThumbnailItem
        url={url}
        className={className}
        onPlayClick={onPlayClick}
        showPlayButton={showPlayButton}
      />
    );
  }

  return <img src={url} alt={alt || ''} className={imageClassName || className} />;
}