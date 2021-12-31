import {Component} from 'react'
import store from '@/store'
import {_bind} from '@/util'
import {HANDLE_DEL_CLICK } from '@/store/actionTypes'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        store.subscribe(()=>{
            this.setState(store.getState())
        })
        _bind(this, 'handleClick')
    }

    handleClick(id){
        const action = {
            type: HANDLE_DEL_CLICK,
            value: id
        }
        store.dispatch(action)
    }
    render() { 
        const {arrList} = this.state;
        return ( 
            <ul>
            {
                arrList.map((item, index) => {
                    return <li key={index} style={{userSelect:false}} onDoubleClick={()=>this.handleClick(index)}>{item}</li>
                })
            }
            </ul>
         );
    }
}
 
export default TodoList;