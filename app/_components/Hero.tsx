/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
export const Hero = () => {
    return (

<Section className ="flex max-sm:flex-col items-start pt-20">
<div className="flex-[3]">
<h2 className="text-2xl font-bold font-caption text-primary pb-5">Mai Than</h2>
<p className="text-xl font-caption text-secondary pb-4">2nd Year Computer Science Student</p>
<p className="text-base font-caption text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, repellendus esse ad neque aliquam velit distinctio quibusdam odit. Et officia velit minus accusamus ipsa sequi eaque. Impedit sed non rem?</p>
</div>

<div className="flex-1">
    <img className="rounded-full ml-12" src="https://media.licdn.com/dms/image/v2/D4E03AQF2OTX4t1HPjA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702993005021?e=1730332800&v=beta&t=tKeIPYFMpAngVM17eiLEThKZLAmp1kryEWI1nSbGRIQ" alt="My profile pic" />
</div>
</Section>

    );
};