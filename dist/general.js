let name=document.getElementById('nameComp');
let companys = new company(name);
function start(){
    let command = document.getElementById('numb').value;
    let array = command.split(" ");
    console.log(array)
    if(array[0]=='purchase'){
        companys.purchase(array[1],array[2],array[3],array[4])
        let command = document.getElementById('numb')
        command.value=''
    }
    if(array[0]=='all'){
        let output =document.getElementById('arrA');
        companys.all(output);
        let command = document.getElementById('numb')
        command.value=''
    }
    if(array[0]=='clear'){
        companys.clearDate(array[1]);
        let command = document.getElementById('numb')
        command.value=''
    }
    if(array[0]=='remote'){
        let output =document.getElementById('arrA');
        companys.remote(array[1],array[2],output)
        let command = document.getElementById('numb')
        command.value=''
    }
}