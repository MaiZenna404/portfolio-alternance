import { Card } from "@/components/ui/card";
import { Section } from "./Section";

export const Dashboard = () => {
    return (
<Section className="flex max-sm:flex-col items-start font-caption">  
    <Card className="flex-[2] flex flex-col gap-2 ">
        Projects
    </Card>
<div className="flex-1">
    <Card>
        About Me
    </Card>
    <Card>Work Experience</Card>
</div>
</Section>
    );
};