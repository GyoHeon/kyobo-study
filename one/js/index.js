console.log("hi man");

function render() {
  const root = document.getElementById("app");

  const div = document.createElement("div");
  div.className = "container";

  div.innerHTML = `
  <input>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
  `;

  root.appendChild(div);
}

render();
