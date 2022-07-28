import {NextPage} from 'next'
import Image from 'next/image'
import Head from "next/head";
import {useState} from "react";

const Hero = () => {
    return (
        <section id="hero">
            {/*  Flex Container  */}

            <div className="container flex flex-col-reverse md:flex-row items-center
                px-6 mx-auto mt-10 space-y-0 md:space-y-0">

                {/* Left Item */}
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md-:text-5xl md:text-left">
                        Bring everyone together to build better products
                    </h1>
                    <p className="max-w-sm text-center text-gray-500 md:text-left">
                        Manage makes it simple for software teams to plan day-to-day tasks
                        while keeping the larger team goals in view
                    </p>
                    <div className="flex justify-center md:justify-start">

                        <GetStartedButton/>

                    </div>
                </div>

                {/*  Image  */}
                <div className="relative md:w-1/2">
                    <Image src="/img/illustration-intro.svg" alt="" width="580" height="525"/>
                </div>
            </div>
        </section>
    )
}

const Navbar = () => {

    const [iconClicked, setIconState] = useState<boolean>(false);
    const hamburgerOnClick = () => {
       setIconState( prevState => !prevState);
    }

    return (
        <nav className="relative container mx-auto p-6">
            {/* Flex container */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="pt-2">
                    <Image src="/img/logo.svg" alt=""
                           width="146" height="24"/>
                </div>
                {/* Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-blue-500">Pricing</a>
                    <a href="#" className="hover:text-blue-500">Product</a>
                    <a href="#" className="hover:text-blue-500">About Us</a>
                    <a href="#" className="hover:text-blue-500">Careers</a>
                    <a href="#" className="hover:text-blue-500">Community</a>
                </div>

                <GetStartedButton hidden={true}/>

                {/* Hamburger Icon */}
                <button id="menu-btn" onClick={hamburgerOnClick} className={`${iconClicked && 'open'} block hamburger md:hidden focus:outline-none`}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <div id="menu" className={`absolute z-20 flex flex-col items-center ${!iconClicked && 'hiddenIcon'} self-end
                    py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6
                    drop-shadow-md`}>
                    <a href="#">Pricing</a>
                    <a href="#">Product</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Community</a>
                </div>
            </div>
        </nav>
    )
}

type ListItem = {
    _id: string,
    title: string,
    content: string
}
const ListItem = ({_id, title, content}: ListItem) => {
    return (
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-blue-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-500">
                        {_id}
                    </div>
                    <h3 className="text-base font-bold text-darkBlue md:mb-4 md:hidden">
                        {title}
                    </h3>
                </div>
            </div>

            <div>
                <h3 className="hidden mb-4 text-darkBlue text-lg font-bold md:block">
                    {title}
                </h3>
                <p className="text-desaturatedBlue">
                    {content}
                </p>
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <section id="features" className="bg-blue-100 px-10 pt-12 pb-20">
            <div className="container flex flex-col px-4 mx-auto mt-10
                space-y-12 md:space-y-0 md:flex-row">
                {/* What's different */}
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-veryDarkBlue text-center md:text-left">
                        What's different about Manage?
                    </h2>
                    <p className="max-w-sm text-center text-desaturatedBlue md:text-left">
                        Manage provides all the functionality your team needs, without the
                        complexity. Our software is tailor-made for modern digital product teams.
                    </p>

                </div>
                {/* Numbered List */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                    {/*  List Item 1  */}
                    <ListItem
                        _id={"01"}
                        title={"Track company-wide progress"}
                        content={
                            "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at " +
                            "the milestone level all the way down to the smallest of details. " +
                            "Never lose sight of the bigger picture again."
                        }
                    />
                    {/*  List Item 2  */}
                    <ListItem
                        _id={"02"}
                        title={"Advanced built-in reports"}
                        content={"Set internal delivery estimates and track progress toward company goals. " +
                            "Our customisable dashboard helps you build out the reports you need to keep key " +
                            "stakeholders informed"}/>
                    {/*  List Item 3 */}
                    <ListItem
                        _id={"03"}
                        title={"Everything you need in one place"}
                        content={"Stop jumping from one service to another to communicate, store files, track" +
                            " tasks and share documents. Manage offers on an all-in-one team" +
                            "productivity solution"}/>

                </div>
            </div>
        </section>
    )
}

type testimonialCard = {
    imageName: string,
    name: string,
    testimonial: string
}

const TestimonialCard = ({imageName, name, testimonial}: testimonialCard) => {
    return (
        <div className="m-10 md:m-0 flex flex-col items-center p-6 space-y-6 rounded-lg
                        bg-blue-100 md:w-1/3">
            <img src={`img/avatar-${imageName}.png`} className="w-16 -mt-14" alt=""/>
            <h5 className="text-darkBlue text-lg font-bold">{name}</h5>
            <p className="text-sm text-desaturatedBlue">
                "{testimonial}"
            </p>
        </div>
    )
}

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="max-w-6xl px-5 mx-auto mt-24 text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center">
                    What's different about Manage?
                </h2>
                {/* Testimonials Container */}
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <TestimonialCard
                        imageName="anisha"
                        name="Anisha Li"
                        testimonial="Manage has supercharged our team's workflow. The ability to maintain
                            visibility on larger milestones at all times keeps everyone motivated."/>
                    <TestimonialCard
                        imageName="ali"
                        name="Ali Bravo"
                        testimonial="We have been able to cancel so many other subscriptions since using Manage.
                            There are no more cross-channel confusion and everyone is much more focused."/>
                    <TestimonialCard
                        imageName="richard"
                        name="Richard Watts"
                        testimonial="Manage has supercharged our team's workflow. The ability to maintain
                            visibility on larger milestones at all times keeps everyone motivated."/>
                </div>

                <div className="my-16">
                    <GetStartedButton/>
                </div>

            </div>
        </section>
    )
}

const CTA = () => {
    return (
        <section id="cta" className="bg-blue-500">
            <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto
                space-y-12 md:px-12 md:py-12 md:flex-row md:space-y-0">
                <div>
                    <h2 className="h2 text-5xl font-bold leading-tight text-center text-white
                    md:text-4xl md:max-w-xl md:text-left">
                        Simplify how your team works today
                    </h2>
                </div>
                <div>
                    <GetStartedButton cta={true}/>
                </div>

            </div>

        </section>
    )
}

const GetStartedButton = ({hidden = false, cta = false}: { hidden?: boolean, cta?: boolean }) => {
    return (
        <a href="#"
           className={`${hidden && "hidden lg:block"} p-3 px-6 ${cta ? "text-blue-500 bg-white hover:bg-blue-100" :
               "text-white bg-blue-500 hover:bg-blue-400"} rounded-full baseline whitespace-nowrap`}>
            Get Started
        </a>
    )
}

const SocialLink = ({mediaName}: { mediaName: string }) => {
    return (
        <a href="#">
            <img src={`img/icon-${mediaName}.svg`} className="h-6"/>
        </a>
    )
}

const socialAccs: string[] = [
    "facebook",
    "twitter",
    "youtube",
    "pinterest",
    "instagram"
];

type FooterLinks = {
    row1: string[],
    row2: string[],
}

const Links: FooterLinks = {
    row1: [
        "Home",
        "Pricing",
        "Products",
        "About"
    ],
    row2: [
        "Careers",
        "Community",
        "Privacy Policy"
    ]
}

const Footer = () => {
    return (
        <footer className="bg-veryDarkBlue">
            <div className="container flex flex-col-reverse justify-between px-6
                py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                {/* Logo and social links container */}
                <div className="flex flex-col-reverse px-6 items-center justify-between space-y-12
                    lg:flex-col lg:space-y-0 lg:items-start">
                    <div className="mx-auto my-6 text-center text-white lg:hidden">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                    {/* Logo */}
                    <div>
                        <img src="img/logo-white.svg" className="h-8" alt=""/>
                    </div>

                    {/* Social Links Container */}
                    <div className="flex justify-center space-x-4 pt-4">
                        {socialAccs.map((acc) => <SocialLink mediaName={acc}/>)}
                    </div>
                </div>

                {/* List Container */}
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        {Links.row1.map(link => <a href="#" className="text-white">{link}</a>)}
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        {Links.row2.map(link => <a href="#" className="text-white">{link}</a>)}
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <form>
                        <div className="flex space-x-3">
                            <input
                                type="text"
                                className="flex-1 px-4 py-2 rounded-full focus:outline-none"
                                placeholder="Updates in your inbox"
                            />
                            <button
                                className="px-6 py-2 text-white rounded-full bg-blue-500
                                    hover:bg-blue-300 focus:outline-none">
                                Go
                            </button>
                        </div>
                    </form>

                    <div className="hidden text-white lg:block">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>

                </div>
            </div>
        </footer>
    )
}

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap"
                    rel="stylesheet"/>
            </Head>

            <Navbar/>

            <Hero/>

            <Features/>

            <Testimonials/>

            <CTA/>

            <Footer/>

        </>
    )

}

export default Home
