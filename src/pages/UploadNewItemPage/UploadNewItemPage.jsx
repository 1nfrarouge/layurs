import React from 'react';

export default function UploadNewItemPage() {
  return (
    <div>
      <h2>NEW ITEM UPLOAD</h2>
      <form>
        {/* Category Select */}
        <label>
          CATEGORY:
          <select name="category">
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
          <input type="text" name="type" />
        </label>

        {/* Brand Input */}
        <label>
          BRAND:
          <input type="text" name="brand" />
        </label>

        {/* Size Input */}
        <label>
          SIZE:
          <input type="text" name="size" />
        </label>

        {/* Color Input */}
        <label>
          COLOR:
          <input type="text" name="color" />
        </label>

        {/* Occasion Input */}
        <label>
          OCCASION:
          <input type="text" name="occasion" />
        </label>

        {/* Season Select */}
        <label>
          SEASON:
          <select name="season">
            <option value="spring">SPRING</option>
            <option value="summer">SUMMER</option>
            <option value="fall">FALL</option>
            <option value="winter">WINTER</option>
          </select>
        </label>

        {/* Storage Input */}
        <label>
          STORED:
          <input type="text" name="stored" />
        </label>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
