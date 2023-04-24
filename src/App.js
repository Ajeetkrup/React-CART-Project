import CartItem from "./CartItem";
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: 'Mobile Phone',
          price: 79,
          qty: 3,
          img: '',
          id: 1
        },
        {
          title: 'Tele Phone',
          price: 789,
          qty: 3,
          img: '',
          id: 2
        },
        {
          title: 'Watch',
          price: 79,
          qty: 3,
          img: '',
          id: 3
        }
      ]
    }
  }

  hasIncreaseQty = (product) => {
    const { products } = this.state;

    const ind = products.indexOf(product);
    products[ind].qty += 1;

    this.setState(
      {
        products: products
      }
    )
  }

  hasDecreaseQty = (product) => {
    const { products } = this.state;

    const ind = products.indexOf(product);

    if (products[ind].qty == 0) {
      return;
    }

    products[ind].qty -= 1;

    this.setState(
      {
        products: products
      }
    )
  }

  hasDeletePro = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id != id);

    this.setState({
      products: items
    })
  }

  hasQtyCount = (product) => {
    let count = 0;

    const {products} = this.state;

    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  render() {
    return (
      <div className="App">
        {/* <h1>CART</h1> */}
        <Navbar count={this.hasQtyCount()} />
        <Cart 
          products={this.state.products}
          onIncreaseQty={this.hasIncreaseQty} 
          onDecreaseQty={this.hasDecreaseQty} 
          onDeletePro={this.hasDeletePro}
        />
      </div>
    );
  }
}

export default App;
