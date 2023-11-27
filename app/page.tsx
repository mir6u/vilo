import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default async function Home() {
  return (
    <>
      <script async src="https://open.spotify.com/embed/iframe-api/v1"></script>
      <Sidebar />
      <NavBar />
      <main className="flex min-h-screen flex-col items-center lg:justify-center p-14 lg:p-20">
        <Hero />
      </main>
    </>
  );
}
