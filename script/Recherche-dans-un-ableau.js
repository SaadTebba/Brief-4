function creat() {
    var vr = document.querySelectorAll('#inputt input')
    vr.forEach(e => {
        e.remove()
    });
    var n = document.getElementById('taille').value;
    for (let i = 1; i <= n; i++) {
        let a = document.createElement('input');
        a.setAttribute('type', 'number')
        document.getElementById('inputt') .appendChild(a)     
    }
}
function rechercher(){
    let table = [];
    let inputvalue = document.querySelectorAll('#inputt input');
    inputvalue.forEach(element => {
    table.push(parseInt(element.value));
    });
    console.log(table)
    var inputVal =parseInt( document.getElementById("number").value);
    console.log(inputVal)
for (let i = 0; i < table.length; i++) {
	    if(table[i]===inputVal){    
	        var result = "Le numbre existe dans la chaine."
            break
	        }
	        else{
	        var result = "Le numbre n'existe pas dans la chaine."
	        }
}
    document.getElementById('result').innerHTML = result;
    document.getElementById('code').innerHTML = `function creat() {
        var vr = document.querySelectorAll('#inputt input')
        vr.forEach(e => {
            e.remove()
        });
        var n = document.getElementById('taille').value;
        for (let i = 1; i <= n; i++) {
            let a = document.createElement('input');
            a.setAttribute('type', 'number')
            document.getElementById('inputt') .appendChild(a)     
        }
    }
    function rechercher(){
        let table = [];
        let inputvalue = document.querySelectorAll('#inputt input');
        inputvalue.forEach(element => {
        table.push(parseInt(element.value));
        });
        console.log(table)
        var inputVal =parseInt( document.getElementById("number").value);
        console.log(inputVal)
        if(table.includes(inputVal)){
            result = "Le numbre existe dans la chaine."
            }
            else{
            result = "Le numbre n'existe pas dans la chaine."
            }
        document.getElementById('result').innerHTML = result;`;
}