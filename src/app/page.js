import Image from "next/image";
import Link from "next/link";
import BlockWithStripes from "@/app/block-with-stripes";
import StripedDonut from "@/app/striped-donut";
import TriangleTransparentOffset from "@/app/triangle-transparent-offset";

export default function Home() {
    return (
        <>
            <div className="parallax__viewport">

                <div className="layer2">
                    <div className="float animation-delay-500">
                        <BlockWithStripes className="fixed sm:top-10 sm:left-1/3 left-0 top-10 rotate-[43deg]"/>
                    </div>
                    <div className="float animation-delay-100">
                        <BlockWithStripes className="fixed sm:top-72 sm:right-10 -right-48 top-52  rotate-[87deg]"/>
                    </div>
                    <div className="float animation-delay-750">
                        <BlockWithStripes className="fixed sm:left-3/4 sm:-top-40 left-72 -top-52 rotate-[-54deg]"/>
                    </div>
                    <div className="float animation-delay-600">
                        <BlockWithStripes className="fixed sm:-top-96 sm:left-1/3 top-36 left-44 rotate-[187deg]"/>
                    </div>
                    <div className="float animation-delay-200">
                        <BlockWithStripes className="fixed sm:left-10 sm:top-30 -left-32 top-10 rotate-2"/>
                    </div>
                    <div className="float animation-delay-400">
                        <BlockWithStripes className="fixed sm:left-64 sm:top-[850px] -left-1/4 -top-20 rotate-12"/>
                    </div>
                    <div className="float animation-delay-850">
                        <BlockWithStripes className="fixed sm:top-[550px] sm:-left-32 -top-40 -left-32 rotate-[80deg]"/>
                    </div>
                    <div className="float animation-delay-800">
                        <BlockWithStripes className="fixed sm:left-[750px] sm:top-[240px] -left-10 top-[500px] rotate-[180deg]"/>
                    </div>
                    <div className="float animation-delay-300">
                        <BlockWithStripes className="fixed sm:right-10 sm:top-1/2 -right-12 top-[500px] rotate-[140deg]"/>
                    </div>
                    <div className="float animation-delay-150">
                        <BlockWithStripes className="fixed sm:top-[755px] sm:left-96 bottom-0 top-[500px] rotate-[287deg]"/>
                    </div>
                    <div className="float animation-delay-250">
                        <BlockWithStripes className="fixed sm:-left-32 sm:top-20 -left-12 -top-[500px] rotate-[180deg]"/>
                    </div>
                </div>

                <div className=" flex justify-center items-center flex-col layer1">
                    <div className="sm:mt-96 mt-64"></div>
                    <div className="pt-30 sm:min-h-96 bg-[#1100bb] sm:w-1/3 w-3/4 rounded-xl">
                        {/*<div className="pt-30 sm:min-h-96 bg-transparent sm:w-1/3 w-3/4 rounded-xl border-2">*/}
                        <h1
                            className="text-center flex-initial
                                text-white mt-8
                                sm:text-7xl text-4xl text-with-red-shadow-no-gradient-very-long font-bold rounded
                                "
                        >Welcome!</h1>
                        <div className="text-center text-white sm:text-xl text-md mt-12">This site is under
                            construction! Join me
                            next week when my new site will be up and running! Thank
                            you!
                        </div>
                        <div className="text-center sm:mt-20 mt-5 mb-8">
                            <Link href={"https://github.com/J-L-C"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sm:h-10 sm:w-10 w-5 h-5 inline-block fill-[#28FF0F]"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </Link>
                            <Link href={"www.linkedin.com/in/jlcooper1"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sm:h-10 sm:w-10 w-5 h-5 inline-block ml-2 fill-[#28FF0F]"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}
