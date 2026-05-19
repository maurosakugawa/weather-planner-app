// src/components/forecast/ForecastList.tsx
import type { ForecastItem } from "../../types/forecast";
import ForecastCard from "./ForecastCard";

interface ForecastListProps {
  items: ForecastItem[];
  days: number;

  textPrimary: string;
  textSecondary: string;
  glass: string;
  cardBorder: string;
}

export default function ForecastList({
  items,
  days,
  textPrimary,
  textSecondary,
  glass,
  cardBorder
}: ForecastListProps) {

    return (
        <div className="mt-8">
            <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>
                Previsão para os próximos {days} dias
            </h3>

            <div className="flex gap-4 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-white/20">
                {items.map((item) => (
                    <ForecastCard
                        key={item.dt}
                        item={item}
                        textPrimary={textPrimary}
                        textSecondary={textSecondary}
                        glass={glass}
                        cardBorder={cardBorder}
                    />
                ))}
            </div>

        </div>
    );
}