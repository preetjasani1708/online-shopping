import React from 'react';
import { sizeFilter } from '../actions';
import FilterLink from '../containers/FilterLink'

const SizeFilter = () => (
    <div className="size_filter">
            <div>Sizes :</div>
            <div>
                <FilterLink filter={sizeFilter.XS}>XS</FilterLink>
                <FilterLink filter={sizeFilter.S}>S</FilterLink>
                <FilterLink filter={sizeFilter.M}>M</FilterLink>
                <FilterLink filter={sizeFilter.ML}>ML</FilterLink>
                <FilterLink filter={sizeFilter.L}>L</FilterLink>
                <FilterLink filter={sizeFilter.XL}>XL</FilterLink>
                <FilterLink filter={sizeFilter.XXL}>XXL</FilterLink>
            </div>
        </div>
)

export default SizeFilter
