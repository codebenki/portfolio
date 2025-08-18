import { Download } from "lucide-react"
import { Button } from "../ui/button"
import {
    Card,
    CardDescription,
    CardTitle,
    CardHeader,
    CardContent
} from "../ui/card"
import { FloatSection } from "./floatsection"

export function Resume() {
    const skills = {
        frontend: ["React", "jQuery", "Tailwind CSS", "HTML/CSS"],
        backend: ["PHP", "Laravel"],
        database: ["MySQL", "PostgreSQL"],
        tools: ["Git", "Postman", "VS Code"]
    }

    return (
        <div
            id="resume"
            className="w-full mx-auto bg-gray-100 flex flex-col items-center gap-6 p-6 scroll-mt-10"
        >
            <FloatSection>
                <div className="text-3xl text-center font-bold text-gray-800 flex flex-col">
                    <div>Skills and CV</div>
                </div>
                <div className="text-md text-gray-600 text-center max-w-xl font-medium">
                    A brief overview of my skills and a link to download my CV.
                </div>
            </FloatSection>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
                <div className="flex flex-col gap-8 flex-1 col-span-2">
                    <FloatSection>
                        <Card className="hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-gray-800 font-bold text-2xl">
                                    Professional Summary
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-600 text-md">
                                <span>
                                    Recent Information Technology graduate passionate about web development
                                    and eager to learn emerging technologies. Skilled in building responsive
                                    web applications and committed to continuous growth in the tech industry.
                                </span>
                            </CardContent>
                        </Card>
                    </FloatSection>
                    <FloatSection>
                        <Card className="hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-gray-800 font-bold text-2xl">
                                    Technical Skills
                                </CardTitle>
                                <CardDescription className="text-gray-600">
                                    Core technologies and tools I work with
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-6">
                                {Object.entries(skills).map(([category, techs]) => (
                                    <div key={category} className="flex flex-col gap-2">
                                        <div className="text-[#421064] font-semibold capitalize">
                                            {category}
                                        </div>
                                        <ul className="flex flex-wrap gap-2">
                                            {techs.map((tech, i) => (
                                                <li
                                                    key={i}
                                                    className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </FloatSection>
                </div>
                <div className="flex flex-col w-full md:w-[250px] col-span-1 gap-8">
                    <FloatSection>
                        <Card className="w-full h-max hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-gray-800 font-bold text-xl">
                                    <span>Download CV</span>
                                </CardTitle>
                                <CardDescription>
                                    Get a copy of my resume
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-6">
                                <a href="/Kevin_Payos_Resume.pdf" download>
                                    <Button className="text-white bg-violet-800 w-full">
                                        <Download className="mr-2 h-5 w-5" />
                                        Download
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    </FloatSection>
                    <FloatSection>
                        <Card className="w-full h-max hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-gray-800 font-bold text-2xl">
                                    Language
                                </CardTitle>
                                <CardDescription>
                                    Communication Skills
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-gray-800 text-md font-semibold space-y-1">
                                    <li>English</li>
                                    <li>Tagalog</li>
                                    <li>Waray - Waray</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </FloatSection>
                </div>
            </div>
        </div>
    )
}
