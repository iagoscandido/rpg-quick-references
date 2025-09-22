import { Suspense } from "react";
import BookViewer from "@/components/book-viewer";
import Books from "@/data/books.json";

const BooksPage = ({ params }: { params: { book: string } }) => {
  const param = params.book;
  const data = Books.book;

  const book = data.find((book) => book.id === param);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <Suspense>
        <BookViewer book={book} />
      </Suspense>
    </div>
  );
};

export default BooksPage;
