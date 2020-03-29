import React, { Component } from 'react';
import ListItem from './ListItem';
import NewItem from './NewItem';

class TodoList extends Component{
    constructor (props) {
        super(props);
        this.state = {
            todoList : [
                {content: 'React homework', done: true},
                {content: 'Show time', done: false}
            ]
        }
    }

    addNewItem = (newItemContent) => {
         //新的item与旧的拼接
         const newList = [...this.state.todoList, {content: newItemContent, done: false}];
         this.setState({
             todoList: newList
         })
    }
    render () {
        // const todoList = [
        //     {content: 'React homework', done: true},
        //     {content: 'Show time', done: false}
        // ];
        return (  
            <div>
                {
                    this.state.todoList.map(item => <ListItem item={item}/>)
                }
                <NewItem addItem= {this.addNewItem}/>
            </div>
            
        );
    }
}

export default TodoList;