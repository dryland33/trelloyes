/* List.js:

The List component should render markup matching design.html
    * a section with a class of 'List' 
        - contains a header and div with class 'List-cards'

The List component accepts 2 props: 
    * header - a string of the header of the card to render 
    * cards  - an array of card objects
        -- each object should have a title and content

These props will be passed in for each List from the App component.

The List should render a Card component for each of the cards in the cards array prop.

Each instance of the Card component should be passed 2 props (and a key). 

The 2 props are: 
    * title   - a string for the Card's title
    * content - a string of the Card's content */

import React from 'react';
import './List.css';
import Card from './Card';

function List(title, content) {
    return (
        <div>
            <section className="List">
                <header className="List-header">
                    <h2>A list</h2>
                </header>
                <div className="List-cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <button type="button" className="List-add-button">
                        + Add Random Card
                    </button>
                </div>
            </section>
        </div>
    );
}

export default List;