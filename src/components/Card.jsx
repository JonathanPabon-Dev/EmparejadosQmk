import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Card = ({ itemId, itemState, onSelect, children }) => {
  const [state, setState] = useState("none");

  const handleClick = () => {
    setState(state === "none" ? "selected" : "none");
    onSelect(state === "none" ? itemId : null);
  };

  useEffect(() => {
    setState(itemState);
  }, [itemState]);

  return (
    <div
      className={`flex h-32 w-52 cursor-pointer items-center justify-center rounded-xl border-2 p-3 hover:border-sky-200 md:w-80 ${
        state === "selected"
          ? "border-sky-500 bg-sky-500 text-white"
          : state === "correct"
            ? "pointer-events-none border-green-500 bg-green-500 text-white"
            : state === "incorrect"
              ? "pointer-events-none border-red-600 bg-red-600 text-white"
              : "border-slate-300 bg-white"
      } `}
      onClick={handleClick}
    >
      <span className="max-h-full overflow-y-auto text-center">{children}</span>
    </div>
  );
};

Card.propTypes = {
  itemId: PropTypes.string,
  itemState: PropTypes.oneOf(["none", "selected", "correct", "incorrect"]),
  onSelect: PropTypes.func,
  children: PropTypes.node,
};

export default Card;
