import React, {Component} from 'react';
import Child from '../components/child';
import FirstChild from '../components/firstChild/firstChild';
import Home from '../components/home/Home';
import About from '../components/about/About';

class App extends Component {
    constructor(props){
        super(props)
            this.state={
                age:null ,
                comp:'home'
        }
    }
    reciveDataFromChild=(childData)=>{
       this.setState({
           age:childData
       })
    }
    propsReceive=(obj)=>{
        console.log(obj,"___++")
    }
    componentChange=(data)=>{
        this.setState({
            comp:data
        })
    }
    render(){
        const {age, comp}=this.state;
        return(
            <React.Fragment>
                {/* <h1>shilpi:::: {age}</h1>
                <Child name={'shilpi'} reciveDataFromChild={this.reciveDataFromChild}/> */}
                {/* <FirstChild propsReceive={this.propsReceive}></FirstChild> */}
                <ul>
                    <li onClick={()=>this.componentChange('home')}>home</li>
                    <li onClick={()=>this.componentChange('about')}>about</li>
                </ul>
                <div>
                    {
                        comp=='home' ? <Home/> : comp=='about' ?  <About/> :<h1>page not found</h1>
                    }
                    
                   
                </div>
            </React.Fragment>
        )
    }
}
export default App;