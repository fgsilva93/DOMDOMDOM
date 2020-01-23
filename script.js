document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    let btn = document.createTextNode("Add Square"); 
    let conDiv =document.createElement('div');
    button.appendChild(btn);
    document.body.appendChild(button);
    document.body.appendChild(conDiv);

    button.addEventListener("click",function() {
        let div = document.createElement("div");
        conDiv.appendChild(div); 
        div.className ="div1";
        div.style.backgroundColor = "black";
        div.style.height = "100px";
        div.style.width = "100px"; 
        div.style.cssFloat = 'left';
        //div.style.margin ="1em";
        //div.style.flexDirection = "row-reverse"; 
        document.body.appendChild(div);
    })
})