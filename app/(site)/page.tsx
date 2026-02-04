import { Navbar } from "@/components/layouts/nav/navbar"
import { Hero } from "@/components/pages/home/hero"

export default function HomePage() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
    </main>
  )
}
