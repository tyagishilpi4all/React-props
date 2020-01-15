import React, {Component} from 'react';

class SecondChild extends Component{
    handle=()=>{
        this.props.propsReceive(1)
    }
    render(){
    return(
        <React.Fragment>
            <button onClick={this.handle}>click me</button>
        </React.Fragment>
    )
}
}
export default SecondChild;