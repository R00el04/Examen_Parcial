// login
// declaran variables
const $correo = $("#correo");
const $password = $("#password");
// Validar si ya se realizo la solicitud a la API
let apiSolicitudRealizada = false;
// evento de clic, se inicia la función
$("#submitForm").on("click", function (e) {
    // Evitar que el formulario se envie de forma predeterminada
    e.preventDefault();
    // Validacion de correo y password
    if ($correo.val() === "") {
        alert("Ingrese su correo");
        return;
    }
    if ($password.val() === "") {
        alert("Ingrese su contraseña");
        return;
    }
    // Validar si ya se realizo una solicitud a la API
    if (apiSolicitudRealizada) {
        // Si ya se realizo, redirigir al usuario a la pagina "dashboard"
        window.location.href = "dashboard.html";
    } else {
        // Si no, realizar la solicitud a la API remota
        $.ajax({
            url: "js/login.json", // Reemplaza esto con la URL de tu API remota
            type: "GET",
            dataType: "json",
            success: function (data) {
                // Almacenar los datos en el almacenamiento local
                localStorage.setItem("user", "Luis Sosa");
                localStorage.setItem("apiData", JSON.stringify(data));
                // Marcar que la solicitud a la API se ha realizado
                apiSolicitudRealizada = true;
                // Redirigir al usuario a la página "dashboard"
                window.location.href = "dashboard.html";
            },
            error: function (error) {
                console.error("Error al obtener datos de la API:", error);
            }
        });
    }
});
