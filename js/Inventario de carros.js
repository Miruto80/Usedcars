
        function filterByLocation() {
            const location = document.getElementById('location-select').value;
            const cars = document.querySelectorAll('.car');

            cars.forEach(car => {
                if (location === 'all' || car.dataset.location === location) {
                    car.classList.remove('hidden');
                } else {
                    car.classList.add('hidden');
                }
            });
        }

        function openForm(car) {
            document.getElementById('car').value = car;
            document.getElementById('contactForm').style.display = 'flex';
        }

        function closeForm() {
            document.getElementById('contactForm').style.display = 'none';
        }

        document.addEventListener('DOMContentLoaded', function() {
    const carDivs = document.querySelectorAll('.car');

    carDivs.forEach(carDiv => {
        const images = carDiv.querySelectorAll('.car-images img');
        images.forEach((img, index) => {
            if (index === 0) {
                img.style.display = 'block'; // Muestra solo la primera imagen
            } else {
                img.style.display = 'none'; // Oculta todas las demás imágenes
            }
        });
    });
});

function prevImage(button) {
    const carDiv = button.closest('.car');
    const images = carDiv.querySelectorAll('.car-images img');
    let currentIndex = Array.from(images).findIndex(img => img.style.display === 'block');

    images[currentIndex].style.display = 'none';
    if (currentIndex === 0) {
        images[images.length - 1].style.display = 'block';
    } else {
        images[currentIndex - 1].style.display = 'block';
    }
}

function nextImage(button) {
    const carDiv = button.closest('.car');
    const images = carDiv.querySelectorAll('.car-images img');
    let currentIndex = Array.from(images).findIndex(img => img.style.display === 'block');

    images[currentIndex].style.display = 'none';
    if (currentIndex === images.length - 1) {
        images[0].style.display = 'block';
    } else {
        images[currentIndex + 1].style.display = 'block';
    }
}

// Validaciones para los campos de nombre, teléfono y email
 $("#phone").on("keypress", function (e) {
    validarkeypress(/^[0-9-\b]*$/, e);
});

$("#phone").on("keyup", function () {
    validarkeyup(/^[0-9]{10,11}$/, $(this), $("#sphone"), "The format must be between 10 to 11 digits");
});

$("#email").on("keypress", function (e) {
    validarkeypress(/^[A-Za-z@_.0-9\b\u00f1\u00d1\u00E0-\u00FC-]*$/, e);
});

$("#email").on("keyup", function () {
    validarkeyup(/^[A-Za-z_0-9\u00f1\u00d1\u00E0-\u00FC-]{3,20}[@]{1}[A-Za-z0-9]{3,8}[.]{1}[A-Za-z]{3}$/,
        $(this), $("#semail"), "The format must be like name@server.com");
});

$("#name").on("keypress", function (e) {
validarkeypress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/, e);
});

$("#name").on("keyup", function () {
validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/, $(this), $("#sname"), "Only letters between 3 and 30 characters");
});

// Función de validación del envío
function validarenvio() {
    if (validarkeyup(/^[0-9]{10,11}$/, $("#phone"), $("#sphone"), "The format must be between 10 to 11 digits") == 0) {
        alert("Error in phone");
        return false;
    }
    if (validarkeyup(/^[A-Za-z_0-9\u00f1\u00d1\u00E0-\u00FC-]{3,20}[@]{1}[A-Za-z0-9]{3,8}[.]{1}[A-Za-z]{3}$/, 
        $("#email"), $("#semail"), "The format must be like name@server.com") == 0) {
            alert("Error in email");
        return false;
    }
     if (validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/, $("#name"), $("#sname"), "Only letters between 3 and 30 characters") == 0) {
     alert("Error in name");
      return false;
    }
return true;
}

// Función para validar la entrada mientras se escribe
function validarkeypress(er, e) {
    key = e.keyCode;
    tecla = String.fromCharCode(key);
    a = er.test(tecla);
    if (!a) {
        e.preventDefault();
    }
}

// Función para validar la entrada después de escribir
function validarkeyup(er, etiqueta, etiquetamensaje, mensaje) {
    a = er.test(etiqueta.val());
    if (a) {
        etiquetamensaje.text("");
        return 1;
    } else {
        etiquetamensaje.text(mensaje);
        return 0;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("financingModal");
    const agreeCheck = document.getElementById("agreeCheck");
    const agreeBtn = document.getElementById("agreeBtn");

    agreeCheck.addEventListener("change", function () {
        agreeBtn.disabled = !this.checked;
    });

    agreeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

});
