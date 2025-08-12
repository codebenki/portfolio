import { useState } from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const formatItem = (str: string): string => {
    if (str.length === 0) return str; // handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const sections = [
    "home",
    "projects",
    "experience",
    "resume",
    "contact",
  ];

  return (
    <Menubar className="sticky top-0 z-10 flex items-center justify-between p-4 md:rounded-b-4xl rounded-b-md rounded-t-none">
      <div className="px-4 font-extrabold text-xl bg-gradient-to-r from-[#4C0D73] to-[#A946E9] bg-clip-text text-transparent">
        KP
      </div>
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu />
      </div>

      <div className="hidden md:flex gap-4 px-4 text-[#4C0D73]">
        {sections.map((item, i) => (
          <MenubarMenu key={i}>
            <MenubarTrigger onClick={() => scrollToSection(item)}>
              {formatItem(item)}
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </div>

      {isMobileMenuOpen && (
        <div className="absolute right-0 top-8 bg-white p-2 w-max md:hidden rounded-b-md">
          {sections.map((item, i) => (
            <MenubarMenu key={i}>
              <MenubarTrigger onClick={() => scrollToSection(item)}>
                {formatItem(item)}
              </MenubarTrigger>
            </MenubarMenu>
          ))}
        </div>
      )}
    </Menubar>
  );
}
