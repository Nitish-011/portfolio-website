import React, { useState } from 'react';
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Package up the form data for Web3Forms
        const submissionData = new FormData(e.target);
        
        // Your specific Web3Forms Access Key
        submissionData.append("access_key", "2782abcb-73db-459f-92ea-2d254e55dd26"); 

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: submissionData
            });

            if (response.ok) {
                alert("Message sent successfully! I will get back to you soon.");
                // Clears the form after a successful send
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert("Oops! Something went wrong. Please email me directly.");
            }
        } catch (error) {
            console.error(error);
            alert("Network error. Please check your connection and try again.");
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30 text-slate-100">
            <style>{`
                .cosmic-button { 
                    background: linear-gradient(to right, #6366f1, #a855f7);
                    color: white;
                    transition: opacity 0.2s;
                }
                .cosmic-button:hover { opacity: 0.9; }
            `}</style>

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I Am Always Open To Discussing New Opportunities in Software Development.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:nitishjoshi0554@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">nitishjoshi0554@gmail.com</a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium px-18">Phone</h4>
                                    <a href="tel:+918544767400" className="text-muted-foreground hover:text-primary transition-colors">+91 8544767400</a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>  
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <span className="text-muted-foreground">Dehradun, Uttarakhand, India</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-8 flex flex-col items-center">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 ">
                                <a href='https://www.linkedin.com/in/nitish-joshi-bb9a55323' target="_blank" rel="noreferrer">
                                    <Linkedin className="text-slate-400 hover:text-primary transition-colors"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-sm border border-slate-800 bg-slate-900/50">
                        <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-slate-700 bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary text-white" placeholder="Name..." />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-slate-700 bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary text-white" placeholder="Email..." />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea id="message" name="message" required value={formData.message} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-slate-700 bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary resize-none text-white" rows="4" placeholder="Hello! I would like to talk about...." />
                            </div>

                            <button 
                                type="submit" 
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2 py-3 rounded-md font-medium")}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { ContactSection };
export default ContactSection;