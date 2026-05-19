// src/components/forecast/ForecastCard.tsx
import type { ForecastItem } from "../../types/forecast";

interface ForecastCardProps {
  item: ForecastItem;

  textPrimary: string;
  textSecondary: string;
  glass: string;
  cardBorder: string;
}

export default function ForecastCard({
  item,
  textPrimary,
  textSecondary,
  glass,
  cardBorder
}: ForecastCardProps) {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleDateString("pt-BR", { weekday: "short" });

    const iconUrl =
    `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

    return (
        <div className={`min-w-[120px] ${glass} border ${cardBorder} backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center shadow-lg transition-all duration-500`}>
            <p className={`capitalize text-sm ${textSecondary}`}>
                {day}
            </p>

            <img src={iconUrl} alt="Ícone do clima" className="w-16 h-16" />

            <p className={`text-2xl font-bold ${textPrimary}`}>
                {Math.round(item.main.temp)}°C
            </p>

            <p className={`text-xs text-center mt-1 ${textSecondary}`}>
                {item.weather[0].description}
            </p>
            
        </div>
    );
}