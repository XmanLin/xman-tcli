module.exports = function (funcName) {
    return `
import React, {useEffect, useState} from 'react';

const ${funcName} = (props) => {
    
    return (
        <div></div>
    )
}

export default ${funcName};
    ` 
}
