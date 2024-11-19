import { useState } from "react";
import ReactPlayer from "react-player/lazy";

export default function VideoSlide({ slide }) {
  // Controlled playback (to enable toggle play/pause over the overlay layer)
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative aspect-[2/1] max-h-[calc(100svh-120px)] w-full overflow-hidden rounded-xl"
      onClick={() => setPlaying((playing) => !playing)}
    >
      <ReactPlayer
        playing={playing}
        controls
        width="100%"
        height="100%"
        loop
        url={slide.videoURL}
      />
      {/* Overlay (to enable sliding over the video) */}
      <div className="absolute left-0 right-0 top-0 z-10 h-[calc(100%-56px)] cursor-pointer bg-transparent" />
    </div>
  );
}
