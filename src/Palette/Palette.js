import React from 'react';
import CustomNode from "../CustomNode/CustomNode";
import { Typography } from 'antd';

import nodeTypes from "../nodeTypes.json";

const { Title, Paragraph } = Typography;

//компонент с палитрой узлов доступных для добавления на диаграмму, набор опредлеяется объектом nodeTypes
const Palette = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <aside style = {{ padding: 10, background: '#fafafa', "flex-direction": 'row'}}>
            <Title level={2}>Available Nodes</Title>
            <div style = {{ display: "flex", "justify-content": "space-around"  }}>
                {
                    Object.keys(nodeTypes).map((nodeType)=>{
                        return (
                            <div className="dndnode" onDragStart={(event) => onDragStart(event, nodeType)} draggable>
                                <CustomNode data={{nodeType: nodeType}}>Node</CustomNode>
                            </div>
                        );
                    })

                }
            </div>
        </aside>
    );
};

export default Palette;
