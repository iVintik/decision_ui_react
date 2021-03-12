import React from 'react';
import CustomNode from "../CustomNode/CustomNode";

//TODO: iterate through node types

const Palette = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <aside style = {{ padding: 10, background: '#fafafa' }}>
            <div className="description">You can drag these nodes to the pane on the top.</div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, "event")} draggable>
                <CustomNode data = {{nodeType: "event"}}>Node</CustomNode>
            </div>
        </aside>
    );
};

export default Palette;