# Quland TailwindCss Template

### Install dependency :

`$ npm install`

### For development mode run :

`$ npm run dev`

>Make necessary changes then run for production.

### For production mode run :

`$ npm run build`

## Google Fonts

```bash
// Inter and Manrope
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap')

```

## Default style

```bash
body{
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    line-height: 30px;
}
h1,h2,h3,h4,h5,h6{
    font-family: "Inter", sans-serif;
}

```

## Figma Style Guild Config (tailwind.config.js)

```base
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      fontSize: {
        '18': ['18px', '27px'],
        '20': ['20px', '30px'],
        '22': ['22px', '30px'],
        '24': ['24px', '35px'],
        '48': ['48px', '56px'],
        '65': ['65px', '70px'],
        'pone':['16px','30px'],
        'ptwo':['16px','26px'],
      },
      colors:{
        'purple':'#794AFF',
        'main-black':'#101828',
        'main-gray':'#F3F4F9',
        'blue-seo':'#5D51F2',
        'black-seo':'#27272F',
        'gray-seo':'#F4F3FE',
        'gray-seo':'#F4F3FE',
        'ai-soft':'#0A0118',
        'ai-soft':'#0A0118',
        'buisness-red':'#D90A2C',
        'buisness-light-black':'#111013',
        'buisness-gray':'#F9F8FA',
        'buisness-dark-black':'#161519',
        'green':'#161519',
        'orange':'#F2844D',
        'green-dark':'#15362C',
        'it-blue':'#5F57FF',
        'it-gray':'#F6F6F6',
        'it-black':'#150D21',
        'blue-sass':'#007AFF',
        'app-main':'#C6FE1E',
        'app-dark':'#10100E',
        'app-gray':'#F5F5F5'       
      }
    },
  },
  plugins: [],
}

```

## Credits

Made by [Quomodosoft](https://quomodosoft.com/)
