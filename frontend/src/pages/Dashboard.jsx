import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activePage="Dashboard" />
      
      <main className="flex-1 md:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 px-8 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-heading font-bold">Good morning, Mohak <span className="inline-block animate-bounce">👋</span></h1>
            <p className="text-text-muted text-sm mt-1">Here is what's happening with your job search today.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-border flex items-center justify-center relative hover:bg-border/80 transition-colors">
              <span className="material-symbols-outlined text-text-secondary">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="font-heading font-bold text-primary">M</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Global Match Score - Span 4 */}
            <div className="lg:col-span-4 glass-card rounded-2xl p-6 glow-active flex flex-col items-center justify-center relative overflow-hidden">
              <h3 className="text-lg font-heading font-semibold self-start mb-6 w-full">Global Match Score</h3>
              
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* SVG Circular Progress Ring */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="var(--color-border)" strokeWidth="8" fill="none" />
                  <circle 
                    cx="50" cy="50" r="40" 
                    stroke="var(--color-primary-button)" 
                    strokeWidth="8" 
                    fill="none" 
                    strokeDasharray="251.2" 
                    strokeDashoffset="37.68" 
                    className="drop-shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-mono font-bold text-white">85<span className="text-2xl text-text-muted">%</span></span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 bg-success/10 border border-success/20 px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-success text-sm">trending_up</span>
                <span className="text-success text-sm font-medium">Top 15% of candidates</span>
              </div>
            </div>

            {/* Skill Growth Trend - Span 8 */}
            <div className="lg:col-span-8 glass-card rounded-2xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-heading font-semibold">Skill Growth Trend</h3>
                  <p className="text-sm text-text-muted">Last 6 months progression</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary-button shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                    <span className="text-xs text-text-secondary">Match Score</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                    <span className="text-xs text-text-secondary">Technical Skills</span>
                  </div>
                </div>
              </div>

              <div className="h-48 w-full mt-4 relative">
                {/* Simulated Chart using SVG */}
                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="25" x2="400" y2="25" stroke="var(--color-border)" strokeDasharray="4 4" />
                  <line x1="0" y1="50" x2="400" y2="50" stroke="var(--color-border)" strokeDasharray="4 4" />
                  <line x1="0" y1="75" x2="400" y2="75" stroke="var(--color-border)" strokeDasharray="4 4" />
                  
                  {/* Fill Gradients */}
                  <defs>
                    <linearGradient id="indigoGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-primary-button)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--color-primary-button)" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-success)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--color-success)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Area Fills */}
                  <path d="M0 80 Q 50 60 100 70 T 200 40 T 300 30 T 400 20 L 400 100 L 0 100 Z" fill="url(#indigoGrad)" />
                  <path d="M0 90 Q 60 80 120 85 T 240 50 T 320 60 T 400 30 L 400 100 L 0 100 Z" fill="url(#emeraldGrad)" />

                  {/* Line Paths */}
                  <path d="M0 80 Q 50 60 100 70 T 200 40 T 300 30 T 400 20" fill="none" stroke="var(--color-primary-button)" strokeWidth="3" className="drop-shadow-[0_4px_6px_rgba(99,102,241,0.4)]" />
                  <path d="M0 90 Q 60 80 120 85 T 240 50 T 320 60 T 400 30" fill="none" stroke="var(--color-success)" strokeWidth="3" className="drop-shadow-[0_4px_6px_rgba(16,185,129,0.4)]" />
                </svg>

                {/* X-Axis Labels */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-text-muted">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                </div>
              </div>
            </div>

            {/* Interviews Done - Span 4 */}
            <div className="lg:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-heading font-semibold">Mock Interviews</h3>
                  <span className="material-symbols-outlined text-text-muted">interpreter_mode</span>
                </div>
                <div className="text-3xl font-mono font-bold mt-2">12 <span className="text-lg text-text-muted font-sans font-normal">/ 20 Target</span></div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2 text-text-secondary">
                  <span>Progress</span>
                  <span className="font-mono">60%</span>
                </div>
                <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[60%] shadow-[0_0_10px_rgba(207,188,255,0.5)]"></div>
                </div>
              </div>
            </div>

            {/* ATS Score - Span 4 */}
            <div className="lg:col-span-4 glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-primary-button/50 transition-colors">
              <div className="absolute -right-6 -top-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">document_scanner</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">ATS Resume Score</h3>
              <p className="text-sm text-text-muted mb-6">Based on latest "Software Engineer" role</p>
              <div className="text-5xl font-mono font-bold text-gradient inline-block">92%</div>
              <div className="mt-4 text-sm text-success flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                Highly likely to pass
              </div>
            </div>

            {/* Top Skills Gap - Span 4 */}
            <div className="lg:col-span-4 glass-card rounded-2xl p-6">
              <h3 className="text-lg font-heading font-semibold mb-6">Top Skills to Learn</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-text-primary">GraphQL</span>
                    <span className="font-mono text-danger">High Impact</span>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-danger rounded-full w-[85%] shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-text-primary">Docker / CI/CD</span>
                    <span className="font-mono text-[#F59E0B]">Medium Impact</span>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-[#F59E0B] rounded-full w-[65%] shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity Feed - Span 8 */}
            <div className="lg:col-span-8 glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-heading font-semibold">Recent Activity</h3>
                <button className="text-sm text-primary hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">document_scanner</span>
                  </div>
                  <div>
                    <p className="text-text-primary font-medium">Resume Analysis Completed</p>
                    <p className="text-sm text-text-muted mt-1">Match score improved from 78% to 85% for Frontend Developer role.</p>
                    <p className="text-xs text-text-muted mt-2 font-mono">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-success text-[20px]">interpreter_mode</span>
                  </div>
                  <div>
                    <p className="text-text-primary font-medium">Mock Interview Completed</p>
                    <p className="text-sm text-text-muted mt-1">Scored 8.5/10 in System Design round. Feedback: Good communication, needs work on scalability concepts.</p>
                    <p className="text-xs text-text-muted mt-2 font-mono">Yesterday</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-danger text-[20px]">warning</span>
                  </div>
                  <div>
                    <p className="text-text-primary font-medium">Skill Gap Detected</p>
                    <p className="text-sm text-text-muted mt-1">3 new job postings require "GraphQL". Recommended to add to learning path.</p>
                    <p className="text-xs text-text-muted mt-2 font-mono">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions - Span 4 */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-4">
              <Link to="/analyzer" className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-primary-button/10 hover:border-primary-button/50 transition-all duration-200 group">
                <div className="w-12 h-12 rounded-full bg-primary-button text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                  <span className="material-symbols-outlined">upload</span>
                </div>
                <h4 className="font-heading font-semibold text-text-primary">Upload New Resume</h4>
                <p className="text-xs text-text-muted mt-2">PDF files up to 5MB</p>
              </Link>
              
              <Link to="/interview" className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 border-dashed border-2 transition-all duration-200 group">
                <div className="w-12 h-12 rounded-full border-2 border-border text-text-primary flex items-center justify-center mb-4 group-hover:border-primary group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">play_arrow</span>
                </div>
                <h4 className="font-heading font-semibold text-text-primary">Start Interview</h4>
                <p className="text-xs text-text-muted mt-2">Practice an AI session</p>
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
