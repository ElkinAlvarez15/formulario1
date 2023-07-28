

//*configuracion a la base de datos firebase
const firebaseConfig = {
    apiKey: "AIzaSyAtLJF0tYKFKA1D8hUuCAdlHEyFWFV2dZ8",
    authDomain: "datos-de-formulario-4c5ff.firebaseapp.com",
    projectId: "datos-de-formulario-4c5ff",
    storageBucket: "datos-de-formulario-4c5ff.appspot.com",
    messagingSenderId: "804033473351",
    appId: "1:804033473351:web:2aa9218e472dfc3ae23a62",
    measurementId: "G-8LNNS97RL8"
};



firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



//*LLAMAR AL BOTON "ENVIAR"
document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();
    // Código de validación del formulario
});


//*ENTRADA DE LOS DATOS DEL NOMBRE DE USUSARIO
let entradaNombre = document.getElementById('name');
let errorNombre = document.getElementById('nameError');

if (entradaNombre.value.trim() === '') {
    errorNombre.textContent = 'Por favor, introducí tu nombre';
    errorNombre.classList.add('error-message');
} else {
    errorNombre.textContent = '';
    errorNombre.classList.remove('error-message');
}



//*ENTRADA EMAIL DEL USUARIO
let emailEntrada = document.getElementById('email');
let emailError = document.getElementById('emailError');
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación básico

if (!emailPattern.test(emailEntrada.value)) {
    emailError.textContent = 'Por favor, introducí un mail válido';
    emailError.classList.add('error-message');
} else {
    emailError.textContent = '';
    emailError.classList.remove('error-message');
}



//*ENTRADA DE LA CONTRASEÑA
let contrasenaEntrada = document.getElementById('password');
let contrasenaError = document.getElementById('passwordError');
let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

if (!contrasenaPattern.test(contrasenaEntrada.value)) {
    contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caracteres especiales';
    contrasenaError.classList.add('error-message');
} else {
    contrasenaError.textContent = '';
    contrasenaError.classList.remove('error-message');
}



if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
    db.collection("users").add({
        nombre: entradaNombre.value,
        email: emailEntrada.value,
        password: contrasenaEntrada.value
    })
        .then((docRef) => {
            alert('El formulario se ha enviado con éxito', docRef.id);
            document.getElementById('formulario').reset();
        })
        .catch((error) => {
            alert(error);
        });
}