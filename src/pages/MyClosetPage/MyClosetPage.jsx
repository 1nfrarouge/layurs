import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as clothingAPI from '../../utilities/clothing-api';
import EditItemPage from '../EditItemPage/EditItemPage';
import ClothingItem from '../../components/ClothingItem/ClothingItem';
import './MyClosetPage.css';

export default function MyClosetPage() {
  const [closetItems, setClosetItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState(null); // Track the item being edited
  const navigate = useNavigate();

  async function getClosetItems() {
    try {
      const items = await clothingAPI.getAll();
      setClosetItems(items);
    } catch (err) {
      console.error("Error fetching closet items:", err);
    }
  }

  async function handleDelete(itemId) {
    try {
      await clothingAPI.deleteItem(itemId);
      setClosetItems(closetItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  useEffect(() => {
    getClosetItems();
  }, []);

  async function handleUpdate(id, data) {
    const updatedClothing = await clothingAPI.updateItem(id, data)
    const updatedClothes = closetItems.map(c => c._id === updatedClothing._id ? updatedClothing : c)
    setClosetItems(updatedClothes)
    setEdit(false);
    setEditItem(null);
  }

  return (
    <div>
      <h2>MY CLOSET</h2>
      <div className="closet-items-container">
        {closetItems.map((item, idx) => (
          <div className="clothing-item-card" key={item._id}>
            {edit && editItem === item._id ? (
              <EditItemPage handleUpdate={handleUpdate} clothing={item} />
            ) : (
              <ClothingItem
                handleDelete={handleDelete}
                setEdit={() => { setEdit(true); setEditItem(item._id); }}
                item={item}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
