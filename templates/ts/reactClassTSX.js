module.exports = function (className) {
    return `
import * as React from 'react';

export class ${className} extends React.Component<Props: any, State: any>{
    constructor(props: Props){
        super(props);

        this.state = {}
    }

    componentDidMount(){

    }

    render() {
        return (
            <div></div>
        )
    }
}
    ` 
}
