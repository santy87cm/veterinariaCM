const API_CLIENTES = "http://localhost:3000/api/clientes";

async function obtenerClientes() {
  const r = await fetch(API_CLIENTES);
  return await r.json();
}

async function crearCliente(cliente) {
  const r = await fetch(API_CLIENTES, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente)
  });
  return await r.json();
}

async function editarCliente(id, cliente) {
  const r = await fetch(`${API_CLIENTES}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente)
  });
  return await r.json();
}

async function eliminarCliente(id) {
  const r = await fetch(`${API_CLIENTES}/${id}`, {
    method: "DELETE"
  });
  return await r.json();
}
