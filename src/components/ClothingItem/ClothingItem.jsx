export default function ClothingItem({item, setEdit, handleDelete}) {
    return (
        <>
        { item &&
        <div className="closet-item">
                <img src={item.image} alt={`Item uploaded`} style={{ width: '100px', height: '100px' }} />
                <p>CATEGORY: {item.category}</p>
                <p>TYPE: {item.type}</p>
                <p>BRAND: {item.brand}</p>
                <p>SIZE: {item.size}</p>
                <p>COLOR: {item.color}</p>
                <p>OCCASION: {item.occasion}</p>
                <p>SEASON: {item.season}</p>
                <p>STORED: {item.stored}</p>
                <button onClick={() => setEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
        }
        </>
    )
}