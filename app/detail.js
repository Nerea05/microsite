window.onload = () => {
    let obtenerParam = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=", "");
        return urlParam;
    }

    let param = obtenerParam(document.URL);

    fetch('assets/data/data.json')
        .then(res => res.json())
        .then(data => {
            let user = data[Number(param)]
            /*document.write(user.titulo)
            document.write(user.contenido)
            document.write(user.image)*/
            let caja= document.querySelector(".caja");
            let main=`<h2>${user.titulo}</h2><img class="imagen-yungbludinfo" src="${user.image4}" alt=""> <img class="imagen-hijos" src="${user.image2}" alt=""> <img class="imagen-navidad" src="${user.image3}" alt=""> `;
            let contenido = "";
            if(Array.isArray(user.contenido)){
                /*recorremos el array*/ 
                user.contenido.forEach((parrafo, index) => {
                    contenido += `<div class="bloque-mini"><div class="pregunta">${parrafo.P} </div>
                    <div class="respuesta">${parrafo.R} </div></div>`;
                    console.log(contenido);
                });
            }else{
                contenido = `<p class="content">${user.contenido}</p>`;
            }
           
            main += contenido;

            caja.innerHTML = main; 
    })
}
