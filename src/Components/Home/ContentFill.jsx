import React from "react";
import './ContentFill.css'

function ContentFill(item) {
  return (
    <div className='content_block' popularity={item.popularity} price={item.price} name={item.name} >
      <img className='sourse_image' src={item.imageURL} alt="some_pic" />
      
      <div className = 'span_holder'>
        <span className='item_name'>{item.name}</span>
        <div className = 'price_holder'>
          <span className='item_price'>{item.price}₴</span>
          <span className='add_to_cart_span'>Add to Cart</span>
        </div>
      </div>
    </div>
  );
}

export default ContentFill;
