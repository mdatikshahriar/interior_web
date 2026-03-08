"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { videos } from "@/lib/content/videos";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const { t } = useLanguage();
  const videoId = videos.designProcess.youtubeId;

  return (
    <section className="py-20 md:py-28 bg-soil">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
        <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
          {t.video.pretitle}
        </p>
        <h2 className="font-playfair font-bold text-cream text-4xl md:text-5xl mb-4">
          {t.video.heading}
        </h2>
        <p className="font-raleway text-cream/60 text-base max-w-xl mx-auto mb-10">
          {t.video.subtitle}
        </p>

        {/* Video container */}
        <div className="relative max-w-4xl mx-auto aspect-video bg-soil/50 overflow-hidden border border-harvest/20">
          {playing ? (
            <iframe
              src={videos.designProcess.embedUrl}
              title={t.video.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            />
          ) : (
            <>
              {/* Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${videos.designProcess.thumbnailUrl})`,
                }}
              />
              <div className="absolute inset-0 bg-soil/50" />

              {/* Play button */}
              <button
                onClick={() => setPlaying(true)}
                aria-label={t.video.play}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-harvest text-soil flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#9B2D21] transition-all duration-300">
                  <Play size={28} fill="currentColor" className="ml-1" />
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
