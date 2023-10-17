//define un array
let detalletransc = [];
//llenar array
function llenarArray() {
    detalletransc = [
    {
      nombre:"Compra de alimentos en tienda Metro",
      fecha:"20/08/2023",
      cod:"001",
      monto:"232",
      beneficiario:"METRO"
    },
    {
      nombre:"Compra de medicamentos en tienda Mifarma",
      fecha:"12/10/2023",
      cod:"002",
      monto: "112",
      beneficiario:"Mifarma"
    },
    {
        nombre:"Compra en tienda Coolbox",
        fecha:"20/09/2023",
        cod:"003",
        monto: "422",
      beneficiario:"Coolbox"
      },
      {
        nombre:"Compra en tienda Maestro",
        fecha:"20/10/2023",
        cod:"004",
        monto: "900",
        beneficiario:"Maestro"
      },
      {
        nombre:"Compra en tienda Plaza Vea",
        fecha:"30/09/2023",
        cod:"005",
        monto: "1300",
        beneficiario:"Plaza Vea"
      }
  ];
}

//mostrar en HTML la lista de ultimas transacciones
function mostrarTransacciones(array, $id) {
  $id.html("");
  const transacciones = [];
  array.forEach((tran) => {
    const transacObject = new Object();
    transacObject.nombre = tran.nombre;
    transacObject.fecha = tran.fecha;
    transacObject.cod = tran.cod;
    transacciones.push(transacObject);
  });
  //imprimirlo
  transacciones.forEach((elemento) => {
    const template = `
    <div class="elementoTran">
            <h3>${elemento.nombre}</h3>
            <p>${elemento.fecha}</p>
            <p id="cod"> ${elemento.cod}</p>
            <a href="detalletransaciones.html" class="dash" data-cod="${elemento.cod}">Detalle transacción</a>
        </div>`;
    $id.append(template);
});

   // Agregar evento de clic a los enlaces de detalle de transacción
   $(".dash").click(function (e) {
    e.preventDefault();
    const codigoTransaccion = $(this).data("cod");
    localStorage.setItem("codigoTransaccion", codigoTransaccion);
    // Redirigir al usuario a la página de detalle de transacciones
    window.location.href = "detalletransaciones.html";
});  
}

// verificar si existe un usuario registrado en el localStorage
if (localStorage.getItem("user")) {
    const $user = $("#user");
    const $listTrans = $("#listTran");
    const user = localStorage.getItem("user");
    const template = `<p><i>${user[0]}</i>${user}</p>`;
    $user.append(template);
    llenarArray(); // Llenar el array antes de mostrar transacciones
    // Mostrar transacciones
    mostrarTransacciones(detalletransc, $listTrans);
} else {
    // Redirige al usuario a la pagina "index"
    window.location.href = "index.html";
}
//mensaje
alert("CARGANDO TRANSACCIONES");

