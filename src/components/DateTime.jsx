import { useState, useEffect } from "react";

const DateTime = () => {
  const [fechaHora, setFechaHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFechaHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <h2 className="mt-2 text-center text-xl font-semibold text-blue-600">
        {fechaHora.toLocaleString()}
      </h2>
    </>
  );
};

DateTime.propTypes = {};

export default DateTime;
