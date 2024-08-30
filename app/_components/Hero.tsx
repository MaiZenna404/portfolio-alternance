/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { ReactIcon } from './icons/ReactIcon';
import { JavaIcon } from './icons/JavaIcon';
import { CSharpIcon } from './icons/CSharp';

// Var qui permet de surligner les éléments importants
const Code = ({ className, ...props}: ComponentPropsWithRef<"span">) => {
    return <span className={cn("font-mono bg-accent/30 border border-accent p-1 -m-1 rounded-sm")} {...props}
    />
}

export const Hero = () => {
    return (

<Section className ="flex max-sm:flex-col items-start pt-20">
<div className="flex-[3]">

<h3 className="text-xl font-caption text-secondary pb-4">Hello, I'm Mai <span className="text-3xl">✌️</span></h3>
<p className="text-base font-caption text-secondary">Student in Computer Sciences, my aim is to become a Frontend developer. For now, I'm still searching what suits me best, but I do love coding in <Code><ReactIcon size={18} className="inline"/> React</Code> and <Code>NextJs</Code> .</p>
<p className="text-base font-caption text-secondary">Currently, I'm learning <Code><JavaIcon size={18} className="inline"/> Java</Code> and <Code><CSharpIcon size={18} className="inline"/> C#</Code> basis.</p>
</div>

<div className="flex-1">
    <img className="rounded-full ml-12" src="https://media.licdn.com/dms/image/v2/D4E03AQF2OTX4t1HPjA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702993005021?e=1730332800&v=beta&t=tKeIPYFMpAngVM17eiLEThKZLAmp1kryEWI1nSbGRIQ" alt="My profile pic" />
</div>
</Section>

    );
};