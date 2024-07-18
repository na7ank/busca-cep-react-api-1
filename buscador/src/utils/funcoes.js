export function formatCEP(txt){
    let cep = txt.replace(/\D/g, '');
    if (cep.length > 8) {
        cep = cep.slice(0, 8);
    }
    if (cep.length > 5) {
        cep = cep.replace(/^(\d{5})/, '$1-');
    }
    return cep;
}

// Forma para js puro se fosse em um html
/*

<script>
function formatCEP(input){
    let cep = input.value.replace(/\D/g, '');
    if (cep.length > 8) {
        cep = cep.slice(0, 8);
    }
    if (cep.length > 5) {
        cep = cep.replace(/^(\d{5})/, '$1-');
    }
    input.value = cep;
}

const InputCEP = document.getElementById('mascara-cep');
InputCEP.addEventListener('input', function () {
    formatCEP(this);
});
</script>

*/