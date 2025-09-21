import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
} from "@/components/ui/card";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import Books from "@/data/books.json";
import VariantRules from "@/data/variantrules.json";

const variantRules = VariantRules.variantrule;
const books = Books.book;

const RulesPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {variantRules.map((rule) => (
          <Card key={rule.name + rule.source}>
            <CardHeader>
              <CardHeading>
                <CardTitle>{rule.name}</CardTitle>
              </CardHeading>
              <CardToolbar>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={"sm"}
                    >{`${rule.source}`}</Button>
                  </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant={"ghost"} size={"sm"}>
                      {`p${rule.page}`}
                    </Button>
                  </TooltipTrigger>
                </Tooltip>
              </CardToolbar>
            </CardHeader>
            <CardContent>{rule.entries.flat().join(", ")}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RulesPage;
