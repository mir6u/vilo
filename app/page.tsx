import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default async function Home() {
  return (
    <>
    
    <Sidebar/>
        <NavBar/>
      <main className="flex min-h-screen flex-col items-center justify-center p-20">
        <Hero />
      </main>
    </>
  );
}
