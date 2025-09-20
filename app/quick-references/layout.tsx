import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const QuickReferencesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="m-3">
        <Navbar />
      </header>
      <main className="flex flex-grow flex-wrap justify-center items-center gap-1 m-3">
        {children}
      </main>
      <footer className="m-3">
        <Footer />
      </footer>
    </div>
  );
};

export default QuickReferencesLayout;
