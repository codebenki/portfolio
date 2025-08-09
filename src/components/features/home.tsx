import { TypeAnimation } from "react-type-animation"

export function Home() {

    return (
        <>
            <div id="home" className="text-white h-screen w-full flex flex-col justify-center p-10">
                <div className="my-12 flex flex-col gap-2">
                    <div className="text-5xl font-bold">Kevin Payos</div>
                    <div className="text-3xl font-medium">Software Developer</div>
                </div>
                <div className="relative w-full overflow-hidden min-h-32">
                    <TypeAnimation sequence={[
                        'Passionate about creating beautiful, functional web applications.',
                        1000,
                        'Passionate about creating beautiful, functional web applications.\nBringing together innovative ideas and modern technologies to life.',
                        1000,
                        '',
                        300
                    ]}
                        repeat={Infinity}
                        speed={50}
                        deletionSpeed={80}
                        className="text-xl font-medium whitespace-pre-line"
                        wrapper="span"
                    />
                </div>
            </div>
        </>
    )
}