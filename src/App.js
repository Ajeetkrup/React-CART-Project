import CartItem from "./CartItem";
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
  }

  //called just after the app renders
  componentDidMount () {
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {
    //   // console.log(snapshot)

    //   snapshot.docs.map((docs) => {
    //     console.log(docs.data())
    //   })

    //   const products = snapshot.docs.map((docs) => {
    //     const data = docs.data();

    //     data.id = docs.id;
    //     return data;
    //   })

    //   this.setState({
    //     products: products,
    //     loading:false
    //   })
    // })

    firebase
    .firestore()
    .collection('products')
    .onSnapshot((snapshot) => {
      // console.log(snapshot)

      snapshot.docs.map((docs) => {
        console.log(docs.data())
      })

      const products = snapshot.docs.map((docs) => {
        const data = docs.data();

        data.id = docs.id;
        return data;
      })

      this.setState({
        products: products,
        loading:false
      })
    })
  }

  hasIncreaseQty = (product) => {
    const { products } = this.state;

    const ind = products.indexOf(product);
    // products[ind].qty += 1;

    // this.setState(
    //   {
    //     products: products
    //   }
    // )

    const docRef = firebase.firestore().collection('products').doc(products[ind].id);

    docRef.update({
      qty: products[ind].qty + 1
    })
    .then(() => {
      console.log("Product added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  }

  hasDecreaseQty = (product) => {
    const { products } = this.state;

    const ind = products.indexOf(product);

    if (products[ind].qty == 0) {
      return;
    }

    // products[ind].qty -= 1;

    // this.setState(
    //   {
    //     products: products
    //   }
    // )

    const docRef = firebase.firestore().collection('products').doc(products[ind].id);

    docRef.update({
      qty: products[ind].qty - 1
    })
    .then(() => {
      console.log("Product added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
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

  addProduct = () => {
    firebase.firestore()
    .collection('products')
    .add({
      title: 'ball pen',
      price: 8,
      qty: 10,
      img:''
    })
    .then((docRef) => {
      console.log(docRef);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    const {products, loading} = this.state
    return (
      <div className="App">
        {/* <h1>CART</h1> */}
        <Navbar count={this.hasQtyCount()} />
        <button onClick={this.addProduct} style={{padding: 20, margin:5, fontSize: 15, color:"green"}}>Add Product</button>
        <Cart 
          products={products}
          onIncreaseQty={this.hasIncreaseQty} 
          onDecreaseQty={this.hasDecreaseQty} 
          onDeletePro={this.hasDeletePro}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{padding: 10, fontSize: 30}}>Total Price: {this.hasTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
