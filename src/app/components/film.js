import Image from "next/image";

export default function Film() {
  return (
    <div className="md:px-4 grid md:grid-cols-2 gap-4 w-full h-full">
      {/* Fight Club */}
      <div className="w-full h-full relative">
        <div className="w-full h-full aspect-video">
          <video
            className="w-full h-full object-cover"
            src="/img/film/fightclub.webm"
            autoPlay
            loop
            muted
          ></video>
        </div>
        {/* Image centrée */}
        <div className="absolute inset-0 flex items-center justify-center h-full w-full">
          <Image
            src={"/img/film/fightclub.webp"}
            width={300} // Ajuste la taille si nécessaire
            height={300}
            alt="fight club logo"
            className="max-h-full scale-75" // Optionnel pour rendre le logo légèrement transparent
          />
        </div>
      </div>

      {/* Taxi Driver */}
      <div className="w-full h-full relative">
        <div className="w-full h-full aspect-video">
          <video
            className="w-full h-full object-cover"
            src="/img/film/taxidriver.webm"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={"/img/film/taxi.webp"}
            width={300}
            height={300}
            alt="taxi driver logo"
          />
        </div>
      </div>

      {/* Tenet */}
      <div className="w-full h-full relative">
        <div className="w-full h-full aspect-video">
          <video
            className="w-full h-full object-cover"
            src="/img/film/tenet.webm"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={"/img/film/tenet.webp"}
            width={300}
            height={300}
            alt="tenet logo"
          />
        </div>
      </div>

      {/* Wall Street */}
      <div className="w-full h-full relative">
        <div className="w-full h-full aspect-video">
          <video
            className="w-full h-full object-cover"
            src="/img/film/wallstreet.webm"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={"/img/film/wallstreet.webp"}
            width={300}
            height={300}
            alt="wall street logo"
          />
        </div>
      </div>
    </div>
  );
}
