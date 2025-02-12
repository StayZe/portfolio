import Image from "next/image";

export default function Game() {
  return (
    <div className="md:px-4 grid md:grid-cols-2 gap-4 w-full h-full">
      <div className="w-full h-full relative">
        <video src="/img/games/eldenring.mp4" autoPlay loop muted></video>
        <p className="absolute bottom-0 left-1 md:top-0 md:left-1 text-white font-press-start text-xs">
          ELDEN RING
        </p>
      </div>
      <div className="w-full h-full relative">
        <video src="/img/games/cod.mp4" autoPlay loop muted></video>
        <p className="absolute bottom-0 left-1 md:top-0 md:right-1 text-white font-press-start text-xs">
          CALL OF DUTY
        </p>
      </div>
      <div className="w-full h-full relative">
        {" "}
        <video src="/img/games/csgo.mp4" autoPlay loop muted></video>
        <p className="absolute bottom-0 left-1 md:top-0 md:left-1 text-white font-press-start text-xs">
          CS2
        </p>
      </div>
      <div className="w-full h-full relative">
        {" "}
        <video src="/img/games/forza.mp4" autoPlay loop muted></video>
        <p className="absolute bottom-0 left-1 md:top-0 md:left-1 text-white font-press-start text-xs">
          FORZA HORIZON
        </p>
      </div>
    </div>
  );
}
