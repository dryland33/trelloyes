/* App.js:

The App component should render markup matching design.html: 
    * the main element, 
    * a header with the h1 and 
    * a div with class 'App-list'

The App component will accept 1 prop, store.

The store prop is an object with 2 keys: 
    * lists    - an array of objects 
    * allCards - an object where each key is a card's ID and the value is the card object with a title and content

Dummy STORE object is provided in store.js

The App should render a List component for each of the items in the store.lists array.

Each instance of the List component should be passed 2 props (and a key). 

The 2 props are:
    * header - a string for the List's header
    * cards  - an array of card objects
        + You'll need to combine the cardIds array for the list with the allCards object. */

import React from 'react';
import './App.css';
import List from './List';

function App() {
  return (
    <main className='App'>
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
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
    </main>
  );
}

export default App;