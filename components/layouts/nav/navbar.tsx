import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/index"

export function Navbar() {
  return (
    <nav className="sticky top-6 z-50 mx-auto mt-6 flex max-w-5xl items-center justify-between rounded-full bg-white px-8 py-4 shadow-sm ring-1 ring-gray-100">
      <Link
        href="/"
        className="text-foreground flex items-center gap-2 font-sans text-2xl font-medium tracking-tight"
      >
        <Image
          src="/logo/default-logo-road2events.webp"
          alt="Road2Events Logo"
          width={40}
          height={40}
          className="h-10 w-auto"
        />
        Road2
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        <Link
          href="/events"
          className="text-foreground/80 hover:text-foreground text-sm font-medium"
        >
          Events
        </Link>
        <Link
          href="/growth"
          className="text-foreground/80 hover:text-foreground text-sm font-medium"
        >
          Growth
        </Link>
        <Link
          href="/community"
          className="text-foreground/80 hover:text-foreground text-sm font-medium"
        >
          Community
        </Link>
        <button className="text-foreground/80 hover:text-foreground flex items-center gap-1 text-sm font-medium">
          More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      <Button className="rounded-full bg-blue-100 px-6 py-5 text-sm font-semibold text-blue-900 shadow-none hover:bg-blue-200">
        Become a Member
      </Button>
    </nav>
  )
}
