import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                    Featured Projects 
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        
                        <h3 className="text-xl font-bold mb-2">Patient Management System</h3>
                        <p className="text-gray-400 mb-4">YAMAY is a prototype app for managing patient
                            records, consultations, and appointments, enabling
                            CRUD operations for a streamlined medical workflow.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Html","css","javascript","Node","express.js","jwt"].map((tech, key) =>(
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                               hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>

                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/yassinelamsaaf/YAMAY" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project »»</a>
                        </div>

                        
                    </div>

                    

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        
                        <h3 className="text-xl font-bold mb-2">Java Orientation Application</h3>
                        <p className="text-gray-400 mb-4">this application is a Java application that allows students
                            to find the best institution according to their
                            academic profile and admission criteria.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Java","JavaFX","MySQL","Git/GitHub"].map((tech, key) =>(
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                               hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>

                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Alae-J/Java-Project" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project »»</a>
                        </div>

                        
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        
                        <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                        <p className="text-gray-400 mb-4">Personal portfolio built to showcase projects,
                            skills, and experiences.
                            The portfolio highlights professional work, personal
                            projects, and relevant experience, with a clean,
                            responsive, and interactive design. Built to
                            demonstrate frontend development skills and attention
                            to detail.

                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["tailwind","react","Html","css","javascript"].map((tech, key) =>(
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                               hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>

                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://yassinelamsaaf.github.io/LamsaafYassine-portfolio/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project »»</a>
                        </div>

                        
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        
                        <h3 className="text-xl font-bold mb-2">Other Web-Projects</h3>
                        <p className="text-gray-400 mb-4">(FlappyBird-game | Image-Editor | StopWatch ... )

                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Html","css","javascript"].map((tech, key) =>(
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                               hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>

                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/yassinelamsaaf/MiniProjects" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project »»</a>
                        </div>

                        
                    </div>
                    

                </div>
            </div>
            </RevealOnScroll>

        </section>
    )
}