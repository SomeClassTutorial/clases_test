document.addEventListener('DOMContentLoaded', () => {
    //ordenamos buscar los objetos con la clase que le pusimos a los articulos en el html
    const articulos = document.querySelectorAll('.platillos');
    
    articulos.forEach(article => {
        //cargamos en la constante objetosDeClick los elementos html a los que le queremos dar click
        const objetosDeClick = article.querySelectorAll('img, h1, ul');
        //cargamos en la constante objetoOculto los elementos con la clase que tiene el display.none en nuestro css.
        const objetoOculto = article.querySelector('.cajaComplementos');
        
        // le decimos que hacerle al objeto oculto si le damos click a los objetos de click
        if(objetoOculto){
          objetosDeClick.forEach(element => {
            element.addEventListener('click', () => {
               if (objetoOculto.style.display === 'none' || objetoOculto.style.display === '') {
                objetoOculto.style.display = 'block'; 
                }
              else{
                objetoOculto.style.display = 'none';   
             } 
            });  
          });  
        }
    });
});