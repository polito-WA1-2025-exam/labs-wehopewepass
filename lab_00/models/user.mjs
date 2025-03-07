import dayjs from "dayjs"

function User(name,surname,email,date,address /* password,authToken*/){

this.name = name
this.surname =  surname
this.email = email
this.date = dayjs(date).toDate()

}

export default User