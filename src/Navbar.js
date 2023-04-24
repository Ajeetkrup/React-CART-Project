import React from "react";

const Navbar = (props) => {
    return (
        <>
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3041-thumb.png" alt="cart-icon" />
                    <div style={styles.cartCount}> {props.count} </div>
                </div>
            </div>
        </>
    )
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
}

export default Navbar;