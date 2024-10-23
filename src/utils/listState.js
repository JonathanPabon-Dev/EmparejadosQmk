export const listInitialState = (list, initialState) => {
  let tempList = [];
  list.forEach((item) => {
    tempList.push({ id: item.id, state: initialState });
  });

  return tempList;
};

export const listItemState = (list, itemId, newState) => {
  const index = list.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    list[index].state = newState;
  }

  return [...list];
};
