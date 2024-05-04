/**
 * v0 by Vercel.
 * @see https://v0.dev/t/284RDRfAufo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CustomerCount() {
  return (
    <Card className="w-full col-span-2 lg:col-span-1 h-[30svh]">
      <CardHeader>
        <CardTitle className="text-center">Total Customers</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 py-2">
        <div className="text-4xl font-bold">12,345</div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center gap-2 bg-gray-100 p-4 rounded-md dark:bg-gray-800">
            <div className="text-2xl font-bold">3,456</div>
            <div className="text-gray-500 dark:text-gray-400">
              New Customers
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 bg-gray-100 p-4 rounded-md dark:bg-gray-800">
            <div className="text-2xl font-bold">8,889</div>
            <div className="text-gray-500 dark:text-gray-400">
              Returning Customers
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
