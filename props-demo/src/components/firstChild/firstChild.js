import React, {Component} from 'react';
import SecondChild from '../secondChild/secondChild';

const FirstChild=(props)=>{
    return(
        <React.Fragment>
            <SecondChild propsReceive={props.propsReceive}></SecondChild>
        </React.Fragment>
    )
}
export default FirstChild;