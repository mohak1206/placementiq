import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ activePage }) => {
  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Resume Analyzer', path: '/analyzer', icon: 'document_scanner' },
    { name: 'Mock Interview', path: '/interview', icon: 'interpreter_mode' },
    { name: 'Progress', path: '#', icon: 'trending_up' },
    { name: 'Settings', path: '#', icon: 'settings' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 fixed inset-y-0 left-0 bg-background/80 backdrop-blur-md border-r border-border z-50">
      {/* Logo & Subtitle */}
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">model_training</span>
          <span className="text-xl font-heading font-bold text-primary">PlacementIQ</span>
        </Link>
        <p className="text-xs text-text-muted mt-2 font-medium tracking-wide">AI-Powered Career Suite</p>
      </div>

      {/* Action Button */}
      <div className="px-6 pb-6">
        <Link to="/analyzer" className="flex items-center justify-center w-full gap-2 bg-primary-button hover:bg-primary-button/90 text-white py-2.5 rounded-lg transition-colors duration-200 font-medium">
          <span className="material-symbols-outlined text-[20px]">add</span>
          New Analysis
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navLinks.map((link) => {
          const isActive = activePage === link.name;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-primary/10 text-primary border-r-2 border-primary rounded-r-none' 
                  : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${isActive ? 'icon-filled' : ''}`}>
                {link.icon}
              </span>
              <span className="font-medium text-sm">{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Links */}
      <div className="p-4 border-t border-border/50">
        <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-white/5 hover:text-text-primary transition-colors duration-200">
          <span className="material-symbols-outlined text-[22px]">help</span>
          <span className="font-medium text-sm">Help Center</span>
        </Link>
        <button className="flex items-center w-full gap-3 px-3 py-2.5 rounded-lg text-danger hover:bg-danger/10 transition-colors duration-200">
          <span className="material-symbols-outlined text-[22px]">logout</span>
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
