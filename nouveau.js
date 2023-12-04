// recuperation id
let valinput = document.getElementById("val");
let listes = document.getElementById("lists");
// pour faire ajout
function addtask() {
    if (valinput.value === "") {
        alert("ajouter une tache");
    }
    else {
        let mydiv = document.createElement('div')
        listes.appendChild(mydiv)
        mydiv.setAttribute('id' , 'mydiv')
        //creation de bouton li
        let myli = document.createElement("li")
        mydiv.appendChild(myli)
        myli.innerHTML = valinput.value;
       
        //creation d'un span pou regrouper les 3 boutons
        let spans = document.createElement("span")
        mydiv.appendChild(spans)

        // creation button1
        let bouton1 = document.createElement("button");
        bouton1.innerText = "ToDo"
        // creation button2
        let bouton2 = document.createElement("button")
         bouton2.innerText = "Doing"
        // creation button3
        let bouton3 = document.createElement("button")
        bouton3.innerText = "Done"

        spans.appendChild(bouton1)
        spans.appendChild(bouton2)
        spans.appendChild(bouton3)
        valinput.value = "";
        // changement color
        bouton2.addEventListener('click', () => {
            mydiv.style.backgroundColor = 'yellow';
        });

        bouton3.addEventListener('click', () => {
            mydiv.style.backgroundColor = 'green';
        });

        bouton1.addEventListener('click', () => {
            mydiv.style.backgroundColor = 'red';
        });
    }


}


