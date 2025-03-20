function Availability(size,quantity) {
    this.sizes = {
      R: 10, 
      M: 8,  
      L: 6,  
    };
  
    this.isAvailable = (size, quantity) => {
      return this.sizes[size] >= quantity;
    };
  
    this.reduceAvailability = (size, quantity) => {
      if (this.isAvailable(size, quantity)) {
        this.sizes[size] -= quantity;
        return true;
      }
      return false;
    };
  }
