const API_MASCOTAS = "http://localhost:3000/api/mascotas";

async function obtenerMascotas() {
  const r = await fetch(API_MASCOTAS);
  return await r.json();
}

async function crearMascota(mascota) {
  const r = await fetch(API_MASCOTAS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mascota)
  });
  return await r.json();
}

async function editarMascota(id, mascota) {
  const r = await fetch(`${API_MASCOTAS}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mascota)
  });
  return await r.json();
}

async function eliminarMascota(id) {
  const r = await fetch(`${API_MASCOTAS}/${id}`, {
    method: "DELETE"
  });
  return await r.json();
}
