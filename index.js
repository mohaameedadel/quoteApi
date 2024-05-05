let up = document.getElementById("a");
let down = document.getElementById("b");
fetch("life.json")
  .then((api) => {
    let apiData = api.json();
    return apiData;
  })
  .then((api) => {
    let i = 0;
    let div = document.createElement("h1");
    div.className= "quote"
    div.textContent = api[i].text;
    document.body.appendChild(div);

    up.addEventListener("click", () => {
      i++;
      if (i >= api.length-1) {
        i = 0;
      }
      div.textContent = api[i].text;
    });

    down.addEventListener("click", () => {
      i--;
      if (i < 0) {
        i = api.length - 1;
      }
      div.textContent = api[i].text;
    });
    
  });

