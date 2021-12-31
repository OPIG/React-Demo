import {Component} from 'react'
import InputEl from '@/components/inputEl'
import {Button } from 'antd'
import TodoList from '@/components/TodoList'
import store from '@/store'
import {_bind} from '@/util'
import { HANDLE_ADD_CLICK } from '../store/actionTypes'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        _bind(this, 'addItem')
    }

    addItem(){
        const {inputVal} = store.getState()
        if(inputVal) {
            const action = {
                type: HANDLE_ADD_CLICK
            }
            store.dispatch(action)
        }
    }
    render() { 
        return ( 
            <>
                <InputEl/>
                <Button type='primary' onClick={this.addItem}>add item</Button>
                <TodoList></TodoList>
            </>
         );
    }
}
 
export default Todo;