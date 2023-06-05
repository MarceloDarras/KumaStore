$(document).ready(function(){
    
})
$(function(){
    $("#formularioProducto").validate({
        rules:{
            producto:{
                required: true,
                minlength: 35
            },
            id:{
                required: true,
                minlength: 1
            }
        }
    })
})

