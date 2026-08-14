/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050407",
          900: "#08060B",
          800: "#0b0812",
          700: "#120e1a",
        },
        accent: {
          blue: "#8B2CFF",
          orange: "#FF7A3D",
          purple: "#8B2CFF",
          green: "#FF4D6D",
          pink: "#FF2D8D",
          indigo: "#D600FF",
          cyan: "#FF4D6D",
          violet: "#8B2CFF",
          gold: "#FF7A3D",
        },
      },
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        body: ["'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(115deg, #A855F7 0%, #EC4899 50%, #3B82F6 100%)",
        "grad-gold": "linear-gradient(115deg, #FF7A00 0%, #FF9D3D 100%)",
        "grad-radial": "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.15), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(168, 85, 247, 0.15)",
        "glow-sm": "0 0 20px rgba(59, 130, 246, 0.15)",
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.25)",
        "glow-orange": "0 0 20px rgba(255, 122, 0, 0.25)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.25)",
        "glow-green": "0 0 20px rgba(34, 197, 94, 0.25)",
        "glow-pink": "0 0 20px rgba(236, 72, 153, 0.25)",
        "premium-card": "0 10px 30px -10px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.08)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        drift: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(3%, -4%) scale(1.05)" },
          "100%": { transform: "translate(0,0) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
      spacing: {
        "max-80": "20rem",
        "max-75": "18.75rem",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container-shell": {
          "@apply max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12": {},
        },
        ".section-eyebrow": {
          "@apply text-xs uppercase font-medium text-accent-indigo tracking-wider": {},
        },
        ".text-gradient": {
          "@apply bg-gradient-to-r from-accent-blue to-accent-violet bg-clip-text text-transparent": {},
        },
        ".glass-panel": {
          "@apply bg-white/5 backdrop-blur-xl border border-white/10": {},
        },
        ".glow-border": {
          "@apply border border-white/20 shadow-[0_0_40px_rgba(122,75,255,0.2)]": {},
        },
        ".btn-primary": {
          "@apply bg-gradient-to-r from-accent-blue to-accent-indigo hover:shadow-glow text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5": {},
        },
        ".btn-secondary": {
          "@apply glass-panel text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5": {},
        },
      });
    },
  ],
};
