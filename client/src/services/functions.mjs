
export const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3000/order/fetchAll');
      const data = await response.json(); 
      return data;
    } catch (error) {
      console.error('Error fetching records:', error);
      return [];
    }
  };

export const fetchBowls = async () => {
    try {
      const response = await fetch('http://localhost:3000/bowls/fetchAll');
      const data = await response.json(); 
      return data;
    } catch (error) {
      console.error('Error fetching records:', error);
      return [];
    }
  };

  

  