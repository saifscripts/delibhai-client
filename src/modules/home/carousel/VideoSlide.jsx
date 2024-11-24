import { useState } from "react";
import ReactPlayer from "react-player/lazy";

export default function VideoSlide({ slide }) {
  // Controlled playback (to enable toggle play/pause over the overlay layer)
  const [playing, setPlaying] = useState(true);

  return (
    <div
      className="relative aspect-[2/1] w-full overflow-hidden rounded-xl"
      onClick={() => setPlaying((playing) => !playing)}
    >
      <ReactPlayer
        playing={playing}
        controls
        light={slide.thumbURL}
        width="100%"
        height="100%"
        loop
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        onClickPreview={() => setPlaying((playing) => !playing)}
        url={slide.videoURL}
      />
      {/* Overlay (to enable sliding over the video) */}
      {!playing && (
        <>
          <div className="bg-red-transparent absolute left-0 right-0 top-0 z-10 h-[calc(40%)] cursor-pointer" />
          <div className="bg-red-transparent absolute left-0 top-0 z-10 h-[calc(100%-56px)] w-[40%] cursor-pointer" />
          <div className="bg-red-transparent absolute bottom-[56px] left-0 right-0 z-10 h-[calc(40%-56px)] cursor-pointer" />
          <div className="bg-red-transparent absolute right-0 top-0 z-10 h-[calc(100%-56px)] w-[40%] cursor-pointer" />
        </>
      )}
    </div>
  );
}
