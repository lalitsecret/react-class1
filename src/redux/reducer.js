import data from './data'
const initialState={
	admin:data.admin,
	faculty:data.faculty,
	student:data.student,
	courses:data.courses,
	slots:data.slots,
	batch:data.batch,
	role:"",
	user:{},
	loggedin:false,
	col:"id",
	order:true,
	search:"",
	fid:"",
	sid:"",
	cid:"",
	slot_id:"",
	dt:"2021-03-12",
}

const reducer=(state=initialState,action) =>{
	switch(action.type)
	{
		case "admin":
			return {
				...state,
				admin:action.payload
			}
		case "faculty":
			return {
				...state,
				faculty:action.payload
			}
		case "student":
			return {
				...state,
				student:action.payload
			}
		case "courses":
			return {
				...state,
				courses:action.payload
			}
		case "slots":
			return {
				...state,
				slots:action.payload
			}
		case "batch":
			return {
				...state,
				batch:action.payload
			}
		case "fid":
			return {
				...state,
				fid:action.payload
			}
		case "sid":
			return {
				...state,
				sid:action.payload
			}
		case "cid":
			return {
				...state,
				cid:action.payload
			}
		case "slot_id":
			return {
				...state,
				slot_id:action.payload
			}
		case "dt":
			return {
				...state,
				dt:action.payload
			}
		case "login":
			return {
				...state,
				loggedin:true,
				role:action.role,
				user:action.user
			}	
		case "logout":
			return {
				...state,
				loggedin:false,
				role:"",
				user:{}
			}	
		default:
			return state
	}
}
export default reducer