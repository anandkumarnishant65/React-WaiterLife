import React,{useState} from 'react';
import Card from './Card';

const Waiter = (props) => {
    const [foofItem, setFoodItem] = useState('');
    const [price, setPrice] = useState('');
    const [table, setTable] = useState('Table 1')

    const foodChangeHandler = (event) => {
        setFoodItem(event.target.value)
    }
    const priceChangeHandler = (event) => {
        setPrice(event.target.value)
    }
    const tableHandler = (event) => {
        setTable(event.target.value);
    }

    const waiterHandler = (event) => {
        event.preventDefault();
        console.log(foofItem,price,table)
        props.onAdd(foofItem, price,table)
        setFoodItem('')
        setPrice('')

    }

    
    return (
        <Card>
            <div>
            <form onSubmit={waiterHandler}>
                <label>Food Item</label>
                <input type='text' onChange={foodChangeHandler} required></input>
                <label>Price</label>
                <input type='number' onChange={priceChangeHandler} required></input>

                <label htmlFor="Table">Table No.</label>
                <select name="Table" id="Table" onChange={tableHandler} >
                    <option value="Table1">Table 1</option>
                    <option value="Table2">Table 2</option>
                    <option value="Table3">Table 3</option>
                </select>
                <button type='submit'>Add</button>
            </form>
           </div>
           <div>
                <div id="Table1"><h4><b>Table1</b></h4></div><hr></hr>
                <div id="Table2"><h4><b>Table2</b></h4></div><hr></hr>
                <div id="Table3"><h4><b>Table3</b></h4></div>
           </div>
            
        </Card>
    )
}

export default Waiter