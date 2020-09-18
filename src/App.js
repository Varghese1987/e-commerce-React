//updated
import React from 'react';
import Products from './components/Products';
import data from './data.json';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products: data.products,
      size:"",
      sort:""
    }
  }
  render(){
    return (
      <div className="esv-grid-container">
        <header>
          <a href="/">Online Shopping</a>
        </header>
        <main>
          <div className="esv-content">
            <div className="esv-main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="esv-sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All rights reserved</footer>
      </div>
    );
  }
}

export default App;
