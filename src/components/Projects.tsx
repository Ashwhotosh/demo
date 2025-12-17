
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Project Alpha",
        description: "A full-scale AI platform for data analysis with real-time visualization.",
        tags: ["React", "Python", "TensorFlow"],
        link: "#",
        github: "#"
    },
    {
        title: "Neon Finance",
        description: "DeFi dashboard with immersive dark mode and glassmorphism UI.",
        tags: ["Next.js", "Tailwind", "Web3"],
        link: "#",
        github: "#"
    },
    {
        title: "Echo Social",
        description: "Real-time chat application with end-to-end encryption.",
        tags: ["Socket.io", "Node.js", "Redis"],
        link: "#",
        github: "#"
    },
];

const Projects = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Featured <span className="neon-text">Projects</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent work, showcasing technical capabilities and design precision.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-panel p-6 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-0" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="h-40 mb-6 rounded-lg bg-secondary/30 overflow-hidden relative">
                                    {/* Placeholder for project image */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-blue/20 group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-white/10">
                                    <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-neon-pink transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.link} className="flex items-center gap-2 text-sm font-semibold hover:text-neon-blue transition-colors ml-auto">
                                        Live Demo <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
