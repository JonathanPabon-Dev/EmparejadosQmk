import PropTypes from "prop-types";
import Card from "./Card";

const ColumnCollection = ({
  itemsList,
  column = "A",
  onSelect,
  itemStateList,
}) => {
  return (
    <>
      <ul className="flex flex-col gap-5">
        {itemsList.map((item, index) => {
          const itemState = itemStateList.find(
            (stateItem) => stateItem.id === item.id,
          );
          const state = itemState ? itemState.state : null;

          return (
            <li key={index}>
              <Card itemId={item.id} onSelect={onSelect} itemState={state}>
                {column === "B" ? item.value2 : item.value1}
              </Card>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ColumnCollection.propTypes = {
  itemsList: PropTypes.array,
  column: PropTypes.oneOf(["A", "B"]),
  onSelect: PropTypes.func,
  itemStateList: PropTypes.arrayOf(PropTypes.object),
};

export default ColumnCollection;
