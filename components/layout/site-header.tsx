"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Container } from "./container";

const navItems = [
  { label: "특징", href: "#features" },
  { label: "시작하기", href: "#quickstart" },
  { label: "기술 스택", href: "#stack" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-sm">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent"
          >
            Starter Kit
          </a>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 데스크탑 CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-zinc-800">
              로그인
            </Button>
            <Button size="sm">시작하기</Button>
          </div>

          {/* 모바일 메뉴 */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-zinc-800 bg-zinc-900">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <SheetClose key={item.label} asChild>
                    <a
                      href={item.href}
                      className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <div className="flex flex-col gap-3 pt-6 border-t border-zinc-800">
                  <Button
                    variant="outline"
                    className="border-zinc-800 w-full"
                  >
                    로그인
                  </Button>
                  <Button className="w-full">시작하기</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
