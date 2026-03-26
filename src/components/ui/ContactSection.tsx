"use client";

import { useState } from "react";

export default function ContactSection() {

    // Ready for your Resend API integration
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");

        try {
            // Make sure this path matches where you put your route.ts file!
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                // Clear the form
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);

            // Optional: Reset the success message after 5 seconds
            if (status !== "error") {
                setTimeout(() => setStatus("idle"), 5000);
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    return (
        <section id="contact" className="text-display relative max-w-7xl mx-auto px-6 md:px-12 py-24 z-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* TEXT & INFO */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        Let&apos;s build something <br />
                        <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">legendary.</span>
                    </h2>

                    <p className="text-foreground font-body text-base md:text-lg max-w-md leading-relaxed mb-12">
                        Have an ambitious project in mind? Looking for a developer who can blend code and data with design? Reach out and let&apos;s discuss the future.
                    </p>

                    <div className="w-fit space-y-8">
                        {/* Email Info */}
                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/2 border border-white/5 flex items-center justify-center text-foreground group-hover:text-primary group-hover:border-(--primary)/30 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" /></svg>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-widest text-foreground uppercase font-bold mb-1">Email</p>
                                <p className="text-white font-medium text-lg">janduaditay@gmail.com</p>
                            </div>
                        </div>

                        {/* Location Info */}
                        <div className="flex  items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/2 border border-white/5 flex items-center justify-center text-foreground group-hover:text-secondary group-hover:border-(--secondary)/30 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-widest text-foreground uppercase font-bold mb-1">Location</p>
                                <p className="text-white font-medium text-lg">Sirsa, India (Remote Ready)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form -> Sending email */}
                <div className="relative mt-8 lg:mt-0">

                    {/* Floating Orange Badge */}
                    <div className="absolute -top-3 left-6 z-20 px-4 py-1.5 bg-tertiary rounded-full shadow-[0_0_15px_rgba(255,116,57,0.4)]">
                        <span className="text-[7px] font-extrabold text-black uppercase tracking-widest block font-display">
                            Contact Form
                        </span>
                    </div>

                    {/* The Glass Container */}
                    <div className="glass-panel relative p-8 md:p-10 pt-12 rounded-2xl bg-[#131313]/80 border-white/5">

                        <form onSubmit={handleSubmit} className="space-y-6 py-10 px-10">

                            {/* Row 1: Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-(--primary)/50 focus:bg-[#0a0a0a] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-(--primary)/50 focus:bg-[#0a0a0a] transition-all"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Subject */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Project Inquiry"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-(--primary)/50 focus:bg-[#0a0a0a] transition-all"
                                />
                            </div>

                            {/* Row 3: Message */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 block">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-(--primary)/50 focus:bg-[#0a0a0a] transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting || status === "success"}
                                className={`w-full mt-4 font-display font-bold uppercase tracking-widest py-4 rounded-lg transition-all duration-300 ${status === "success"
                                    ? "bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                                    : status === "error"
                                        ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                                        : "bg-linear-to-r from-primary to-primary-container text-black shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:-translate-y-1"
                                    } disabled:opacity-70 disabled:hover:translate-y-0`}
                            >
                                {isSubmitting ? "Transmitting..." : status === "success" ? "Message Sent!" : status === "error" ? "Transmission Failed" : "Transmit Message"}
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}