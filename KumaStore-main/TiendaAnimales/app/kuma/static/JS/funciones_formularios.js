/*$(function(){
    $("#formularioProducto").validate({
        rules:{
            producto:{
                required: true,
                minlength: 10
            },
            id:{
                required: true,
                minlength: 1
            },
            precio:{
                required: true,
                minlength: 4 
            }
        },
        messages:{
            producto:{
                required: "Debe ingresar el nombre del producto",
                minlength: "Debe ingresar minimo 35 caracteres"
            },
            id:{
                required: "Debe ingresar un identificador para el producto",
                minlength: "Debe ingresar minimo 1 numero"
            },
            precio:{
                required: "Debe ingresar una cantidad de dinero asociada al producto",
                minlength: "Debe ingresar una cantidad de al menos 4 digitos"
            }
        }
    })
}) */
$(document).ready(() =>{
    $(".error").hide();
    $("#formularioProducto").submit(function(evento) {
        let nombre = $("#txtProducto").val().trim();
        let id = $("#txtId").val().trim();

        if(!nombre.length){
            $('#campoObligatorio').show();
            return;
        }
    })
})






