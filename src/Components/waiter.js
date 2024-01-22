import React,{useState} from 'react';
import Card from './Card/Card';
import './waiter.css'


const Waiter = (props) => {
    const [foofItem, setFoodItem] = useState('');
    const [price, setPrice] = useState('');
    const [table, setTable] = useState('Table1')

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
            
            <form onSubmit={waiterHandler}>
            <div className='food_description'>
                
                    <div className='food_description label'>
                        <label >Food Item</label>
                        <input type='text' onChange={foodChangeHandler} required></input>
                    </div>
                
                    <div className='food_description label'>
                        <label>Price</label>
                        <input type='number' onChange={priceChangeHandler} required></input>
                    </div>
                

                    <div className='food_description label'>
                        <label htmlFor="Table">Table No.</label>
                    </div>
                    <select name="Table" id="Table" onChange={tableHandler} >
                        <option value="Table1">Table 1</option>
                        <option value="Table2">Table 2</option>
                        <option value="Table3">Table 3</option>
                    </select><br></br>
                
                    <button type='submit'>Add Items</button>
                
                </div>
            </form>
           
            
        </Card>
    )
}

export default Waiter