import { useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";

export default function VideoSlide({ slide }) {
  // Controlled playback (to enable toggle play/pause over the overlay layer)
  const [playing, setPlaying] = useState(true);
  const player = useRef(null);

  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl">
      <ReactPlayer
        playing={playing}
        controls
        light={slide.thumbURL}
        width="100%"
        height="100%"
        loop
        ref={player}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        url={slide.videoURL}
      />
      {/* Overlay (to enable sliding over the video) */}

      {!playing && (
        <div
          className="absolute left-0 right-0 top-0 z-10 h-[calc(100%-56px)] cursor-pointer bg-transparent"
          onClick={() => setPlaying(!playing)}
        />
      )}
    </div>
  );
}
