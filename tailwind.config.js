/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAF8F5',
          alt: '#F5F0E8',
        },
        text: {
          primary: '#2D2A26',
          secondary: '#6B6560',
        },
        accent: {
          primary: '#3B2F2A',
          secondary: '#C4956A',
        },
        code: '#5A8A8A',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', fontWeight: '800' }],
        'section': ['42px', { lineHeight: '1.2', fontWeight: '600' }],
        'subhead': ['24px', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'tag': ['13px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        'section': '120px',
        'content': '1100px',
      },
      maxWidth: {
        'content': '1100px',
        'prose': '700px',
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
