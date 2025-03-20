import dayjs from "dayjs";

function Order(pokebowls,timestamp,message){
//Add a user id
    this.pokebowls=pokebowls
    this.timestamp = timestamp
    this.message = message ? message : "No specifications"

    this.calculateAmount = ()=>{        

        let prices = pokebowls.map(a=>a.price)
        let total = prices.reduce((sum,obj)=>sum+obj,0)
    
        return total
    }

    this.totalAmount = this.calculateAmount()
    
 
}

export default Order