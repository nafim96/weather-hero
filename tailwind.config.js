module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  // variants: {
  //   extend: {
  //     textOpacity: ["dark"],
  //   },
  // },
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "blue-lighter": "#1E3A8A",
        "blue-gray": "#DBEAFE",
        "blue-dark": "#111827",
        "blue-bg": "#1e5052",
        "light-gray": "#9CA3AF",
        "progress-bar": "#F59E0B",
      },
      backgroundImage: {
        "cloud-image": "url(/src/cloud.jpeg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
