// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
const tarjeta = document.querySelector(".tarjeta");
const randomBtn = document.getElementById("random");


async function fetchAndRenderUser() {
  try {
    if (randomBtn) randomBtn.disabled = true;
    tarjeta.innerHTML = `<p class="loading">Cargando…</p>`;

    const resp = await fetch("https://randomuser.me/api/");
    if (!resp.ok) throw new Error("Error de red");
    const data = await resp.json();

    renderizarDatosUsuario(data);
  } catch (err) {
    console.error(err);
    tarjeta.innerHTML = `<p class="error">No pudimos traer el usuario. Intenta de nuevo.</p>`;
  } finally {
    if (randomBtn) randomBtn.disabled = false;
  }
}

// Conectar botón
randomBtn?.addEventListener("click", fetchAndRenderUser);

// Cargar uno al iniciar
fetchAndRenderUser();

function renderizarDatosUsuario(datos) {
  const usuario = datos?.results?.[0];
  if (!usuario) {
    tarjeta.innerHTML = `<p class="error">Sin datos de usuario.</p>`;
    return;
  }

  const fullName = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;
  const email = usuario.email;
  const foto =
    usuario.picture?.large || usuario.picture?.medium || usuario.picture?.thumbnail || "";

  tarjeta.innerHTML = `
    <img src="${foto}" alt="Foto de ${fullName}">
    <h2>${fullName}</h2>
    <p>${email}</p>
  `;
}

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Mostrar foto, nombre completo y email en el HTML .tarjeta
    const usuario = datos?.results?.[0];
    if (!usuario) {
        tarjeta.innerHTML = `<p class="error">Sin datos de usuario.</p>`;
    return;
    }
    const fullName = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;
    const email = usuario.email;
    const foto =
    usuario.picture?.large || usuario.picture?.medium || usuario.picture?.thumbnail || "";

    tarjeta.innerHTML = `<img src="${foto}" alt="Foto de ${fullName}"><h2>${fullName}</h2><p>${email}</p>`;
    
    
}


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.