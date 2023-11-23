const inputbox = document.getElementById('input-box')
const ullist = document.getElementById('les-list')
function addtask(){
    if(inputbox.value === ''){
        alert('ajouter un tache')
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputbox.value
        ullist.appendChild(li)
        li.style.border = '1px solid black'
        li.style.margin = '20px 0px'
        
    }
    inputbox.value = ""
}