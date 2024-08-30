import { cn } from "@/lib/utils";

{/*Pour pouvoir faire de grands espaces entre chaque élément */}

export type SpacingProps = {
    /*height: number;*/
    size?: "sm" | "md" | "lg";
};

export const Spacing = ( {size = "md"}: SpacingProps) => {
    return <div className={cn({
            "h-6 lg:h-16" : size === "sm",
            "h-14 lg:h-20": size === "md",
            "h-24 lg:h-32": size === "lg",
    })}/>;
};