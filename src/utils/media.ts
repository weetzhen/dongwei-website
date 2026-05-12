export function isVideoUrl(url: string): boolean {
  if (!url) return false;
  // 本地视频文件
  if (/\.(mp4|webm|ogg|mov|m4v|mkv)(\?.*)?(#t=[\d.]+)?$/i.test(url)) return true;
  // Vimeo 外链
  if (/^https?:\/\/(player\.)?vimeo\.com\//i.test(url)) return true;
  // YouTube 外链
  if (/^https?:\/\/(www\.)?(youtube\.com\/watch\?|youtube\.com\/embed\/|youtu\.be\/)/i.test(url)) return true;
  return false;
}

/** 判断是否为外部平台视频（非本地文件） */
export function isExternalVideoUrl(url: string): boolean {
  return isVideoUrl(url) && !/\.(mp4|webm|ogg|mov|m4v|mkv)(\?.*)?(#t=[\d.]+)?$/i.test(url);
}

/** 把各种视频URL统一转成可嵌入的 iframe src */
export function getVideoEmbedUrl(url: string): string | null {
  if (!url) return null;

  // 去掉 #t=xxx hash，确保嵌入播放始终从 00:00 开始
  const { cleanUrl } = parseVideoTimeHash(url);

  // 已经是 Vimeo 嵌入链接
  if (/^https?:\/\/player\.vimeo\.com\/video\/\d+/i.test(cleanUrl)) {
    return cleanUrl;
  }
  // Vimeo 普通链接
  const vimeoMatch = cleanUrl.match(/^https?:\/\/vimeo\.com\/(\d+)/i);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  // 已经是 YouTube 嵌入链接
  if (/^https?:\/\/(www\.)?youtube\.com\/embed\//i.test(cleanUrl)) {
    return cleanUrl;
  }
  // YouTube watch 链接
  const youtubeWatchMatch = cleanUrl.match(/^https?:\/\/(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/i);
  if (youtubeWatchMatch) {
    return `https://www.youtube.com/embed/${youtubeWatchMatch[2]}`;
  }
  // YouTube 短链接
  const youtubeShortMatch = cleanUrl.match(/^https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i);
  if (youtubeShortMatch) {
    return `https://www.youtube.com/embed/${youtubeShortMatch[1]}`;
  }

  return null;
}

/** 获取外部视频（YouTube）的平台缩略图地址（同步） */
export function getExternalVideoPoster(url: string): string | null {
  const { cleanUrl } = parseVideoTimeHash(url);

  // YouTube watch 链接
  const youtubeWatchMatch = cleanUrl.match(/^https?:\/\/(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/i);
  if (youtubeWatchMatch) {
    return `https://img.youtube.com/vi/${youtubeWatchMatch[2]}/maxresdefault.jpg`;
  }
  // YouTube 短链接
  const youtubeShortMatch = cleanUrl.match(/^https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i);
  if (youtubeShortMatch) {
    return `https://img.youtube.com/vi/${youtubeShortMatch[1]}/maxresdefault.jpg`;
  }
  // YouTube 嵌入链接
  const youtubeEmbedMatch = cleanUrl.match(/^https?:\/\/(www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/i);
  if (youtubeEmbedMatch) {
    return `https://img.youtube.com/vi/${youtubeEmbedMatch[2]}/maxresdefault.jpg`;
  }

  return null;
}

/** 异步获取 Vimeo 缩略图 */
export async function getVimeoPosterAsync(url: string): Promise<string | null> {
  const { cleanUrl } = parseVideoTimeHash(url);
  const vimeoMatch = cleanUrl.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/i);
  if (!vimeoMatch) return null;
  try {
    const res = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoMatch[1]}&width=1920`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.thumbnail_url || null;
  } catch {
    return null;
  }
}

/** 从视频URL中解析 #t=时间戳，返回 { 纯净URL, 时间点 } */
export function parseVideoTimeHash(url: string): { cleanUrl: string; seekTime: number | null } {
  const match = url.match(/^(.*?)(#t=([\d.]+))?$/);
  if (!match) return { cleanUrl: url, seekTime: null };
  return {
    cleanUrl: match[1],
    seekTime: match[3] ? parseFloat(match[3]) : null,
  };
}