import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      'Are you sure that you want top clear the list?'
    );
    if (!confirmed) return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form data={data} setData={setData} onAddItems={handleAddItems} />
      <PackingList
        data={data}
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
