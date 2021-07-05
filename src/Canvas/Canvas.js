import React, { useState, useRef, useEffect } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    removeElements,
    Controls,
} from 'react-flow-renderer';
import Palette from '../Palette/Palette';
import Options from "../Options/Options";

import CustomNode from "../CustomNode/CustomNode.js";

// Описание стартовой диаграммы
const initElements = [
    { id: '1', type: 'customNode', data: { nodeType: "event", options: {} }, position: { x: 100, y: 5 } },
    // you can also pass a React Node as a label
    { id: '2', type: 'customNode', data: { nodeType: "filter", options: {} }, position: { x: 600, y: 200 } },
    { id: 'e1-2', target: '1', source: '2', animated: false },
];

const nodeTypes = {
    customNode: CustomNode,
};


let id = 0;
const getId = () => `dndnode_${id++}`;
const Canvas = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    //elements - содержит состояние диаграммы
    const [elements, setElements] = useState(initElements);

    const [activeNodeState, setActiveNode] = useState(
        {
            activeNode: undefined,
            activeNodeType: undefined,
            optionsOpened: false,
            options: {}
        }
    )
    //создание связь между узлами
    const onConnect = (params) => setElements((els) => addEdge(params, els));
    //удаление узла\связей
    const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));
    
    const onLoad = (_reactFlowInstance) =>
        setReactFlowInstance(_reactFlowInstance);
    
    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };
    
    // создание узла при перетаскивании из палитры
    const onDrop = (event) => {
        event.preventDefault();
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const nodeType = event.dataTransfer.getData('application/reactflow');
        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });
        const newNode = {
            id: getId(),
            type: "customNode",
            position,
            data: {nodeType: nodeType},
        };
        setElements((es) => es.concat(newNode));
    };
    
    // открыть настройки узла по клику на узел на диаграмме
    const onElementClick = (event, element) => {
        if (element.type === "customNode"){
            setActiveNode({activeNode:element.id, activeNodeType:element.data.nodeType, options:element.data.options, optionsOpened: true})
        }
    }
    // изменение настроек узла
    const ActiveNodeOptionsChange = (options) => {
        console.log(options);
        setElements((els) =>
            els.map((el) => {
                if (el.id === activeNodeState.activeNode) {
                    // it's important that you create a new object here
                    // in order to notify react flow about the change
                    el.data = {
                        ...el.data,
                        options: options,
                    };
                }

                return el;
            })
        );
        setActiveNode ({optionsOpened: false})
    }

    return (
        <div className="dndflow">
            <ReactFlowProvider>
                <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{ height:600, background:"#f5f5f5" }}>
                    <ReactFlow
                        nodeTypes={nodeTypes}
                        elements={elements}
                        onConnect={onConnect}
                        onElementsRemove={onElementsRemove}
                        onLoad={onLoad}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        onElementClick={onElementClick}
                    >
                        <Controls />
                    </ReactFlow>
                </div>
                <Palette />
                {activeNodeState.activeNode !== undefined &&
                    <Options
                        closeOptions = {()=> setActiveNode({optionsOpened: false})}
                        open={activeNodeState.optionsOpened}
                        options={activeNodeState.options}
                        nodeType={activeNodeState.activeNodeType}
                        changeOptions = {ActiveNodeOptionsChange}
                    />
                }
            </ReactFlowProvider>
        </div>
    );
};
export default Canvas;
