import { TypeAnimation } from "react-type-animation"
import picture from '../../assets/images/me_fan_art.png'
import { FloatSection } from './floatsection'

export function Home() {

    return (
        <>
            <div id="home" className="text-white gap-12 grid grid-cols-1 md:grid-cols-2 items-center w-full mx-auto px-10 sm:px-28 scroll-mt-10 min-h-screen">
                <div className="flex flex-col justify-center mx-auto max-w-2xl w-full">
                    <div className="my-12 flex flex-col gap-2">
                        <div className="text-5xl font-bold">Kevin Payos</div>
                        <div className="text-3xl font-medium">Web Developer</div>
                    </div>
                    <div className="h-48 overflow-hidden">
                        <TypeAnimation
                            sequence={[
                                'Passionate about creating beautiful, functional web applications.',
                                1000,
                                'Passionate about creating beautiful, functional web applications.\nBringing together innovative ideas and modern technologies to life.',
                                1000,
                                '',
                                300,
                            ]}
                            repeat={Infinity}
                            speed={50}
                            deletionSpeed={80}
                            className="text-xl font-medium whitespace-pre-line"
                        />
                    </div>
                </div>
                <FloatSection>
                    <div className="flex justify-center items-center">
                        <div className="max-h-7xl h-auto w-96 rounded-full overflow-hidden border-4 border-violet-800 shadow-lg">
                            <img src={picture} alt="picture" />
                        </div>
                    </div>
                </FloatSection>
            </div>
        </>
    )
}