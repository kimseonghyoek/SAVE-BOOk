/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white" : "#ffffff",
      "black" : "#000000",
      "maincolor1" : "#2CA474",
      "maincolor2" : "#222429",
    },
    width: {
      "wrap" : "1000px",
      "big":"200px",
      "middle":"100px",
      "small":"80px",
      "square" : "60px",
      "long" : "360px",
      "full" : "100vh",
      "hw" : "50%",
      "half" : "24%"
    },
    height: {
      "big":"140px",
      "middle":"50px",
      "small":"25px",
      "full":"100vh",
      "squre" : "60px"
    },
    borderRadius: {
      "default":"5%",
      "test" : "25px",
      "half" : "10px",
    },
    borderColor: {
      "white" : "#ffffff",
      "black" : "#000000",
      "maincolor1" : "#2CA474",
      "maincolor2" : "#242424",
      "gray" : "#BCBDBF"
    },
    fontFamily: {
      "Chewy" : ['Chewy', 'cursive'],
    },
    fontSize: {
      "small":"8px",
      "big":"100px"
    },
    backgroundImage: {
      'home' : `url("data:image/svg+xml,%3Csvg id='visual' viewBox='0 0 900 600' width='900' height='600' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3E%3Crect x='0' y='0' width='900' height='600' fill='%23001220'%3E%3C/rect%3E%3Cdefs%3E%3ClinearGradient id='grad1_0' x1='33.3%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='20%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='80%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cdefs%3E%3ClinearGradient id='grad1_1' x1='33.3%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='20%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='80%25' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cdefs%3E%3ClinearGradient id='grad2_0' x1='0%25' y1='100%25' x2='66.7%25' y2='0%25'%3E%3Cstop offset='20%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='80%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cdefs%3E%3ClinearGradient id='grad2_1' x1='0%25' y1='100%25' x2='66.7%25' y2='0%25'%3E%3Cstop offset='20%25' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='80%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(900, 600)'%3E%3Cpath d='M-337 0C-329 -41.1 -321 -82.3 -309.5 -128.2C-298 -174.1 -282.8 -224.8 -248.6 -248.6C-214.3 -272.4 -161 -269.3 -116.3 -280.9C-71.7 -292.4 -35.9 -318.7 0 -345L0 0Z' fill='%23126264'%3E%3C/path%3E%3Cpath d='M-168.5 0C-164.5 -20.6 -160.5 -41.1 -154.7 -64.1C-149 -87.1 -141.4 -112.4 -124.3 -124.3C-107.2 -136.2 -80.5 -134.6 -58.2 -140.4C-35.9 -146.2 -17.9 -159.4 0 -172.5L0 0Z' fill='%2390b77d'%3E%3C/path%3E%3C/g%3E%3Cg transform='translate(0, 0)'%3E%3Cpath d='M343 0C333.1 44.8 323.1 89.5 303 125.5C282.9 161.5 252.7 188.7 224.9 224.9C197 261.1 171.6 306.3 134.5 324.8C97.5 343.3 48.7 335.2 0 327L0 0Z' fill='%23126264'%3E%3C/path%3E%3Cpath d='M171.5 0C166.5 22.4 161.6 44.8 151.5 62.8C141.5 80.7 126.3 94.3 112.4 112.4C98.5 130.5 85.8 153.1 67.3 162.4C48.7 171.7 24.4 167.6 0 163.5L0 0Z' fill='%2390b77d'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`
    }
  },
  plugins: [],
}
