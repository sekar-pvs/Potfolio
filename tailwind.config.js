/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				contentBg: {
					light: "#237a57",
					DEFAULT: "#FF00FF",
					dark: "#093028",
				},
			},
		},
	},
	plugins: [],
};
