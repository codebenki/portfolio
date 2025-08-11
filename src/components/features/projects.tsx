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
            name: 'project name',
            description: 'description',
            image: 'image goes here'
        },
        {
            name: 'project name',
            description: 'description',
            image: 'image goes here'
        },
        {
            name: 'project name',
            description: 'description',
            image: 'image goes here'
        },
    ]

    return (
        <>
            <div id="projects" className="h-[50vh] bg-white flex flex-col items-center gap-4 p-4 text-center">
                <FloatSection>
                    <div className="text-2xl font-semibold">
                        Featured Projects
                    </div>
                    <div className="font-medium">
                        A showcase of my recent works and projects
                    </div>
                </FloatSection>
                <FloatSection>
                    <div className='flex items-center justify-between gap-4 '>
                        {projects.map((item) => (
                            <Card>
                                <CardContent>
                                    {item.image}
                                    <CardDescription>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <CardTitle>
                                        {item.name}
                                    </CardTitle>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </FloatSection>
            </div >
        </>
    )
}