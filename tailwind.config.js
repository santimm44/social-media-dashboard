
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
	// Ensures Tailwind includes Flowbite styles
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      colors:{
        background: "var(--background)",
        topBackground: "var(--topBackground)",
        cardBackground: "var(--cardBackground)",
        textColor: "var(--textColor)",
        whiteText: "var(--whiteText)",
        toggle: "var(--toggle)",

        limeGreen:"var(--limeGreen)",
        brightRed:"var(--brightRed)",
        facebook:"var(--Facebook)",
        twitter:"var(--Twitter)",
        youtube:"var(--YouTube)"
      }
    },
  },
  // Enables Flowbite’s custom UI components
  plugins: [flowbite.plugin()],
}