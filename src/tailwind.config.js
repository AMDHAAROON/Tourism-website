/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  darkMode:'class',
  theme: {
    extend: {
      
      fontFamily:{
        true:['Yuji Mai'],
        chalk:['Edu AU VIC WA NT Arrows'],
        cursive:['Cookie'],
       
        marker:['Concert One'],
      },
      
      colors:{
        sorange:'#D08849',
        sblue:'#408CBF',
        sred:'#F45B69',
        sblue2:'#A0D5F8',
        sblack:'#404040',
        ebony:'#D8D8D4',
        swhite:'#FDFDEE',
        mint:'#75E4C6',
        cherry:'#F7B2BD',
        butter:'#FFD09A',
        borderbutter:'#FF961E',
        litemint:'#9EE6D3',
        new2:'#EF798A',
        new3:'#C2EABA',
      },
    },
  },
  plugins: [],
}

