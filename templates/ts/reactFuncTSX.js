module.exports = function (funcName) {
    return `
import React, {useEffect, useState} from 'react';

const ${funcName} = (props: any) => {
    
    useEffect(() => {
        
    },[])
    
    return (
        <div></div>
    )
}

export default ${funcName};
    ` 
}
