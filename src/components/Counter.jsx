import PropTypes from "prop-types";

const Counter = ({ correct, total }) => {
  return (
    <>
      <p className="mt-5 text-center text-2xl font-semibold text-slate-400">
        Puntuación:{" "}
        <span
          className={`${correct >= total * 0.6 ? "text-green-600" : "text-red-600"}`}
        >
          {correct}
        </span>
        /{total}
      </p>
    </>
  );
};

Counter.propTypes = {
  correct: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Counter;
