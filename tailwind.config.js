import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      animation: {

        // Clear => Céu limpo
        "gradient-slow":
          "gradientShift 12s ease infinite",

        // Cloud => Nublado
        "cloud-drift":
          "cloudDrift linear infinite",

        // Rain => Chuva
        rain:
          "rainPulse 2s infinite",

        // Garoa
        drizzle:
          "drizzlePulse 3s ease-in-out infinite",

        // Thunderstorm => Tempestade
        lightning:
          "lightningFlash 0.6s infinite",

        // Snow => Neve
        snow:
          "snowFloat 4s ease-in-out infinite",

        // Default => Fade
        "fade-in":
          "fadeIn 1s ease-in-out",
      },

      keyframes: {

        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },

          "50%": {
            backgroundPosition: "100% 50%",
          },
        },

        cloudDrift: {
          "0%": {
            transform: "translateX(-10px)",
          },

          "50%": {
            transform: "translateX(8px)",
          },

          "100%": {
            transform: "translateX(110px)",
          },
        },

        rainPulse: {
          "0%, 100%": {
            opacity: "1",
          },

          "50%": {
            opacity: "0.92",
          },
        },

        drizzlePulse: {
          "0%, 100%": {
            opacity: "1",
          },

          "50%": {
            opacity: "0.96",
          },
        },

        lightningFlash: {

          "0%, 100%": {
            opacity: "1",
          },

          "10%": {
            opacity: "0.4",
          },

          "20%": {
            opacity: "1",
          },

          "30%": {
            opacity: "0.6",
          },
        },

        snowFloat: {

          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-4px)",
          },
        },

        fadeIn: {

          from: {
            opacity: "0",
          },

          to: {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [daisyui],
}