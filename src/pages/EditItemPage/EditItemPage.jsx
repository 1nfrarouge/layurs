import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as clothingAPI from '../../utilities/clothing-api';
import './EditItemPage.css'

export default function EditItemPage({ clothing, handleUpdate }) {
  const [formData, setFormData] = useState(clothing);
  const fileInputRef = useRef(null);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleUpload();
      handleUpdate(clothing._id, formData);
      navigate('/my-closet');
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  }

  async function handleUpload() {
    const imageData = new FormData();
    imageData.append('photo', fileInputRef.current.files[0]);
    const newPhoto = await clothingAPI.uploadPhoto(imageData);
    formData.image = newPhoto.url;
    fileInputRef.current.value = '';
  }

  return (
    <div className="EditItemPage">
      <h2>EDIT ITEM</h2>
      <form className="EditItemForm" onSubmit={handleSubmit}>
        <div className="form-section">
          <label>
            CATEGORY:
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="one-piece">One Piece</option>
              <option value="outerwear">Outerwear</option>
              <option value="swim">Swim</option>
              <option value="intimates">Intimates</option>
              <option value="accessory">Accessory</option>
              <option value="jewelry">Jewelry</option>
              <option value="footwear">Footwear</option>
            </select>
          </label>
        </div>

        <div className="form-section">
          <label>
            ITEM TYPE:
            <input type="text" name="type" value={formData.type} onChange={handleChange} />
          </label>
        </div>

        <div className="form-section">
          <label>
            BRAND:
            <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
          </label>
        </div>

        <div className="form-section">
          <label>
            SIZE:
            <input type="text" name="size" value={formData.size} onChange={handleChange} />
          </label>
        </div>

        <div className="form-section">
          <label>
            COLOR:
            <input type="text" name="color" value={formData.color} onChange={handleChange} />
          </label>
        </div>

        <div className="form-section">
          <label>
            OCCASION:
            <input type="text" name="occasion" value={formData.occasion} onChange={handleChange} />
          </label>
        </div>

        <div className="form-section">
          <label>
            SEASON:
            <select name="season" value={formData.season} onChange={handleChange}>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
            </select>
          </label>
        </div>

        <div className="form-section">
          <label>
            STORED:
            <input type="text" name="stored" value={formData.stored} onChange={handleChange} />
          </label>
        </div>

        <div className="form-section">
          <label>
            IMAGE:
            <input type="file" name="image" accept="image/*" ref={fileInputRef} />
          </label>
        </div>

        <div className="form-section">
          <button type="submit">UPDATE ITEM</button>
        </div>
      </form>
    </div>
  );
}
