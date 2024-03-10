const input = document.getElementById("inp");
const text = document.querySelector(".text");

function Add () {
    if (input.value == "") {
        alert("Please Enter Task!!!");
    }else {
        const newElement = document.createElement("ul");
        newElement.innerHTML = `${input.value} <i class="fa fa-trash-o"></i>`;

        text.appendChild(newElement);
        input.value = "";
        newElement.querySelector("i").addEventListener("click", remove);
        function remove () {
            newElement.remove();
        }
    }

}