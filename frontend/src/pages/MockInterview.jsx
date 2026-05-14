import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const MockInterview = () => {
  const [response, setResponse] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activePage="interview" />
      
      <main className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="shrink-0 bg-background/80 backdrop-blur-md border-b border-border/50 px-8 py-5 flex items-center justify-between z-40">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[28px]">interpreter_mode</span>
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-text-primary">Software Engineer - Backend</h1>
              <p className="text-sm text-text-muted">Technical Interview</p>
            </div>
          </div>
          
          <div className="w-64">
            <div className="flex justify-between text-sm mb-2 text-text-secondary">
              <span className="font-medium">Question 3 of 10</span>
            </div>
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-primary-button rounded-full w-[30%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
            </div>
          </div>
        </header>

        {/* Two Panel Layout */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          
          {/* LEFT PANEL - AI Interviewer */}
          <div className="w-full lg:w-1/2 border-r border-border/50 bg-[#0A0A0A] relative flex flex-col overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-primary-button/10 blur-[100px] pointer-events-none"></div>
            
            <div className="p-6 shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-button flex items-center justify-center glow-indigo">
                <span className="material-symbols-outlined text-white text-[20px]">smart_toy</span>
              </div>
              <span className="font-mono text-sm text-text-muted tracking-widest font-semibold">AI INTERVIEWER</span>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Context Bubble */}
              <div className="bg-[#1A1A1A] border border-border rounded-2xl rounded-tl-sm p-5 text-text-secondary text-sm leading-relaxed shadow-sm">
                Let's move on to system design. Imagine we are building a URL shortening service like bit.ly.
              </div>

              {/* Question Bubble */}
              <div className="bg-[#1E1E1E] border border-border border-l-4 border-l-primary-button rounded-2xl rounded-tl-sm p-6 shadow-md relative">
                <div className="absolute top-6 -left-[2px] w-1 h-8 bg-primary-button shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
                  How would you design the database schema for this service?
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Consider the volume of read vs write requests, and explain your choice of database (SQL vs NoSQL). What tables or collections would you create?
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - User Response */}
          <div className="w-full lg:w-1/2 bg-background relative flex flex-col p-6">
            <div className="flex justify-between items-center mb-4 shrink-0">
              <span className="font-mono text-sm text-text-muted tracking-widest font-semibold">YOUR RESPONSE</span>
              {isRecording && (
                <div className="flex items-center gap-2 px-3 py-1 bg-danger/10 border border-danger/20 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-danger animate-pulse"></span>
                  <span className="text-xs font-mono text-danger">Recording</span>
                </div>
              )}
            </div>

            {/* Textarea */}
            <div className="flex-1 relative">
              <textarea
                className={`w-full h-full glass-card rounded-2xl p-6 text-text-primary text-base leading-relaxed placeholder:text-text-muted/50 resize-none outline-none transition-all duration-200 ${isRecording ? 'border-primary/50 bg-card/60' : 'focus:border-primary/50'}`}
                placeholder="Type your response here or use the microphone to dictate..."
                value={response}
                onChange={(e) => setResponse(e.target.value)}
              ></textarea>

              {/* Floating Mic Control */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-card rounded-full px-6 py-3 flex items-center gap-6 shadow-lg border-primary/20">
                <span className="font-mono text-text-primary font-medium">
                  {isRecording ? '01:24' : '00:00'}
                </span>
                <div className="w-px h-6 bg-border"></div>
                
                {!isRecording ? (
                   <button 
                    onClick={() => setIsRecording(true)}
                    className="w-14 h-14 rounded-full bg-success hover:bg-success/90 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105"
                  >
                    <span className="material-symbols-outlined text-white icon-filled text-[28px]">mic</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => setIsRecording(false)}
                    className="w-14 h-14 rounded-full border-2 border-border hover:border-danger/50 text-text-primary hover:text-danger flex items-center justify-center transition-all bg-background/50"
                  >
                    <span className="material-symbols-outlined">stop</span>
                  </button>
                )}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-6 flex justify-between items-center shrink-0">
              <button className="px-6 py-3 border border-border text-text-muted hover:text-text-primary hover:border-border/80 rounded-xl font-medium transition-colors">
                Skip Question
              </button>
              <button className="bg-primary-button hover:bg-primary-button/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 glow-indigo flex items-center gap-2">
                Submit Answer
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MockInterview;
