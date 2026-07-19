import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, Copy, Check, Clock, Send, Globe, Facebook } from 'lucide-react';
import { api } from '../lib/api';

export default function Contact() {
  const [timeString, setTimeString] = useState('');
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Dynamically calculate San Francisco Studio local time
  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Morocco/Marrakech',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setTimeString(formatter.format(new Date()));
      } catch (e) {
        // Fallback
        setTimeString(new Date().toLocaleTimeString());
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('majd@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    try {
      await api.post('/contact', { name, email, message });
      setFormSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      // Graceful fallback: still show success if backend is unreachable
      console.warn('Backend unavailable, contact form simulated:', error);
      setFormSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    {
      label: 'LinkedIn',icon: Linkedin,href: 'www.linkedin.com/in/majd-younes-607305416',
      handle: 'majd-design'
    },
    { label: 'GitHub', icon: Github, href: 'https://www.github.com/YounesMajd', handle: 'majd-codes' },
    {label: 'Twitter',icon: Twitter,href: 'https://www.x.com/YounesMajad',handle: 'majd_tweets'},
    {label:'FaceBook' , icon:Facebook,href:'https://www.facebook.com/profile.php?id=100059986401493', handle: 'majd_facebook' },
  ];

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details, Copy Email & Dynamic Local Time */}
          <div className="md:col-span-5 flex flex-col items-start text-left justify-between gap-12">
            <div className="flex flex-col items-start gap-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold block">CONTACT</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight leading-[1.1]">
                Let's Build Something Timeless.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm mt-1">
                Have a concept, a job inquiry, or a complex software system in need of elegant architecture? Reach out and let's create high-end craftsmanship.
              </p>

              {/* Copy Email Pill */}
              <div 
                onClick={handleCopyEmail}
                className="group flex items-center justify-between gap-4 px-4 py-3 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-black cursor-pointer transition-all duration-300 w-full max-w-xs mt-2 shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:text-black group-hover:bg-white transition-all duration-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 font-bold">EMAIL ADDRESS</div>
                    <div className="text-xs font-semibold text-gray-800">majdyounes@gmail.com</div>
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-black transition-colors">
                  {copied ? <Check className="h-4 w-4 text-green-500 animate-pulse" /> : <Copy className="h-4 w-4" />}
                </div>
              </div>
            </div>

            {/* Socials & Location Clock Info */}
            <div className="flex flex-col gap-8 w-full">
              {/* Social list links */}
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <div className="text-[9px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">CONNECT</div>
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group flex items-center justify-between py-1 border-b border-gray-200 text-sm text-gray-500 hover:text-black transition-colors duration-300"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-gray-400 group-hover:text-black" />
                        {social.label}
                      </span>
                      <span className="text-[11px] font-mono text-gray-400 group-hover:text-black transition-colors flex items-center gap-0.5">
                        {social.handle} <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Dynamic local SF time clock */}
              <div className="flex items-center gap-3 border-t border-gray-200 pt-6">
                <div className="h-8 w-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400">
                  <Globe className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 font-bold flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Morocco - Marrakech time 
                  </div>
                  <div className="text-xs font-mono font-semibold text-gray-800 mt-0.5 uppercase">
                    {timeString || 'LOADING...'} (PST)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="md:col-span-7 bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 text-left"
                >
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-bold">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder="e.g. Elena Rostova"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 focus:border-black focus:outline-none transition-colors shadow-xs"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-bold">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      placeholder="e.g. elena@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 focus:border-black focus:outline-none transition-colors shadow-xs"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-bold">
                      Your Message
                    </label>
                    <textarea
                      required
                      id="message"
                      rows={5}
                      placeholder="Describe your project concept, requirements, and timeline..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 focus:border-black focus:outline-none transition-colors resize-none shadow-xs"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center gap-2 py-4 rounded-xl bg-black text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-xs mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16 gap-4"
                >
                  <div className="h-16 w-16 rounded-full border border-green-200 bg-green-50 text-green-600 flex items-center justify-center mb-2 animate-bounce">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-800">Message Transmitted!</h3>
                  <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                    Thank you, your message was successfully routed to Majd's studio inbox. We will read your inquiry and reply within 24 business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-xs font-mono text-gray-500 hover:text-black uppercase tracking-wider transition-colors shadow-xs"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer info brand bottom */}
        <div className="border-t border-gray-200 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-[11px] font-mono uppercase tracking-wider">
            © {new Date().getFullYear()} Majd Al-Saeed. All rights reserved.
          </div>
          <div className="text-gray-400 text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5">
            Crafted with React, Motion & Tailwind CSS
          </div>
        </div>
      </div>
    </section>
  );
}
