
const checkbox = document.getElementById('mostrarAviso');
const aviso = document.getElementById('aviso');
const overlay = document.getElementById('overlay');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
    aviso.style.display = 'block';
    overlay.style.display = 'block';
} else {
    aviso.style.display = 'none';
    overlay.style.display = 'none';
}
});

    document.addEventListener('DOMContentLoaded', function () {
        var button = document.getElementById('fleeingButton');
        var fleeing = false;

    document.addEventListener('mousemove', function (event) {
        if (fleeing){
            moveButtonAway(event);
        }
    });

    button.addEventListener('mouseover', function (event) {
        if (!fleeing) {
            fleeing = true;
            moveButtonAway();
        }
    });

    button.addEventListener('mouseout', function () {
        fleeing = false;
    });

    function moveButtonAway(event) {
        var maxX = window.innerWidth - button.offsetWidth;
        var maxY = window.innerWidth - button.offsetHeight;
    
        var newX = Math.floor(Math.random() * maxX);
        var newY = Math.floor(Math.random() * maxY);

        button.style.left = newX + 'px';
        button.style.top = newY + 'px';

    setTimeout(function (){
            fleeing = false;
        }, 9000);
    }
});

function fecharAviso() {
    aviso.style.display = 'none';
    overlay.style.display = 'none';
}

function formatarCPF(cpfInput) {
    let value = cpfInput.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    cpfInput.value = value;

    if (value.length >= 14) {
        cpfInput.blur();
    }
}

function formatarCEP(cepInput){
    let value = cepInput.value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d{3})/, '$1-$2');

    cepInput.value = value;

    if (value.length >= 9) {
        cepInput.blur();
    }
}

function formatarTelefone(telefoneInput) {
    let value = telefoneInput.value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    telefoneInput.value = value;

    if (value.length >= 14) {
        telefoneInput.blur();
    }
}
