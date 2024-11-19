import { useState } from "react";
import ReactPlayer from "react-player/lazy";

export default function VideoSlide({ slide }) {
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
      <div className="absolute left-0 right-0 top-0 z-10 h-[90%] cursor-pointer bg-transparent" />
    </div>
  );
}
