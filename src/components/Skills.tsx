
import { motion } from "framer-motion";

const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Tailwind CSS", "Framer Motion", "Three.js", "PostgreSQL",
    "GraphQL", "Docker", "AWS"
];

const Skills = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-neon-purple/10 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Technical <span className="neon-text">Arsenal</span></h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                            className="px-6 py-3 rounded-xl bg-secondary/50 border border-white/5 backdrop-blur-sm cursor-default transition-colors duration-300"
                        >
                            <span className="font-semibold text-foreground/80">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
