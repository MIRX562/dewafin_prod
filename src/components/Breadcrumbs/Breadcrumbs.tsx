import { parseTitle } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

type BreadcrumbProps = {
  path: string;
};

const Breadcrumbs = ({ path }: BreadcrumbProps) => {
  const pathNames = path.split("/").filter((path) => path);
  return (
    <Breadcrumb className="m-1">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home Page</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.length > 0 && (
          <BreadcrumbSeparator className="text-primary font-bold" />
        )}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const linkName = parseTitle(
            link[0].toUpperCase() + link.slice(1, link.length),
          );
          const isLastPath = pathNames.length === index + 1;
          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {!isLastPath ? (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{linkName}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="font-extrabold">
                    {linkName}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {pathNames.length !== index + 1 && (
                <BreadcrumbSeparator className="text-primary font-bold" />
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
