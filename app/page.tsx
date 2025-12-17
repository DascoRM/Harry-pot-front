"use client";
import { Link } from "@heroui/link";
import {Button} from "@heroui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function redirectToHouse() {
    return router.push('/houses');
  }
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-8 md:space-y-14 justify-center">
        <h1 className="text-3xl md:text-7xl text-center">La gazette du sorcier</h1>
        <Button 
          onPress={()=> redirectToHouse()} 
          variant="ghost" 
          size="lg" 
          color="primary">Découvre ta maison</Button>
      </div>
    </main>
  );
}
