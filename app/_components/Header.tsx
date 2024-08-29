import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { LinkedInIcon } from "./icons/LinkedInIcon"
import { GmailIcon } from "./icons/GmailIcon"
import { GithubIcon } from "./icons/GithubIcon"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const Header = () => {
    return (
        <header className="sticky top-10 py-5">
            <Section className="flex items-baseline">
                <h1 className="text-2xl font-bold font-caption text-primary">Mai Than</h1>
            

            <div className="flex-1" />

            <ul>
                <Link 
                href="https://www.linkedin.com/feed/"
                className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0 mx-3")} > <LinkedInIcon size={15} className="text-foreground"/>
                </Link>

                <Link 
                href="https://github.com/dashboard"
                className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0 mx-3")} > <GithubIcon size={15} className="text-foreground"/>
                </Link>

                <Link 
                href="https://mail.google.com/mail/u/0/#inbox"
                className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0 ml-3")} > <GmailIcon size={15} className="text-foreground"/>
                </Link>

            </ul>
            </Section>
        </header>
    )
}