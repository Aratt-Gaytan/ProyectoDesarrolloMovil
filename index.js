function calcula(){
    let cosecha = parseInt(document.getElementById("cosecha").value);
    let compra = parseInt(document.getElementById("compra").value);
    let venta = parseInt(document.getElementById("venta").value);
    let cant = parseInt(document.getElementById("cant").value);
    let dias = parseInt(document.getElementById("dias").value);
    var diasVC = 1
    if(document.getElementById("diasVC")){
        diasVC = parseInt(document.getElementById("diasVC").value);
    }
    

    var preCosecha = cant * venta;
    let aux = cosecha - 1;
    let auxVC = aux * diasVC; 
    var diasCrecimiento = dias + auxVC;

    var oro = Math.round((cosecha * preCosecha - compra) / diasCrecimiento);
    
    document.getElementById("res").innerHTML = `
    <div class="card text-bg-secondary m-3">
                <div class="card-header">
                  Semilas 
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>Cosecha maxima: ${cosecha}</p>
                    <p>Precio: ${compra}</p>
                    <p>Precio por cosecha: ${preCosecha}</p>
                    <p>Dias de crecimiento: ${diasCrecimiento}</p>
                    <p>Oro por dia: ${oro}</p>
                    
                  </blockquote>
                </div>
              </div>
              `
}


function sicrece(){
    let es = document.getElementById("crece").value
    if(es == "false"){
        document.getElementById("crece").value = "true"
        document.getElementById("crecer").innerHTML +=`
        <br>
        <span>Dias en volver a crecer:</span>
        <input type="text" name="" id="diasVC" class="input m-4 ">
        `
    }else{
        document.getElementById("crecer").innerHTML =`
            <input type="checkbox" id="crece" name="interest" onchange="sicrece()" value="false" />
            <label for="crece">Vuelve a crecer</label>
            `

    }
    console.log(document.getElementById("crece").value)
    
}