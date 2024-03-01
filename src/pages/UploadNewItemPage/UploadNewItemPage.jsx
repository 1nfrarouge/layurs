import * as clothingAPI from '../../utilities/clothing-api'
import React, { useState, useRef } from 'react';

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
  })
  /*
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const submitItem = (e) => {

  };
*/
async function handleSubmit(evt) {
  evt.preventDefault()
  handleUpload()
  handleAddClothing(formData)
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
  formData.image=newPhoto.url
  console.log(newPhoto)
  // setPhotos([newPhoto, ...photos]);
  // Clear the description and file inputs
  fileInputRef.current.value = '';
}

  return (
    <div>
      <h2>NEW ITEM UPLOAD</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        {/* Category Select */}
        <label>
          CATEGORY:
          <select name="category" defaultValue={formData.category}>
            <option value="top">TOP</option>
            <option value="bottom">BOTTOM</option>
            <option value="one-piece">ONE PIECE</option>
            <option value="outerwear">OUTERWEAR</option>
            <option value="swim">SWIM</option>
            <option value="intimates">INTIMATES</option>
            <option value="accessory">ACCESSORY</option>
            <option value="jewelry">JEWELRY</option>
            <option value="footwear">FOOTWEAR</option>
          </select>
        </label>

        {/* Type Input */}
        <label>
          ITEM TYPE:
          <input type="text" name="type" defaultValue={formData.type}/>
        </label>

        {/* Brand Input */}
        <label>
          BRAND:
          <input type="text" name="brand" defaultValue={formData.brand}/>
        </label>

        {/* Size Input */}
        <label>
          SIZE:
          <input type="text" name="size" defaultValue={formData.size}/>
        </label>

        {/* Color Input */}
        <label>
          COLOR:
          <input type="text" name="color" defaultValue={formData.color}/>
        </label>

        {/* Occasion Input */}
        <label>
          OCCASION:
          <input type="text" name="occasion" defaultValue={formData.occasion}/>
        </label>

        {/* Season Select */}
        <label>
          SEASON:
          <select name="season" defaultValue={formData.season}>
            <option value="spring">SPRING</option>
            <option value="summer">SUMMER</option>
            <option value="fall">FALL</option>
            <option value="winter">WINTER</option>
          </select>
        </label>

        {/* Storage Input */}
        <label>
          STORED:
          <input type="text" name="stored" defaultValue={formData.stored} />
        </label>

        <input type="file" id="myFile" name="image" accept="image" ref={fileInputRef}/>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
