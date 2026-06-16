
"use client";

import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Matter: any;
  }
}

interface GravityPhysicsProps {
  children: React.ReactNode;
  enabled: boolean;
}

export function GravityPhysics({ children, enabled }: GravityPhysicsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<any>(null);
  const renderRef = useRef<any>(null);
  const runnerRef = useRef<any>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // If physics is disabled, clean up everything and return children normally
    if (!enabled) {
      if (engineRef.current) {
        const Matter = window.Matter;
        if (Matter) {
          Matter.Engine.clear(engineRef.current);
          if (renderRef.current) {
            Matter.Render.stop(renderRef.current);
            renderRef.current.canvas.remove();
          }
          if (runnerRef.current) {
            Matter.Runner.stop(runnerRef.current);
          }
        }
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        
        // Restore elements
        const elements = document.querySelectorAll('.shatter');
        elements.forEach((el: any) => {
          el.style.visibility = 'visible';
          el.style.position = '';
          el.style.transform = '';
          el.style.left = '';
          el.style.top = '';
          el.style.zIndex = '';
        });
      }
      return;
    }

    const Matter = window.Matter;
    if (!Matter || !containerRef.current) return;

    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint, Composite } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent'
      }
    });
    renderRef.current = render;

    Render.run(render);
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Boundaries
    const thickness = 60;
    const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + thickness / 2, window.innerWidth, thickness, { isStatic: true });
    const leftWall = Bodies.rectangle(-thickness / 2, window.innerHeight / 2, thickness, window.innerHeight, { isStatic: true });
    const rightWall = Bodies.rectangle(window.innerWidth + thickness / 2, window.innerHeight / 2, thickness, window.innerHeight, { isStatic: true });
    const ceiling = Bodies.rectangle(window.innerWidth / 2, -thickness / 2, window.innerWidth, thickness, { isStatic: true });
    
    Composite.add(world, [ground, leftWall, rightWall, ceiling]);

    // Select shatterable elements
    const elements = document.querySelectorAll('.shatter');
    const bodiesMap = new Map();

    elements.forEach((el: any) => {
      const rect = el.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        restitution: 0.6,
        friction: 0.1,
        render: { visible: false }
      });

      bodiesMap.set(el, body);
      Composite.add(world, body);
      
      // Setup styles for physics manipulation
      el.style.visibility = 'hidden';
      el.style.position = 'fixed';
      el.style.margin = '0';
      el.style.zIndex = '50';
    });

    // Sync loop
    const update = () => {
      bodiesMap.forEach((body, el) => {
        const { x, y } = body.position;
        const angle = body.angle;
        el.style.visibility = 'visible';
        el.style.left = `${x - el.offsetWidth / 2}px`;
        el.style.top = `${y - el.offsetHeight / 2}px`;
        el.style.transform = `rotate(${angle}rad)`;
      });
      animationFrameRef.current = requestAnimationFrame(update);
    };
    update();

    // Mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    Composite.add(world, mouseConstraint);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight + thickness / 2 });
      Matter.Body.setPosition(rightWall, { x: window.innerWidth + thickness / 2, y: window.innerHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Engine.clear(engine);
      Render.stop(render);
      if (render.canvas) render.canvas.remove();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [enabled]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      {children}
    </div>
  );
}
