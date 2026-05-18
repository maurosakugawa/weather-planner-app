// src/components/weather/WeatherCard.tsx
import type { WeatherData } from "../../types/weather";

interface WeatherCardProps {
  data: WeatherData;
}

export default function WeatherCard({
  data,
}: WeatherCardProps) {

  const iconUrl =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  return (
    <div
      className="
        mt-6
        rounded-3xl
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        shadow-2xl
        p-8
        text-white
        overflow-hidden
        relative
      "
    >

      {/* Glow background */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-400/20
          to-blue-600/20
          pointer-events-none
        "
      />

      {/* Conteúdo */}
      <div className="relative z-10">

        {/* Topo */}
        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-3xl font-bold">
              {data.name}
            </h2>

            <p className="capitalize text-white/70 mt-1">
              {data.weather[0].description}
            </p>
          </div>

          <img
            src={iconUrl}
            alt="Ícone do clima"
            className="w-28 h-28"
          />

        </div>

        {/* Temperatura */}
        <div className="mt-6">

          <p className="text-7xl font-black tracking-tight">
            {Math.round(data.main.temp)}°
          </p>

          <p className="text-white/70 mt-2">
            Sensação térmica de{" "}
            {Math.round(data.main.feels_like)}°C
          </p>

        </div>

        {/* Infos extras */}
        <div
          className="
            grid
            grid-cols-2
            gap-4
            mt-8
          "
        >

          <div className="bg-white/10 rounded-2xl p-4">
            <p className="text-sm text-white/60">
              Umidade
            </p>

            <p className="text-2xl font-bold mt-1">
              {data.main.humidity}%
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4">
            <p className="text-sm text-white/60">
              Vento
            </p>

            <p className="text-2xl font-bold mt-1">
              {data.wind.speed} km/h
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}