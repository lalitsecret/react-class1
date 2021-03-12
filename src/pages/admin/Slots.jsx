import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let a=state.slots
	let [ob1,setob1]=React.useState({name:""})
	let [ob2,setob2]=React.useState({id:0,name:""})

	const insert=e=>{
		e.preventDefault()
		a=[...a,{id:a.length+1,...ob1}]
		dispatch({type:"slots",payload:a})
	}
	const update=e=>{
		e.preventDefault()
		a=a.map(x=>x.id===ob2.id?ob2:x)
		dispatch({type:"slots",payload:a})

	}
	const edit=x=>{setob2(x)}
	const del=id=>{
		a=a.filter(x=>x.id!==id)
		dispatch({type:"slots",payload:a})
	}
	



	return <div className="wrapper">
		<form  onSubmit={insert}>
			<h3>new slots</h3>
			<input placeholder="name" value={ob1.name} onChange={e=>setob1({...ob1,name:e.target.value})} />
			<button>insert</button>
		</form>
		{ob2.id>0?<form  onSubmit={update}>
			<h3>edit slots</h3>
			<input placeholder="name" value={ob1.name} onChange={e=>setob1({...ob1,name:e.target.value})} />
			<button>update</button>
		</form>
		:null}
		<h2>All slots {a.length}</h2>
		<table cellPadding="10" cellSpacing="0">
			<thead>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				{a.map(x=>
					<tr>
						<td>{x.id}</td>
						<td>{x.name}</td>
						<td>
							<button onClick={e=>del(x.id)}><i className="fa fa-trash-o"></i></button>
							<button onClick={e=>edit(x)}><i className="fa fa-pencil"></i></button>
						</td>
					</tr>
					
				)}
			</tbody>
		</table>
	</div>
}
export default App