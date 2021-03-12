import React from 'react'
import {Link} from 'react-router-dom'
function Header()
{
	return <header>
		<div className="item">
			<h1>Admin Panel</h1>
		</div>
		<div className="item">
			<Link to="/Admin/Index">Home</Link>
			<Link to="/Admin/Admin">Admin</Link>
			<Link to="/Admin/Faculty">Faculty</Link>
			<Link to="/Admin/Student">Student</Link>
			<Link to="/Admin/Courses">Courses</Link>
			<Link to="/Admin/Slots">Slots</Link>
			<Link to="/Admin/Batch">Batch</Link>
			<Link to="/Admin/Chart">Chart</Link>
			<Link to="/Admin/Graph">Graph</Link>
			<Link to="/Admin/Planner">Planner</Link>
			<Link to="/Admin/Logout">Logout</Link>
		</div>
		
	</header>
}
export default Header