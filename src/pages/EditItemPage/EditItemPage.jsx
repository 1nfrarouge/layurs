import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as clothingAPI from '../../utilities/clothing-api';

export default function EditItemPage({clothing, handleUpdate}) {
  const [formData, setFormData] = useState(clothing);
  const fileInputRef=useRef(useRef)

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
    await handleUpload()
    handleUpdate(clothing._id, formData)
    navigate('/my-closet')
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  }

async function handleUpload() {
    // Use FormData object to send the inputs in the fetch request
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    const imageData = new FormData();
    console.log(fileInputRef)
    imageData.append('photo', fileInputRef.current.files[0]);
    const newPhoto = await clothingAPI.uploadPhoto(imageData);
    console.log(newPhoto)
    formData.image = newPhoto.url
    console.log(formData)
    // setPhotos([newPhoto, ...photos]);
    // Clear the description and file inputs
    fileInputRef.current.value = '';
  }

  return (
<div>
  <h2>EDIT ITEM</h2>
  <form onSubmit={handleSubmit}>
    {/* Category Selection */}
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

    {/* Type Input */}
    <label>
      ITEM TYPE:
      <input type="text" name="type" value={formData.type} onChange={handleChange} />
    </label>

    {/* Brand Input */}
    <label>
      BRAND:
      <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
    </label>

    {/* Size Input */}
    <label>
      SIZE:
      <input type="text" name="size" value={formData.size} onChange={handleChange} />
    </label>

    {/* Color Input */}
    <label>
      COLOR:
      <input type="text" name="color" value={formData.color} onChange={handleChange} />
    </label>

    {/* Occasion Input */}
    <label>
      OCCASION:
      <input type="text" name="occasion" value={formData.occasion} onChange={handleChange} />
    </label>

    {/* Season Select */}
    <label>
      SEASON:
      <select name="season" value={formData.season} onChange={handleChange}>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="fall">Fall</option>
        <option value="winter">Winter</option>
      </select>
    </label>

    {/* Stored Input */}
    <label>
      STORED:
      <input type="text" name="stored" value={formData.stored} onChange={handleChange} />
    </label>

    {/* Image Upload */}
    <label>
      IMAGE:
      <input type="file" name="image" accept="image/*" ref={fileInputRef}/>
    </label>

    {/* Update Item Button */}
    <button type="submit">UPDATE ITEM</button>
  </form>
</div>
)}