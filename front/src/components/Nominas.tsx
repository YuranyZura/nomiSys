import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { getEmpleadosByEmpresa } from "@/service/empleado";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/store/user";
import { getTareasByEmpleado } from "@/service/tarea";
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

const formSchema = z.object({
  empresa: z.string().nonempty({
    message: "Por favor, elija una empresa",
  }),
  empleado: z.string().nonempty({
    message: "Por favor, elija un empleado",
  }),
});



const Payroll: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      empresa: "",
      empleado: ""
    },
    mode: "onSubmit",
  });
  const empresas = useStore((state: any) => state.empresas);
  const [empleadosByEmpresa, setEmpleadosByEmpresa] = useState<any>([]);
  const getEmpleadosEmpresa = async () => {
    const idEmpresa = await empresas[0].id;
    const empleadosDB = await getEmpleadosByEmpresa(idEmpresa);
    setEmpleadosByEmpresa(empleadosDB);
  }

  useEffect(() => {
    getEmpleadosEmpresa()
  }, [])


  
  const generatePDF = (tareas) => {
    const doc = new jsPDF()
 // Agregar el título al documento
 doc.setFontSize(20);
 doc.text("Nóminas del Empleado", 15, 30);

  // Convertir los datos de las tareas a un formato que autoTable pueda entender
  const tableData = tareas.map(tarea => ([
    tarea.id,
    tarea.tarea,
    tarea.precio,
    tarea.fechaEntrega,
    tarea.nombreEmpleado,
  ]));

  // Agregar la fila de "Total" al final de la matriz
  const total = tareas.reduce((acc, tarea) => acc + tarea.precio, 0);
  tableData.push(['Total', '', '', '', total]);

// Or use javascript directly:
autoTable(doc, {
  startY: 40, 
  head: [['ID', 'Tarea', 'Precio', 'Fecha', 'Empleado']],
  body: tableData
})



doc.save('table.pdf')
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const tareasEmpleado = await getTareasByEmpleado(values.empleado);
    generatePDF(tareasEmpleado);
  }
  
  return (
    <div className="payroll w-full flex items-center justify-center">
      <Card className="max-w-screen-md">
        <CardHeader>
          <CardTitle>Formulario de Registro de Empleados</CardTitle>
        </CardHeader>
        <CardContent className="w-max">
        <Form {...form}>
            <form
              className="flex flex-col gap-4  w-max"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex gap-4 ">
                <div className="flex flex-col space-y-2">
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormControl>
                          <Select
                            {...field}
                            onValueChange={(value) =>{
                              form.setValue("empresa", value)
                              getEmpleadosEmpresa(value)
                            }
                            }
                          >
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Empresa" />
                            </SelectTrigger>
                            <SelectContent>
                              {empresas &&
                                empresas.map((empresa: any) => (
                                  <SelectItem
                                    value={empresa.id}
                                    key={empresa.id}
                                  >
                                    {empresa.nombreEmpresa}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                
                </div>
                <div className="flex flex-col space-y-2 w-44">
                  <FormField
                    control={form.control}
                    name="empleado"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormControl>
                          <Select
                            {...field}
                            onValueChange={(value) =>
                              form.setValue("empleado", value)
                            }
                          >
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Empleado" />
                            </SelectTrigger>
                            <SelectContent>
                            {empleadosByEmpresa &&
                                empleadosByEmpresa.map((empleado: any) => (
                                  <SelectItem
                                    value={empleado.id}
                                    key={empleado.id}
                                  >
                                    {empleado.nombreCompleto}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
             
                </div>
                <Button type="submit">Generar Nomina</Button>
              </div>
            </form>
          </Form>
          </CardContent>
       </Card>   
    </div>
  );
};

export default Payroll;
