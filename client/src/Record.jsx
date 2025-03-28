import React, { useEffect, useState } from 'react';
import { fetchBowls, fetchOrders } from './services/functions.mjs';

const RecordsTable = () => {
  const [orders, setOrders] = useState([]);
  const [bowls, setBowls] = useState([])  

  useEffect(() => {
      const getData = async () => {
      const orderData = await fetchOrders();
      
      const bowlData = await fetchBowls()

      setOrders(orderData);
      setBowls(bowlData);

    };

    getData();
  }, []); 

  return (
    <div className="container mt-4">
      <h2>Order Records</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>TimeStamp</th>
            <th>Message</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((orders) => (
            <tr key={orders.id}>
              <td>{orders.id}</td>
              <td>{orders.timestamp}</td>
              <td>{orders.message}</td>
              <td>{orders.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
          <br></br>
          <br></br>
          <h2>Poke Bowl Records</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Size</th>
            <th>Base</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {bowls.map((bowls) => (
            <tr key={bowls.id}>
              <td>{bowls.id}</td>
              <td>{bowls.size}</td>
              <td>{bowls.base}</td>
              <td>{bowls.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default RecordsTable;
