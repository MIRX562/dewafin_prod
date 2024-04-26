import Loading from "@/app/loading";
import React, { Suspense } from "react";

type Props = {};

export default function SettingsPage({}: Props) {
  return (
    <Suspense fallback={<Loading />}>
      <div>Setting page</div>
    </Suspense>
  );
}
