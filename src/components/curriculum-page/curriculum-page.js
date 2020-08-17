import React, { useState } from 'react';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import Node from '../../utils/node';
import Row from '../Row/Row';
import { button, plusIcon } from './curriculum-page.style';

const START_LEVEL = 0;
const NODE_INDENTATION = 25;

const CurriculumPage = () => {
    const [data, setData] = useState([]);

    const addRow = () => {
        const node = new Node();
        const lastNode = data[data.length - 1];
        if (lastNode) {
            node.level = lastNode.level;
            node.previous = lastNode;
            lastNode.next = node;
        } else {
            node.level = START_LEVEL;
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

    const outdent = (node) => {
        node.level -= 1;
        setData([...data]);
    }

    const indent = (node) => {
        node.level += 1;
        setData([...data]);
    }

    const deleteNode = (node, index) => {
        const nodesToBeDeleted = findNodesToBeDeleted(node, index);
        const nodeNotToBeDeleted = (node) => nodesToBeDeleted.indexOf(node) < 0
        const filteredData = data.filter(nodeNotToBeDeleted);
        setData([...filteredData]);
    }

    const findNodesToBeDeleted = (node, index) => {
        const nodesToBeDeleted = [node];

        if (!node.next) {
            return nodesToBeDeleted;
        }

        for (let loopIndex = index + 1; loopIndex < data.length; loopIndex++) {
            const currentNode = data[loopIndex];
            if (currentNode.level <= node.level) {
                currentNode.previous = data[index - 1];
                break;
            }

            nodesToBeDeleted.push(currentNode);
        }

        return nodesToBeDeleted;
    }

    const canOutdent = (node) => node.level !== START_LEVEL;
    const canIndent = (node) => node?.previous?.level >= node?.level;

    return (<div style={{ margin: '5rem' }}>

        {data.map((node, index) =>
            <>
                <Row
                    data-testid={"row_" + index}
                    key={index}
                    text={node.name}
                    contentStyle={{ marginLeft: (node.level * NODE_INDENTATION) + 'px' }}
                    outdent={{ canOutdent: canOutdent(node), callback: () => outdent(node) }}
                    indent={{ canIndent: canIndent(node), callback: () => indent(node) }}
                    trash={{ callback: () => deleteNode(node, index) }}
                    updateText={(text) => updateText(text, node)}
                />
            </>
        )}

        <button onClick={addRow} style={{ ...button, width: '100%' }}>
            <Plus style={plusIcon} />
            Add a standard
        </button>
    </div>);
}

export default CurriculumPage;