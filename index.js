let i = 0;
const colors = ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"]                        

function changeBg(){
  document.body.style.backgroundColor = colors[i]
  i = i + 1;
  if(i == 7) i = 0;
}

setInterval(changeBg, 250);