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
      className={`cursor-pointer rounded-xl border-2 w-80 h-28 p-3 flex items-center justify-center hover:border-sky-200 ${
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
      <span className="text-center max-h-full overflow-y-auto">{children}</span>
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
