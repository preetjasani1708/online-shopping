import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Item1() {
    return (<div className="item_display" >
        <div className="item_header" >
            <div className="no_of_record_found" > 5 Product(s) found </div>
            <div className="order_by_filter" >
                <span > Order by </span>
                <span >

                </span>
            </div>
        </div>
        <div className="item_container" >
            <div className="item_card" >
                <img src={"/images/random1.jpeg"} alt="T-shirt" height="300px" width="100%" />
                <div> <h4>On The Streets Black T - Shirt</h4></div>
                <div> </div>
                <div>
                    <div> 333 </div>
                    <div> or 3 x$111 </div>
                </div>
                <button> Add to Cart </button>
            </div>
        </div>
    </div>
    );
}

const Item = ({ items }) => {
    return (
        items.map(item => {
            return (
                <div className="item_display" key={item.itemID}>
                    <div className="item_header" >
                        <div className="no_of_record_found" > 5 Product(s) found </div>
                        <div className="order_by_filter" >
                            <span> Order by </span>
                            <span>

                            </span>
                        </div>
                    </div>
                    <div className="item_container" >
                        <div className="item_card" >
                            <img src={item.imageURL} alt="T-shirt" height="300px" width="100%" />
                            <div> <h4>{item.item}</h4></div>
                            <div> </div>
                            <div>
                                <div>{item.price}</div>
                                <div> or {item.noOFEmi}x${item.emiPrice} </div>
                            </div>
                            <button> Add to Cart </button>
                        </div>
                    </div>
                </div>
            );
        })
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

export default connect(mapStateToProps)(Item)