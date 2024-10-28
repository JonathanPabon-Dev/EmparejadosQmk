export const getDate = (format = "short") => {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth();
  const año = fechaActual.getFullYear();

  if (format === "short")
    return `${formatDayMonth(dia)}/${formatDayMonth(mes + 1)}/${año}`;

  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const diaSemana = dias[fechaActual.getDay()];

  return `${diaSemana} ${formatDayMonth(dia)} de ${meses[mes]} de ${año}`;
};

function formatDayMonth(number) {
  return number < 10 ? `0${number}` : number;
}
