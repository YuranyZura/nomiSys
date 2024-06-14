import {useParams} from "react-router-dom";

const Payroll = () => {
  
  const { id } = useParams(); 
  

  
  return (
    <div>
      Informacion de la empresa con id: { id }
    </div>
  )
}

export default Payroll;
