import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function Login(props)
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let [ob,setob]=React.useState({email:"",password:""})
	return <div>
		<div className="login">
			<h3>Login user</h3>
			<p>Email</p>
			<input placeholder="email" value={ob.email} onChange={e=>setob({...ob,email:e.target.value})}/>
			<p>Password</p>
			<input placeholder="password" value={ob.password} onChange={e=>setob({...ob,password:e.target.value})}/>
			<button onClick={e=>login('admin')}>admin</button>
			<button onClick={e=>login('faculty')}>faculty</button>
			<button onClick={e=>login('student')}>student</button>
		</div>
	</div>
}
export default Login