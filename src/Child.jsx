import React,{Component} from 'react'
import './css/style.css'
var classNames=require('classNames');
export default class Child extends Component{
    constructor(){
        super();
        this.state={
            x:true,
            y:true
        }
    }
   render(){
    let {x,y}=this.state;
    let className=classNames(["three",{one:x},{two:y}]);//three生效了，one是否生效看y是否为true
    return(
        <div>
            <h3>Child组件</h3>
            <div className={className}>持之以恒</div>
        </div>
    )
   }
} 