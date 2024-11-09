function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
}

const menu = document.querySelector('.menu');
const menuOffsetTop = menu.offsetTop; // Guarda la posición inicial del menú

function fijarMenu() {
    // Verifica si el desplazamiento es mayor o igual a la posición inicial del menú
    if (window.scrollY >= menuOffsetTop) {
        menu.classList.add('fijo'); // Fija el menú en la parte superior
    } else {
        menu.classList.remove('fijo'); // Libera el menú cuando se vuelve hacia arriba
    }
}

window.addEventListener('scroll', fijarMenu);


// Función para el desplazamiento suave
document.querySelectorAll('.menu-boton').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento de salto inmediato

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Desplazamiento suave
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Cambia el enlace activo
        document.querySelectorAll('.menu-boton').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Función para resaltar el enlace activo mientras se desplaza por las secciones
window.addEventListener('scroll', () => {
    let currentSection = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 50; // Ajusta según la altura del menú
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    // Cambia la clase activa en el menú
    document.querySelectorAll('.menu-boton').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Función para manejar el acordeón principal
document.querySelectorAll('.acordeon-boton').forEach(boton => {
    boton.addEventListener('click', () => {
        const contenido = boton.nextElementSibling;
        
        // Alterna la clase activo
        contenido.classList.toggle('activo');

        // Ajusta la altura máxima automáticamente
        if (contenido.classList.contains('activo')) {
            contenido.style.maxHeight = contenido.scrollHeight + 'px';
        } else {
            contenido.style.maxHeight = '0';
        }
    });
});

