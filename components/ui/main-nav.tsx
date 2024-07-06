"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
        <div style={{visibility:"hidden"}}>########################</div>
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <div style={{visibility:"hidden"}}>##########</div>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/explore"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/explore" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Explore
        </Link>
        <Link
          href="/problems"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/problems")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Problems
        </Link>
        <Link
          href="https://leetcode.com/contest/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contests")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Contests
        </Link>
        <Link
          href="https://leetcode.com/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/leetcode")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          LeetCode
        </Link>
      </nav>
    </div>
  )
}