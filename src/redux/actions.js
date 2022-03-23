import {ADD_TODO,GET_TODO,DEL_TODO} from './actionTypes'

export const addTodo = (val) => {
	return({
		type:ADD_TODO,
		val:val
	})
}

export const delTodo = (id) => {
	return({
		type:DEL_TODO,
		val:id
	})
}

export const getTodo = () => {
	return ({
		type:GET_TODO
	})
}