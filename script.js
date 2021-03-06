document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    let btn = document.createTextNode("Add Square");
    let conDiv = document.createElement('div');
    conDiv.style.display = "flex";
    conDiv.style.flexWrap = "wrap";
    button.appendChild(btn);
    document.body.appendChild(button);
    document.body.appendChild(conDiv);

    let id = 0;
    button.addEventListener("click", function () {
        let div = document.createElement("div");
        div.className = "subDiv";
        div.style.backgroundColor = "black";
        div.style.height = "100px";
        div.style.width = "100px";
        div.style.margin = "1em";
        div.setAttribute("id", id); // set a attribute, nave a name and value in ()
        conDiv.appendChild(div);
        id++;

        div.addEventListener("mouseover", function() {
            let divText = document.createTextNode(this.id);
            div.appendChild(divText);
        })

        div.addEventListener("mouseout", function() {
            div.innerText = " ";
        })

        let colors= ['blue', 'yellow', 'green', 'grey', 'red']
        
        function getRandomColor() {
            let randomColor = colors[Math.floor(Math.random()*colors.length)];
            return randomColor;
        }

        div.addEventListener('click', function() {
            let selectColor = getRandomColor();
            div.style.backgroundColor = selectColor;
        })

        div.addEventListener("dblclick", function(){
            if(id % 2 == 0){
                this.remove();
            } else {
                alert("This Square will longer exist");
            }

            if (id % 2 != 0){
                this.remove();
            } else {
                alert("This Square will no longer exist");
            }
        })
    })
})