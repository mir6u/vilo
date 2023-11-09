import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

export default async function Home() {
  return ( 
    <>
    <Sidebar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <Hero/>
      </main>
    </>
  );
}
