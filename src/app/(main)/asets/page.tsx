import Loading from "@/app/loading";
import { Suspense } from "react";

function AsetsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div>AsetsPage</div>
    </Suspense>
  );
}

export default AsetsPage;
