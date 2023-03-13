import React,{useState,useEffect} from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';

export default function StockOperations() {
    const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/v1/app/stockop")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

    return (
        <>
        <main >
        <div className='right'>
        <div className='top'>
        <button id='menu-btn'>
          <span className="material-icons-sharp">menu</span>
        </button>
        <div className='profile'>
          <div className="info">
            <p> Hey, <b>Yassine</b></p>
            <small className="text-muted">Welcome Admin</small>
          </div>
          <div className='profile-photo'>
            <img src={profile_photo} className='profile-photo' alt='profile' />
          </div>
        </div>
      </div>
      <br />
      </div>
          <h1>Stock Data:</h1><hr />
    
          <div className="products">
          <table>
                <thead>
                    <tr>
                      <th>Nº</th>
                      <th>Entred date</th>
                      <th>Exited date</th>
                      <th>Label</th>
                      <th>Nº Product</th>
                      <th>Quantity</th>
                      <th>Quantity Consumed</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td>Order {order.orderName}</td>
                            <td>{order.price} DH</td>
                            <td>{order.quantity}</td>
                            <td>{order.Total}</td>
                            <td className={order.Status === "Pending"?"warning":"success"}>{order.Status}</td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
            </div>
        </main>
      </>
      )
}