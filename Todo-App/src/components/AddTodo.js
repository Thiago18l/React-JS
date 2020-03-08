import React, { Component } from 'react'

export class AddTodo extends Component {
        state = {
            title: '',
        }
        onSubmit = (e) => {
                e.preventDefault();
                this.props.AddTodo(this.state.title);
                this.setState( {title: ''});
        }
        // Everything in the target is get by the input
        onChange = (e) => this.setState({[e.target.name]:e.target.value });

        render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input type='text' 
                style={{flex: '10', padding: '5px'}}
                name='title' 
                value={this.state.title}
                onChange={this.onChange}
                placeholder='Add todo...'
                ></input>
                <input type='submit' value='enviar'
                className='btn'
                style={{flex:'1'}}></input>
            </form>
        )
    }
}

export default AddTodo
