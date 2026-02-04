/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ═══════════════════════════════════════════════════════════════
        // PALETTE PREMIUM - DRM Paris 1er
        // Bleu Parisien raffiné avec accent Orange
        // ═══════════════════════════════════════════════════════════════
        
        // Bleu Parisien - Couleur principale
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e5fe',
          300: '#7cd4fd',
          400: '#36bffa',
          500: '#0ca5eb',
          600: '#0077B6',  // Principal
          700: '#0369a1',
          800: '#023E8A',  // Foncé
          900: '#0c4a6e',
          950: '#082f49',
        },
        
        // Accent - Orange élégant
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#E07B39',  // Principal
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        
        // Gris neutres sophistiqués
        gris: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        
        // Couleurs sémantiques
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        danger: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        
        // Couleurs de fond
        sable: '#FAF8F5',
        cream: '#FFFDF8',
      },
      
      fontFamily: {
        heading: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-sm': ['3.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'headline': ['2.5rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.01em' }],
        'title': ['1.75rem', { lineHeight: '1.25', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 40px -15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 50px -15px rgba(0, 0, 0, 0.2)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'glow': '0 0 40px -10px rgba(0, 119, 182, 0.3)',
        'glow-accent': '0 0 40px -10px rgba(224, 123, 57, 0.3)',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in': 'slide-in-right 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'line-grow': 'line-grow 0.8s ease-out forwards',
        'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      
      aspectRatio: {
        'golden': '1.618 / 1',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '21/9': '21 / 9',
      },
      
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
