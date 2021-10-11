module.exports = function (funcName) {
    return `
import React, {useEffect, useState} from 'react';
import { Modal } from 'antd';

interface I${funcName} {
    visible: boolean;
    handleCancel: any;
}

const ${funcName} = (props: I${funcName}) => {
    const {visible, handleCancel } = props;

    useEffect(() => {
        
    },[])

    const onClick = () => {

    }

    return (
        <Modal
            className=""
            title=""
            width={1000}
            visible={visible}
            onOk={onClick}
            okText="确定"
            onCancel={handleCancel}
            destroyOnClose={true}
            maskClosable={false}
            >
            
        </Modal>
    )
}

export default ${funcName};
    ` 
}