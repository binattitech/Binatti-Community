"use client";

interface YouTubeProps {
  videoId: string;
}

export function YouTubeEmbed({ videoId }: YouTubeProps) {
  return (
    <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{ width: "100%", height: "100%" }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
