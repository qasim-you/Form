import { useState } from "react";
import {FaTrashAlt} from 'react-icons/fa'
const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "item1",
    },
    {
      id: 2,
      checked: false,
      item: "item2",
    },
    {
      id: 3,
      checked: false,
      item: "item3",
    },
  ]);
const handleCheck = (id) =>{
  console.log(`key : {id}`);
}

  return <>



  <main>
    <ul>
        {items.map((item)=>(
            <li className="item" key={item.id}>
                <input type="checkbox"
                onChange={() => handleCheck(item.id)} checked ={item.checked} />
                <label>{item.item}</label>
                <FaTrashAlt role="button" tabIndex="0" />
     


            </li>
        ))}
    </ul>
  </main>
  
  </>;
};

export default Content;
