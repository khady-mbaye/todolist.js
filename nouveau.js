const inputbox = document.getElementById('input-box')
const ullist = document.getElementById('les-list')
function addtask() {
    if (inputbox.value === '') {
        alert('ajouter un tache')
    }
    else {
        let dv = document.createElement('div')
        ullist.appendChild(dv)
        dv.setAttribute('id', 'mydiv')
        
        let li = document.createElement("li")
        li.innerHTML = inputbox.value
        dv.appendChild(li)
        //le span regroupe les trois button
        let sp = document.createElement('span')
        dv.appendChild(sp)

        let but0 = document.createElement('button')
        but0.textContent = 'to do'
        sp.appendChild(but0)
        but0.setAttribute('id', 'enrouge')


        let but1 = document.createElement('button')
        but1.textContent = 'doing'
        sp.appendChild(but1)
        but1.setAttribute('id', 'enorange')
        
        let but2 = document.createElement('button')
        but2.textContent = 'done'
        sp.appendChild(but2)
        but2.setAttribute('id', 'envert')
        
        //changement de couleur du button to do
        let orange = document.querySelector('#enorange')
        orange.addEventListener('click', fonct0)
        function fonct0() {
            but0.style.backgroundColor = 'orange'
        }

        let vert = document.querySelector('#envert')
        vert.addEventListener('click', foncta)
        function foncta() {
            but0.style.backgroundColor = 'green'
        }
        let rouge = document.querySelector('#enrouge')
        rouge.addEventListener('click', fonctb)
        function fonctb() {
            but0.style.backgroundColor = 'red'
        }
    }
    inputbox.value = ""
}



