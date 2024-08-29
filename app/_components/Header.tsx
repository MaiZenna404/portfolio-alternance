import { Button } from "@/components/ui/button"
import { Section } from "./Section"
import { LinkedInIcon } from "./icons/LinkedInIcon"

export const Header = () => {
    return (
        <header className="sticky top-10 py-5">
            <Section className="flex items-baseline">
                <h1 className="text-2xl font-bold font-caption">Mai Than</h1>
            

            <div className="flex-1" />

            <ul>
                <Button className="size-6 p-0" variant={"outline"}><LinkedInIcon size={20} className="text-foreground"/></Button>
            </ul>
            </Section>
        </header>
    )
}