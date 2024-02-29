function esFechaValida(fecha) {
  // Verifica si el argumento es un objeto Date
  if (!(fecha instanceof Date)) return false;

  // Extrae los componentes de la fecha
  const anio = fecha.getFullYear();
  const mes = fecha.getMonth() + 1; // Sumamos 1 porque los meses comienzan desde 0
  const dia = fecha.getDate();

  const diaMaximoMes = new Date(anio, mes, 0).getDate();

  return (
    anio >= 0 && anio <= 9999 && // Años válidos
    mes >= 1 && mes <= 12 && // Meses válidos
    dia >= 1 && dia <= diaMaximoMes// Días válidos
  );
}

module.exports = esFechaValida;
