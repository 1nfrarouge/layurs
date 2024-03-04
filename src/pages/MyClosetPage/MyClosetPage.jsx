import React, { useState, useEffect } from 'react';
import * as clothingAPI from '../../utilities/clothing-api';

export default function MyClosetPage() {
    console.log('hello 2')
  const [closetItems, setClosetItems] = useState([]);

  async function getClosetItems() {
    console.log("Ran")
    try{
      const items = await clothingAPI.getAll();
    //  console.log(items)
      setClosetItems(items.data);
      console.log(items.data);
      }
      catch(err) {
          console.log(err)
      }
    //  setClosetItems(items);
  }

  useEffect(() => {
    

    getClosetItems();
  }, []);

  function MapItems() {
    return(
      closetItems.map((item) => {
        return(
        <div key={item.Key} className="closet-item">
            <img src={"https://layurs.s3.us-east-2.amazonaws.com/" + item.Key} alt={`Item uploaded on ${item.LastModified}`} style={{width: '100px', height: '100px'}} /> 
          </div>)
      })
    )
  }

  return (
    <div>
      <h2>MY CLOSET</h2>
      <div className="closet-items">
        <MapItems/>
      </div>
    </div>
  );
}
