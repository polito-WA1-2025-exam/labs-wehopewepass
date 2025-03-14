
function OrderLog(order) {
    this.orders = []; 
  
    this.addOrder = (order) => {
      this.orders.push(order);
    };
  
    this.getAllOrders = () => {
      return this.orders;
    };
  
    this.getOrdersByUser = (userEmail) => {
      return this.orders.filter((order) => order.userEmail === userEmail);
    };
  }