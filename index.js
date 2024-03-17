
function interaccionUsuario() {
    // Declaración de variables y constantes
    let nombreUsuario;
    const edadMinima = 18;
    const listaColores = ['rojo', 'verde', 'azul','amarillo','negro','blanco','anaranjado','naranja','celeste','marron','violeta'];

    // Mensaje de bienvenida
    alert('¡Bienvenido/a a nuestra pagina! 😍');

    // Pregunta al usuario su nombre
    nombreUsuario = prompt('Queremos conocerte mejor 😄. Por favor, introduce tu nombre:');

    // Verifica si se ingresó un nombre
    if (nombreUsuario) {
        // Muestra un mensaje de saludo personalizado
        alert('¡Hola, ' + nombreUsuario + '!' + ' Es un placer conocerte 😉');

        // Preguntar al usuario su edad
        let edad = prompt('¿Nos dirias tu edad?');

        // Verifica si se ingresó una edad válida
        if (edad && !isNaN(edad)) { 
            edad = parseInt(edad);
            // Verifica si el usuario es mayor de edad
            if (edad >= edadMinima) {
                alert('Buenisimo, eres mayor de edad');
            } else {
                alert('Lo siento, debes ser mayor de 18 años para continuar  🔞');
            }
        } else {
            alert('Por favor, introduce una edad válida');
        }

        // Pregunta al usuario su color favorito
        let colorFavorito = prompt('Dinos tu color favorito');

        // Verifica si se ingresó un color válido
        if (colorFavorito) {
            // Comprueba si el color está en la lista de colores permitidos
            if (listaColores.includes(colorFavorito.toLowerCase())) {
                alert('¡Tu color favorito es ' + colorFavorito + '! Es un excelente color, creo 😅');
            } else {
                alert('No reconocemos ese color. ¿Esta bien escrito? 🤔');
            }
        } else {
            alert('Por favor, introduce un color');
        }

        // Pregunta al usuario si desea continuar
        let continuar = confirm('¿Deseas continuar navegando?');
        if (continuar) {
            alert('¡De una! Continúa explorando la aplicación');
        } else {
            alert('Gracias por darte una vuelta, hasta luego 👋');
        }
    } else {
        alert('Okey, hasta la proxima 👋');
    }
}

// Llama a la función para que comience la interacción con el usuario
interaccionUsuario();




























// const entradas = ['VIP', 'VIP-ESTANDAR', 'VIP-GOLD','VIP-PREMIUN', 'ENTRADA', 'ENTRADA-GENERAL'];

// console.log(entradas);
