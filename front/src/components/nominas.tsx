const xlsx = require('xlsx');

const empleados = [
  {
    nombre_completo: "Juan Pérez",
    documento: "123456789",
    numero_cuenta: "0011223344",
    valor_semana_1: 500,
    valor_semana_2: 520
  },
  {
    nombre_completo: "María Gómez",
    documento: "987654321",
    numero_cuenta: "0011223345",
    valor_semana_1: 480,
    valor_semana_2: 500
  },
    {
        nombre_completo: "Carlos López",
        documento: "456789123",
        numero_cuenta: "0011223346",
        valor_semana_1: 510,
        valor_semana_2: 530
    }
];

const nómina = empleados.map(empleado => ({
  "Nombre Completo": empleado.nombre_completo,
  "Documento": empleado.documento,
  "Número de Cuenta": empleado.numero_cuenta,
  "Valor Devengado Semana 1": empleado.valor_semana_1,
  "Valor Devengado Semana 2": empleado.valor_semana_2,
  "Total Devengado": empleado.valor_semana_1 + empleado.valor_semana_2
}));

// Convertir el array a una hoja de cálculo
const hoja = xlsx.utils.json_to_sheet(nómina);

// Crear un libro de trabajo
const libro = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(libro, hoja, "Nómina");

// Guardar el archivo Excel
xlsx.writeFile(libro, "nómina.xlsx");

console.log("Archivo nómina.xlsx generado con éxito");