import React from 'react';
import PropTypes from 'prop-types';

const navbar = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );  
}
export default navbar;

navbar.propTypes = {
    title : PropTypes.string.isRequired
}

navbar.defaultProps = {
    title : "Navbar"
}