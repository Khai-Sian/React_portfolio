import { Globe, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react"
import {cn} from "@/lib/utils"

export const ContactSection = () => {

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="space-y-6 w-fit mx-auto">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                            <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-medium"> Email</h4>
                            <a href="mailto:khaisianlim0571@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                khaisianlim0571@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                            <Phone className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-medium"> Phone</h4>
                            <a href="tel:+60124336851" className="text-muted-foreground hover:text-primary transition-colors">
                                +60 (12) 433-6851
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                            <Globe className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-medium"> Location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Penang, Malaysia
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <h4 className="font-medium mb-4">
                        Connect With Me
                    </h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/khai-sian-lim-b8629321b/" target="_blank">
                            <Linkedin/>
                        </a>
                        <a href="https://www.instagram.com/_khai_sian_" target="_blank">
                            <Instagram/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}