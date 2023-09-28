/* comentarios de codigo segun linea=

(11) y (13) document.querySelector("input")---selecciona del doc el contenedor input

(12) y (14) const addBtn = document.querySelector(".btn-add")---selecciono la clase
usamos addBtn para indicar que agregamos un boton, y seleccionamos la clase .btn-add 
porque si ponemos button selecciona todos, asi que ponemos la clase, no el contenedor.

(18) agregamos el evento para el boton para que cuando haga el clic haga lo que le digamos
creamos el (e) que seria un callback*/




const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {

  e.preventDefault();

  const text = input.value;

  if (text !== "") {

    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = text;

    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(addDeleteBtn());

    input.value = "";
    empty.style.display = "none";

  }

});

function addDeleteBtn() {

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {

    const item = e.target.parentElement;

    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block"
    }
  });

  return deleteBtn;

}

