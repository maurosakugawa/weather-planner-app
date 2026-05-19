// src/themes/weatherThemeResolver.ts
// Lógica de resolução de temas baseada no clima e hora do dia
import { getWeatherTheme } from "./weatherTheme";
import { weatherIcons } from "./weatherIcons";
import { weatherAnimations } from "./weatherAnimations";

type WeatherKey =
  | "clear"
  | "clouds"
  | "rain"
  | "drizzle"
  | "thunderstorm"
  | "snow"
  | "default";
  
export function resolveWeatherTheme(
  weather?: string,
  isNight?: boolean
) {
     
    const normalized: WeatherKey  = (weather?.toLowerCase() as WeatherKey) ?? "default";
  return {
    theme: getWeatherTheme(normalized, isNight),
    animation: weatherAnimations[normalized] ?? weatherAnimations.default,
    icon: weatherIcons[normalized as keyof typeof weatherIcons],
  };
}