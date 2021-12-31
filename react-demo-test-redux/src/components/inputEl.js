import {Component} from 'react'
import { Input } from 'antd'
import {_bind} from '@/util'
import {CHANG_VAL} from '@/store/actionTypes'
import store from '@/store'

class inputEl extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        _bind(this,'handleChange')
        store.subscribe(this.updateChange)
    }
    updateChange = () =>{
      this.setState(store.getState())
    }
    handleChange = (e)=>{
        const action = {
            type: CHANG_VAL,
            value: e.target.value
        }
        store.dispatch(action)
    }
    render() { 
        const {inputVal} = this.state
        return (  
            <Input value={inputVal} onChange={this.handleChange}/>
        );
    }
}
 
export default inputEl;