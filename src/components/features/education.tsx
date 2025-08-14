import { GraduationCap } from "lucide-react"
import { FloatSection } from "./floatsection"
import {
    Card,
    CardDescription,
    CardTitle,
    CardContent,
    CardHeader
} from '@/components/ui/card'
import picture from '../../assets/images/me_fan_pic2.png'

export function Education() {
    const experience = [
        {
            title: "Bachelor of Science in Information Technology",
            company: "ACLC College",
            place: "Tacloban City",
            duration: "2021 - 2025",
            description: "Comprehensive foundation in Web Development and Database.",
            achievements: ["Dean's List", "Best in Javascript"]
        }
    ]

    return (
        <>
            <div id="education" className="min-h-screen px-4 py-8 flex flex-col items-center gap-10 scroll-mt-10">
                <FloatSection>
                    <div className="text-4xl text-center font-semibold text-white flex flex-col gap-2">
                        <div>Education</div>
                        <div className="text-lg text-gray-300">
                            My educational and personal journey in technology and software development.
                        </div>
                    </div>
                </FloatSection>
                <div className="flex flex-col gap-6 w-full">
                    {experience.map((item, i) => (
                        <FloatSection key={i}>
                            <Card className="w-full max-w-3xl mx-auto bg-transparent">
                                <CardHeader>
                                    <CardTitle className="text-white font-bold text-2xl flex items-center gap-2">
                                        <GraduationCap />
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:items-center">
                                        <div className="text-xl flex flex-col font-semibold text-white">
                                            {item.company}
                                            <span>{item.place}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-lg text-white font-semibold flex-wrap">
                                            <span>{item.duration}</span>
                                        </div>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-4">
                                    <div className="text-gray-300 font-medium">
                                        {item.description}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-gray-300 font-semibold text-md">
                                            Achievements:
                                        </div>
                                        <ul className="flex flex-wrap gap-2 text-sm font-medium text-gray-300">
                                            {item.achievements.map((item, j) => (
                                                <li key={j} className="rounded-2xl border-2 border-gray-400 px-4 py-1">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </FloatSection>
                    ))}
                    <FloatSection>
                        <div className="flex justify-center items-center">
                            <div className="max-h-7xl h-auto w-96 rounded-full overflow-hidden border-4 border-violet-800 shadow-lg">
                                <img src={picture} alt="picture" />
                            </div>
                        </div>
                    </FloatSection>
                </div>
            </div>
        </>
    )
}