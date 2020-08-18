import Icon from "../../Icon";
import { ICON } from "../../../constants";
import React from 'react';
import PropTypes from 'prop-types';

const Outdent = ({ disabled, onOutdent }) => {
    return (
        <Icon
            size={2}
            path={ICON.LEFT_ARROW.path}
            viewBox={ICON.LEFT_ARROW.viewBox}
            disabled={disabled}
            click={onOutdent}
        />
    );
}

Outdent.propTypes = {
    disabled: PropTypes.bool,
    onOutdent: PropTypes.func,
}

Outdent.defaultProps = {
    disabled: false,
    onOutdent: () => { }
}

export default Outdent;