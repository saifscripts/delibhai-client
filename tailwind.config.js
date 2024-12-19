/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', 'class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        tone: {
          50: 'hsl(var(--tone-50))',
          100: 'hsl(var(--tone-100))',
          200: 'hsl(var(--tone-200))',
          300: 'hsl(var(--tone-300))',
          400: 'hsl(var(--tone-400))',
          500: 'hsl(var(--tone-500))',
          600: 'hsl(var(--tone-600))',
          700: 'hsl(var(--tone-700))',
          800: 'hsl(var(--tone-800))',
          900: 'hsl(var(--tone-900))',
          DEFAULT: 'hsl(var(--tone))',
          foreground: 'hsl(var(--tone-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        screens: {
          tn: '375px',
          xs: '400px',
        },
        //   colors: {
        //     primary: "#00C795",
        //     secondary: "#13EBB4",
        //     accent: "#707070",
        //     neutral: "#D9D9D9",
        //     medium: "#515050",
        //     light: "#EBEBEB",
        //   },
        fontFamily: {
          noto: "'Noto Serif Bengali', serif",
          hind: "'Hind Siliguri', sans-serif",
          inter: "'Inter', sans-serif",
        },
        boxShadow: {
          '3xl': '0 4px 4px rgba(0, 0, 0, 0.25)',
        },
        transitionProperty: {
          height: 'height',
        },
        spacing: {
          192: '48rem',
        },
        minWidth: {
          192: '48rem',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
