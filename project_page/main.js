let containerOfBox = document.querySelector(".pro .container");

fetch("https://api.github.com/users/omaradel376/repos")
  .then((api) => {
    return api.json();
  })
  .then((api) => {
    for (let i = 0; i < api.length; i++) {
      let box = document.createElement("div");
      box.classList.add("box");
      let img = document.createElement("img");
      box.appendChild(img);
      let text = document.createElement("div");
      text.classList.add("text");
      box.appendChild(text);
      let h3 = document.createElement("h3");
      h3.textContent = api[i].name;
      text.appendChild(h3);
      let a = document.createElement("a");
      a.href = api[i].homepage
      a.textContent = "click to view";
      a.target = "_blank"
      h3.after(a);
      containerOfBox.appendChild(box);
    }
  });
