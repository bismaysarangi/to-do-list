let write = document.getElementById("write");
let tdl = document.getElementById("to_do_list");

write.addEventListener("keyup", key_up);

function key_up(e) {
    if(e.key == "Enter") {
        addToDo(this.value);
        this.value = ''
    }
} 

function addToDo(val) {
    let list = document.createElement("li");
    list.innerHTML = `${val}`;
    tdl.appendChild(list)

    list.addEventListener("click", function() {
        this.classList.toggle('done');
    })
}