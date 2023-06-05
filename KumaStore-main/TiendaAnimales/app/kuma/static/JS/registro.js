const inputs = document.querySelectorAll('#formulario input');

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
} 

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


const formulario = document.getElementById('formulario');

const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/ // 4 a 12 digitos.
}

const campos = {
	correo: false,
	nombre: false,
	apellido: false,
	password: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
	}
}

const validarCampo = (expresion, input, campo) =>{
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.getElementById(`${campo}-error`).classList.remove('formulario__input-error-activo');
		document.getElementsByClassName("i").classList.add('formulario__grupo-correcto');
		
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.getElementById(`${campo}-error`).classList.add('formulario__input-error-activo');
		document.getElementsByClassName("i").classList.add('formulario__grupo-incorrecto');

	
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
		document.getElementById('password2-error').classList.add('formulario__input-error-activo');


        campos['password'] = false;
    } else {
        document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
		document.getElementById('password2-error').classList.remove('formulario__input-error-activo');

        campos['password'] = true;
    }

}




inputs.forEach((input) => {
    input.addEventListener('blur', validarFormulario);
	input.addEventListener('keyup', validarFormulario);
});

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
});