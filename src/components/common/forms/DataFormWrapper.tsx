import { Pencil } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Separator } from "../../ui/separator";

type Props = {
  title: string;
  children: React.ReactNode;
};

const DataFormWrapper = (props: Props) => {
  return (
    <Card className="w-full lg:w-[400px] shadow-md space-y-2 mx-2">
      <CardHeader className="flex flex-row items-center justify-center text-xl text-primary text-center font-bold space-y-0 space-x-2 p-4">
        <Pencil />
        <h1>{props.title}</h1>
      </CardHeader>
      <Separator />
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default DataFormWrapper;
