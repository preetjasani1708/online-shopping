import React from 'react';

function CartList(props) {
    const { toggleCart, isOpen, cartItem, allItems } = props
    const derivedData = allItems.filter((x) => {
        const isInCart = cartItem.filter(y => y.id === x.itemID);
        return isInCart.length ? true : false;
    })
    console.log(derivedData);
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
                            <div className="cart_list_item" key={item.itemID}>
                                <div className="cart_list_image">
                                    <img src={item.imageURL} alt="T-shirt" height="100%" width="100%" />
                                </div>
                                <div className="cart_list_detail">
                                    <div className="cart_list_detail_title">{item.item}</div>
                                    <div className="cart_list_other_detail">XL | {item.description}</div>
                                    <div className="cart_list_other_detail">Quantity : 3</div>
                                </div>
                                <div className="cart_list_price">
                                    <div>&times;</div>
                                    <div className="cart_item_price">$ {item.price}</div>
                                    <div>
                                        <div>
                                            <i class="fas fa-minus-square plus_minus"></i>
                                            <i class="fas fa-plus-square plus_minus"></i>
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
                            <div className="total">$ 550.50</div>
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