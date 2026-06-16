"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Linkedin, Mail, Phone, ExternalLink, GraduationCap, Code, FileText, Download, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Home() {
  const professionalSummary = "A hybrid technical specialist merging object-oriented programming, network infrastructure, and pedagogical instruction. Expert in creating meticulous systems documentation and instructional systems designs with a focused background in ICT education and project management from Kwame Nkrumah University.";

  const skills = [
    "Object Oriented Programming", "Computer Networks", "Computer Architecture",
    "Project Management", "Systems Documentation", "Educational Management",
    "Curriculum Design", "Full-Stack Dev", "Entrepreneurship"
  ];

  const transcriptGrades = [
    { code: "EDU 400", name: "INTRODUCTION TO EDUCATIONAL MANAGEMENT", grade: "B" },
    { code: "EDU 420", name: "CURRICULUM THEORY AND PRACTICE", grade: "C+" },
    { code: "ICT 400", name: "COMPUTER NETWORKS", grade: "C+" },
    { code: "ICT 410", name: "OBJECT ORIENTED PROGRAMMING", grade: "B+" },
    { code: "BSS 420", name: "ENTREPRENEURSHIP", grade: "C+" },
    { code: "BSS 430", name: "PROJECT MANAGEMENT", grade: "C+" },
    { code: "ICT 330", name: "COMPUTER ARCHITECTURE", grade: "B" }
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

  const projectImg = PlaceHolderImages?.find(img => img.id === 'project-placeholder');
  const credentialImg = PlaceHolderImages?.find(img => img.id === 'credential-placeholder');

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
              
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
                {/* Visual Transcript Digital Twin */}
                <div className="bg-[#fff9f9] p-6 sm:p-10 font-serif text-[10px] sm:text-xs text-gray-800 space-y-6 min-h-[650px] flex flex-col shadow-inner relative">
                  {/* Watermark/Seal Effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                     <div className="w-96 h-96 border-[20px] border-blue-900 rounded-full flex items-center justify-center text-6xl font-black text-center">
                        KABWE INSTITUTE<br/>OF TECHNOLOGY
                     </div>
                  </div>

                  <div className="text-center border-b-2 border-gray-800 pb-4 space-y-1 relative z-10">
                    <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-blue-900">KWAME NKRUMAH UNIVERSITY</h4>
                    <p className="text-[9px] sm:text-[10px] italic uppercase tracking-widest text-blue-800 font-bold">In association with</p>
                    <p className="text-sm sm:text-base font-black text-blue-900">KABWE INSTITUTE OF TECHNOLOGY</p>
                    <p className="text-xs font-black pt-4 text-gray-900 border-t border-gray-200 mt-2 tracking-[0.2em] uppercase">Student Transcript of Results</p>
                  </div>
                  
                  <div className="space-y-1 py-4 border-b border-gray-200 relative z-10">
                    <p className="font-bold text-gray-500 uppercase text-[9px]">NAME: <span className="text-gray-900">MUKONDE BUPE'S TRANSCRIPT OF RESULTS</span></p>
                    <p className="font-bold text-gray-500 uppercase text-[9px]">STUDENT NUMBER: <span className="text-gray-900">2022045</span></p>
                    <p className="font-bold text-gray-900 mt-4 underline decoration-double">2025 (YEAR 4)</p>
                  </div>

                  <div className="flex-grow relative z-10">
                    <table className="w-full text-left border-collapse mt-4">
                      <thead>
                        <tr className="border-b-2 border-gray-300 text-[8px] sm:text-[9px] text-gray-600">
                          <th className="py-2 font-black w-20">CODE</th>
                          <th className="py-2 font-black">COURSE TITLE</th>
                          <th className="py-2 text-right font-black w-16">GRADE</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {transcriptGrades.map((item, idx) => (
                          <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                            <td className="py-3 font-bold text-gray-900">{item.code}</td>
                            <td className="py-3 text-gray-700 font-medium">{item.name}</td>
                            <td className="py-3 text-right font-black text-blue-900">
                              <span className="bg-white/80 border border-gray-100 px-2 py-1 rounded shadow-sm">{item.grade}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-300 relative z-10">
                    <div className="bg-gray-100/50 p-3 rounded-lg border border-gray-200 mb-6">
                      <p className="text-[9px] sm:text-[10px] font-bold text-gray-800 leading-tight uppercase">
                        HE WILL BE AWARDED A BACHELOR OF SCIENCE IN INFORMATION COMMUNICATION TECHNOLOGY WITH EDUCATION WITH A CREDIT LATER IN THE YEAR
                      </p>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="space-y-4">
                        <div className="w-24 h-px bg-gray-400"></div>
                        <p className="text-[8px] font-black uppercase text-gray-400">PRINCIPAL</p>
                      </div>

                      {/* Date Stamp Visual */}
                      <div className="relative w-24 h-24 border-4 border-blue-600/30 rounded-full flex flex-col items-center justify-center -rotate-12 transform scale-75 lg:scale-100">
                         <div className="text-[8px] font-black text-blue-600/60 uppercase">KIT PRINCIPAL</div>
                         <div className="text-sm font-black text-red-600/80 my-1">21 APR 2026</div>
                         <div className="text-[7px] font-black text-blue-600/60 uppercase text-center px-2">OFFICIAL<br/>VERIFICATION</div>
                      </div>

                      <div className="text-right space-y-4">
                        <div className="w-24 h-px bg-gray-400 ml-auto"></div>
                        <p className="text-[8px] font-black uppercase text-gray-400">REGISTRAR</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-gray-100 flex justify-between items-center text-[7px] text-gray-400 font-bold uppercase tracking-widest italic">
                    <span>A key to the understanding of the grades is on the reverse side of this sheet</span>
                    <span>Page 38</span>
                  </div>
                </div>

                {/* Overlay Action */}
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-20">
                  <div className="bg-white p-4 rounded-full shadow-2xl transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <Download className="w-8 h-8 text-[#0A192F]" />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex items-center gap-4">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                <p className="text-xs font-bold text-blue-900 uppercase tracking-tight">Transcript Digitally Verified (Ref: 2022045)</p>
              </div>
            </div>
          </section>

          {/* SELECTED PROJECTS GALLERY */}
          <section id="projects" className="space-y-8">
            <h2 className="text-2xl font-black tracking-tight text-[#0A192F] uppercase border-b-2 border-[#0A192F] pb-2 inline-block">Selected Projects</h2>
            <div className="grid gap-6">
              {projects.map((proj, i) => (
                <div key={i} className="group bg-white border border-gray-100 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-l-8 border-l-[#0A192F]">
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <a href="mailto:mukondebupe@gmail.com" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
              <Mail className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Email</span>
            </a>
            <a href="tel:+260" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
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
            <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Official Transcript Attached (Student 2022045)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
