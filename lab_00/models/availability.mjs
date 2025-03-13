function Availability() {
    this.sizes = {
      R: 10, 
      M: 8,  
      L: 6,  
    };
  
    // Check if a size is available
    this.isAvailable = (size, quantity) => {
      return this.sizes[size] >= quantity;
    };
  
    // Reduce availability after an order
    this.reduceAvailability = (size, quantity) => {
      if (this.isAvailable(size, quantity)) {
        this.sizes[size] -= quantity;
        return true;
      }
      return false;
    };
  }