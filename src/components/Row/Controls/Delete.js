import React from 'react'
import Icon from "../../Icon";
import { ICON } from '../../../constants';
import PropTypes from 'prop-types';

const Delete = ({ disabled, onDelete }) => {
    return (
        <Icon
            size={2}
            path={ICON.TRASH.path}
            viewBox={ICON.TRASH.viewBox}
            disabled={disabled}
            click={onDelete}
        />
    );
}

Delete.propTypes = {
    disabled: PropTypes.bool,
    onDelete: PropTypes.func,
}

Delete.defaultProps = {
    disabled: false,
    onDelete: () => { },
}


export default Delete;