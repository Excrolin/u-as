// Generar horas disponibles de 9:00 a 18:00 con intervalos de 30 minutos
function generarHorasDisponibles() {
    let horasDisponibles = [];
    let inicio = new Date();
    inicio.setHours(9, 0, 0); // 9:00 AM
    let fin = new Date();
    fin.setHours(18, 0, 0); // 6:00 PM

    while (inicio < fin) {
        let hora = inicio.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        horasDisponibles.push(hora);
        inicio.setMinutes(inicio.getMinutes() + 30);
    }

    return horasDisponibles;
}

// Mostrar horas disponibles en el select
function mostrarHorasDisponibles() {
    let horasDisponibles = generarHorasDisponibles();
    let select = document.getElementById('hora-seleccionada');

    horasDisponibles.forEach(hora => {
        let option = document.createElement('option');
        option.value = hora;
        option.textContent = hora;
        select.appendChild(option);
    });
}

// Agendar cita
function agendarCita() {
    let horaSeleccionada = document.getElementById('hora-seleccionada').value;
    let nombreCliente = document.getElementById('nombre-cliente').value;

    if (nombreCliente === '') {
        alert('Por favor ingrese su nombre.');
        return;
    }

    let citaAgendada = document.createElement('p');
    citaAgendada.textContent = `Cita agendada para ${nombreCliente} a las ${horaSeleccionada}`;
    document.getElementById('horas-disponibles').appendChild(citaAgendada);

    // Eliminar la hora seleccionada del select para que no pueda ser reservada de nuevo
    let select = document.getElementById('hora-seleccionada');
    select.remove(select.selectedIndex);

    document.getElementById('nombre-cliente').value = '';
}

// Inicializar
document.addEventListener('DOMContentLoaded', mostrarHorasDisponibles);
