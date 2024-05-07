/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oYPzRDTtEVt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function ReportPage() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Comprehensive Reports
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto md:text-xl">
          Gain valuable insights into your business with our comprehensive
          reports. Explore a range of options to analyze your data and make
          informed decisions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="p-4 flex flex-col justify-between">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Sales Report</h2>
            <p className="text-gray-500">
              Dive deep into your sales data and uncover trends, insights, and
              opportunities for growth.
            </p>
          </CardContent>
          <CardFooter className="p-4">
            <Link href="#">
              <Button>View Report</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="p-4 flex flex-col justify-between">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Marketing Report</h2>
            <p className="text-gray-500">
              Analyze the effectiveness of your marketing campaigns and optimize
              your strategies.
            </p>
          </CardContent>
          <CardFooter className="p-4">
            <Link href="#">
              <Button>View Report</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="p-4 flex flex-col justify-between">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Customer Report</h2>
            <p className="text-gray-500">
              Understand your customer base, their behavior, and identify
              opportunities for growth.
            </p>
          </CardContent>
          <CardFooter className="p-4">
            <Link href="#">
              <Button>View Report</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="p-4 flex flex-col justify-between">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Inventory Report</h2>
            <p className="text-gray-500">
              Monitor your inventory levels, identify trends, and optimize your
              supply chain.
            </p>
          </CardContent>
          <CardFooter className="p-4">
            <Link href="#">
              <Button>View Report</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="p-4 flex flex-col justify-between">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Financial Report</h2>
            <p className="text-gray-500">
              Gain a comprehensive understanding of your financial performance
              and make data-driven decisions.
            </p>
          </CardContent>
          <CardFooter className="p-4">
            <Link href="#">
              <Button>View Report</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="p-4">
          <CardContent>
            <h2 className="text-xl fo flex flex-col justify-betweennt-semibold mb-2">
              User Engagement Report
            </h2>
            <p className="text-gray-500">
              Analyze user behavior, track engagement metrics, and optimize your
              user experience.
            </p>
          </CardContent>
          <CardFooter className="p-4">
            <Link href="#">
              <Button>View Report</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
