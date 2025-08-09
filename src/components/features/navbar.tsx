import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Navbar() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  const formatItem = (str: string): string => {
    if (str.length === 0) return str; // handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const sections = ['home', 'profile', 'experience', 'achievements', 'education', 'resume', 'contact']

  return (
    <Menubar className="sticky top-0 z-10 flex items-center justify-between p-4 rounded-b-xl rounded-t-none">
      <div className="px-4 font-extrabold text-xl bg-gradient-to-r from-[#4C0D73] to-[#A946E9] bg-clip-text text-transparent">KP</div>
      <div className="flex gap-4 px-4 text-[#4C0D73]">
        {sections.map((item) => (
          <MenubarMenu>
            <MenubarTrigger onClick={() => scrollToSection(item)}>{formatItem(item)}</MenubarTrigger>
          </MenubarMenu>
        ))}
      </div>
    </Menubar>
  )
}
