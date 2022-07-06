import {useState, useEffect} from 'react';

import {CARD_STATE, CARD_FACE} from './Card.types';

const CardTitle = ({cardState}: {cardState: CARD_STATE}) =>{
    return <h2>Title</h2>
}
const CardTag = () =>{
    return <p>Tag</p>
}

const CardContent = ({cardState}: {cardState: CARD_STATE}) =>{
    return <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto sed blanditiis dolore optio itaque recusandae possimus, ea totam ipsa praesentium velit consectetur exercitationem repellendus natus incidunt reprehenderit nam nisi.</div>
}

const CardReversal = () =>{
    return <div>Card reversal</div>
}

const Card = ({cardState}: {cardState: CARD_STATE}) =>{
    const [cardFace, toggleCardFace] = useState(CARD_FACE.FRONT);
    const cardElements = cardFace === CARD_FACE.FRONT? <>
        <CardTitle cardState={cardState}/>
        <CardContent cardState={cardState}/>
    </>:<CardReversal/>;

    return <div>
        {cardElements}
        <button onClick={()=>toggleCardFace(prevFace => (prevFace === CARD_FACE.FRONT)? CARD_FACE.BACK: CARD_FACE.FRONT)}>Flip</button>
        
    </div>
}

export default Card;