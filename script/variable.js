function swap() {
    let swaper
    swaper = document.getElementById("number-1").value;
    document.getElementById("number-1").value = document.getElementById("number-2").value;
    document.getElementById("number-2").value = swaper;
    document.getElementById("code").innerHTML = `let number
    function swap() {
        number = document.getElementById("number-1").value;
        document.getElementById("number-1").value = document.getElementById("number-2").value;
        document.getElementById("number-2").value = number;
      }`
}

