import { useEffect, useRef } from 'react';
import { parseVideoTimeHash, isExternalVideoUrl, getVideoEmbedUrl } from '@/utils/media';

interface VideoModalProps {
  url: string | null;
  onClose: () => void;
}

export default function VideoModal({ url, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (url && videoRef.current && !isExternalVideoUrl(url)) {
      // 弹窗播放始终从视频开头（0秒）开始，忽略 URL 中的 #t=xxx
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [url]);

  if (!url) return null;

  const { cleanUrl } = parseVideoTimeHash(url);
  const isExternal = isExternalVideoUrl(url);
  const embedUrl = isExternal ? getVideoEmbedUrl(url) : null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl px-4 md:px-6">
        <div className="relative w-full aspect-video rounded-lg bg-black overflow-hidden">
          {isExternal && embedUrl ? (
            <iframe
              src={embedUrl}
              title="video player"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
            <video
              ref={videoRef}
              src={cleanUrl}
              controls
              className="absolute inset-0 w-full h-full"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-4 md:right-6 text-white hover:text-gray-300 transition-colors cursor-pointer"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
            <i className="ri-close-line text-2xl" />
          </div>
        </button>
      </div>
    </div>
  );
}