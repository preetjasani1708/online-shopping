import React from 'react';

function CartList(props) {
    const { toggleCart, isOpen, cartItem, allItems, removeToCart, inc_dec_item } = props
    let derivedData = cartItem.map((x) => {
        const isInCart = allItems.filter(y => x.id === y.itemID);
        return isInCart.length ? { ...isInCart[0], quantity: x.quantity } : false;
    });
    const subTotal = derivedData.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.price) * (currentValue.quantity);
    }, 0)

    return (
        <div id="mySidenav" className="sidenav" style={{ display: isOpen ? 'block' : 'none' }}>
            <a className="closebtn" onClick={() => toggleCart(false)}>&times;</a>
            <div className="cart_list_section">
                <div className="cart_list_icon">
                    <i className="fas fa-shopping-cart fa-2x" ></i>
                </div>
                <div className="cart_list">
                    {derivedData.map(item => {
                        return (
                            <div className="cart_list_item" key={Math.random() * 78942}>
                                <div className="cart_list_image">
                                    <img src={item.imageURL} alt="T-shirt" height="100%" width="100%" />
                                </div>
                                <div className="cart_list_detail">
                                    <div className="cart_list_detail_title">{item.item}</div>
                                    <div className="cart_list_other_detail">XL | {item.description}</div>
                                    <div className="cart_list_other_detail">Quantity : {item.quantity}</div>
                                </div>
                                <div className="cart_list_price" >
                                    <div onClick={() => removeToCart(item.itemID)}>&times;</div>
                                    <div className="cart_item_price">$ {item.price}</div>
                                    <div>
                                        <div>
                                            <i onClick={() => item.quantity > 1 && inc_dec_item(item.itemID, 'decrement')} className="fas fa-minus-square plus_minus"></i>
                                            <i onClick={() => inc_dec_item(item.itemID, 'increment')} className="fas fa-plus-square plus_minus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    )}
                </div>
                <div className="cart_list_subtotal">
                    <div className="subtotal_dispay">
                        <div className="subtotal_label">SUBTOTAL</div>
                        <div className="subtotal_amount">
                            <div className="total">$ {subTotal}</div>
                            <div className="emi">OR UP TO 5x$120</div>
                        </div>
                    </div>
                    <div className="checkout"><button> CHECKOUT </button></div>
                </div>
            </div>
        </div>
    );
}

export default CartList