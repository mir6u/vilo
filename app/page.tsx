import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <Hero />
      </main>
    </>
  );
}
