import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'

import './styles.css'

class Index extends React.Component{
    state = {
        todos: [
            {
                id: 1,
                title: 'Take out the trash',
                completed: false,
            },
            {
                id: 2,
                title: 'Time for a lunch',
                completed: true,
            },
            {
                id: 3,
                title: 'Meet the boss',
                completed: false,
            },
        ]
    }
    markComplete = (id)=>{
        this.setState({todos: this.state.todos.map(todo =>{
            if (todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        })});
    }
    //Delete Todos*
    delTodo = (id) =>{
        this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]})
    }
    //Add todos...
    AddTodo = (title) =>{
        const id = {
            id: 0
        }
        const newTodo = {
            id: id++,
            title: title,
            completed: false
        }
        this.setState({todos: [...this.state.todos, newTodo]});
    }
    render(){
        return (
            <div>
                <div className="container">
                <Header />
                <AddTodo AddTodo={this.AddTodo} />
                <Todo todos={ this.state.todos } markComplete={this.markComplete} delTodo={this.delTodo}/>    
                </div>
                
            </div>
        );
    }
}



ReactDOM.render(
    <Index />,
    document.getElementById('root')
);

