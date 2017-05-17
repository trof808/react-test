import React from 'react';

import './Item.css'

const Item = (props) => {

  return (

    <div className="item">
      <div className="item-title">{props.name}</div>
      <img className="item-img" src="https://store.storeimages.cdn-apple.com/8749/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618"/>
      <div className="item-options">
        <p>{props.price}</p>
        <button onClick={() => props.addToCart(props.id)} data-id={props.id}>Добавить в корзину</button>
      </div>
    </div>
  )
}

export default Item;
