/**
 * VIDEOS
 * All video content used across the site.
 * Replace `youtubeId` with your actual YouTube video ID.
 */

export const videos = {
  designProcess: {
    // Replace this with your actual YouTube video ID
    // e.g. "dQw4w9WgXcQ" → "abc123XYZ"
    youtubeId: "dQw4w9WgXcQ",
    get embedUrl() {
      return `https://www.youtube.com/embed/${this.youtubeId}?autoplay=1`;
    },
    get thumbnailUrl() {
      return `https://img.youtube.com/vi/${this.youtubeId}/maxresdefault.jpg`;
    },
  },
};
