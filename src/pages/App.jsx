import React from 'react'
import Login from './Login'
import Admin from './admin/App'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
function App()
{
	return <BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/admin/:x" component={Admin} />
		</Switch>
	</BrowserRouter>
}
export default App