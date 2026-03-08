/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Naša unikatna cyber-dark paleta
        dark: {
          bg: '#0a0a0f', // Najtamnija teget-crna za bazu
          card: '#13131f', // Malo svetlija za kartice
          border: '#1f1f33', // Boja ivica
        },
        cyber: {
          cyan: '#00f0ff', // Neonsko plava za akcente i dugmiće
          purple: '#8a2be2', // Neonsko ljubičasta za gradijente
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'], // Za tehnički "kod" vajb
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff' },
          '100%': { boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff' },
        }
      }
    },
  },
  plugins: [],
}

