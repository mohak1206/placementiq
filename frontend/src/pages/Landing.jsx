import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-button/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-success/10 blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">model_training</span>
            <span className="text-xl font-heading font-bold text-primary">PlacementIQ</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Sign In</Link>
            <Link to="/analyzer" className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-8">
            <span className="text-gradient">Match</span> your resume.<br/>
            <span className="text-gradient">Ace</span> your interview.<br/>
            Get placed.
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            AI-powered career preparation platform designed for college students. Get instant ATS feedback and practice with our realistic technical interview simulator.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/analyzer" className="w-full sm:w-auto bg-primary-button hover:bg-primary-button/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 glow-indigo flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">upload_file</span>
              Analyze My Resume
            </Link>
            <Link to="/interview" className="w-full sm:w-auto bg-transparent border border-border hover:border-primary/50 text-text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">mic</span>
              Try Mock Interview
            </Link>
          </div>
        </div>

        {/* Features Bento Grid */}
        <div id="features" className="mt-32">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Supercharge your prep</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Card 1 */}
            <div className="glass-card rounded-2xl p-8 md:col-span-2 hover:border-primary/50 transition-colors duration-200 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">document_scanner</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">document_scanner</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Resume Matching Engine</h3>
              <p className="text-text-secondary max-w-md">
                Upload your resume and the target job description. Our AI analyzes the semantic match and identifies exactly what recruiters are looking for.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card rounded-2xl p-8 md:col-span-1 hover:border-primary/50 transition-colors duration-200 glow-indigo relative overflow-hidden">
              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 rounded-full border-4 border-primary-button flex items-center justify-center bg-background/50 backdrop-blur-sm">
                  <span className="font-mono font-bold text-lg text-primary-button">92%</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary-button/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary-button text-2xl">score</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 mt-8">Live ATS Scoring</h3>
              <p className="text-text-secondary text-sm">
                Get instant feedback on how Applicant Tracking Systems parse and score your profile.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card rounded-2xl p-8 md:col-span-1 hover:border-primary/50 transition-colors duration-200">
              <div className="w-12 h-12 rounded-xl bg-danger/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-danger text-2xl">troubleshoot</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Skill Gap Analysis</h3>
              <p className="text-text-secondary text-sm">
                Discover missing keywords and technologies that are preventing your resume from getting shortlisted.
              </p>
            </div>

            {/* Card 4 */}
            <div className="glass-card rounded-2xl p-8 md:col-span-2 hover:border-primary/50 transition-colors duration-200 relative overflow-hidden">
               <div className="absolute -right-10 -bottom-10 opacity-10">
                <span className="material-symbols-outlined text-[150px]">interpreter_mode</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-success text-2xl">interpreter_mode</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">AI Interview Simulator</h3>
              <p className="text-text-secondary max-w-md">
                Practice technical and behavioral rounds with a realistic AI interviewer. Receive real-time feedback on your communication and technical accuracy.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">model_training</span>
            <span className="text-lg font-heading font-bold text-primary">PlacementIQ</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} PlacementIQ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
