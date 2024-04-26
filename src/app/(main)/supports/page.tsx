import Loading from "@/app/loading";
import React, { Suspense } from "react";

type Props = {};

export default function SupportPage({}: Props) {
  return (
    <Suspense fallback={<Loading />}>
      <div>SupportPage</div>;
    </Suspense>
  );
}
