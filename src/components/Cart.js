import React from 'react';
import { connect } from 'react-redux'
import CartList from './CartList';
import {toggleSideNav} from '../actions/index';

const Cart = (props) => {
    
    return (
        <span>
            <div className="cart_icon" onClick={() => props.toggleCart(true)}>
                <i className="fas fa-shopping-cart cart_icon_style fa-3x" ></i>
            </div>
            <CartList 
                allItems={props.allItems}
                cartItem={props.cartItem}  
                isOpen={props.isOpen} 
                toggleCart={props.toggleCart}
            />
        </span>
        
    )
};


const mapStateToProps = (state) => ({
    isOpen: state.toggleCartList.isOpenSideNav,
    cartItem: state.cartlist,
    allItems: state.items
  });
  
  const mapDispatchToProps = (dispatch) => ({
    toggleCart: (value) => dispatch(toggleSideNav(value))
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)