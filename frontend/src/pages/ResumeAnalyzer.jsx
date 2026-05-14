import React, { useState, useRef } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === 'application/pdf') {
        setFile(droppedFile);
        setError('');
      } else {
        setError('Please upload a valid PDF file.');
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError('');
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError('Please upload a resume first.');
      return;
    }
    if (!jobDescription.trim()) {
      setError('Please provide a job description.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('job_description', jobDescription);

      const response = await axios.post('http://127.0.0.1:8000/api/analyze', formData);
      setResults(response.data);
    } catch (err) {
      setError('Failed to analyze resume. Please try again or check if the backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activePage="analyzer" />
      
      <main className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="shrink-0 bg-background/80 backdrop-blur-md border-b border-border/50 px-8 py-5 flex items-center justify-between z-40">
          <div>
            <h1 className="text-2xl font-heading font-bold flex items-center gap-3">
              Resume Analyzer
              <span className="bg-primary/10 border border-primary/30 text-primary text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 cursor-pointer hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-[14px]">edit</span>
                Software Engineer
              </span>
            </h1>
          </div>
        </header>

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT PANEL */}
            <div className="space-y-6">
              
              {/* Upload Zone */}
              <div 
                className="custom-dashed-border rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer group bg-card transition-colors hover:bg-card/80"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
              >
                <span className="material-symbols-outlined text-[64px] text-text-muted mb-4 group-hover:text-primary transition-colors">description</span>
                <h3 className="text-xl font-heading font-semibold mb-2">Drag & drop your PDF</h3>
                <p className="text-text-secondary mb-6">or click to browse from your device</p>
                <button className="bg-transparent border border-border group-hover:border-primary/50 text-text-primary px-6 py-2 rounded-lg font-medium transition-colors">
                  Select File
                </button>
                <p className="text-xs text-text-muted mt-6">Supports .pdf up to 5MB</p>
                <input 
                  type="file" 
                  accept=".pdf" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>

              {file && (
                <div className="glass-card rounded-xl p-4 flex items-center justify-between border-success/30 bg-success/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-success">check_circle</span>
                    <div>
                      <p className="text-sm font-medium text-text-primary">{file.name}</p>
                      <p className="text-xs text-text-muted">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <button onClick={() => setFile(null)} className="text-text-muted hover:text-danger transition-colors p-1">
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>
              )}

              {/* Job Description Textarea */}
              <div className="glass-card rounded-xl overflow-hidden focus-within:border-primary transition-colors">
                <textarea 
                  className="w-full h-48 bg-transparent p-5 text-sm text-text-primary placeholder:text-text-muted resize-none focus:outline-none"
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
              </div>

              {error && (
                <div className="bg-danger/10 border border-danger/30 text-danger text-sm p-4 rounded-lg flex items-start gap-2">
                  <span className="material-symbols-outlined text-[20px]">error</span>
                  <p>{error}</p>
                </div>
              )}

              {/* Analyze Button */}
              <button 
                onClick={handleAnalyze}
                disabled={loading || !file || !jobDescription}
                className="w-full bg-primary-button hover:bg-primary-button/90 disabled:opacity-50 disabled:hover:bg-primary-button text-white py-4 rounded-xl font-semibold transition-all duration-200 glow-indigo flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">model_training</span>
                    Analyze Resume
                  </>
                )}
              </button>
            </div>

            {/* RIGHT PANEL - Results */}
            <div className="space-y-6">
              {!results && !loading ? (
                <div className="h-full min-h-[400px] glass-card rounded-xl flex flex-col items-center justify-center text-text-muted p-8 text-center border-dashed">
                  <span className="material-symbols-outlined text-6xl mb-4 opacity-50">analytics</span>
                  <p>Upload a resume and job description to see your match analysis.</p>
                </div>
              ) : loading ? (
                // Skeletons
                <div className="space-y-6 animate-pulse">
                  <div className="h-48 glass-card rounded-xl bg-card"></div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="h-40 glass-card rounded-xl bg-card"></div>
                    <div className="h-40 glass-card rounded-xl bg-card"></div>
                  </div>
                  <div className="h-64 glass-card rounded-xl bg-card"></div>
                </div>
              ) : results ? (
                <>
                  {/* Overall Match */}
                  <div className="glass-card rounded-xl p-8 glow-active flex items-center gap-8">
                    <div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-full bg-background" style={{
                      background: `conic-gradient(var(--color-primary-button) ${results.match_score}%, transparent 0)`
                    }}>
                      <div className="absolute inset-2 bg-card rounded-full flex flex-col items-center justify-center border border-border/50">
                        <span className="font-mono text-3xl font-bold text-white">{results.match_score}%</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">Overall Match</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{results.summary}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Matching */}
                    <div className="glass-card rounded-xl p-6">
                      <h4 className="flex items-center gap-2 text-success font-semibold mb-4">
                        <span className="material-symbols-outlined">check_circle</span>
                        Matching Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {results.matching_skills.map((skill, i) => (
                          <span key={i} className="bg-success/10 border border-success/30 text-success text-xs px-3 py-1.5 rounded-full font-mono">
                            {skill}
                          </span>
                        ))}
                        {results.matching_skills.length === 0 && <span className="text-text-muted text-sm">None identified</span>}
                      </div>
                    </div>
                    {/* Missing */}
                    <div className="glass-card rounded-xl p-6">
                      <h4 className="flex items-center gap-2 text-danger font-semibold mb-4">
                        <span className="material-symbols-outlined">cancel</span>
                        Missing Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {results.missing_skills.map((skill, i) => (
                          <span key={i} className="bg-danger/10 border border-danger/30 text-danger text-xs px-3 py-1.5 rounded-full font-mono">
                            {skill}
                          </span>
                        ))}
                        {results.missing_skills.length === 0 && <span className="text-text-muted text-sm">None identified</span>}
                      </div>
                    </div>
                  </div>

                  {/* Improvement Areas */}
                  <div className="glass-card rounded-xl p-6">
                    <h4 className="text-lg font-heading font-semibold mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">lightbulb</span>
                      Key Improvement Areas
                    </h4>
                    <div className="space-y-6">
                      {results.suggestions.map((suggestion, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center flex-shrink-0 font-mono text-sm font-bold">
                            {(i + 1).toString().padStart(2, '0')}
                          </div>
                          <p className="text-text-secondary text-sm pt-1 leading-relaxed">
                            {suggestion}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Strengths */}
                  <div className="glass-card rounded-xl p-6">
                    <h4 className="text-lg font-heading font-semibold mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-success">thumb_up</span>
                      Key Strengths
                    </h4>
                    <ul className="space-y-3">
                      {results.strengths.map((strength, i) => (
                        <li key={i} className="flex gap-3 text-text-secondary text-sm">
                           <span className="material-symbols-outlined text-success text-[18px] shrink-0">done</span>
                           {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                </>
              ) : null}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumeAnalyzer;
