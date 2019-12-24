import React from 'react';
import PropTypes from 'prop-types'

const Link = ({ children, onClick, active }) => {
    
    return (
    <span
    style={{border: active ? '1px solid black': 'none'}}
        onClick={onClick}
    >
        {children}
    </span>)
}

Link.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link
