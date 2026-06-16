
"use client";

import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Matter: any;
  }
}

export function GravityPhysics({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isActive, setIsActive] = useState(false);
  const engineRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const Matter = window.Matter;
    if (!Matter) return;

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

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Boundaries
    const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 30, window.innerWidth, 60, { isStatic: true });
    const leftWall = Bodies.rectangle(-30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true });
    const rightWall = Bodies.rectangle(window.innerWidth + 30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true });
    const ceiling = Bodies.rectangle(window.innerWidth / 2, -30, window.innerWidth, 60, { isStatic: true });
    
    Composite.add(world, [ground, leftWall, rightWall, ceiling]);

    // Select shatterable elements
    const elements = document.querySelectorAll('.shatter');
    const bodiesMap = new Map();

    elements.forEach((el: any) => {
      const rect = el.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        restitution: 0.5,
        friction: 0.1,
        render: { visible: false }
      });

      bodiesMap.set(el, body);
      Composite.add(world, body);
      
      // Hide original and prepare for transform update
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
      requestAnimationFrame(update);
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
      Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight + 30 });
      Matter.Body.setPosition(rightWall, { x: window.innerWidth + 30, y: window.innerHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Engine.clear(engine);
      Render.stop(render);
      render.canvas.remove();
    };
  }, [isActive]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-x-hidden">
      {children}
    </div>
  );
}
