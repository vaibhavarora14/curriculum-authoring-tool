import React from 'react';
import { ReactComponent as Drag } from '../../icons/drag.svg';
import { ReactComponent as LeftArrow } from '../../icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../icons/right-arrow.svg';
import { ReactComponent as Trash } from '../../icons/trash.svg';
import './Row.css';
import { icon, icon__arrow, icon__disabled, pointer, row, row__contentWrapper, textInput, icon__trash } from './Row.style';

const Row = (props) => {

    const updateText = (event) => {
        const text = event?.target?.value;
        return props?.updateText?.call(undefined, text);
    }

    const getOutdentIconStyle = () => {
        let style = { ...icon, ...icon__arrow };

        if (!props?.outdent?.canOutdent) {
            style = { ...style, ...icon__disabled };
        }

        return style;
    }

    const getIndentIconStyle = () => {
        let style = { ...icon, ...icon__arrow };

        if (!props?.indent?.canIndent) {
            style = { ...style, ...icon__disabled };
        }

        return style;
    }

    const outdent = () => {
        if (!props?.outdent?.canOutdent) {
            return;
        }

        return props?.outdent?.callback?.call();
    }

    const indent = () => {
        if (!props?.indent?.canIndent) {
            return;
        }

        return props?.indent?.callback?.call();
    }

    const trash = () => {
        return props?.trash?.callback?.call();
    }

    return (<div data-testid={props['data-testid']} style={{ ...row, ...props.style }}>
        <Drag style={{ ...icon, width: '2rem', height: '2rem' }} />
        <LeftArrow style={getOutdentIconStyle()} onClick={outdent} />
        <RightArrow style={getIndentIconStyle()} onClick={indent} />
        <Trash style={{ ...icon, ...icon__trash }} onClick={trash} />
        <div style={{ ...row__contentWrapper, ...props.contentStyle }}>
            <span style={pointer}>-</span>
            <input
                onChange={updateText}
                style={textInput}
                data-testid="text"
                value={props.text}
                placeholder="Type standard here (e.g. Numbers)" />
        </div>
    </div>);
}

export default Row