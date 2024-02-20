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