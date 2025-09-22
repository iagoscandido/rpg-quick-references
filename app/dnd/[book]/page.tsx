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
      <pre>{JSON.stringify(book, null, 2)}</pre>
    </div>
  );
};

export default BooksPage;
