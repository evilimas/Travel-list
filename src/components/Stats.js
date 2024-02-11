export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Add some items to see your packing list! 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const procentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {procentage === 100
          ? 'You got everything! Ready to go ✈'
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${procentage}%)`}
      </em>
    </footer>
  );
}
