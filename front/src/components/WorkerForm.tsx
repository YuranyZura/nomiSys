import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

const WorkerForm = () => {
  return (
    <div className="bg-red-500 md:w-[95vw] md:h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Formulario de trabajador</CardTitle>
        </CardHeader>
        <CardContent>Contenido</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default WorkerForm;
