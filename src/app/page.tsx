
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { GravityPhysics } from '@/components/GravityPhysics';
import { SummaryAssistant } from '@/components/SummaryAssistant';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Github, Linkedin, Mail, Phone, ExternalLink, GraduationCap, Briefcase, Code, FileText, Download } from 'lucide-react';

export default function Home() {
  const [professionalSummary, setProfessionalSummary] = useState(
    "A hybrid technical specialist merging object-oriented programming, mobile application development, and pedagogical instruction. Expert in creating meticulous systems documentation and instructional systems designs with a focus on risk/data analytics."
  );

  const skills = [
    "Full-Stack Web Dev", "OOP", "UI/UX Presentation Design", 
    "Systems Documentation", "Network Protocols", "Project Management",
    "Data Analytics", "Mobile App Dev", "Technical Instruction"
  ];

  const projects = [
    {
      title: "Custom UI/UX Process Manuals",
      desc: "Standardizing development workflows for multi-disciplinary teams.",
      type: "Documentation"
    },
    {
      title: "Independent Web/Mobile Suite",
      desc: "Bespoke internal tools for educational tracking systems.",
      type: "Development"
    },
    {
      title: "Market Analytics Dashboard",
      desc: "Risk assessment tools for small-scale fintech startups.",
      type: "Data Science"
    }
  ];

  const transcriptImg = PlaceHolderImages.find(img => img.id === 'academic-transcript');
  const projectImg = PlaceHolderImages.find(img => img.id === 'project-placeholder');
  const credentialImg = PlaceHolderImages.find(img => img.id === 'credential-placeholder');

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 px-6 lg:px-12 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl lg:text-2xl font-black tracking-tighter text-[#0A192F]">MUKONDE BUPE</h1>
          <p className="text-[10px] lg:text-xs font-semibold text-[#2D3748] opacity-70 uppercase tracking-widest">Technical All-Rounder | Full-Stack Developer & Systems Documentarian</p>
        </div>
        <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-widest text-[#0A192F]">
          <a href="#summary" className="hover:opacity-50 transition-opacity">Summary</a>
          <a href="#competencies" className="hover:opacity-50 transition-opacity">Competencies</a>
          <a href="#academic" className="hover:opacity-50 transition-opacity">Academic</a>
          <a href="#projects" className="hover:opacity-50 transition-opacity">Projects</a>
        </nav>
        <div className="flex gap-4">
          <SummaryAssistant onSummaryGenerated={setProfessionalSummary} />
        </div>
      </header>

      {/* GRAVITY SANDBOX */}
      <GravityPhysics>
        <main className="pt-32 pb-40 px-6 lg:px-12 max-w-7xl mx-auto space-y-24">
          
          {/* PROFESSIONAL SUMMARY SECTION */}
          <section id="summary" className="max-w-4xl">
            <div className="shatter bg-[#0A192F] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 opacity-50" />
                  <h2 className="text-3xl font-black tracking-tight">Professional Summary</h2>
                </div>
                <p className="text-lg lg:text-xl leading-relaxed font-medium text-white/90">
                  {professionalSummary}
                </p>
              </div>
            </div>
          </section>

          {/* CORE COMPETENCIES CANVAS */}
          <section id="competencies" className="space-y-8">
            <h2 className="text-2xl font-black tracking-tight text-[#0A192F] uppercase border-b-2 border-[#0A192F] pb-2 inline-block">Core Competencies</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, i) => (
                <div key={i} className="shatter bg-white border-2 border-[#0A192F] text-[#0A192F] px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg hover:bg-[#0A192F] hover:text-white transition-colors cursor-grab active:cursor-grabbing">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* ACADEMIC & PROJECTS GRID */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* ACADEMIC ACHIEVEMENTS */}
            <section id="academic" className="space-y-8">
              <h2 className="text-2xl font-black tracking-tight text-[#0A192F] uppercase border-b-2 border-[#0A192F] pb-2 inline-block">Academic Achievements</h2>
              <div className="shatter bg-[#EDF2F7] p-8 rounded-3xl border border-gray-200 space-y-6">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-10 h-10 text-[#0A192F]" />
                  <div>
                    <h3 className="text-xl font-black text-[#0A192F]">B.Sc ICT with Education</h3>
                    <p className="text-sm font-bold text-[#2D3748] opacity-70">Completed with Credit</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-inner bg-white">
                  <Image 
                    src={transcriptImg?.imageUrl || ''} 
                    alt="Transcript Preview" 
                    fill 
                    className="object-cover"
                    data-ai-hint={transcriptImg?.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <Download className="w-6 h-6 text-[#0A192F]" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SELECTED PROJECTS GALLERY */}
            <section id="projects" className="space-y-8">
              <h2 className="text-2xl font-black tracking-tight text-[#0A192F] uppercase border-b-2 border-[#0A192F] pb-2 inline-block">Selected Projects</h2>
              <div className="grid gap-6">
                {projects.map((proj, i) => (
                  <div key={i} className="shatter group bg-white border border-gray-100 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-l-8 border-l-[#0A192F]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 px-3 py-1 bg-[#F7FAFC] rounded-full">
                        {proj.type === 'Development' ? <Code className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{proj.type}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex gap-6 items-center">
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-100">
                        <Image 
                          src={projectImg?.imageUrl || ''} 
                          alt="Project Thumbnail" 
                          fill 
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          data-ai-hint={projectImg?.imageHint}
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-black text-[#0A192F]">{proj.title}</h4>
                        <p className="text-sm font-medium text-[#2D3748] leading-snug">{proj.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </GravityPhysics>

      {/* FIXED FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0A192F] text-white p-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <a href="mailto:contact@mukonde.me" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              <Mail className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Email</span>
            </a>
            <a href="tel:+123456789" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Phone</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              <Linkedin className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              <Github className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">GitHub</span>
            </a>
          </div>
          <div className="flex items-center gap-4 bg-white/10 px-4 py-2 rounded-2xl">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/20">
              <Image 
                src={credentialImg?.imageUrl || ''} 
                alt="Credentials" 
                fill 
                className="object-cover"
                data-ai-hint={credentialImg?.imageHint}
              />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Official Credentials & NRC Attached</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
