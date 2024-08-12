import itemsFile from "../json/items.json";

const fetchItems = (cantity) => {
  try {
    const items = [];
    const itemsLength = itemsFile.length;
    const indices = new Set();
    if (cantity > itemsLength) {
      throw new Error("Not enough items");
    }
    while (items.length < cantity) {
      const randomIndex = Math.floor(Math.random() * itemsLength);
      if (!indices.has(randomIndex)) {
        indices.add(randomIndex);
        items.push(itemsFile[randomIndex]);
      }
    }
    return items;
  } catch (error) {
    console.log(error);
  }
};

export default fetchItems;
