import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";
import Header from "../header/Header";
import BackButton from "../loginBackButton/BackButton";

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
