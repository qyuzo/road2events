import { Button } from "@/components/ui/index"

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center md:py-32">
      <h1 className="text-foreground max-w-4xl font-sans text-6xl leading-[1.1] font-normal tracking-tight md:text-7xl">
        USA&apos;s Most Connected
        <br />
        Tech Community
      </h1>

      <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
        Engage with leaders, exchange ideas, and build connections
        <br className="hidden md:inline" /> that unlock new opportunities.
      </p>

      <div className="mt-10">
        <Button
          size="lg"
          className="h-auto rounded-full bg-pink-200 px-8 py-4 text-base font-semibold text-pink-950 shadow-none hover:bg-pink-300"
        >
          See Upcoming Events
        </Button>
      </div>
    </section>
  )
}
