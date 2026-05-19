// src/components/weather/WeatherCard.tsx
import type { WeatherData } from "../../types/weather";

interface WeatherCardProps {
  data: WeatherData;
  themeGlow: string;
  textPrimary: string;
  textSecondary: string;
  glass: string;
  cardBorder: string;
}

export default function WeatherCard({
  data, 
  themeGlow,
  textPrimary,
  textSecondary,
  glass,
  cardBorder,
}: WeatherCardProps) {

  const iconUrl =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  const localTime = new Date( data.dt * 1000 + data.timezone * 1000);

  const formattedTime = localTime.toUTCString().slice(17, 22);

  return (
    <div
      className={`
        mt-6
        rounded-3xl
        ${glass}
        backdrop-blur-lg
        border
        ${cardBorder}
        shadow-2xl
        p-8
        overflow-hidden
        relative
      `}
    >

      {/* Glow background */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${themeGlow}
          pointer-events-none
        `}
      />

      {/* Conteúdo */}
      <div className="relative z-10">

        {/* Topo */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <div>
            <h2 className={`text-3xl font-bold ${textPrimary}`}>
              {data.name}
            </h2>

            <p className={`capitalize ${textSecondary} mt-1`}>
              {data.weather[0].description}
            </p>

            <p className={`text-sm ${textSecondary} mt-1`}>
              Horário local: {formattedTime}
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

          <p className={`text-7xl font-black tracking-tight ${textPrimary}`}>
            {Math.round(data.main.temp)}°C
          </p>

          <p className={`mt-2 ${textSecondary}`}>
            Sensação térmica de{" "}
            {Math.round(data.main.feels_like)}°C
          </p>

        </div>

        {/* Infos extras */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className={`rounded-2xl p-4 bg-black/5 backdrop-blur-md transition-all duration-700 ${textPrimary}`}>
            <p className={`text-sm ${textSecondary}`}>
              Umidade
            </p>

            <p className="text-2xl font-bold mt-1">
              {data.main.humidity}%
            </p>
          </div>

          <div className={`rounded-2xl p-4 bg-black/5 backdrop-blur-md ${textPrimary} `}>
            <p className={`text-sm ${textSecondary}`}>
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