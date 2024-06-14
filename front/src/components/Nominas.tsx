// src/components/Payroll.tsx
import React from 'react';
import Employee from './Employee';

interface EmployeeData {
  name: string;
  document: string;
  bankAccount: string;
  week1: number;
  week2: number;
}

const employees: EmployeeData[] = [
  { name: 'Juan Pérez', document: '123456789', bankAccount: '000-123456789', week1: 500, week2: 600 },
  { name: 'Ana Gómez', document: '987654321', bankAccount: '000-987654321', week1: 700, week2: 800 },
  { name: 'Carlos López', document: '555555555', bankAccount: '000-555555555', week1: 550, week2: 650 },
];

const Payroll: React.FC = () => {
  return (
    <div className="payroll">
      <h1>Nómina de Personal</h1>
      {employees.map((employee, index) => (
        <Employee
          key={index}
          name={employee.name}
          document={employee.document}
          bankAccount={employee.bankAccount}
          week1={employee.week1}
          week2={employee.week2}
        />
      ))}
    </div>
  );
};

export default Payroll;
