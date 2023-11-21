function inversion (){
    //CAPTURAMOS LOS ELEMENTOS DE DONDE SE TOMARAN LOS DATOS
    const cNombre = document.getElementById("nombres").value;
    const cEmail = document.getElementById("email").value;
    const cMonto = document.getElementById("montoInv").value;
    const cTiempo = document.getElementById("tiempoInv").value;

    const preSimulacion = document.querySelector(".pre-simulation");
    const postSimulacion = document.querySelector(".post-simulation");

    const showNombre = document.getElementById("nombresShow");
    const showEmail = document.getElementById("emailShow")

    const showTiempo = document.getElementById("tiempo-show");
    const showInteres = document.getElementById("interes-show");
    const showTotal = document.getElementById("total-show");
    const showGanancia = document.getElementById("ganancia-show");

    postSimulacion.classList.remove("disabled");
    preSimulacion.classList.add("disabled");



    showNombre.innerText = cNombre;
    showEmail.innerText = cEmail;

    switch(cTiempo){
        case "1":
            showTiempo.innerText = "12 Meses";
            showInteres.innerText = "0.8%";
            showTotal.innerText = (cMonto*0.096)+ parseInt(cMonto);
            showGanancia.innerText = cMonto*0.096;
            break;
        case "2":
            showTiempo.innerText = "24 Meses";
            showInteres.innerText = "1.3%";
            showTotal.innerText = (cMonto*0.312)+ parseInt(cMonto);
            showGanancia.innerText = cMonto*0.312;
            break;

        case "3":
            showTiempo.innerText = "36 Meses";
            showInteres.innerText = "1.7%"; 
            showTotal.innerText = (cMonto*0.612)+ parseInt(cMonto);
            showGanancia.innerText = cMonto*0.612;
            break;

    }



}