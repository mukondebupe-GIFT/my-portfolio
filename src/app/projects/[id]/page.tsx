
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ArrowLeft, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProjectDetail() {
  const { id } = useParams();

  const projectsData = {
    "1": {
      title: "Store Flow",
      category: "Development",
      type: "video",
      src: "/videos/project1.mp4",
      description: "A comprehensive store management system designed for local businesses. This demonstration covers the core functionalities including inventory tracking, sales processing, and reporting analytics."
    },
    "2": {
      title: "Q.R.H Quick Response Health Card",
      category: "Documentation",
      type: "video",
      src: "/videos/project2.mp4",
      description: "An innovative system for clinical facilities to streamline patient identification and data retrieval. This video documents the workflow optimization and technical architecture of the Q.R.H solution."
    },
    "3": {
      title: "Visual Operation Simulation",
      category: "Education",
      type: "gallery",
      images: [
        "/images/gallery3/1.webp",
        "/images/gallery3/2.webp",
        "/images/gallery3/3.webp",
        "/images/gallery3/4.webp",
        "/images/gallery3/5.webp",
        "/images/gallery3/6.webp",
        "/images/gallery3/7.webp",
        "/images/gallery3/8.webp",
        "/images/gallery3/9.webp",
      ],
      description: "An immersive educational tool for medical practitioners. This gallery showcases the simulation environment and the tactile interface designed to visualize the internal workings of the human body."
    }
  };

  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link href="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A192F] text-white selection:bg-blue-500/30">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A192F]/80 backdrop-blur-lg border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 gap-2 font-bold uppercase tracking-wider text-xs">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="hidden md:block">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50">Project Showcase</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* TITLE SECTION */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              {project.title}
            </h1>
          </div>

          {/* CONTENT AREA */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {project.type === 'video' ? (
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10">
                  <video 
                    src={project.src} 
                    controls 
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images?.map((img, index) => (
                    <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden group border border-white/5 bg-white/5 shadow-xl">
                      <Image 
                        src={img} 
                        alt={`Gallery item ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized={true}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm space-y-6">
                <div className="flex items-center gap-3">
                  <Info className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold">Project Insights</h3>
                </div>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Industry</span>
                    <span className="font-bold">{project.category}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Format</span>
                    <span className="font-bold uppercase text-[10px] tracking-widest">{project.type}</span>
                  </div>
                </div>
              </div>

              <div className="p-1">
                <Link href="/">
                  <Button className="w-full h-16 rounded-2xl bg-white text-[#0A192F] hover:bg-gray-200 font-black uppercase tracking-widest transition-transform active:scale-[0.98]">
                    Contact for Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER STRIP */}
      <footer className="py-12 border-t border-white/5 text-center opacity-30">
        <p className="text-xs font-bold uppercase tracking-widest">© 2024 MUKONDE BUPE • PROTOTYPE SHOWCASE</p>
      </footer>
    </div>
  );
}
