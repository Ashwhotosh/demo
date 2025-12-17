
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="glass-panel p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work <span className="neon-text">Together</span></h2>
                        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
                            Have a project in mind or want to discuss the latest tech? I'm always open to new opportunities and creative collaborations.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <Mail size={24} />
                                </div>
                                <h3 className="font-semibold mb-1">Email</h3>
                                <a href="mailto:hello@example.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">hello@example.com</a>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <Phone size={24} />
                                </div>
                                <h3 className="font-semibold mb-1">Phone</h3>
                                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="font-semibold mb-1">Location</h3>
                                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                            </div>
                        </div>

                        <button className="btn-primary w-full md:w-auto min-w-[200px] shadow-lg shadow-neon-purple/20">
                            Say Hello
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
