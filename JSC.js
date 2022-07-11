let string = "";
let items = document.querySelectorAll('.numericitems, .operationitems');
items.forEach((numericitems)=>{
    numericitems.addEventListener('click', (event)=>{
        if(event.target.innerHTML == "="){
            string = eval(string)
            document.querySelector('#display').value = string;
        }
        else if(event.target.innerHTML == "Clear"){
            string = "";
            document.querySelector('#display').value = string;
        }
        else{
        console.log(event.target)
        string = string + event.target.innerHTML;
        document.querySelector('#display').value = string;
        }
    })
})

