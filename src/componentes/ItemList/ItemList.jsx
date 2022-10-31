import React from 'react'
import Card from "./Card/Card"

<<<<<<< Updated upstream
function ItemList() {
    // props = titulo / imgSrc / imgAlt / descripcion / precio
    return (
        <div>
            
            <Card 
                titulo="1"
                imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2BFK2NRpFN2HYU94pjz2UgHaE7%26pid%3DApi&f=1&ipt=37efdab45b93b91f26e2bf623366dfd181e4b2ffd83afff4113c3a0d727592d0&ipo=images"
                imgAlt="lorem" 
                descripcion="lorem" 
                precio="5" 
            />
            <Card 
                titulo="2" 
                imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._vCkqb2FwnCRwzZp5eXkVAHaEq%26pid%3DApi&f=1&ipt=54e9a5c4bdd1a60037f5a19c6322d6223f0469871dc8e1ed0df29b396d3fd585&ipo=images" 
                imgAlt="lorem" 
                descripcion="lorem" 
                precio="5" 
            />
            <Card 
                titulo="3" 
                imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PkQ-xzSJ2Fn8nb1CFU5oowHaFj%26pid%3DApi&f=1&ipt=0ddd2e04ca4b33a22ccebe544599d2bc707c9f28a2a0ae9a3e7134baf625ecdd&ipo=images" 
                imgAlt="lorem" 
                descripcion="lorem" 
                precio="5" 
            />
        </div>
    )
=======
function ItemList(props) {
  return (
    <div> 
        { autoList.map((listaAutos) => {
        return <Card 
        key={listaAutos.id}
        titulo={listaAutos.titulo} 
        imagen={listaAutos.imagen} 
        marca={listaAutos.marca} 
        precio={listaAutos.precio} 
        stock={listaAutos.stock}/>;
      })} 
    </div>
  )
>>>>>>> Stashed changes
}

export default ItemList