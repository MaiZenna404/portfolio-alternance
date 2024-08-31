import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { CircleUserRound, Home, LucideIcon, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export const Dashboard = () => {
    return (
        <Section className="flex max-sm:flex-col font-caption gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full flex-[3] flex flex-col gap-3 p-3">
                    <p className="text-lg font-semibold p-4">Projects</p>
                    <div className="flex flex-col gap-4">
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
            <div className="flex-[2] w-full gap-4 h-full flex flex-col">
                <Card className="p-3 flex-1 text-base font-semibold">
                    About Me
                </Card>
                <Card className="p-3 flex-1 font-semibold">Work Experience</Card>
            </div>
        </Section>
    );
};

const PROJECTS_DESC = [
    {
        Logo: CircleUserRound,
        title: "This Portfolio",
        description: "Online Portfolio made in NextJs, React and TailWind",
    },
    {
        Logo: UtensilsCrossed,
        title: "Maekgeolli Restaurant",
        description: 'School Project : "Create the web site of a restaurant of your choice"',
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
        <Link href={props.url} className="inline-flex items-center gap-3">
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <props.Logo />
            </span>
            <div>
                <p className="text-base font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};