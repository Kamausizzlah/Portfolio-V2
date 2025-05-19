import { Briefcase, Code, Computer, Network, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer and IT support Tech</h3>

                        <p className="text-muted-foreground">
                            With a strong foundation in web development and IT support, I am dedicated to creating innovative solutions that enhance user experiences. My expertise lies in HTML, CSS, JavaScript, and React, allowing me to build responsive and dynamic web applications. I am also skilled in troubleshooting technical issues and providing exceptional support to users.
                        </p>

                        <p className="text-muted-foreground">
                            I am a quick learner and thrive in fast-paced environments. I am always eager to expand my knowledge and stay updated with the latest industry trends. My goal is to leverage my skills and passion for technology to contribute to impactful projects and help organizations achieve their objectives.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        I specialize in creating responsive and user-friendly websites using HTML, CSS, JavaScript, and React. My focus is on delivering high-quality code and ensuring optimal performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Network className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Networking </h4>
                                    <p className="text-muted-foreground">
                                        I have a solid understanding of networking concepts and protocols. I can troubleshoot network issues and ensure smooth connectivity for users.
                                    </p>
                                </div>    
                            </div>    
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Computer className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Support Tech</h4>
                                    <p className="text-muted-foreground">
                                        I am experienced in providing IT support and troubleshooting technical issues. I am dedicated to ensuring a seamless experience for users and resolving any challenges they may face.
                                    </p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}