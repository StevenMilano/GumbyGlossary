import GlossaryFilter from "./components/GlossaryFilter";
import Term from "./components/Term";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div id="glossary-header">
        <h1>Gumby Glossary</h1>
        <GlossaryFilter  />
        <SearchBar defaultValue={null} />
        </div>
        <div id="glossary-space">
          <Term  />
        </div> 
      </main>
      <footer className="flex justify-center">
        <Footer />
      </footer>
    </>
  );
}
