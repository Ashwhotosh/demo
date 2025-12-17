
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-neon-purple/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left space-y-6"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium tracking-wide">
                        Available for freelance work
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Creative <br />
                        <span className="neon-text">Developer.</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                        I build accessible, pixel-perfect, and performant web experiences with a focus on motion and modern aesthetics.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="btn-primary flex items-center gap-2">
                            View Projects <ArrowRight size={18} />
                        </button>
                        <button className="btn-outline flex items-center gap-2">
                            Contact Me <Mail size={18} />
                        </button>
                    </div>

                    <div className="flex gap-4 pt-8 opacity-70">
                        <a href="#" className="hover:text-neon- DEFAULT hover:scale-110 transition-all"><Github size={24} /></a>
                        <a href="#" className="hover:text-neon-blue hover:scale-110 transition-all"><Linkedin size={24} /></a>
                        <a href="#" className="hover:text-neon-pink hover:scale-110 transition-all"><Download size={24} /></a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-neon-blue rounded-full opacity-20 animate-pulse-slow blur-3xl" />
                        <div className="glass-panel w-full h-full rounded-2xl flex items-center justify-center border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                            <div className="relative z-10 text-center space-y-4">
                                <div className="w-24 h-24 bg-gradient-to-br from-neon-purple to-neon-pink rounded-xl mx-auto rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-neon-purple/30" />
                                <h3 className="text-2xl font-bold">Tech Stack</h3>
                                <div className="flex gap-2 justify-center">
                                    <span className="px-2 py-1 bg-white/5 rounded text-sm">React</span>
                                    <span className="px-2 py-1 bg-white/5 rounded text-sm">TS</span>
                                    <span className="px-2 py-1 bg-white/5 rounded text-sm">Node</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
