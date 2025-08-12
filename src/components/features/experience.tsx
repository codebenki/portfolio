import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { FloatSection } from "./floatsection"

export function Experience() {
    const experience = [
        {
            title: "IT Intern",
            company: "Tingog Partylist",
            place: "Tacloban City",
            duration: "Jan 2025 - May 2025",
            description: "Developed and implemented simple API endpoints for the organization's internal tracking system. Collaborated with the IT team to ensure functionality, maintainability, and integration with existing tools.",
            technologies: ['PHP', 'Laravel', 'jQuery']
        },
        {
            title: "Payroll Encoder",
            company: "PopCom Office – Old Capitol",
            place: "Tacloban City",
            duration: "Jun 2022 – Jul 2022",
            description: "Accurately transferred employee payroll information from physical documents into the organization's digital payroll system, ensuring data consistency and confidentiality.",
            technologies: ['Microsoft Excel']
        }
    ]

    return (
        <div id="experience" className="px-4 py-8 flex flex-col items-center gap-10 scroll-mt-10">
            <FloatSection>
                <div className="text-4xl text-center font-semibold text-white flex flex-col gap-2">
                    <div>Experience</div>
                    <div className="text-xl">
                        My Journey as a Web Developer, building innovative solutions.
                    </div>
                </div>
            </FloatSection>

            <div className="flex flex-col gap-6 w-full">
                {experience.map((item, i) => (
                    <FloatSection key={i}>
                        <Card className="w-full max-w-2xl mx-auto">
                            <CardHeader>
                                <CardTitle className="text-[#421064] font-bold text-2xl">
                                    {item.title}
                                </CardTitle>
                                <CardDescription className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:items-center">
                                    <div className="text-xl font-semibold text-[#421064]">
                                        {item.company}
                                    </div>
                                    <div className="flex items-center gap-2 text-lg text-gray-800 font-semibold flex-wrap">
                                        <MapPin className="size-5" />
                                        <span>{item.place}</span>
                                        <Calendar className="size-5" />
                                        <span>{item.duration}</span>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="text-gray-600 font-medium">
                                    {item.description}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="text-gray-800 font-semibold text-md">
                                        Technologies:
                                    </div>
                                    <ul className="flex flex-wrap gap-2 text-sm font-medium">
                                        {item.technologies.map((tech, j) => (
                                            <li key={j} className="rounded-2xl border-2 border-gray-400 px-4 py-1">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </FloatSection>
                ))}
            </div>
        </div>
    )
}
