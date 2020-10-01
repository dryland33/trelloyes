/* Card.js:

The Card component should render markup matching design.html: 
   * a div with a class of 'Card' containing an h3 for the card's title 
   * a p element for the card's content
   
The Card component accepts 2 props: 
   * title - a string of the card's title 
   * content - a string of the card's content

props will be passed in for each Card from the List component.*/

import React from 'react';
import './Card.css';

function Card() {
    return (<div className="Card">
              <button type="button">delete</button>
              <h3>A card</h3>
              <p>lorem ipsum</p>
            </div>);
}

export default Card;