"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardHeading,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Badge } from "./ui/badge";
import Image from "next/image";

type HeaderItem =
  | string
  | { depth: number; header: string }
  | { index: number; header: string };

interface BookContent {
  name: string;
  ordinal?: {
    type: string;
    identifier?: string | number;
  };
  headers?: HeaderItem[];
}

interface Book {
  name: string;
  id: string;
  source: string;
  group: string;
  cover: { type: string; path: string };
  published: string;
  author: string;
  contents: BookContent[];
}

export default function BookViewer({ book }: { book: Book }) {
  return (
    <Carousel className="w-full max-w-xs overflow">
      <CarouselContent>
        <CarouselItem>
          <Card>
            <CardHeader>
              <CardHeading>
                <CardTitle>{book.name}</CardTitle>
              </CardHeading>
              <CardHeading>
                <CardTitle><Badge>{book.group}</Badge></CardTitle>
              </CardHeading>
              <CardHeading>
                <CardTitle>{book.published}</CardTitle>
              </CardHeading>
              <CardHeading>
                <CardTitle>{book.author}</CardTitle>
              </CardHeading>
            </CardHeader>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <Image
                src={`/${book.cover.path}`}
                alt={book.name}
                width={300}
                height={300}
              />
            </CardContent>
          </Card>
        </CarouselItem>
        {book.contents.map((section) => (
          <CarouselItem key={section.ordinal?.identifier || section.name}>
            <Card>
              <CardHeader>
                <CardHeading>
                  <CardTitle>{section.name}</CardTitle>
                </CardHeading>
                {section.ordinal && 
                <CardHeading>
                  <CardTitle><Badge shape="circle">{section.ordinal?.identifier}</Badge></CardTitle>
                </CardHeading>
                }
              </CardHeader>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                {
                  <ol>
                    {section.headers?.map((header) => (
                      <li key={header.toString()}>{header.toString()}</li>
                    ))}
                  </ol>
                }
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
