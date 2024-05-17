import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { BoxIcon, ChevronDownIcon } from "lucide-react";

type SubProduct = {
  name: string;
  description: string;
  price: number;
  specs: string[];
  mainFeatures: string[];
  additionalFeatures: string[];
};

const Package = ({ data }: { data: SubProduct }) => {
  const { name, description, price, specs, mainFeatures, additionalFeatures } =
    data;

  const renderFeatures = (features: string[]) => (
    <ul className="list-disc pl-4">
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  );

  return (
    <Collapsible className="space-y-2 w-full">
      <CollapsibleTrigger className="flex w-full items-center justify-start gap-1 cursor-pointer">
        <BoxIcon className="h-4 w-4" />
        <div>{name}</div>
        <ChevronDownIcon className="w-5 h-5 transition-transform [&[data-state=open]]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-4 py-2 ransition-all duration-300 ease-in-out bg-gray-100 rounded-md dark:bg-gray-800 border border-primary mb-2">
          <p>
            <span className="font-medium">Price:</span> Rp.{price.toFixed(2)}
          </p>
          <p>{description}</p>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col ">
              <div>
                <span className="font-medium">Specs:</span>
              </div>
              {specs.length > 0 ? (
                <div className="mt-1">{renderFeatures(specs)}</div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  No Specs Provided
                </p>
              )}
            </div>
            <div className="">
              <span className="font-medium">Main Features:</span>
              <ul className="list-disc pl-4 mt-1">
                {mainFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="">
              <span className="font-medium">Additional Features:</span>
              {additionalFeatures.length > 0 ? (
                renderFeatures(additionalFeatures)
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  No Additional Features
                </p>
              )}
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Package;
