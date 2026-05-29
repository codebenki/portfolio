import { FloatSection } from "./floatsection";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      description:
        "An internal system built for official document storing and retrieval. Monitoring server health and data from deployed servers across LGUs and RHUs",

      images: [
        images["/src/assets/images/projects/index-monit-1.png"],
        images["/src/assets/images/projects/index-monit-2.png"],
      ],
    },

    {
      name: "Enzar Company Website",
      description:
        "A company website built for Enzar using NextJs and Tailwind CSS. Arabic RTL support enabled.",

      images: [
        images["/src/assets/images/projects/enzar-1.png"],
        images["/src/assets/images/projects/enzar-2.png"],
      ],
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-white flex flex-col items-center gap-6 p-6 scroll-mt-10"
    >
      <FloatSection>
        <div className="text-3xl font-bold text-center">Featured Projects</div>

        <div className="text-md text-gray-600 text-center max-w-xl">
          A showcase of my recent works and projects
        </div>
      </FloatSection>

      <FloatSection>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {projects.map((item, i) => (
            <Card key={i} className="w-[50vw] mx-auto">
              <CardTitle className="text-2xl font-medium text-center">
                {item.name}
              </CardTitle>
              <CardContent className="p-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {item.images.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <img
                          src={img as string}
                          alt={`${item.name} ${idx + 1}`}
                          className="w-full h-auto object-cover rounded-xl"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </CardContent>
              <CardFooter className="justify-center">
                <CardDescription className="text-gray-600 mt-4 text-lg font-medium text-center">
                  {item.description}
                </CardDescription>
              </CardFooter>
            </Card>
          ))}
        </div>
      </FloatSection>
    </div>
  );
}
