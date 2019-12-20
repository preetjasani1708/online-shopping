import React from 'react';
import { sizeFilter } from '../actions';

function SizeFilter() {
    return (
        <div className="size_filter">
            <div>Sizes :</div>
            <div>
                <span filter={sizeFilter.XS}>XS</span>
                <span filter={sizeFilter.S}>S</span>
                <span filter={sizeFilter.M}>M</span>
                <span filter={sizeFilter.ML}>ML</span>
                <span filter={sizeFilter.L}>L</span>
                <span filter={sizeFilter.XL}>XL</span>
                <span filter={sizeFilter.XXL}>XXL</span>
            </div>
        </div>

    );
}

export default SizeFilter