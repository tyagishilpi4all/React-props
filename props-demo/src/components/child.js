import React from 'react'

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            age:22
        }
        this.props.reciveDataFromChild(this.state.age)
    }
    render(){
        return(
            <React.Fragment>
                <h1>name is {this.props.name}</h1>
            </React.Fragment>
        )
    }
}

export default Child;