import { act } from 'react-dom/test-utils'
import {ADD_TODO,GET_TODO,DEL_TODO} from './actionTypes'
const initialState = {
	user:null,
	id:0,
	todos:[]
}

const reducer = (state = initialState,action) => {
	switch(action.type){
		case ADD_TODO: return {
			...state,
			id:state.id +1,
			todos:[...state.todos,{id:state.id,val:action.val,present:true}]
		}
		case DEL_TODO:
		return {
			...state,
			todos: state.todos.filter((item)=>{
				if(item.id != action.val) return item
			})
		}
		case GET_TODO: return state
		default: return state
	}
}
export default reducer