
import { RevealOnScroll } from "../RevealOnScroll"
export const About = () => {

    const frontendSkills = ["html","javaScript","css","React","Tailwind","TypeScript"]
    const backendSkills = ["SpringBoot","Nodejs","Expressjs","Java","PostgreSQL","MongoDB"]


    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >

        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6 ">
                    I'm a Software Engineering student passionate about building efficient, scalable applications and solving complex problems through technology.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl front-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech , key) => (
                                    <div key={key} className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        <img src={`../../../public/images/${tech.toLowerCase()}.png`}    alt={tech} className="w-5 h-5" />
                                        <span>{tech}</span>
                                   </div>
                                    
                                ))}
                            </div>
                        </div>
                    
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl front-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech , key) => (
                                    <div key={key} className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    <img src={`../../../public/images/${tech.toLowerCase()}.png`}    alt={tech} className="w-5 h-5" />
                                    <span>{tech}</span>
                               </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                    <div className="py-6 px-20 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                <h3 className="text-2xl font-bold mb-4"> 🏫 Education</h3>
                                <ul className="list-disc list-inside text-gray-300 sapce-y-2">
                                    <li>
                                        <strong className="text-xl">Engineer's degree, Computer Software Engineering</strong> <div>-
                                        National Institute of Posts and Telecommunications (2024-present)</div>
                                    </li>
                                    <br />
                                    <li>
                                        <strong className="text-xl">DEUST</strong> <div>-
                                        Faculté des Sciences et Techniques Gueliz - Marrakech (2022-2024)</div>
                                        <div><strong>GRADE: Trés Bien</strong></div>
                                    </li>
                                    <br />
                                    <li>
                                        <strong className="text-xl">Baccalauréat</strong> <br />- Mhamid 9 High School (2021-2022)
                                        <div><strong>GRADE: Trés Bien</strong></div>
                                    </li>
                                </ul>
                    </div>
                    {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold"> Software Engineer at ABC Corp (2000-present) </h4>
                                        <p> Developed Amazon for the better</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold"> Intern at bruh startups (1999) </h4>
                                        <p> building Google</p>
                                    </div>
                                </div>
                    </div> */}

                </div>

            </div>

        </RevealOnScroll>
        </section>
    )
}