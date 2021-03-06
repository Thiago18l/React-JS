import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'#333',
            color: '#fff',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
   
    /* getStyle = () =>{
    // tipo 1;     
            if (this.props.todo.completed){
                return {
                    textDecoration: 'line-through'
                }    
            }else {
                return {
                    textDecoration: 'none'
                }
            }
        }*/
        markComplete = (e) =>{
            console.log(this.props);
        }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                 <p> <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }></input>
                     { title }
                     <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X
                         </button></p>
            </div>
        )
    }
}
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}
export default TodoItem;
