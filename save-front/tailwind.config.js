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
      "green" : "#00B388",
      "green2" : "#00916e", 
      "popup" : "#616672",
      "danger" : "#CD3861" 
    },
    width: {
      "wrap" : "1000px",
      "big":"200px",
      "middle":"100px",
      "small":"80px",
      "square" : "20px",
      "long" : "360px",
      "full" : "100vw",
      "signup":"25vw",
      "hw" : "50%",
      "half" : "24%",
      "modal" : "22vw",
      "Mprofile" : "50px",
      "itemsbtn" : "28px",
      "full2" : "100%"
    },
    height: {
      "square" : "20px",
      "big":"140px",
      "middle":"50px",
      "small":"25px",
      "full":"100vh",
      "signup" : "65vh",
      "book":"600px",
      "header":"9vh",
      "Mprofile" : "50px"
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
      "gray" : "#BCBDBF",
      "popup" : "#616672"
    },
    fontFamily: {
      "Chewy" : ['Chewy', 'cursive'],
    },
    fontSize: {
      "small2" : "12px",
      "small":"8px",
      "big":"100px",
      "middle": "25px",
      "middle2": "20px",
      "bold" : "45px"
    },
    backgroundImage: {
      'home' : `url("data:image/svg+xml,%3Csvg id='visual' viewBox='0 0 900 600' width='900' height='600' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3E%3Crect x='0' y='0' width='900' height='600' fill='%23001220'%3E%3C/rect%3E%3Cdefs%3E%3ClinearGradient id='grad1_0' x1='33.3%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='20%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='80%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cdefs%3E%3ClinearGradient id='grad1_1' x1='33.3%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='20%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='80%25' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cdefs%3E%3ClinearGradient id='grad2_0' x1='0%25' y1='100%25' x2='66.7%25' y2='0%25'%3E%3Cstop offset='20%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='80%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cdefs%3E%3ClinearGradient id='grad2_1' x1='0%25' y1='100%25' x2='66.7%25' y2='0%25'%3E%3Cstop offset='20%25' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='80%25' stop-color='%2390b77d' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(900, 600)'%3E%3Cpath d='M-337 0C-329 -41.1 -321 -82.3 -309.5 -128.2C-298 -174.1 -282.8 -224.8 -248.6 -248.6C-214.3 -272.4 -161 -269.3 -116.3 -280.9C-71.7 -292.4 -35.9 -318.7 0 -345L0 0Z' fill='%23126264'%3E%3C/path%3E%3Cpath d='M-168.5 0C-164.5 -20.6 -160.5 -41.1 -154.7 -64.1C-149 -87.1 -141.4 -112.4 -124.3 -124.3C-107.2 -136.2 -80.5 -134.6 -58.2 -140.4C-35.9 -146.2 -17.9 -159.4 0 -172.5L0 0Z' fill='%2390b77d'%3E%3C/path%3E%3C/g%3E%3Cg transform='translate(0, 0)'%3E%3Cpath d='M343 0C333.1 44.8 323.1 89.5 303 125.5C282.9 161.5 252.7 188.7 224.9 224.9C197 261.1 171.6 306.3 134.5 324.8C97.5 343.3 48.7 335.2 0 327L0 0Z' fill='%23126264'%3E%3C/path%3E%3Cpath d='M171.5 0C166.5 22.4 161.6 44.8 151.5 62.8C141.5 80.7 126.3 94.3 112.4 112.4C98.5 130.5 85.8 153.1 67.3 162.4C48.7 171.7 24.4 167.6 0 163.5L0 0Z' fill='%2390b77d'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
      'introd' : `url("data:image/svg+xml,%3Csvg id='visual' viewBox='0 0 900 600' width='900' height='600' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3E%3Cpath d='M0 133L82 127L164 91L245 49L327 67L409 103L491 73L573 91L655 97L736 127L818 61L900 61L900 0L818 0L736 0L655 0L573 0L491 0L409 0L327 0L245 0L164 0L82 0L0 0Z' fill='%23038373'%3E%3C/path%3E%3Cpath d='M0 403L82 301L164 385L245 313L327 343L409 319L491 283L573 355L655 265L736 313L818 253L900 349L900 59L818 59L736 125L655 95L573 89L491 71L409 101L327 65L245 47L164 89L82 125L0 131Z' fill='%23009b7f'%3E%3C/path%3E%3Cpath d='M0 511L82 523L164 481L245 439L327 493L409 535L491 445L573 475L655 523L736 499L818 439L900 529L900 347L818 251L736 311L655 263L573 353L491 281L409 317L327 341L245 311L164 383L82 299L0 401Z' fill='%2300b388'%3E%3C/path%3E%3Cpath d='M0 601L82 601L164 601L245 601L327 601L409 601L491 601L573 601L655 601L736 601L818 601L900 601L900 527L818 437L736 497L655 521L573 473L491 443L409 533L327 491L245 437L164 479L82 521L0 509Z' fill='%2300cc8e'%3E%3C/path%3E%3C/svg%3E");`
    },
  },
  plugins: [],
}
