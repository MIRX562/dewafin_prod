import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import BackButton from "./BackButton";
import Header from "./Header";

export default function ErrorCard() {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops! Something went wrong" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to Login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
}
