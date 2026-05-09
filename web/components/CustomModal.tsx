"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_goals: '',
    current_stage: 'Idea phase'
  });

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStatus('idle');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xqenqonp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', project_goals: '', current_stage: 'Idea phase' });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setStatus('idle');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('idle');
      alert('Error sending request. Please check your connection.');
    }
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-lg transition-opacity duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-y-auto overflow-x-hidden xl:overflow-hidden max-h-[85vh] xl:max-h-none animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 xl:top-6 xl:right-6 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-5 xl:p-12 flex flex-col items-center">
          <div className="text-center mb-4 xl:mb-10">
            <h2 className="text-xl xl:text-3xl font-bold text-slate-900 mb-1 xl:mb-2">Let's build your system</h2>
            <p className="text-[13px] xl:text-base text-slate-500 font-medium">Tell us about your business. We'll build exactly what you need.</p>
          </div>

          <form className="w-full flex flex-col gap-3 xl:gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-6 w-full">
              <div className="flex flex-col gap-1 xl:gap-2">
                <label className="text-[10px] xl:text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="Alex Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 xl:px-4 xl:py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all text-xs xl:text-base text-slate-900 placeholder:text-slate-300"
                />
              </div>
              <div className="flex flex-col gap-1 xl:gap-2">
                <label className="text-[10px] xl:text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Work Email</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 xl:px-4 xl:py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all text-xs xl:text-base text-slate-900 placeholder:text-slate-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 xl:gap-2">
              <label className="text-[10px] xl:text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">PROJECT & GOALS</label>
              <textarea 
                required
                name="project_goals"
                rows={4}
                placeholder="Tell us about your product, target audience, and specific timeline..."
                value={formData.project_goals}
                onChange={(e) => setFormData({ ...formData, project_goals: e.target.value })}
                className="w-full px-3 py-2 xl:px-4 xl:py-3 h-[70px] xl:h-auto bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all text-xs xl:text-base text-slate-900 placeholder:text-slate-300 resize-none"
              />
            </div>

            <div className="flex flex-col gap-1 xl:gap-2">
              <label className="text-[10px] xl:text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">CURRENT STAGE</label>
              <div className="relative">
                <select 
                  name="current_stage"
                  value={formData.current_stage}
                  onChange={(e) => setFormData({ ...formData, current_stage: e.target.value })}
                  className="w-full px-3 py-2 xl:px-4 xl:py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all text-xs xl:text-base text-slate-900 appearance-none cursor-pointer"
                >
                  <option>Idea phase</option>
                  <option>Ready to launch</option>
                  <option>Generating revenue</option>
                  <option>Scaling</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={status !== 'idle'}
              className={`w-full py-2.5 xl:py-4 text-[15px] xl:text-base font-bold rounded-xl shadow-lg transition-all duration-300 mt-0 xl:mt-2 flex items-center justify-center gap-2 ${
                status === 'success' ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-slate-900'
              } ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {status === 'idle' && "Request Custom Proposal"}
              {status === 'submitting' && (
                <>
                  <svg className="animate-spin h-4 w-4 xl:h-5 xl:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              )}
              {status === 'success' && "Request Sent!"}
            </button>

            <button 
              type="button"
              onClick={onClose}
              className="text-slate-400 text-xs xl:text-sm font-medium hover:text-slate-600 transition-colors mt-1 xl:mt-2 mx-auto"
            >
              Back to plans
            </button>
          </form>
        </div>
      </div>

    </div>,
    document.body
  );
};

export default CustomModal;
