import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const Item = ({ items, addToCart, orderByPrice }) => {

    const [value, setValue] = useState('Select')

    function handleChange(e) {
        setValue(e.target.value);
    }

    const priceFilteredItems = orderByPrice(items,value);

    return (
        <div className="item_display" >
            <div className="item_header" >
                <div className="no_of_record_found" > {items.length} Product(s) found </div>
                <div className="order_by_filter" >
                    <span> Order by </span>
                    <span>
                        <select value={value}
                            onChange={handleChange} >
                            <option value="Select">Select</option>
                            <option value="LowestToHighest">Lowest to highest</option>
                            <option value="HighestToLowest">Highest to lowest</option>
                        </select>
                    </span>
                </div>
            </div>
            <div className="item_container" >
                {priceFilteredItems.map(item => {
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

export default Item