import React from 'react';
import { header, subHeader, subHeaderWrapper } from './style';

const Header = (props) => {

    const isAction = (element) => { return element.type === Actions }

    return (<>
        <div style={header}>Mathematics</div>
        <div style={subHeaderWrapper}>
            <div style={{ marginRight: '10rem' }}>
                <b>Actions</b>
                <div>
                    {React.Children.map(props.children, (child => isAction(child) && child))}
                </div>
            </div>
            <div>
                <b>Standard</b>
                <div style={subHeader}>The text of the standard</div>
            </div>
        </div>
    </>);
}

const Actions = (props) => {
    return (
        <div style={subHeader}>{props.children}</div>
    );
}

Header.Actions = Actions;

export default Header;