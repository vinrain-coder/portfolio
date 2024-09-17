import Hero from "@/components/main/Hero";


export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden max-w-full"> 
      <div className="flex flex-col gap-4 w-full max-w-full px-4 md:px-10"> 
        <Hero/>
      </div>
    </main>
  );
}

