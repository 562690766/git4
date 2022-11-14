import React, { Component } from 'react'

export default class Item extends Component {
  constructor(){
    super();
    this.state={inEdit:false};
    this.myInput=React.createRef();
  }
  //更改Item组件自身状态值this.state.inEdit
  changeInEdit=()=>{
    let {todo}=this.props;
    // 把inEdit:true传入。   this.state状态更新后，执行的匿名回调函数
    this.setState({inEdit:true},()=>{
      this.myInput.current.value=todo.title;
      this.myInput.current.focus();
    })
  }
  render() {
    let {todo,delTodo,changeHasCompleted,editTodo}=this.props;
    let completed=todo.hasCompleted?"completed":"";
    let {inEdit}=this.state;
    let classes=inEdit?completed+"editing":completed;
    return (
      <li className={classes}>
        <div className='view'>
            <input type="checkbox" className='toggle' 
            onChange={()=>changeHasCompleted(todo)} 
            checked={todo.hasCompleted}/>
            
            <label onDoubleClick={this.changeInEdit}>{todo.title}</label>
            <button className='destroy' 
            onClick={()=>delTodo(todo)}></button>
        </div>
        <input type="text" className='edit' ref={this.myInput}
        onBlur={inEdit?()=>{
          console.log("onBlur");
          editTodo(todo);
          this.setState({inEdit:false});
        }:null
      }
        onKeyUp={event=>{
          if(event.key==="Enter"){
            console.log("Ent")
            todo.title=this.myInput.current.value.trim();
            editTodo(todo);
            this.setState({inEdit:false});
          }
          if(event.key==="Escape"){
            console.log("esc")
            this.setState({inEdit:false});
          }
        }}
        
        />

      </li>
    )
  }
}
