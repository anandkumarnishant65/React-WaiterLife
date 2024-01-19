import React,{useState, useEffect} from 'react';
import Waiter from './Components/waiter';
import './App.css';
import WaiterList from './Components/WaiterList';

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

  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(waitersList))
  },[waitersList])

  
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
  

  return (
    <div className="App">
      <Waiter onAdd={waiterListHandler}/>
      <WaiterList wl={waitersList} sl={setWaitersList}/>
    </div>
  );
}

export default App;
