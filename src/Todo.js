import React, { useState } from 'react'
import { addTodo,delTodo } from './redux/actions';
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {RiDeleteBin6Line} from 'react-icons/ri'
import { Transition } from '@headlessui/react'


function Todo(props) {
	const auth = getAuth();
	const [user] = useAuthState(auth);

	const [inp,setInp] = useState("");

	const handleInpChange = (val) =>{
		setInp(val);
	}

	const myTodos = (data) => 
	{
		return data.map((item)=>
		{
			if(item.present == true)
			{
				return (<Transition as="div"
						class='md:bg-gray-200 bg-gray-600 rounded-xl p-1 m-2'
						show={true}
						appear={true}
						enter="transition-opacity duration-700"
						enterFrom="opacity-0"
						enterTo="opacity-100"
					>
						<div class='mx-5 flex justify-between'>
							{item.val}
							<button onClick={()=>{props.dispatch(delTodo(item.id))}}><RiDeleteBin6Line/></button>
						</div>
					</Transition>
				)
			}
		})
	}

	const handleButtonClick = () => {
		if(inp != ""){props.dispatch(addTodo(inp))};
		setInp("");
	}

	const handleSignOut = () => {
		signOut(auth).then(() => {
		}).catch((error) => {
		});
	}
	let a = 1;

  return (
    <div class='flex justify-center w-screen h-screen bg-gray-900'>
	    {user ? a = 2 : <Navigate to='/'/>}
	<Transition as="div"
		class="w-full md:w-1/2 md:bg-gray-700  bg-gray-800 md:h-fit h-full md:mt-20 p-2 md:rounded-2xl"
		show={true}
		appear={true}
		enter="transition-all duration-1000"
		enterFrom="transform translate-y-full"
		enterTo="transform translate-y-0"
	>
		<div class="flex justify-between h-10 mt-5">
			<input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 border-gray-300 rounded-md w-7/12 h-full text-lg p-2" 
				onChange={(e) => {handleInpChange(e.target.value)} } 
				value={inp}
			/>
			<button class=' w-1/3 bg-purple-400 rounded-xl p-2 h-full text-xl side-button'
				onClick={handleButtonClick}
			>Add Todo
			</button>
		</div>
		<h1 class = "text-xl w-full text-center text-slate-200 mt-3"> Todo List</h1>	
	    	<div class="flex-col p-2 text-lg">{myTodos(props.todos)}</div>	
		<div class="flex justify-center h-10 mt-5">
			<button class=' w-1/3 bg-purple-400 rounded-xl p-2 h-full text-xl side-button'
				onClick={()=>handleSignOut()}
			>Sign Out
			</button>
		</div>
	    </Transition>
    </div>
  )
}
const mapStateToProps = state => {
	return {
		todos:state.todos
	}
}



export default connect(mapStateToProps)(Todo)