
import React from 'react';
import type { ResumeData } from '../types';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react'; // Import Mail icon
import { RESUME_DATA } from '../constants';

interface MenuItem {
  id: number;
  title: string;
}

interface A4PageProps {
  children: React.ReactNode;
  pageNumber: number;
  title?: string;
  className?: string;
  menuItems: MenuItem[];
  onNavigate: (id: number) => void;
  onNext: () => void;
  onPrev: () => void;
  language?: 'es' | 'en';
  personalInfo?: ResumeData['personalInfo'];
  qualifiedRoles?: string[];
}

export const A4Page: React.FC<A4PageProps> = ({
  children,
  pageNumber,
  title,
  className = '',
  menuItems,
  onNavigate,
  onNext,
  onPrev,
  language = 'es',
  personalInfo,
  qualifiedRoles,
}) => {
  const effectivePersonalInfo = personalInfo || RESUME_DATA.personalInfo;
  const effectiveQualifiedRoles = qualifiedRoles || RESUME_DATA.qualifiedRoles;

  return (
    <div id={`page-${pageNumber}`} className="flex justify-center w-full py-8 px-2 sm:px-4">
      <div
        className={`
          relative bg-white text-ink shadow-page 
          w-full max-w-[210mm] min-h-[297mm] 
          flex
          transition-transform duration-300
          ${className}
        `}
      >
        {/* Header Decoration (Top bar) */}
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-900 z-10"></div>

        {/* Main Content Area (Left) */}
        <div className="flex-1 flex flex-col p-8 sm:p-10 md:p-12 pr-6 border-r border-slate-100">
          {title && (
            <div className="mb-8 border-b-2 border-slate-900 pb-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-wide uppercase">
                {pageNumber}. {title}
              </h2>
            </div>
          )}
          <div className="flex-grow">
            {children}
          </div>

          {/* Footer content area */}
          <div className="mt-auto pt-8 text-slate-400 text-xs font-sans">
            {language === 'en' ? 'Interactive CV' : 'CV Interactivo'} • Gonzalo Segura Taguas
          </div>
        </div>

        {/* Navigation Column (Right side, inside the page) */}
        <div className="w-56 flex-shrink-0 flex flex-col py-10 px-5 bg-white">

          {/* Profile Header in Sidebar */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-20 h-20 bg-slate-200 rounded-full overflow-hidden shadow-md mb-4 relative group">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEVItu03CE4TQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706956655016?e=2147483647&v=beta&t=q8NWXqZCm5n7m2V4VOoFCVXgjti1UZKNSRgyP2sQvJA"
                alt="Profile"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <h2 className="font-serif font-bold text-slate-900 text-sm leading-tight mb-2">
              {effectivePersonalInfo.name}
            </h2>

            <p className="text-[10px] text-blue-700 uppercase font-bold tracking-wider mb-4 leading-tight">
              {effectivePersonalInfo.title}
            </p>

            <div className="text-[9px] text-slate-500 space-y-1.5 font-medium w-full border-t border-slate-100 pt-3">
              <p className="truncate">{effectivePersonalInfo.location}</p>
              <a
                href={`mailto:${effectivePersonalInfo.email}`}
                className="flex items-center justify-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors group"
                title="Enviar correo electrónico para contactar o solicitar entrevista"
              >
                <Mail size={12} className="group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-[10px] tracking-wide">{effectivePersonalInfo.email}</span>
              </a>

              {/* Language Selector */}
              <div className="flex gap-2 mt-3 justify-center pt-2">
                <a
                  href="/Gonzalo_Segura_CV/"
                  className={`flex items-center gap-1 px-3 py-1.5 text-[9px] font-bold rounded-md transition-all ${language === 'es'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  title={language === 'en' ? 'Spanish Version' : 'Versión en Español'}
                >
                  🇪🇸 ES
                </a>
                <a
                  href="/Gonzalo_Segura_CV/index.en.html"
                  className={`flex items-center gap-1 px-3 py-1.5 text-[9px] font-bold rounded-md transition-all ${language === 'en'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  title={language === 'en' ? 'English Version' : 'Versión en Inglés'}
                >
                  🇬🇧 EN
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-slate-200 mb-6"></div>

          {/* Index Menu */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 pb-1">{language === 'en' ? 'Index' : 'Índice'}</h3>
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const isActive = item.id === pageNumber;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`
                      w-full text-left text-[10px] py-2 px-2 leading-tight transition-all duration-200 border-l-2
                      ${isActive
                        ? 'font-bold text-black border-black pl-3 bg-slate-50'
                        : 'text-slate-500 border-transparent hover:text-slate-900 hover:pl-3 hover:bg-slate-50 hover:border-slate-200'
                      }
                    `}
                  >
                    {item.title}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Qualified Roles Tags */}
          <div className="mb-8 flex-grow">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 pb-1">Roles Target</h3>
            <div className="flex flex-col gap-1.5">
              {effectiveQualifiedRoles.map((role, i) => (
                <span key={i} className="w-full px-3 py-2 text-center rounded-md border border-blue-200 bg-blue-50 text-blue-700 text-[10px] font-bold tracking-wide leading-tight shadow-sm hover:bg-blue-100 transition-colors cursor-default">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-auto pt-6 border-t border-slate-100">
            <div className="flex gap-2 mb-2">
              <button
                onClick={onPrev}
                disabled={pageNumber === 1}
                className="flex-1 h-8 flex items-center justify-center border border-slate-200 text-slate-900 hover:bg-slate-800 hover:text-white hover:border-slate-800 disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-slate-900 transition-all"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={onNext}
                disabled={pageNumber === menuItems.length}
                className="flex-1 h-8 flex items-center justify-center border border-slate-200 text-slate-900 hover:bg-slate-800 hover:text-white hover:border-slate-800 disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-slate-900 transition-all"
              >
                <ChevronRight size={14} />
              </button>
            </div>
            <div className="text-center text-[9px] text-slate-300 uppercase tracking-widest">
              {language === 'en' ? 'Pg' : 'Pág'} {pageNumber} / {menuItems.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};