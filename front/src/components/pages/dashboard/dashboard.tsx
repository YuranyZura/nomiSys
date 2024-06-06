import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import SideMenu from "../SideMenu";
import Header from "../Header/Header";

const dashboard = () => {
  return (
    <div className="w-full h-screen flex-row gap-5">
      <h1>Dashboard</h1>
      <div>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Building2 className="h-4 w-4" />
          <span className="sr-only">Empresa</span>
        </Button>
      </div>
      <div>
        <Header />
      </div>
      <div>
        <SideMenu />
      </div>
    </div>
  );
};

export default dashboard;
