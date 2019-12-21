import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addToCart} from '../actions/index';

const Item = ({ items,addToCart }) => {
    return (
        <div className="item_display" >
            <div className="item_header" >
                <div className="no_of_record_found" > 5 Product(s) found </div>
                <div className="order_by_filter" >
                    <span> Order by </span>
                    <span>

                    </span>
                </div>
            </div>
            <div className="item_container" >
                {items.map(item => {
                    return (
                        <div className="item_card" key={item.itemID}>
                            <img src={item.imageURL} alt="T-shirt" height="300px" width="100%" />
                            <div> <h4>{item.item}</h4></div>
                            <div> </div>
                            <div>
                                <div>{item.price}</div>
                                <div> or {item.noOFEmi}x${item.emiPrice} </div>
                            </div>
                            <button onClick={() => addToCart(item.itemID)}> Add to Cart </button>
                        </div>
                    );
                })}</div>
        </div>
    )
};


Item.prototypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        itemID: PropTypes.number,
        item: PropTypes.string,
        imageURL: PropTypes.string,
        price: PropTypes.number,
        noOFEmi: PropTypes.number,
        emiPrice: PropTypes.number
    }))
}

const mapStateToProps = (state) => {
    return { items: state.items };
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id))
  })

export default connect(mapStateToProps,mapDispatchToProps)(Item)