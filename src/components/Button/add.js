import Button from ".";
import React from 'react';
import Icon from "../Icon";
import { ICON } from "../../constants";
import PropTypes from 'prop-types';

const Add = ({ click, children }) => {
    return (
        <Button
            click={click}
            style={{ width: '100%' }}
        >
            <Icon
                path={ICON.PLUS.path}
                viewBox={ICON.PLUS.viewBox}
                color='#FFF'
                size={1.25}
            />
            {children}
        </Button>
    )
}

Add.propTypes = {
    click: PropTypes.func,
    children: PropTypes.string
}

Add.defaultProps = {
    click: () => { },
    children: ''
}

export default Add;