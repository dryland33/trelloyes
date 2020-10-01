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
            <section class="List">
                <header class="List-header">
                    <h2>First list</h2>
                </header>
                <div class="List-cards">
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>First card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Second card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Fifth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Sixth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Seventh card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Tenth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Twelfth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Thirteenth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <button type="button" class="List-add-button">
                        + Add Random Card
            </button>
                </div>
            </section>
            <section class="List">
                <header class="List-header">
                    <h2>Second list</h2>
                </header>
                <div class="List-cards">
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Second card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Third card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Fourth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Sixth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Eighth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Ninth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Eleventh card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <button type="button" class="List-add-button">
                        + Add Random Card
            </button>
                </div>
            </section>
            <section class="List">
                <header class="List-header">
                    <h2>Third list</h2>
                </header>
                <div class="List-cards">
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>First card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Second card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Third card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Fourth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Fifth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Sixth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Seventh card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Eighth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Ninth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Tenth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Eleventh card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Twelfth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Thirteenth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <button type="button" class="List-add-button">
                        + Add Random Card
          </button>
                </div>
            </section>
            <section class="List">
                <header class="List-header">
                    <h2>Fourth list</h2>
                </header>
                <div class="List-cards">
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Twelfth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <div class="Card">
                        <button type="button">delete</button>
                        <h3>Thirteenth card</h3>
                        <p>lorem ipsum</p>
                    </div>
                    <button type="button" class="List-add-button">
                        + Add Random Card
          </button>
                </div>
            </section>
        </div>
    );
}

export default List;