import React, { useState } from 'react';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import Node from '../../utils/node';
import Row from '../Row/Row';
import { button, plusIcon } from './curriculum-page.style';

const CurriculumPage = () => {
    const [data, setData] = useState([]);

    // TODO: Remove below `handleEnter`, it's just for POC
    const handleEnter = (event) => {
        if (event.key !== 'Enter') {
            return;
        }

        const node = new Node(event.target.value);

        if (data.length > 0) {
            if (data.length % 2 === 0) {
                node.parent = data[data.length - 1];
            } else {
                node.previous = data[data.length - 1];
            }
        }

        setData([
            ...data,
            node
        ]);
    }

    const filterTopParent = () => {
        return data.filter(node => node.parent === undefined);
    }

    const getChildren = (id, leftIndentation) => {
        if (!leftIndentation) {
            leftIndentation = 25;
        } else {
            leftIndentation += 25;
        }

        const childrenFiltered = data.filter(node => node?.parent?.id === id);

        if (childrenFiltered.length === 0) {
            return;
        } else {
            return childrenFiltered.map((node, index) =>
                <>
                    <Row
                        data-testid={"row_" + index}
                        key={index}
                        contentStyle={{ paddingLeft: leftIndentation + 'px' }}
                        text={node.name}
                    />
                    {getChildren(node.id, leftIndentation)}
                </>
            );
        }

    }

    const addRow = () => {
        const node = new Node();
        const lastNode = data[data.length - 1];
        if (lastNode) {
            node.parent = lastNode.parent;
            node.previous = lastNode;
            lastNode.next = node;
        }

        setData([
            ...data,
            node
        ])
    }

    const updateText = (text, node) => {
        node.name = text;
        setData([...data]);
    }

    return (<div style={{ margin: '5rem' }}>

        {/* Remove below `input`, it's just for POC */}
        <input onKeyUp={handleEnter} style={{ marginBottom: '3rem' }} />

        {filterTopParent().map((node, index) =>
            <>
                <Row
                    data-testid={"row_" + index}
                    key={index}
                    text={node.name}
                    updateText={(text) => updateText(text, node)}
                />
                {getChildren(node.id)}
            </>
        )}

        <button onClick={addRow} style={{ ...button, width: '100%' }}>
            <Plus style={plusIcon} />
            Add a standard
        </button>
    </div>);
}

export default CurriculumPage;