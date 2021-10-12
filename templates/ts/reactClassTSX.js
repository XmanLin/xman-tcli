module.exports = function (className) {
    return `
import * as React from 'react';

interface Props {}
interface State {}

export class ${className} extends React.Component<Props, State>{
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