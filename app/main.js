/** Cargar un fichero JSON */
window.onload = () => {
    let lista = document.querySelector("#noticias");
    let detalle = document.querySelector(".detail");
    let datos;

    let mostrarDetalle = (e) =>{
        window.open(`detalle.html?id=${e.currentTarget.id}`,'_self');
    }

    fetch('assets/data/data.json')
    .then(res => res.json())
    .then(data => {
        datos = data;
       data.forEach((user, index) => {
           let item=`<li class="user" id="${index}">
                    <div><img src="${user.image}"/></div>
                    <span>${user.titulo} ${user.resumen}</span>
                    <div id="btn">Leer</div>
                </li>`;
         lista.innerHTML += item; 
       });
     })
     .then(()=>{
        let users = document.querySelectorAll(".user");
        users.forEach((user) => {
            user.addEventListener("click", mostrarDetalle, true)
        })
     });

}

