import PropTypes from "prop-types";

const Counter = ({ correct, total }) => {
  return (
    <>
      <p className="mt-10 text-center text-2xl font-semibold">
        Puntuación:{" "}
        <span className={`${correct >= 6 ? "text-green-600" : "text-red-600"}`}>
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
