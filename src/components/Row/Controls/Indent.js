import Icon from '../../Icon';
import React from 'react';
import { ICON } from '../../../constants';
import PropTypes from 'prop-types'

const Indent = ({ disabled, onIndent }) => {
    return (
        <Icon
            size={2}
            path={ICON.RIGHT_ARROW.path}
            viewBox={ICON.RIGHT_ARROW.viewBox}
            disabled={disabled}
            click={onIndent}
        />
    );
}

Indent.propTypes = {
    disabled: PropTypes.bool,
    onIndent: PropTypes.func
}

Indent.defaultProps = {
    disabled: false,
    onIndent: () => { }
}

export default Indent;