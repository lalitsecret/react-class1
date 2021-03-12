import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let a=state.courses
	let [ob1,setob1]=React.useState({name:"",price:"",days:""})
	let [ob2,setob2]=React.useState({id:0,name:"",price:"",days:""})

	const insert=e=>{
		e.preventDefault()
		a=[...a,{id:a.length+1,...ob1}]
		dispatch({type:"courses",payload:a})
	}
	const update=e=>{
		e.preventDefault()
		a=a.map(x=>x.id===ob2.id?ob2:x)
		dispatch({type:"courses",payload:a})

	}
	const edit=x=>{setob2(x)}
	const del=id=>{
		a=a.filter(x=>x.id!==id)
		dispatch({type:"courses",payload:a})
	}
	



	return <div className="wrapper">
		<form  onSubmit={insert}>
			<h3>new courses</h3>
			<input placeholder="name" value={ob1.name} onChange={e=>setob1({...ob1,name:e.target.value})} />
			<input placeholder="price" value={ob1.price} onChange={e=>setob1({...ob1,price:e.target.value})} />
			<input placeholder="days" value={ob1.days} onChange={e=>setob1({...ob1,days:e.target.value})} />
			<button>insert</button>
		</form>
		{ob2.id>0?<form  onSubmit={update}>
			<h3>edit courses</h3>
			<input placeholder="name" value={ob1.name} onChange={e=>setob1({...ob1,name:e.target.value})} />
			<input placeholder="price" value={ob1.price} onChange={e=>setob1({...ob1,price:e.target.value})} />
			<input placeholder="days" value={ob1.days} onChange={e=>setob1({...ob1,days:e.target.value})} />
			<button>update</button>
		</form>
		:null}
		<h2>All courses {a.length}</h2>
		<table cellPadding="10" cellSpacing="0">
			<thead>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>price</th>
					<th>days</th>
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				{a.map(x=>
					<tr>
						<td>{x.id}</td>
						<td>{x.name}</td>
						<td>{x.price}</td>
						<td>{x.days}</td>
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