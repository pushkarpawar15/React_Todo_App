import { createStore } from 'redux'
import reducer from './reducer';


export default function Store() {
	const store = createStore(reducer);
	return store;
}
