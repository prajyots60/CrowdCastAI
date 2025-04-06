"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Brain, ChevronDown, LineChart, PiggyBank, BookOpen, Info } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

const navItems = [
  {
    name: "Predictor",
    href: "/predictor",
    icon: <Brain className="h-4 w-4" />,
  },
  {
    name: "Estimator",
    href: "/estimator",
    icon: <PiggyBank className="h-4 w-4" />,
  },
  {
    name: "Insights",
    href: "/insights",
    icon: <LineChart className="h-4 w-4" />,
  },
  {
    name: "Learn",
    href: "/learn",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    name: "About",
    href: "/about",
    icon: <Info className="h-4 w-4" />,
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6" />
            <span className="font-bold text-xl">CrowdCast AI</span>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary relative",
                  pathname === item.href ? "text-foreground" : "text-foreground/60",
                )}
              >
                <span className="flex items-center gap-1">
                  {item.icon}
                  {item.name}
                </span>
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="md:hidden flex-1 flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                Menu <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="ml-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

