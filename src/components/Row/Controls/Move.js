import PropTypes from 'prop-types';
import React from 'react';
import Icon from "../../Icon";
import { ICON } from '../../../constants';

const Move = ({ disabled }) => {
    return (
        <Icon
            size={2}
            path={ICON.DRAG.path}
            viewBox={ICON.DRAG.viewBox}
            disabled={disabled}
        />
    );
}

Move.propTypes = {
    disabled: PropTypes.bool
}

Move.defaultProps = {
    disabled: false
}

export default Move;