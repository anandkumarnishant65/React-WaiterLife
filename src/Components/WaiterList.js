import React from "react";
import Card from "./Card";


const WaiterList = (props) => {

    const deleteItem = (id) => {
        let items = JSON.parse(localStorage.getItem('list'));
        const filtered = items.filter(item => item.id !== id);
        localStorage.setItem('list', JSON.stringify(filtered))
    
        props.sl(filtered)
    }
    return (
        <Card>
            <ul>
                {props.wl.map((user) => (
                    <li key={user.id}>
                        {user.restaurantFood} {user.restaurantPrice}
                        <button onClick={()=>deleteItem(user.id)}>Delete</button>
                    </li>
                ))}
            
            </ul>
        </Card>
    )
}

export default WaiterList;