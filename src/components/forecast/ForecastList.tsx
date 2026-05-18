// src/components/forecast/ForecastList.tsx
import type { ForecastItem } from "../../types/forecast";
import ForecastCard from "./ForecastCard";

interface ForecastListProps {
  items: ForecastItem[];
}

export default function ForecastList({
  items,
}: ForecastListProps) {

    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-white">
                Previsão para os próximos dias
            </h3>

            <div className="flex gap-4 overflow-x-auto py-2">
                {items.map((item) => (
                    <ForecastCard key={item.dt} item={item} />
                ))}
            </div>

        </div>
    );
}