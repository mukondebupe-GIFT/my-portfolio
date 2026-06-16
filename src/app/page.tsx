"use client";

import React from 'react';
import Image from 'next/image';
import { Linkedin, Mail, Phone, ExternalLink, GraduationCap, Code, FileText, Download, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const professionalSummary = "A hybrid technical specialist merging object-oriented programming, network infrastructure, and pedagogical instruction. Expert in creating meticulous systems documentation and instructional systems designs with a focused background in ICT education and project management from Kwame Nkrumah University.";

  const skills = [
    "Object Oriented Programming", 
    "Computer Networks", 
    "Computer Architecture",
    "Project Management", 
    "Systems Documentation", 
    "Educational Management",
    "Curriculum Design", 
    "Full-Stack Dev", 
    "Entrepreneurship"
  ];

  const projects = [
    {
      title: "Educational Tracking Systems",
      desc: "Custom internal tools for monitoring student progress and curriculum delivery.",
      type: "Development"
    },
    {
      title: "Network Infrastructure Design",
      desc: "Standardizing development workflows and network protocols for academic labs.",
      type: "Documentation"
    },
    {
      title: "ICT Pedagogy Framework",
      desc: "Instructional systems design for secondary and tertiary ICT education.",
      type: "Education"
    }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/transcript.jpg';
    link.download = 'Mukonde_Bupe_Transcript.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 px-6 lg:px-12 flex items-center">
        <div className="flex flex-col">
          <h1 className="text-xl lg:text-2xl font-black tracking-tighter text-[#0A192F]">MUKONDE BUPE</h1>
          <p className="text-[10px] lg:text-xs font-semibold text-[#2D3748] opacity-70 uppercase tracking-widest">B.Sc ICT with Education | Technical Specialist</p>
        </div>
      </header>

      <main className="pt-32 pb-40 px-6 lg:px-12 max-w-7xl mx-auto space-y-24">
        
        {/* PROFESSIONAL SUMMARY SECTION */}
        <section id="summary" className="max-w-4xl">
          <div className="bg-[#0A192F] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
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

        {/* CORE COMPETENCIES */}
        <section id="competencies" className="space-y-8">
          <div className="flex items-center justify-between border-b-2 border-[#0A192F] pb-2">
            <h2 className="text-2xl font-black tracking-tight text-[#0A192F] uppercase inline-block">Core Competencies</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, i) => (
              <div 
                key={i} 
                className="bg-white border-2 border-[#0A192F] text-[#0A192F] px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg hover:bg-[#0A192F] hover:text-white transition-colors cursor-default"
              >
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
            <div className="bg-[#F7FAFC] p-4 lg:p-8 rounded-3xl border border-gray-200 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="w-10 h-10 text-[#0A192F]" />
                <div>
                  <h3 className="text-xl font-black text-[#0A192F]">Kwame Nkrumah University</h3>
                  <p className="text-xs font-bold text-[#2D3748] opacity-70">In association with Kabwe Institute of Technology</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-white">
                <div className="relative w-full aspect-[3/4] min-h-[500px]">
                   <Image 
                    src="/images/transcript.jpg" 
                    alt="Official Transcript Mukonde Bupe" 
                    fill 
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex items-center gap-4">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                <p className="text-xs font-bold text-blue-900 uppercase tracking-tight">Transcript Digitally Verified (Student ID: 2022045)</p>
              </div>
            </div>
          </section>

          {/* SELECTED PROJECTS GALLERY */}
          <section id="projects" className="space-y-8">
            <h2 className="text-2xl font-black tracking-tight text-[#0A192F] uppercase border-b-2 border-[#0A192F] pb-2 inline-block">Selected Projects</h2>
            <div className="grid gap-6">
              {projects.map((proj, i) => (
                <div key={i} className="group bg-white border border-gray-100 p-6 rounded-3xl shadow-xl transition-all border-l-8 border-l-[#0A192F]">
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
                        src="/images/transcript.jpg" 
                        alt="Project Thumbnail" 
                        fill 
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-black text-[#0A192F]">{proj.title}</h4>
                      <p className="text-sm font-medium text-[#2D3748] leading-snug">{proj.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-[#0A192F]/5 p-6 rounded-3xl border border-dashed border-[#0A192F]/20 flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#0A192F]" />
                <div>
                  <p className="text-sm font-black text-[#0A192F]">Degree Verification</p>
                  <p className="text-[10px] font-medium text-[#2D3748] opacity-70">B.Sc in Information Communication Technology with Education</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0A192F] text-white p-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 w-full">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:mukondebupe@gmail.com" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              <Mail className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">mukondebupe@gmail.com</span>
            </a>
            <a href="tel:0975606376" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">0975606376</span>
            </a>
            <a href="https://www.linkedin.com/in/bupe-mukonde-74b0153bb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              <Linkedin className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">LinkedIn</span>
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleDownload} 
              className="bg-white text-[#0A192F] hover:bg-gray-200 font-black uppercase tracking-widest text-[10px] px-6 py-2 rounded-2xl flex items-center gap-2 shadow-xl transition-transform active:scale-95"
            >
              <Download className="w-3 h-3" />
              Download Full Transcript
            </Button>
            <div className="hidden lg:flex items-center gap-4 bg-white/10 px-4 py-2 rounded-2xl">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Official Transcript Attached (Student 2022045)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
