document.addEventListener("DOMContentLoaded", function () {
    // Datos de los gatitos en adopción
    var mascotas = [
        {
            id: 1,
            nombre: "Luna",
            edad: "3 meses",
            genero: "Hembra",
            descripcion: "Suele ser muy juguetona y cariñosa. Le encanta descansar en el regazo.",
            imagen: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            nombre: "Simba",
            edad: "1 año",
            genero: "Macho",
            descripcion: "Curioso y activo. Se adapta rápido y convive bien con otros animales.",
            imagen: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80"  
        },
        {
            id: 3,
            nombre: "Mimi",
            edad: "4 años",
            genero: "Hembra",
            descripcion: "Tranquila e independiente. Ideal para espacios o departamentos relajados.",
            imagen: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            nombre: "Oliver",
            edad: "5 meses",
            genero: "Macho",
            descripcion: "Le divierte explorar rincones nuevos y jugar con varitas de pluma.",
            imagen: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5,
            nombre: "Chloe",
            edad: "2 años",
            genero: "Hembra",
            descripcion: "Suele buscar rincones soleados para tomar la siesta y es muy paciente.",
            imagen: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=600&q=80",
            likes: 15
        },
        {
            id: 6,
            nombre: "Felix",
            edad: "8 meses",
            genero: "Macho",
            descripcion: "Muy curioso, le encanta perseguir pelotas de lana y recibir caricias.",
            imagen: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80",
            likes: 21
        },
        {
            id: 7,
            nombre: "Cleo",
            edad: "1 año y medio",
            genero: "Hembra",
            descripcion: "Observadora y dulce, le gusta la compañía mientras trabajas o estudias.",
            imagen: "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=600&q=80",
            likes: 19
        },
        {
            id: 8,
            nombre: "Milo",
            edad: "4 meses",
            genero: "Macho",
            descripcion: "Lleno de energía, busca constantemente juguetes e interactuar con personas.",
            imagen: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
            likes: 11
        },
        {
            id: 9,
            nombre: "Nala",
            edad: "3 años",
            genero: "Hembra",
            descripcion: "Gatita serena y ronroneadora, ideal para un entorno tranquilo y acogedor.",
            imagen: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
            likes: 30
        }
    ];

    var contenedor = document.getElementById("tarjeta");

    // Función para cargar el catalogo de las tarjetas de los michis 

    function cargarTarjetas() {
    if (!contenedor) return;
    contenedor.innerHTML = "";

    for (var i = 0; i < mascotas.length; i++) {
        var item = mascotas[i];
        
        // Elemento raíz para cada tarjeta dentro de la Grid de Bootstrap
        var cardCol = document.createElement("div");
        cardCol.className = "col";

        cardCol.innerHTML = `
            <article class="card card-adopcion h-100 border-0 shadow-sm overflow-hidden">
                <div class="card-img-wrapper position-relative">
                    <img src="${item.imagen}" alt="Foto de ${item.nombre}" class="card-img-top object-fit-cover">
                    <span class="badge badge-genero position-absolute top-0 end-0 m-3 px-3 py-2  shadow-sm">
                        ${item.genero}
                    </span>
                </div>

                <!-- Cuerpo de la Tarjeta -->
                <div class="card-body d-flex flex-column p-4">
                    <h3 class="card-title h5 fw-bold mb-1">${item.nombre}</h3>
                    <div class="info-edad small fw-semibold mb-2">Edad: ${item.edad}</div>
                    <p class="card-text desc-mascota flex-grow-1 text-secondary mb-4">${item.descripcion}</p>
                    
                    <!-- Acciones / Botones -->
                    <div class="acciones-card mt-auto pt-3 border-top d-flex gap-2 align-items-center">
                        <button class="btn btn-me-gusta d-inline-flex align-items-center justify-content-center px-3" onclick="darLike(${item.id})">
                        <span id="like-${item.id}"></span>
                        </button>
                        <button class="btn btn-michi-cta flex-grow-1 fw-bold py-2" onclick="iniciarAdopcion('${item.nombre}')">
                            🐾 Adoptar
                        </button>
                    </div>
                </div>
            </article>
        `;

        contenedor.appendChild(cardCol);
    }
}
    window.iniciarAdopcion = function (nombre) {
        alert("¡Gracias por tu interés en adoptar a " + nombre + "! Nos comunicaremos contigo pronto.");
    };

    // Inicialización
    cargarTarjetas();
});