import { FloatSection } from "./floatsection";
import { Code2, Layers, Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Auto import ALL images in projects folder
const images = import.meta.glob("@/assets/images/projects/*", {
  eager: true,
  import: "default",
});

export function Projects() {
  const projects = [
    {
      name: "Indexing and Monitoring System",
      type: "Internal operations platform",
      description:
        "A document indexing and retrieval system paired with health monitoring for deployed servers across LGUs and RHUs.",
      impact:
        "Centralized official document tracking while giving the IT team faster visibility into server status and operational issues.",
      highlights: [
        "Searchable document records",
        "Server health monitoring",
        "Multi-site deployment visibility",
      ],
      technologies: ["Vue.js", "Supabase", "Vercel", "Tailscale", "Docker"],

      images: [
        images["/src/assets/images/projects/index-monit-1.png"],
        images["/src/assets/images/projects/index-monit-2.png"],
      ],
    },

    {
      name: "Enzar Company Website",
      type: "Company website",
      description:
        "A polished business website for Enzar with responsive layouts, multilingual-friendly structure, and Arabic RTL support.",
      impact:
        "Helped present the company's services clearly to both English and Arabic-reading visitors.",
      highlights: [
        "Responsive marketing pages",
        "Arabic RTL interface support",
        "Reusable content sections",
      ],
      technologies: ["Next.js", "Tailwind CSS", "RTL"],

      images: [
        images["/src/assets/images/projects/enzar-1.png"],
        images["/src/assets/images/projects/enzar-2.png"],
      ],
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-white px-4 py-16 scroll-mt-10 sm:px-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <FloatSection>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-800">
              <Sparkles className="size-4" />
              Selected work
            </div>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Featured Projects
            </h2>
            <p className="text-lg font-medium text-gray-600">
              Recent builds where I worked across interface design, backend
              logic, deployment, and practical workflows.
            </p>
          </div>
        </FloatSection>

        <div className="grid gap-8">
          {projects.map((item, i) => (
            <FloatSection key={i}>
              <Card className="overflow-hidden rounded-lg border-gray-200 bg-white py-0 shadow-lg transition duration-300 hover:shadow-2xl">
                <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                  <CardContent className="p-4 sm:p-6">
                    <Carousel
                      opts={{ align: "start", loop: true }}
                      className="group w-full"
                    >
                      <CarouselContent className="-ml-3">
                        {item.images.map((img, idx) => (
                          <CarouselItem key={idx} className="pl-3">
                            <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-sm">
                              <img
                                src={img as string}
                                alt={`${item.name} screenshot ${idx + 1}`}
                                className="aspect-video w-full object-cover object-top"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-3 border-white/70 bg-white/90 text-violet-800 shadow-md hover:bg-white disabled:hidden" />
                      <CarouselNext className="right-3 border-white/70 bg-white/90 text-violet-800 shadow-md hover:bg-white disabled:hidden" />
                    </Carousel>
                  </CardContent>

                  <div className="flex flex-col border-t border-gray-200 bg-gray-50/80 lg:border-l lg:border-t-0">
                    <CardHeader className="gap-4 p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-800">
                          <Layers className="size-4" />
                          {item.type}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                          <Code2 className="size-4" />
                          {item.technologies.length} tools
                        </span>
                      </div>

                      <div className="flex flex-col gap-3">
                        <CardTitle className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                          {item.name}
                        </CardTitle>
                        <CardDescription className="text-base font-medium leading-relaxed text-gray-600">
                          {item.description}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="flex flex-1 flex-col gap-5 p-6 pt-0">
                      <div className="rounded-lg border border-violet-100 bg-white p-4">
                        <div className="text-sm font-bold uppercase text-violet-800">
                          Project value
                        </div>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-gray-600">
                          {item.impact}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <div className="text-sm font-bold uppercase text-gray-800">
                          Highlights
                        </div>
                        <ul className="grid gap-2 text-sm font-medium text-gray-600">
                          {item.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2">
                              <span className="mt-2 size-2 shrink-0 rounded-full bg-violet-700" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-wrap gap-2 border-t border-gray-200 p-6">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-semibold text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </FloatSection>
          ))}
        </div>
      </div>
    </div>
  );
}
