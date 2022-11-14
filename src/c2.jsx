import React,{Component} from 'react'
export default class C2 extends Component{
    constructor(){
        console.log("constructor 0");
        super();
        this.state={count:0}
    }
    handdleClick=()=>{
        let {count}=this.state;
        this.setState({
            count:{count}+1
        })
    }
    componentWillMount(){
        console.log("componentWillMount 1");
    }
    render(){
        console.log("render 2 7");
        let {count}=this.state;
        return(
            <div>
                <h3>C2</h3>
                <p>count:{count}</p>
                <input type="button" onClick={this.handdleClick} defaultValue="+"/>
            </div>
        )
    }
    compomentDidMount(){
        console.log("componentDidMount 3");
    }
    componentWillReceiveProps(nextProps,nextState){
        console.log("componentWillReceiveProps 4");
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate 5");
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate 6");
    }
    componentDidUpdate(){
        console.log("componentWillUpdate 8");
    }
}