/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gray': '#292A2D',
        'primary-darkgray': '#E5E5E51A',
        'primary-white': '#F5F5F5',
        'primary-bg': '#1B1C1F',
        'primary-blue': '#567DDF',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          '50': '#fcfcfc',
          '100': '#f1f1f2',
          '200': '#e0e0e2',
          '300': '#c7c7cc',
          '400': '#a8a8af',
          '500': '#82828b',
          '600': '#57575f',
          '700': '#27272a',
          '800': '#111113',
          '900': '#040405',
          '950': '#000000'
        },
        secondary: {
          '50': '#f4f7fc',
          '100': '#e3ecfa',
          '200': '#c2d5f4',
          '300': '#96b7ec',
          '400': '#6996e1',
          '500': '#3d74d3',
          '600': '#265ab9',
          '700': '#1d4e9d',
          '800': '#163b75',
          '900': '#102a52',
          '950': '#0b1d3a'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
    },
  },
  plugins: [],
}

