import{s as i,j as e}from"./index-e370e53a.js";const x=i("div",{d:"flex",align:"center",justify:"center",w:"100%",bg:"#0A0A0A",border:"3px solid #DE03A1",br:"10px",position:"relative",variants:{disabled:{true:{cursor:"not-allowed","&::after":{position:"absolute",w:"calc(100% + 7px)",h:"calc(100% + 7px)",br:"10px",content:'""',top:"-3px",left:"-3px",zIndex:"1",bg:"rgba(0, 0, 0, 0.8)"}}},direction:{row:{direction:"row"},column:{direction:"column",h:"300px",maxW:"190px"}},rarity:{Abundant:{borderColor:"#4c4c4c"},Common:{borderColor:"#ffffff"},Rare:{borderColor:"#3d74e9"},Epic:{borderColor:"#8719f0"},Legendary:{borderColor:"#da992e"},Mythical:{borderColor:"#d20066"}}}}),d=i("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",position:"relative",br:"0px 0px 999px 999px",overflow:"hidden",variants:{direction:{row:{flexWrap:"wrap",br:"25px 200px 200px 25px",w:"100%",h:"65px",">img":{width:"189px",height:"171px",top:"-21px",left:"-47px",objectFit:" fill",position:" absolute"}},column:{br:"5px 5px 200px 200px",w:"100%",h:"115px",">img":{width:" 317px",height:" 303px",top:"-43px",left:"-69px",objectFit:" fill",position:" absolute"}}}}}),o=i("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",w:"100%",position:"relative",br:"0px 0px 999px 999px",overflow:"hidden",border:"3px solid #121212",variants:{direction:{row:{flexWrap:"wrap",br:"25px 200px 200px 25px",w:"100px",h:"65px",padding:"4px 4px 4px 0",">img":{width:"189px",height:"171px",top:"-21px",left:"-47px",objectFit:" fill",position:" absolute"}},column:{br:"5px 5px 200px 200px",w:"100%",h:"115px",padding:"5px",">img":{width:" 317px",height:" 303px",top:"-43px",left:"-69px",objectFit:" fill",position:" absolute"}}},rarity:{Abundant:{borderColor:"#4c4c4c"},Common:{borderColor:"#ffffff"},Rare:{borderColor:"#3d74e9"},Epic:{borderColor:"#8719f0"},Legendary:{borderColor:"#da992e"},Mythical:{borderColor:"#d20066"}},shine:{Stone:{bg:"linear-gradient(45deg, rgb(102, 102, 102) 0%, rgb(216, 212, 212) 100%)"},Gold:{bg:"linear-gradient(45deg, rgb(212, 106, 0) 0%, rgb(232, 175, 1) 24%, rgb(249, 221, 180) 49%, rgb(217, 123, 38) 66%, rgb(255, 242, 196) 100%)"},Stardust:{bg:"linear-gradient(45deg, rgb(134, 0, 189) 0%, rgb(87, 0, 232) 24%, rgb(213, 245, 255) 49%, rgb(75, 159, 248) 66%, rgb(197, 245, 255) 100%)"},Antimatter:{bg:"rgb(232, 175, 1)"},"X-Dimension":{bg:"rgb(232, 175, 1)"}}}}),c=i("h2",{d:"flex",align:"center",justify:"center",color:"$white500",m:"auto",fs:"14px",ff:"$heading",variants:{rarity:{Abundant:{color:"#4c4c4c"},Common:{color:"#ffffff"},Rare:{color:"#3d74e9"},Epic:{color:"#8719f0"},Legendary:{color:"#da992e"},Mythical:{color:"#d20066"}}}}),s=i("h2",{d:"flex",align:"center",justify:"center",color:"$white500",textAlign:"center",fs:"14px",ff:"$heading",position:"absolute",w:"87px",h:"100%",content:'""',top:"0px",left:"50%",transform:"translateX(-50%)",zIndex:"2"}),b=({tool:r,children:p,disabled:a,disableMessage:n,direction:t="column"})=>e.jsxs(x,{disabled:a,direction:t,rarity:r.rarity,children:[e.jsx(o,{direction:t,rarity:r.rarity,shine:r.shine,children:e.jsx(d,{direction:t,children:e.jsx("img",{src:`https://ipfs.alienworlds.io/ipfs/${r==null?void 0:r.img}`,alt:r==null?void 0:r.name,title:r==null?void 0:r.name})})}),e.jsxs(c,{rarity:r.rarity,children:[r==null?void 0:r.name," ",(r==null?void 0:r.quantity)&&`(${r==null?void 0:r.quantity})`]}),n&&e.jsx(s,{children:n}),p]});export{b as C};
