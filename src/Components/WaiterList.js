import React from "react";
import Card from "./Card/Card";
import './WaiterList.css'


const WaiterList = (props) => {

    const deleteItem = (id) => {
        let items = JSON.parse(localStorage.getItem('list'));
        const filtered = items.filter(item => item.id !== id);
    
        props.sl(filtered)
    }
    return (
        <Card >
            <div >
            <ul>
                {props.wl.map((user) => (
                    <li key={user.id}>
                    <div >
                        <div className="rest_item"><h2>
                            {user.restaurantFood}{" "}
                            {user.restaurantPrice}{" "}
                            {user.restaurantTable}{' '}
                            <button onClick={()=>deleteItem(user.id)}>Delete</button></h2>
                        </div>
  
                    
                    </div>
                    </li>
                ))}
            
            </ul>
            </div>
        </Card>
    )
}

export default WaiterList;