import React from 'react';

import FormRenderer, { componentTypes } from '@data-driven-forms/react-form-renderer';
import { componentMapper, FormTemplate } from '@data-driven-forms/ant-component-mapper';

import { Button, Form, Drawer, Input } from 'antd';

import nodeTypes from "../nodeTypes.json";


function Options (props){
    console.log(nodeTypes[props.nodeType]);
    return (
        <Drawer width={520} placement={"right"}  visible={props.open} destroyOnClose={true} onClose={props.closeOptions}>
            <FormRenderer
                //форма определяется набором параметров узла в соотсветствии со схемой
                schema={nodeTypes[props.nodeType].options.schema}
                componentMapper={componentMapper}
                FormTemplate={FormTemplate}
                initialValues = {props.options}
                onSubmit={props.changeOptions}
            />
        </Drawer>
    );
}

export default Options;
