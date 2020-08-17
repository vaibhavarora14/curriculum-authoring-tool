import React from 'react';
import { ReactComponent as Drag } from '../../icons/drag.svg';
import { ReactComponent as LeftArrow } from '../../icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../icons/right-arrow.svg';
import { ReactComponent as Trash } from '../../icons/trash.svg';
import './Row.css';
import { icon, pointer, row, row__contentWrapper, icon__disabled, arrowIcon } from './Row.style';

const Row = (props) => {

    const updateText = (event) => {
        const text = event?.target?.innerText;
        return props?.updateText?.call(undefined, text);
    }

    const getOutdentIconStyle = () => {
        let style = { ...icon, ...arrowIcon };

        if (!props?.outdent?.canOutdent) {
            style = { ...style, ...icon__disabled };
        }

        return style;
    }

    const getIndentIconStyle = () => {
        let style = { ...icon, ...arrowIcon };

        if (!props?.indent?.canIndent) {
            style = { ...style, ...icon__disabled };
        }

        return style;
    }

    const outdent = () => {
        if (!props?.outdent?.canOutdent) {
            return;
        }

        return props?.outdent?.callBack?.call();
    }

    const indent = () => {
        if (!props?.indent?.canIndent) {
            return;
        }

        return props?.indent?.callBack?.call();
    }

    return (<div data-testid={props['data-testid']} style={{ ...row, ...props.style }}>
        <Drag style={{ ...icon, width: '2rem', height: '2rem' }} />
        <LeftArrow style={getOutdentIconStyle()} onClick={outdent} />
        <RightArrow style={getIndentIconStyle()} onClick={indent} />
        <Trash style={{ ...icon, width: '1.5rem', height: '1.5rem', marginRight: '1rem' }} />
        <div onKeyUp={updateText} style={{ ...row__contentWrapper, ...props.contentStyle }}>
            <span style={pointer}>-</span>
            <div
                style={{ flex: '1', cursor: 'pointer' }}
                data-testid="text"
                suppressContentEditableWarning
                contentEditable={true}
                placeholder="Type standard here (e.g. Numbers)">{props.text}</div>
        </div>
    </div>);
}

export default Row