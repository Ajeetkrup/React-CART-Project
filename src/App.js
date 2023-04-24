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
          qty: 2,
          img: 'https://m.media-amazon.com/images/I/91W42b8YW+L._SX569_.jpg',
          id: 1
        },
        {
          title: 'Tele Phone',
          price: 789,
          qty: 3,
          img: 'https://m.media-amazon.com/images/I/41ISy8+CNWL._SY355_.jpg',
          id: 2
        },
        {
          title: 'Watch',
          price: 79,
          qty: 5,
          img: 'https://cdn.shopify.com/s/files/1/0266/1371/0884/products/7_df138706-1b15-4e94-b297-189068d12e40-sw.png?v=1659590799',
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

  hasTotalPrice = () => {
    const {products} = this.state;
    let totPr = 0;

    products.forEach((product) => {
      totPr += (product.qty * product.price)
    })

    return totPr;
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
        <div style={{padding: 10, fontSize: 30}}>Total Price: {this.hasTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
