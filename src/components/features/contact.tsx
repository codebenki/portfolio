import { FloatSection } from './floatsection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Contact() {
    const contact = [
        {
            type: 'Email',
            value: 'kevinbarret.payos@gmail.com',
            icon: <Mail className='size-6 text-violet-800' />,
            link: 'https://mail.google.com/mail/?view=cm&fs=1&to=kevinbarret.payos@gmail.com'
        },
        {
            type: 'LinkedIn',
            value: 'https://www.linkedin.com/in/kevin-payos/',
            icon: <Linkedin className='size-6 text-violet-800' />,
            link: 'https://www.linkedin.com/in/kevin-payos/'
        },
        {
            type: 'GitHub',
            value: 'https://github.com/codebenki',
            icon: <Github className='size-6 text-violet-800' />,
            link: 'https://github.com/codebenki'
        }
    ]

    return (
        <>
            <div id="contact" className="px-4 py-8 flex flex-col items-center gap-10 scroll-mt-10">
                <FloatSection>
                    <div className="text-4xl text-center font-semibold text-white flex flex-col gap-2">
                        <div>Get in touch</div>
                        <div className="text-xl text-gray-300">
                            I'm open to new opportunities and collaborations.
                        </div>
                    </div>
                </FloatSection>
                <FloatSection>
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-gray-800 font-bold text-2xl">
                                Let's Connect
                            </CardTitle>
                            <CardDescription className='text-sm font-medium text-gray-600'>
                                <span>
                                    Feel free to reach out for any inquiries, collaborations, or just to say hello! You can contact me via email or connect with me on LinkedIn.
                                </span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-gray-600 text-md flex gap-6 lg:flex-row flex-col">
                            {contact.map((item, i) => (
                                <a href={item.link}>
                                    <div key={i} className='flex items-center gap-4'>
                                        <div className='bg-violet-300 p-2 rounded-full'>
                                            {item.icon}
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='font-semibold text-gray-800'>{item.type}</span>
                                            <span className='font-medium'>{item.value}</span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </CardContent>
                    </Card>
                </FloatSection>
            </div>
        </>
    )
}