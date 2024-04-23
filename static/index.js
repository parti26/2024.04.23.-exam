import data from "./data.js";

const root = document.querySelector("#root");

function main() {
  console.log(data);
  let i = 1;

  const section = document.createElement("section");
  section.className = "intro";

  const h1 = document.createElement("h1");
  h1.className = "intro__header";
  h1.innerText = "Visualized and clarified by AI.";

  section.append(h1);
  root.append(section);

  const main = document.createElement("main");
  main.className = "cards";

  let myMap = [...new Map(data)];
  for (const image of [...myMap.values]){
      const card = document.createElement("div");
      card.className = "card";

      const h1 = document.createElement("h1");
      h1.className = "card__header";

      const body = document.createElement("div");
      body.className = "card__body";

      h1.innerText = `Card ${i}.`;

      const img = document.createElement("img");
      img.src = image;

      card.append(h1, body);
      body.append(img);
      main.append(card);
    }
  
  root.append(main);
}

main();


