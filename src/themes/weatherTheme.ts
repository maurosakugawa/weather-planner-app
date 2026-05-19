// src/themes/weatherTheme.ts
// lógica de temas baseada no clima e hora do dia
import type { WeatherTheme } from './weatherTheme.types';

// Definições de tema base para todos os tipos de clima

const baseTheme: Pick<
  WeatherTheme,
  | "button"
  | "buttonHover"
  | "input"
  | "iconGlow"
  | "accent"
  | "animation"
> = {
    button: "bg-blue-500",
    buttonHover: "hover:bg-blue-600",
    input: "bg-white/10",
    iconGlow: "drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]",
    accent: "text-sky-300",
    animation: "transition-all duration-700",
};

// Função para obter o tema de clima com base no tipo de clima e hora do dia
export function getWeatherTheme(
    weather?: string,
    isNight?: boolean
): WeatherTheme {

    const time = isNight ? "night" : "day";

    const themes: Record<
    string,
    Record<"day" | "night", WeatherTheme>
    > = {

        clear: {

            day: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-orange-300 via-yellow-200 to-amber-400",

                cardGlow:
                "from-yellow-200/40 to-orange-400/20",

                glass:
                "bg-white/30",

                textPrimary:
                "text-slate-900",

                textSecondary:
                "text-slate-700",

                cardBorder:
                "border-white/30",
            },

            night: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950",

                cardGlow:
                "from-indigo-500/20 to-purple-700/20",

                glass:
                "bg-white/10",

                textPrimary:
                "text-white",

                textSecondary:
                "text-white/70",

                cardBorder:
                "border-white/10",
            },
        },

        clouds: {

            day: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300",

                cardGlow:
                "from-slate-100/40 to-slate-400/20",

                glass:
                "bg-white/40",

                textPrimary:
                "text-slate-800",

                textSecondary:
                "text-slate-600",

                cardBorder:
                "border-white/40",
            },

            night: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950",

                cardGlow:
                "from-slate-400/20 to-slate-700/20",

                glass:
                "bg-white/10",

                textPrimary:
                "text-white",

                textSecondary:
                "text-white/70",

                cardBorder:
                "border-white/10",
            },
        },

        rain: {

            day: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-slate-700 via-blue-700 to-slate-900",

                cardGlow:
                "from-cyan-400/20 to-blue-700/20",

                glass:
                "bg-white/10",

                textPrimary:
                "text-white",

                textSecondary:
                "text-white/70",

                cardBorder:
                "border-white/10",
            },

            night: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-slate-950 via-blue-950 to-black",

                cardGlow:
                "from-cyan-700/20 to-blue-900/20",

                glass:
                "bg-white/5",

                textPrimary:
                "text-white",

                textSecondary:
                "text-slate-300",

                cardBorder:
                "border-white/5",
            },
        },

        drizzle: {
            day: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-sky-500 via-blue-500 to-slate-700",

                cardGlow:
                "from-cyan-300/20 to-blue-500/20",

                glass:
                "bg-white/10",

                textPrimary:
                "text-white",

                textSecondary:
                "text-slate-200",

                cardBorder:
                "border-white/10",
            },

            night: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-slate-900 via-blue-950 to-black",

                cardGlow:
                "from-cyan-600/20 to-slate-800/20",

                glass:
                "bg-white/5",

                textPrimary:
                "text-white",

                textSecondary:
                "text-slate-300",

                cardBorder:
                "border-white/5",
            },
        },

        thunderstorm: {
            day: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-slate-800 via-violet-900 to-gray-950",

                cardGlow:
                "from-violet-400/20 to-indigo-800/20",

                glass:
                "bg-white/10",

                textPrimary:
                "text-white",

                textSecondary:
                "text-slate-300",

                cardBorder:
                "border-white/10",
            },

            night: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-black via-violet-950 to-slate-950",

                cardGlow:
                "from-fuchsia-500/20 to-indigo-950/20",

                glass:
                "bg-white/5",

                textPrimary:
                "text-white",

                textSecondary:
                "text-slate-400",

                cardBorder:
                "border-white/5",
            },
            },

            snow: {
            day: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-sky-100 via-blue-100 to-slate-300",

                cardGlow:
                "from-white/30 to-sky-300/20",

                glass:
                "bg-white/40",

                textPrimary:
                "text-slate-800",

                textSecondary:
                "text-slate-600",

                cardBorder:
                "border-white/40",
            },

            night: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-slate-700 via-blue-900 to-slate-950",

                cardGlow:
                "from-sky-200/20 to-blue-900/20",

                glass:
                "bg-white/10",

                textPrimary:
                "text-white",

                textSecondary:
                "text-slate-300",

                cardBorder:
                "border-white/10",
            },
            },

        default: {

            day: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950",

                cardGlow:
                "from-cyan-400/20 to-blue-600/20",

                glass:
                "bg-white/10",

                textPrimary:
                "text-white",

                textSecondary:
                "text-slate-300",

                cardBorder:
                "border-white/10",
            },

            night: {
                ...baseTheme,

                background:
                "bg-gradient-to-br from-black via-slate-900 to-slate-950",

                cardGlow:
                "from-slate-500/20 to-slate-900/20",

                glass:
                "bg-white/5",

                textPrimary:
                "text-white",

                textSecondary:
                "text-slate-400",

                cardBorder:
                "border-white/5",
            },
        },
    };

    const weatherKey =
        weather?.toLowerCase() as keyof typeof themes;

    return (
        themes[weatherKey]?.[time] ??
        themes.default[time]
    );
}