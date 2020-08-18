import React from 'react'
import Icon from "../../Icon";
import { ICON } from '../../../constants';
import PropTypes from 'prop-types';

const Delete = ({ disabled }) => {
    return (
        <Icon size={2} icon={ICON.TRASH} disabled={disabled} />
    );
}

Delete.propTypes = {
    disabled: PropTypes.bool
}

Delete.defaultProps = {
    disabled: false
}


export default Delete;