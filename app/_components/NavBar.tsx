import { Section } from './Section';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const NavBar = () => {
    return (
<nav className="sticky top-5 py-5">
<Section className='flex items-baseline'>
    <div className="flex-1">
       <ul className="flex flex-row justify-center">
       <Link
                href=""
                className={cn(buttonVariants({ variant: "outline" }),  "mx-3 font-bold font-caption"
                )} > About Me
        </Link>
        
        <Link
                href=""
                className={cn(buttonVariants({ variant: "outline" }),  "mx-3 font-bold font-caption"
                )} > Projects
        </Link>
        </ul>
    </div>
</Section>
</nav>
    );
};