import React,{Component} from 'react'
import Item from './components/Item'
// import Footer from './components/Footer'
import './css/index.css'

export default class App extends Component {
    constructor(){
        super();
        this.state={todoDatas:[]}
    }
    // 添加todo
    addTodo=(event)=>{
        if(event.key!=="Enter") return;
            console.log("回车了，添加todo");
            let {todoDatas}=this.state;

        // 创建todo
        let todo={};
        todo.id=Date.now();
        todo.title=event.target.value.trim();
        todo.hasCompleted=false;
        todoDatas.push(todo);
        this.setState({todoDatas});
        event.target.value="";
    }
    // 删除todo
    delTodo=(todo)=>{
        let {todoDatas}=this.state;
        todoDatas=todoDatas.filter(value=>{
            if(value.id==todo.id){
                return false;
            }
            return true;
        })
        this.setState({todoDatas});
    }
    //改变todo状态 已完成/未完成todo.hasCompleted->todo->todoDatas
    changeHasCompleted=(todo)=>{
        let {todoDatas}=this.state;
        todoDatas=todoDatas.map(value=>{
            if(value.id===todo.id){
                value.hasCompleted = !todo.hasCompleted;
            }
            return value;
        })
        this.setState({todoDatas});
    }
    // 编辑todo
    editTodo=(todo)=>{
        let {todoDatas}=this.state;
        todoDatas=todoDatas.map(value=>{
            if(value.id==todo.id){
                value.title=todo.title;
            }
            return value;
        })
        this.setState({todoDatas});
    }
    render (){
        let {todoDatas}=this.state;
        let {delTodo,changeHasCompleted,editTodo}=this;
        let items=todoDatas.map(todo=>{
            return (
                <Item key={todo.id} todo={todo} delTodo={delTodo} 
                changeHasCompleted={changeHasCompleted} 
                editTodo={editTodo}/>
            )
        })

        return (
            <section className='todoapp'>
                <header className='header'>
                    <h1>Todos</h1>
                    <input type="text" className='new-todo' 
                    placeholder="what need to be done?" 
                    onKeyUp={this.addTodo}
                    />
                </header>
                <section className='main'>
                    <input type="checkbox" className='toggle-all' id="toggle-all"/>
                    <label htmlFor="toggle-all"></label>
                    <ul className='todo-list'>
                        {items}
                    </ul>
                </section>
                {/* <Footer/> */}
            </section>
        )
    }
}

