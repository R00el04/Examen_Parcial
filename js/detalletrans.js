document.addEventListener("DOMContentLoaded", function () {
    // Recupera el valor de 'codigoTransaccion' almacenado en localStorage
    const codigoTransaccion = localStorage.getItem("codigoTransaccion");

    if (codigoTransaccion) {
        // Encuentra la transacción correspondiente
        const transaccion = detalletransc.find(t => t.cod === codigoTransaccion);

        if (transaccion) {
            // Muestra los detalles de la transacción en la página
            const $transactionDetails = $("#listultiTran");
            const template = `
                <div class="elementoTran">
                    <h3>${transaccion.nombre}</h3>
                    <p>Fecha: ${transaccion.fecha}</p>
                    <p>Código de transacción: ${transaccion.cod}</p>
                    <p>Monto: ${transaccion.monto}</p>
                    <p>Beneficiario: ${transaccion.beneficiario}</p>
                </div>
            `;
            $transactionDetails.html(template);
        } else {
            // Si no se encuentra la transaccion, muestra mensaje de error y redirige
            alert("Transacción no encontrada");
            window.location.href = "dashboard.html";
        }
    } else {
        // Si no se encuentra el codigo de transacción en el localStorage, muestra un mensaje de error o redirige a otra página
        alert("Código de transacción no encontrado");
        window.location.href = "dashboard.html";
    }
});
