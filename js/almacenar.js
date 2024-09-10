function cargarListado() {
    const contenedor = document.getElementById('contenedor');
    const listado = JSON.parse(localStorage.getItem('listado') || '[]');
    contenedor.innerHTML = '';
    listado.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        contenedor.appendChild(li);
    });
}

function agregarItem() {
    const input = document.getElementById('item');
    const nuevoItem = input.value.trim();
    if (nuevoItem) {
        const listado = JSON.parse(localStorage.getItem('listado') || '[]');
        listado.push(nuevoItem);
        localStorage.setItem('listado', JSON.stringify(listado));
        input.value = '';
        cargarListado();
    }
}

function limpiarListado() {
    localStorage.removeItem('listado');
    cargarListado();
}

document.getElementById('agregar').addEventListener('click', agregarItem);
document.getElementById('limpiar').addEventListener('click', limpiarListado);

document.addEventListener('DOMContentLoaded', cargarListado);
