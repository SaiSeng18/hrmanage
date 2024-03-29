import Header from "@/components/header";
import Image from "next/image";
import { FaRegLightbulb } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { LuLineChart } from "react-icons/lu";
import { VscSync } from "react-icons/vsc";

export default function Home() {
    return (
        <main>
            <section className="relative min-h-screen px-20 md:px-5">
                <Header />
                <Image
                    src="/assets/images/hero.png"
                    alt="Hero Image"
                    width={2000}
                    height={1500}
                    className="-z-10 h-full w-full bg-center object-contain"
                />
                <div className="absolute bottom-20 left-20 md:bottom-5 md:left-5">
                    <p className="mb-10 text-7xl font-medium lg:text-5xl md:text-4xl">
                        Maximizing the <br /> potential of your <br /> employees
                    </p>

                    <div className="flex gap-5 md:text-sm">
                        <button className="rounded-full border-2 border-black px-10 py-4 font-medium md:px-5 md:py-2">
                            Start for free
                        </button>
                        <button className="rounded-full border-2 border-primary bg-primary px-10 py-4 font-medium text-gray-custom md:px-5 md:py-2">
                            Start for free
                        </button>
                    </div>
                </div>

                <p className="absolute right-20 top-40 font-medium md:hidden">
                    Hrmanage supports your team <br /> inside your company,
                    equips your <br />
                    staff with self-service capabilities, <br /> and foster
                    interpersonal
                    <br />
                    connections between them.
                </p>
            </section>

            <section className="flex-center flex-col gap-10 p-20 md:p-5">
                <p className="text-center text-lg font-medium">
                    +8,000 businesses uses form-carry for their forms
                </p>
                <div className="flex-center flex-wrap gap-x-24 gap-y-5">
                    <Image
                        src="/assets/images/company/coinbase.svg"
                        alt="Company Logo"
                        width={100}
                        height={100}
                        className="object-contain grayscale duration-300 hover:grayscale-0"
                    />

                    <Image
                        src="/assets/images/company/dropbox.svg"
                        alt="Company Logo"
                        width={100}
                        height={100}
                        className="object-contain grayscale duration-300 hover:grayscale-0"
                    />

                    <Image
                        src="/assets/images/company/slack.svg"
                        alt="Company Logo"
                        width={100}
                        height={100}
                        className="object-contain grayscale duration-300 hover:grayscale-0"
                    />

                    <Image
                        src="/assets/images/company/wix.svg"
                        alt="Company Logo"
                        width={100}
                        height={100}
                        className="object-contain grayscale duration-300 hover:grayscale-0"
                    />

                    <Image
                        src="/assets/images/company/zoom.svg"
                        alt="Company Logo"
                        width={100}
                        height={100}
                        className="object-contain grayscale duration-300 hover:grayscale-0"
                    />
                </div>
            </section>

            <section className="flex-center min-h-screen w-full flex-col p-20 md:p-5">
                <p className="mb-10 text-center text-6xl lg:text-3xl">
                    The older
                    <span className="text-secondary">
                        HR <br /> software
                    </span>
                    is ineffective. <br /> Why Hrmanage?
                </p>
                <p className="mb-20 text-center font-medium md:text-sm">
                    Hrmanage supports your team inside your company, equips your
                    staff with self-service <br />
                    capabilities, and fosters interpersonal connections between
                    them.
                </p>

                <div className="flex w-full flex-wrap justify-center gap-5">
                    <div className="group flex h-[600px] min-w-[300px] flex-1 flex-col justify-between rounded-[40px] bg-gray-custom p-10 transition-all duration-300 ease-in-out hover:flex-2 hover:bg-secondary 2xl:h-[400px] 2xl:p-5 lg:gap-5 lg:rounded-3xl">
                        <FaRegLightbulb
                            size={50}
                            className="group-hover:text-white"
                        />

                        <p className="max-w-[200px] text-5xl capitalize duration-300 ease-in-out group-hover:text-white 2xl:text-3xl lg:max-w-full">
                            Focusing on the job is more important.
                        </p>
                        <p className="mb-5 max-w-[300px] opacity-0 transition-all duration-300 ease-in-out group-hover:text-white group-hover:opacity-100 lg:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>

                        <button className="w-fit rounded-full border border-gray-400 px-10 py-4 transition-all duration-300 ease-in-out group-hover:border-white group-hover:text-white">
                            Simplicity
                        </button>
                    </div>

                    <div className="group flex h-[600px] min-w-[300px] flex-1 flex-col justify-between rounded-[40px] bg-gray-custom p-10 transition-all duration-300 ease-in-out hover:flex-2 hover:bg-secondary 2xl:h-[400px] 2xl:p-5 lg:gap-5 lg:rounded-3xl">
                        <VscSync size={50} className="group-hover:text-white" />
                        <p className="max-w-[200px] text-5xl capitalize duration-300 ease-in-out group-hover:text-white 2xl:text-3xl lg:max-w-full">
                            One system for all your business.
                        </p>
                        <p className="mb-5 max-w-[300px] opacity-0 transition-all duration-300 ease-in-out group-hover:text-white group-hover:opacity-100 lg:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>

                        <button className="w-fit rounded-full border border-gray-400 px-10 py-4 transition-all duration-300 ease-in-out group-hover:border-white group-hover:text-white">
                            Flexibility
                        </button>
                    </div>

                    <div className="group flex h-[600px] min-w-[300px] flex-1 flex-col justify-between rounded-[40px] bg-gray-custom p-10 transition-all duration-300 ease-in-out hover:flex-2 hover:bg-secondary 2xl:h-[400px] 2xl:p-5 lg:gap-5 lg:rounded-3xl">
                        <IoPersonOutline
                            size={50}
                            className="group-hover:text-white"
                        />
                        <p className="max-w-[250px] text-5xl capitalize duration-300 ease-in-out group-hover:text-white 2xl:text-3xl lg:max-w-full">
                            You can hire the best one for the company.
                        </p>
                        <p className="mb-5 max-w-[300px] opacity-0 transition-all duration-300 ease-in-out group-hover:text-white group-hover:opacity-100 lg:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>

                        <button className="w-fit rounded-full border border-gray-400 px-10 py-4 transition-all duration-300 ease-in-out group-hover:border-white group-hover:text-white">
                            Talents
                        </button>
                    </div>

                    <div className="group flex h-[600px] min-w-[300px] flex-1 flex-col justify-between rounded-[40px] bg-gray-custom p-10 transition-all duration-300 ease-in-out hover:flex-2 hover:bg-secondary 2xl:h-[400px] 2xl:p-5 lg:gap-5 lg:rounded-3xl">
                        <LuLineChart
                            size={50}
                            className="group-hover:text-white"
                        />
                        <p className="max-w-[200px] text-5xl capitalize duration-300 ease-in-out group-hover:text-white 2xl:text-3xl lg:max-w-full">
                            Productivity goes up to 80% in quality.
                        </p>
                        <p className="mb-5 max-w-[300px] opacity-0 transition-all duration-300 ease-in-out group-hover:text-white group-hover:opacity-100 lg:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>

                        <button className="w-fit rounded-full border border-gray-400 px-10 py-4 transition-all duration-300 ease-in-out group-hover:border-white group-hover:text-white">
                            Productivity
                        </button>
                    </div>
                </div>
            </section>

            <section className="flex-center min-h-screen flex-col p-20 md:p-5">
                <p className="mb-10 text-center text-6xl lg:text-3xl">
                    Empower
                    <span className="text-primary">employees</span>
                    <br />
                    and automate with HR
                    <br /> management.
                </p>
                <div className="mb-20 flex flex-wrap items-center rounded-full border-2 border-gray-300 lg:rounded-3xl lg:px-10 lg:py-5">
                    <div className="flex-center tab-anim relative h-[70px] text-nowrap rounded-full px-10 duration-300 hover:text-white">
                        Time and attendance
                    </div>
                    <div className="flex-center tab-anim relative h-[70px] text-nowrap rounded-full px-10 duration-300 hover:text-white">
                        Brainstorming
                    </div>
                    <div className="flex-center tab-anim relative h-[70px] text-nowrap rounded-full px-10 duration-300 hover:text-white">
                        Employees Productivity
                    </div>
                    <div className="flex-center tab-anim relative h-[70px] text-nowrap rounded-full px-10 duration-300 hover:text-white">
                        Full Service Payout
                    </div>
                </div>

                <div className="flex-center w-full gap-5 lg:flex-col">
                    <div className="flex h-[850px] w-1/2 flex-col justify-between rounded-[40px] bg-primary p-10 2xl:h-[700px] lg:w-full md:p-5">
                        <div className="mt-10 flex h-full w-1/2 flex-col justify-between gap-10 2xl:w-full 2xl:gap-5">
                            <p className="text-5xl capitalize text-white 2xl:text-3xl">
                                After joining, you <br />
                                can see the <br />
                                difference
                            </p>

                            <p className="text-white 2xl:text-sm">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Quibusdam numquam quae soluta
                                ullam.
                            </p>

                            <div className="grid grid-cols-2 justify-items-start gap-y-5 2xl:text-sm">
                                <div className="flex-center gap-5">
                                    <div className="aspect-square w-[35px] rounded-full bg-secondary"></div>
                                    <p className="text-white">Apple</p>
                                </div>
                                <div className="flex-center gap-5">
                                    <div className="aspect-square w-[35px] rounded-full bg-secondary"></div>
                                    <p className="text-white">Apple</p>
                                </div>
                                <div className="flex-center gap-5">
                                    <div className="aspect-square w-[35px] rounded-full bg-secondary"></div>
                                    <p className="text-white">Apple</p>
                                </div>
                                <div className="flex-center gap-5">
                                    <div className="aspect-square w-[35px] rounded-full bg-secondary"></div>
                                    <p className="text-white">Apple</p>
                                </div>
                            </div>

                            <div className="w-full rounded-3xl bg-white p-10 md:p-5">
                                <p className="mb-10 font-medium 2xl:text-sm">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Doloribus, quas harum
                                    adipisci quos dolore voluptas suscipit
                                </p>

                                <div className="flex items-center gap-5">
                                    <div className="aspect-square w-[40px] rounded-full bg-gray-custom"></div>
                                    <div className="flex flex-col">
                                        <p>John Doe</p>
                                        <p className="text-sm text-gray-500 2xl:text-xs">
                                            Sale Executive
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-[850px] w-1/2 flex-col justify-between rounded-[40px] bg-gray-custom p-10 2xl:h-[700px] lg:w-full md:p-5">
                        <div className="mt-10 flex h-full w-1/2 flex-col justify-between gap-10 2xl:w-full 2xl:gap-5">
                            <p className="text-5xl capitalize  2xl:text-3xl">
                                After joining, you <br />
                                can see the <br />
                                difference
                            </p>

                            <p className="2xl:text-sm">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Laboriosam debitis, obcaecati
                                perferendis atque enim odit
                            </p>

                            <p className="2xl:text-sm">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Laboriosam debitis, obcaecati
                                perferendis atque enim odit
                            </p>

                            <div className="w-full rounded-3xl bg-white p-10 md:p-5">
                                <p className="mb-10 font-medium 2xl:text-sm">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Doloribus, quas harum
                                    adipisci quos dolore voluptas suscipit
                                </p>

                                <div className="flex items-center gap-5">
                                    <div className="aspect-square w-[40px] rounded-full bg-gray-custom"></div>
                                    <div className="flex flex-col">
                                        <p>John Doe</p>
                                        <p className="text-sm text-gray-500 2xl:text-xs">
                                            Sale Executive
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex-center min-h-screen flex-col p-20 md:p-5">
                <p className="mb-10 text-center text-6xl lg:text-3xl">
                    Success stories from <br /> around the world.
                </p>
                <p className="mb-20 text-center font-medium lg:text-sm">
                    Hrmanage supports your team inside your company, equips your
                    staff with self-service <br />
                    capabilities, and fosters interpersonal connections between
                    them.
                </p>

                <div className="flex-center relative mt-40 w-full flex-col rounded-[40px] bg-gray-custom p-32 xl:p-10">
                    <div className="absolute -top-20 flex items-center gap-5">
                        <div className="aspect-square w-[100px] overflow-hidden rounded-full bg-gray-300 lg:w-[50px]"></div>
                        <div className="aspect-square w-[150px] overflow-hidden rounded-full bg-gray-300 lg:w-[100px]"></div>
                        <div className="aspect-square w-[100px] overflow-hidden rounded-full bg-gray-300 lg:w-[50px]"></div>
                    </div>
                    <p className="text-7xl text-amber-700">&apos;&apos;</p>
                    <p className="text-center text-5xl capitalize xl:text-3xl">
                        The night is dark and full of terror. What <br /> is
                        dead may never die. And now his watch <br /> is ended.
                        All men must die.
                    </p>
                    <div className="mt-10 flex">
                        <Image
                            src="/assets/images/star.svg"
                            height={35}
                            width={35}
                            alt="Star Logo"
                        />
                        <Image
                            src="/assets/images/star.svg"
                            height={35}
                            width={35}
                            alt="Star Logo"
                        />
                        <Image
                            src="/assets/images/star.svg"
                            height={35}
                            width={35}
                            alt="Star Logo"
                        />
                        <Image
                            src="/assets/images/star.svg"
                            height={35}
                            width={35}
                            alt="Star Logo"
                        />
                        <Image
                            src="/assets/images/star.svg"
                            height={35}
                            width={35}
                            alt="Star Logo"
                        />
                    </div>
                    <p className="text-3xl font-medium lg:text-lg">John Doe</p>
                    <p className="text-2xl text-gray-500 lg:text-base">
                        Sale Executive
                    </p>
                </div>
            </section>

            <section className="flex-center relative w-full flex-col p-20 md:p-5">
                <div className="flex-between relative w-full max-w-[1200px]">
                    <div className="mb-20 aspect-square w-[100px] rounded-full bg-primary lg:w-[50px]"></div>
                    <div className="aspect-square w-[100px] rounded-full bg-secondary lg:w-[50px]"></div>
                    <div className="mb-60 aspect-square w-[100px] rounded-full bg-primary lg:w-[50px]"></div>
                    <div className="aspect-square w-[100px] rounded-full bg-secondary lg:w-[50px]"></div>
                    <div className="mb-20 aspect-square w-[100px] rounded-full bg-primary lg:w-[50px]"></div>
                </div>
                <p className="mb-10 text-center text-6xl lg:text-3xl">
                    The only HR management app with <br /> over
                    <span className="text-pink-600"> 100+</span> integrations.
                </p>
                <p className="mb-10 text-center font-medium lg:text-sm">
                    Hrmanage supports your team inside your company, equips your
                    staff with self-service <br />
                    capabilities, and fosters interpersonal connections between
                    them.
                </p>

                <button className="rounded-full border bg-primary px-10 py-4 text-white">
                    Join Now
                </button>

                <div className="flex-between relative w-full max-w-[1000px]">
                    <div className="mt-20 aspect-square w-[100px] rounded-full bg-primary lg:w-[50px]"></div>

                    <div className="mt-60 aspect-square w-[100px] rounded-full bg-secondary lg:w-[50px]"></div>

                    <div className="mt-20 aspect-square w-[100px] rounded-full bg-primary lg:w-[50px]"></div>
                </div>
            </section>

            <section className="flex-center p-20 md:p-5">
                <div className="flex-center w-full rounded-3xl bg-primary p-20 md:p-10">
                    <div className="relative h-[500px] w-1/2 lg:hidden">
                        <Image
                            src="/assets/images/hero.png"
                            alt="Phone Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex max-w-[350px] flex-col gap-5 text-white">
                        <p className="text-5xl">Get started now with us.</p>
                        <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Nostrum, repellendus saepe aliquam minus
                        </p>
                        <div className="flex items-center gap-5">
                            <button className="rounded-full border border-white px-10 py-3 text-white md:px-5 md:py-2">
                                Join Now
                            </button>
                            <button className="rounded-full border border-secondary bg-secondary px-10 py-3 text-white md:px-5 md:py-2">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="p-20 md:p-5">
                <div className="flex w-full flex-wrap justify-between gap-10">
                    <div className="flex flex-col gap-5">
                        <a href="" className="font-bold">
                            Company
                        </a>
                        <a href="" className="text-gray-500">
                            About Us
                        </a>
                        <a href="" className="text-gray-500">
                            Contact
                        </a>
                        <a href="" className="text-gray-500">
                            Careers
                        </a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <a href="" className="font-bold">
                            Company
                        </a>
                        <a href="" className="text-gray-500">
                            Blog
                        </a>
                        <a href="" className="text-gray-500">
                            FAQ
                        </a>
                        <a href="" className="text-gray-500">
                            Terms of Service
                        </a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <a href="" className="font-bold">
                            Company
                        </a>
                        <a href="" className="text-gray-500">
                            Privacy Policy
                        </a>
                        <a href="" className="text-gray-500">
                            Product Catalog
                        </a>
                        <a href="" className="text-gray-500">
                            Customer Support
                        </a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <a href="" className="font-bold">
                            Company
                        </a>
                        <a href="" className="text-gray-500">
                            Testimonials
                        </a>
                        <a href="" className="text-gray-500">
                            Partnerships
                        </a>
                        <a href="" className="text-gray-500">
                            Events
                        </a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="font-bold">Company</p>
                        <div className="mb-20 flex h-[70px] items-center rounded-full border-2 border-gray-300">
                            <div className="flex-center tab-anim relative h-full rounded-full px-10 duration-300 hover:text-white">
                                Start Now
                            </div>
                            <div className="flex-center tab-anim relative h-full rounded-full px-10 duration-300 hover:text-white">
                                Start Later
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-20 pb-20 md:px-5">
                <div className="flex-between w-full rounded-full bg-white px-10 py-5 shadow-md lg:flex-col lg:gap-5 lg:rounded-3xl">
                    <a href="">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            height={50}
                            width={100}
                        />
                    </a>
                    <p className="text-center text-gray-500">
                        ©Hrmanage 2024, All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        <a
                            href=""
                            className="flex-center aspect-square w-[35px] rounded-full duration-300 hover:bg-secondary hover:text-white"
                        >
                            F
                        </a>
                        <a
                            href=""
                            className="flex-center aspect-square w-[35px] rounded-full duration-300 hover:bg-secondary hover:text-white"
                        >
                            I
                        </a>
                        <a
                            href=""
                            className="flex-center aspect-square w-[35px] rounded-full duration-300 hover:bg-secondary hover:text-white"
                        >
                            L
                        </a>
                        <a
                            href=""
                            className="flex-center aspect-square w-[35px] rounded-full duration-300 hover:bg-secondary hover:text-white"
                        >
                            M
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
