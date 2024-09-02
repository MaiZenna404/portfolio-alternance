import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { CircleUserRound, Home, LucideIcon, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

export const Dashboard = () => {
    return (
        <Section className="flex max-sm:flex-col font-caption gap-3">
            <div className="flex-[3] w-full">
                <Card className="w-full flex-[3] flex flex-col gap-3 p-3">
                    <p className="text-lg font-semibold p-4">Projects</p>
                    <div className="flex flex-col gap-2">
                        {PROJECTS_DESC.map((project, index) => (
                            <ProjectsIcons
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url="/"
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[3] w-full gap-2 h-full flex flex-col">
                <Card className="p-3 flex-1 text-base font-semibold">
                <p className="text-lg font-semibold p-4">School Path</p>
                <div className="flex flex-col gap-2">
                    {SCHOOL_DESC.map((school, index) => (
                        <SchoolIcons
                            key={index}
                            image={school.image}
                            imgDesc={school.imgDesc}
                            diploma={school.diploma}
                            desc={school.desc}
                            date={school.date}
                            url="/"
                        />
                    ))}
                </div>
                </Card>
                <Card className="p-3 flex-1 text-base font-semibold">
                <p className="text-lg font-semibold p-4">Work Experience</p>
                    <div className="flex flex-col gap-2">
                        {WORK_DESC.map((work, index) => (
                            <WorkIcons
                                key={index}
                                image={work.image}
                                title={work.title}
                                role={work.role}
                                date={work.date}
                                url="/"
                            />
                        ))}
                    </div>
                </Card>
                
            </div>
        </Section>
    );
};

// Liste pour le côté Project

const PROJECTS_DESC: ProjectsIconsProps[] = [
    {
        Logo: CircleUserRound,
        title: "This Portfolio",
        description: "Online Portfolio made in NextJs, React and TailWind",
        url: "/",
    },
    {
        Logo: UtensilsCrossed,
        title: "Maekgeolli Restaurant",
        description: 'School Project : "Create the web site of a restaurant of your choice"',
        url: "/"
    },

];

type ProjectsIconsProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const ProjectsIcons = (props: ProjectsIconsProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/60 transition-colors p-1 rounded-sm">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo />
            </span>
            <div>
                <p className="text-base font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};

// Liste pour le côté School

const SCHOOL_DESC: SchoolIconsProps[] = [
    {
        image: "",
        imgDesc: "This Portfolio",
        diploma: "Computer Science Bachelor",
        desc: "2nd Year Student at SDV",
        date: "From Sept 2023 - Present",
        url: "/",
    },
    {
        image: "",
        imgDesc: "This Portfolio",
        diploma: "East Asian Languages, Literatures and Civilizations Bachelor",
        desc: "Graduated in Japanese Studies",
        date: "Sept 2019 - June 2021",
        url: "/",
    },

];

type SchoolIconsProps = {
    image: string;
    imgDesc: string;
    diploma : string;
    desc: string;
    date: string;
    url: string;
};

const SchoolIcons = (props: SchoolIconsProps) => {
    return (
        <Link href={props.url}>
            <div className="flex items-center gap-4 hover:bg-accent/60 transition-colors p-1 rounded-sm">
                <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                    <img src={props.image} alt={props.imgDesc} className="w-4 h-4 object-contain"/>
                </span>
                <div>
                    <p className="text-base font-semibold">{props.diploma}</p>
                    <p className="text-sm text-muted-foreground">{props.desc}</p>
                </div>

                <div className="ml-auto">
                <p className="text-xs text-muted-foreground">{props.date}</p>
                </div>
            </div>
        </Link>
    );
};

// Liste pour le côté work

const WORK_DESC: WorkIconsProps[] = [
    {
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573_1280.jpg",
        title: "Unorthodox Bakery",
        role: "Bakery Shop Assistant",
        date: "From Nov 2023 - Present",
        url: "/",
    },
    /*{
        image: "",
        title: "This Portfolio",
        role: "Online Portfolio made in NextJs, React and TailWind",
        date: "",
        url: "",
    },*/

];

type WorkIconsProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
};

const WorkIcons = (props: WorkIconsProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/60 transition-colors p-1 rounded-sm">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <img src={props.image} alt={props.title} className="w-4 h-4 object-contain"/>
            </span>
            <div>
                <p className="text-base font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>

            <div className="ml-auto">
            <p className="text-xs text-muted-foreground">{props.date}</p>
            </div>
        </Link>
    );
};