import dayjs from "dayjs"

function User(name,surname,email,date,address,authToken = null){

this.name = name
this.surname =  surname
this.email = email
this.date = dayjs(date).toDate()
this.address = address;
this.authToken = authToken; 
}

export default User