// src/components/forecast/ForecastCard.tsx
import type { ForecastItem } from "../../types/forecast";

interface ForecastCardProps {
  item: ForecastItem;
}

export default function ForecastCard({
  item,
}: ForecastCardProps) {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleDateString("pt-BR", { weekday: "short" });

    const iconUrl =
    `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

    return (
        <div
            className="
                min-w-[120px]
                bg-white/10
                border border-white/10
                backdrop-blur-lg
                rounded-2xl
                p-4
                text-white
                flex
                flex-col
                items-center
                shadow-lg            
                "
            >
            <p className="capitalize text-sm text-white/70">
                {day}
            </p>

            <img src={iconUrl} alt="Ícone do clima" className="w-16 h-16" />

            <p className="text-2xl font-bold">
                {Math.round(item.main.temp)}°C
            </p>

            <p className="text-xs text-white/60 text-center mt-1">
                {item.weather[0].description}
            </p>
            
        </div>
    );
}