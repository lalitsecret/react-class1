const admin=[
	{id:1,name:"admin1",email:"admin1@gmail.com",password:"admin1"}
]
const faculty=[
	{id:1,name:"faculty1",email:"faculty1@gmail.com",password:"faculty1",phone:"456789",branch:"cse"},
	{id:2,name:"faculty2",email:"faculty2@gmail.com",password:"faculty2",phone:"456789",branch:"finance"},
	{id:3,name:"faculty3",email:"faculty3@gmail.com",password:"faculty3",phone:"456789",branch:"it"},
	{id:4,name:"faculty4",email:"faculty4@gmail.com",password:"faculty4",phone:"456789",branch:"it"},
	{id:5,name:"faculty5",email:"faculty5@gmail.com",password:"faculty5",phone:"456789",branch:"it"},
	{id:6,name:"faculty6",email:"faculty6@gmail.com",password:"faculty6",phone:"456789",branch:"civil"},
	{id:7,name:"faculty7",email:"faculty7@gmail.com",password:"faculty7",phone:"456789",branch:"civil"},
]
const student=[
	{id:1,name:"student1",email:"student1@gmail.com",password:"student1",phone:"456789",cid:"react"},
	{id:2,name:"student2",email:"student2@gmail.com",password:"student2",phone:"456789",cid:"tally"},
	{id:3,name:"student3",email:"student3@gmail.com",password:"student3",phone:"456789",cid:"php"},
	{id:4,name:"student4",email:"student4@gmail.com",password:"student4",phone:"456789",cid:"php"},
	{id:5,name:"student5",email:"student5@gmail.com",password:"student5",phone:"456789",cid:"php"},
	{id:6,name:"student6",email:"student6@gmail.com",password:"student6",phone:"456789",cid:"autocad"},
	{id:7,name:"student7",email:"student7@gmail.com",password:"student7",phone:"456789",cid:"autocad"},
]
const courses=[
	{id:1,name:"react",price:20000,days:45},
	{id:2,name:"php",price:20000,days:45},
	{id:3,name:"tally",price:20000,days:45},
	{id:4,name:"autocad",price:20000,days:45},
	{id:5,name:"autocad 3d",price:20000,days:45}
]

const slots=[
	{id:1,name:"8-9"},
	{id:2,name:"9-10"},
	{id:3,name:"10-11"},
	{id:4,name:"11-12"},
	{id:5,name:"12-1"},
	{id:6,name:"1-2"},
	{id:7,name:"2-4"},
	{id:8,name:"4-6"},
]
const batch=[
	{id:1,sid:"student1",cid:"react",fid:"faculty1",slot_id:"8-9",dt:"2021-03-12",p:0,reason:"",remarks:"",approved:""},
	{id:2,sid:"student1",cid:"react",fid:"faculty2",slot_id:"2-4",dt:"2021-03-12",p:0,reason:"",remarks:"",approved:""},
	{id:3,sid:"student1",cid:"react",fid:"faculty3",slot_id:"4-6",dt:"2021-03-12",p:0,reason:"",remarks:"",approved:""},
	{id:4,sid:"student1",cid:"react",fid:"faculty4",slot_id:"9-10",dt:"2021-03-12",p:0,reason:"",remarks:"",approved:""},
	{id:5,sid:"student1",cid:"react",fid:"faculty5",slot_id:"10-11",dt:"2021-03-12",p:0,reason:"",remarks:"",approved:""},
]






let data={
	admin,
	faculty,
	student,
	courses,
	slots,
	batch,
}

export default data