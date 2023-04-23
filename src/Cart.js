import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor () {
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
        const {products} = this.state;

        const ind = products.indexOf(product);
        products[ind].qty += 1;

        this.setState(
            {
                products: products
            }
        )
    }
    render () {
        const {products} = this.state;
        return (
            <>
                <div className="cart">
                    {products.map((product) => {
                        return <CartItem product={product} key={product.id} hasIncreaseQty={this.hasIncreaseQty} />
                    })}
                </div>
            </>
        )
    }
}

export default Cart;