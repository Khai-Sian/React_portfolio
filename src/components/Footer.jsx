import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"

export const Footer = () =>{
    return (
        <footer className={cn(
            "py-6 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap",
            "justify-between items-center"
        )}>
            <p className="text-sm text-muted-background">
                 &copy; {new Date().getFullYear()}, All rights reserved
            </p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover-bg-primary/20 text-primary transition-colors animate-bounce">
                <ArrowUp size={30}/>
            </a>
        </footer>
    )
}