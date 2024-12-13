import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemLocation, setItemLocation] = useState('');

  const addItem = () => {
    if (itemName.trim() && itemLocation.trim()) {
      setItems([...items, { name: itemName, location: itemLocation }]);
      setItemName('');
      setItemLocation('');
    }
  };

  return (
    <div className="app">
      <h1>My Inventory App</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Item Location"
          value={itemLocation}
          onChange={(e) => setItemLocation(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <div className="inventory">
        <h2>Inventory List</h2>
        {items.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong>: {item.location}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
