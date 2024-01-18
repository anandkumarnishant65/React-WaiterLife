import React,{useState, useEffect} from 'react';
import Waiter from './Components/waiter';
import './App.css';

function App() {
  const getLocalItem = () => {
    let lists = localStorage.getItem('list')
    if(lists){
      return JSON.parse(localStorage.getItem('list'))
    }
    else{
      return []
    }
  }

  const [waitersList, setWaitersList] = useState(getLocalItem())

  const waiterListHandler = (wFood, wPrice, wTable) => {


      setWaitersList((prevList)=>{
        return [...prevList, 
          { restaurantFood: wFood, 
            restaurantPrice: wPrice,
            restaurantTable: wTable,
            id: Math.random().toString()
          }]
      })
  }
  

  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(waitersList))
  },[waitersList])

  const deleteItem = (id) => {
    let items = JSON.parse(localStorage.getItem('list'));
    const filtered = items.filter(item => item.id !== id);
    localStorage.setItem('list', JSON.stringify(filtered))

    setWaitersList(filtered)
}

  return (
    <div className="App">
      <Waiter onAdd={waiterListHandler}/>

      <ul>
          {waitersList.map((user) => (
              <li key={user.id}>
                  {user.restaurantFood} {user.restaurantPrice}
                  <button onClick={()=>deleteItem(user.id)}>Delete</button>
              </li>
          ))}
            
        </ul>
    </div>
  );
}

export default App;
