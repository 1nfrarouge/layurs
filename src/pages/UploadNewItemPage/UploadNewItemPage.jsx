import * as clothingAPI from '../../utilities/clothing-api'
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadNewItemPage.css'

export default function UploadNewItemPage({handleAddClothing}) {
  const fileInputRef=useRef(useRef)
  // const [image, setImage]=useState(null)
  const [formData, setFormData]=useState({
    category: 'top',
    type: '',
    brand: '',
    size: '',
    color: '',
    occasion: '',
    season: 'spring',
    stored: '',
    image: '',
  });
  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault()
    await handleUpload()
    handleAddClothing(formData)
    navigate('/my-closet')
  }

  function handleChange(evt) {
    const data={...formData, [evt.target.name]:evt.target.value}
    setFormData(data)
  }

  async function handleUpload() {
    // Use FormData object to send the inputs in the fetch request
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    const imageData = new FormData();
    imageData.append('photo', fileInputRef.current.files[0]);
    const newPhoto = await clothingAPI.uploadPhoto(imageData);
    formData.image = newPhoto.url
    // setPhotos([newPhoto, ...photos]);
    // Clear the description and file inputs
    fileInputRef.current.value = '';
  }

  return (
    <div>
    <h2>NEW ITEM UPLOAD</h2>
    <form className="UploadNewItemForm" onSubmit={handleSubmit} onChange={handleChange}>
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
      <input type="file" name="image" accept="image/*" ref={fileInputRef} />
      <button type="submit">SUBMIT</button>
    </form>
  </div>
);
}