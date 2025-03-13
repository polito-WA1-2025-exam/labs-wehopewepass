
function OrderLog() {
    this.orders = []; 
  
    // Add a new order to the log
    this.addOrder = (order) => {
      this.orders.push(order);
    };
  
    // Retrieve all orders
    this.getAllOrders = () => {
      return this.orders;
    };
  
    // Retrieve orders for a specific user (by email or user ID)
    this.getOrdersByUser = (userEmail) => {
      return this.orders.filter((order) => order.userEmail === userEmail);
    };
  }