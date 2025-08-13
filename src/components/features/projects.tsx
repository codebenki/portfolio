import { FloatSection } from './floatsection'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle
} from "@/components/ui/card"

export function Projects() {
    const projects = [
        {
            name: 'Project One',
            description: 'A simple description of the project.',
            image: 'Image goes here'
        },
        {
            name: 'Project Two',
            description: 'Another description with some info.',
            image: 'Image goes here'
        },
        {
            name: 'Project Three',
            description: 'Yet another project being shown.',
            image: 'Image goes here'
        },
    ]

    return (
        <div id="projects" className="min-h-screen bg-white flex flex-col items-center gap-6 p-6 scroll-mt-10">
            <FloatSection>
                <div className="text-3xl font-bold text-center">
                    Featured Projects
                </div>
                <div className="text-md text-gray-600 text-center max-w-xl">
                    A showcase of my recent works and projects
                </div>
            </FloatSection>

            <FloatSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((item, i) => (
                        <Card key={i} className="w-full max-w-sm mx-auto">
                            <CardContent className="p-4 text-center">
                                <div className="mb-2 text-gray-400 italic">{item.image}</div>
                                <CardDescription className="text-gray-600">
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="justify-center">
                                <CardTitle className="text-lg font-semibold">
                                    {item.name}
                                </CardTitle>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </FloatSection>
        </div>
    )
}
