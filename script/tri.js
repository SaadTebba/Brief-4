function creat() {
    var delt = document.querySelectorAll('#inputt input')
    delt.forEach(e => {
        e.remove()
    });
    var delt2 = document.querySelectorAll('#result td ')
    delt2.forEach(e => {
        e.remove()
    });
    var taille = document.getElementById('taille').value;
    for (let i = 1; i <= taille; i++) {
        let a = document.createElement('input');
        a.setAttribute('type', 'number')
        document.getElementById('inputt') .appendChild(a)     
    }  
}
function tri() {
    var dlt = document.querySelectorAll('#result td ')
    dlt.forEach(e => {
        e.remove()
    });
    var taille = document.getElementById('taille').value;

      let table = [];
      let inputvalue = document.querySelectorAll('#inputt input');
      inputvalue.forEach(element => {
      table.push(parseInt(element.value));
      });
      for(var i = 0;i<table.length;i++){
        for(var j= i+1;j<table.length;j++){
            if(table[i]>table[j]){
                var swap = table[i];
                table[i] = table[j];
                table[j] = swap;
            }
        }
    }
    for (let i = 0; i < taille; i++) {
        let a = document.createElement('td');
        a.setAttribute('id', 'tdi' + i);
        document.getElementById('result') .appendChild(a);
        document.getElementById('tdi' + i).innerHTML=table[i];
    }
    document.getElementById('code').innerHTML = `function creat() {
        var vr = document.querySelectorAll('#inputt input')
        vr.forEach(e => {
            e.remove()
        });
        var vr1 = document.querySelectorAll('#result td ')
        vr1.forEach(e => {
            e.remove()
        });
        var n = document.getElementById('taille').value;
        for (let i = 1; i <= n; i++) {
            let a = document.createElement('input');
            a.setAttribute('type', 'number')
            document.getElementById('inputt') .appendChild(a)     
        }  
    }
    function tri() {
        var vr = document.querySelectorAll('#result td ')
        vr.forEach(e => {
            e.remove()
        });
        var n = document.getElementById('taille').value;
    
          let table = [];
          let inputvalue = document.querySelectorAll('#inputt input');
          inputvalue.forEach(element => {
          table.push(parseInt(element.value));
          });
          for(var i = 0;i<table.length;i++){
            for(var j= i+1;j<table.length;j++){
                if(table[i]>table[j]){
                    var swap = table[i];
                    table[i] = table[j];
                    table[j] = swap;
                }
            }
        } 
        for (let i = 0; i < n; i++) {
            let a = document.createElement('td');
            a.setAttribute('id', 'tdi' + i);
            document.getElementById('result') .appendChild(a);
            document.getElementById('tdi' + i).innerHTML=table[i];
        }`
}
