import React from 'react'
import Card from "../Card/Card"

function ItemList() {
    return (
        <div>
            <Card title="P1" detail="lorem" price="100" altImg="alt1" img="http://i.stack.imgur.com/jZhAM.png"/>
            <Card title="P2" detail="lorem" price="150" altImg="alt2" img="http://www.imagemagick.org/Usage/canvas/plasma_rnd1.jpg"/>
            <Card title="P3" detail="lorem" price="189" altImg="alt3" img="http://www.imagemagick.org/Usage/canvas/plasma_seeded.jpg"/>
        </div>
    )
}

export default ItemList