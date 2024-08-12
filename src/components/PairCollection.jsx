import { useState, useEffect, useCallback } from "react";
import { fetchItems } from "../utils/fetchItems";
import shuffleArray from "../utils/shuffleArray";
import { listInitialState, listItemState } from "../utils/listState";
import ColumnCollection from "./ColumnCollection";
import Counter from "./Counter";

const PairCollection = () => {
  const total = 5;
  const [correct, setCorrect] = useState(0);
  const [columnAitems, setColumnAitems] = useState([]);
  const [columnBitems, setColumnBitems] = useState([]);
  const [idA, setIdA] = useState(null);
  const [idB, setIdB] = useState(null);
  const [itemListA, setItemListA] = useState([]);
  const [itemListB, setItemListB] = useState([]);
  const [showRestart, setShowRestart] = useState(false);

  async function getItems() {
    const initialItems = await fetchItems(total);

    const shuffledItems = shuffleArray([...initialItems]);

    setItemListA(listInitialState(initialItems, "none"));
    setItemListB(listInitialState(shuffledItems, "none"));

    setColumnAitems(initialItems);
    setColumnBitems(shuffledItems);
  }

  const handleReset = () => {
    setCorrect(0);
    setIdA(null);
    setIdB(null);
    setItemListA([]);
    setItemListB([]);
    setColumnAitems([]);
    setColumnBitems([]);
    setShowRestart(false);
  };

  const handleSelectA = (id) => {
    if (idA) {
      setItemListA(listItemState(itemListA, idA, "none"));
    }
    setIdA(id);
    setItemListA(listItemState(itemListA, id, "selected"));
  };

  const handleSelectB = (id) => {
    if (idB) {
      setItemListB(listItemState(itemListB, idB, "none"));
    }
    setIdB(id);
    setItemListB(listItemState(itemListB, id, "selected"));
  };

  const compareIds = useCallback(() => {
    if (idA === idB) {
      setCorrect((prevCorrect) => prevCorrect + 1);
      setItemListA(listItemState(itemListA, idA, "correct"));
      setItemListB(listItemState(itemListB, idB, "correct"));
    } else {
      setItemListA(listItemState(itemListA, idA, "incorrect"));
      setItemListB(listItemState(itemListB, idB, "incorrect"));
    }
    setShowRestart(true);
    setIdA(null);
    setIdB(null);
  }, [idA, idB, itemListA, itemListB]);

  useEffect(() => {
    if (!showRestart) {
      getItems();
    }
  }, [showRestart]);

  useEffect(() => {
    if (idA && idB) {
      compareIds(idA, idB);
    }
  }, [idA, idB, compareIds]);

  return (
    <>
      <Counter correct={correct} total={total} />
      <div className="container mt-5 flex w-[60%] justify-between">
        <ColumnCollection
          itemsList={columnAitems}
          onSelect={handleSelectA}
          itemStateList={itemListA}
        />
        <ColumnCollection
          itemsList={columnBitems}
          column="B"
          onSelect={handleSelectB}
          itemStateList={itemListB}
        />
      </div>
      <button
        className={`mt-3 rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-blue-600 ${showRestart ? "block" : "hidden"}`}
        onClick={handleReset}
      >
        Reiniciar
      </button>
    </>
  );
};

export default PairCollection;
