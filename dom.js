
/*var valorCantidad = document.getElementById("tCantidad")*/
var valorCantidad= document.getElementById("tCantidad")


/*var valorCategoria = document.getElementById("combo-cate").value*/
/*var chupito = valorCategoria.value*/


var cod = document.getElementById("combo-cate")



function imprimir(){
 
    console.log(valorCantidad.value)
    
    /*console.log(valorInput.value + valorInput.value)*/
    var selected = parseInt(cod.options[cod.selectedIndex].value)
    /*var selected = 2*/
    


    switch(selected){
        case 1:
            var partepaga = 0.2;
            break;
        case 2:
            var partepaga = 0.5;
            break;
        case 3:
            var partepaga = 0.85;
            break;
        default:
            var partepaga =.3;
    }
    var vfinal = parseFloat(valorCantidad.value) * 200 * partepaga /*200 * Number(valorCantidad)  /* * partepaga*/

    console.log("selected " + selected)
    console.log("parte paga " + partepaga)
    console.log(valorCantidad.value)
    console.log(vfinal)
    

    lApagar.textContent= "Total a Pagar: $ " + vfinal
    
}

//esotroid












