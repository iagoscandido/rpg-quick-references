import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface ToolbarProps {
  title: string;
  source: string;
  content: string;
}

export const ToolBar = ({ ...props }: ToolbarProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">
          <Link
            href={`${props.source}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.title}
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{props.content}</TooltipContent>
    </Tooltip>
  );
};

export interface InfoCardProps {
  title: string;
  content: string;
  source: string;
  searchSource: string;
}

const InfoCard = ({ ...props }: InfoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardHeading>
          <CardTitle>{props.title}</CardTitle>
        </CardHeading>
        <CardToolbar>
          <ToolBar
            title={props.source}
            source={props.searchSource}
            content={"Ver mais..."}
          />
        </CardToolbar>
      </CardHeader>
      <CardContent>{props.content}</CardContent>
    </Card>
  );
};

export default InfoCard;
