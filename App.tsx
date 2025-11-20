

import React, { useState, useEffect } from 'react';
import { A4Page } from './components/A4Page';
import { RESUME_DATA, DATA_PROTECTION_TEXT } from './constants';
import { 
  Briefcase, Code, Award, User, TrendingUp, 
  BookOpen, Cpu, PieChart, ShieldCheck, CheckCircle, Globe, GraduationCap, Plane, ExternalLink
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
} from 'recharts';

// Components for specific page contents
const IntroSection: React.FC = () => (
  <div className="flex flex-col h-full justify-center gap-12">
    <div className="text-center space-y-6">
       <h1 className="font-serif font-extrabold text-5xl text-slate-900 mb-10">Curriculum Vitae</h1> {/* Added main title */}
       <h3 className="text-xl text-slate-400 font-serif italic">Resumen Ejecutivo</h3>
       <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-blue-600 italic text-slate-700 leading-loose text-lg">
        "{RESUME_DATA.personalInfo.summary}"
      </div>
    </div>

    <div className="p-8 border border-slate-200 rounded-xl bg-white shadow-sm">
      <div className="flex items-start gap-6">
        <ShieldCheck className="mt-1 flex-shrink-0 text-blue-600" size={32} />
        <div>
          <h3 className="font-bold text-slate-800 text-lg mb-3">Declaración de Consentimiento RGPD</h3>
          <p className="text-sm text-justify text-slate-500 mb-6 leading-relaxed font-serif">
            {DATA_PROTECTION_TEXT}
          </p>
          
          <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-lg w-fit">
            <CheckCircle size={24} className="text-blue-600" />
            <div className="flex flex-col">
               <span className="text-sm font-bold text-blue-900 uppercase tracking-wide">Consentimiento Otorgado</span>
               <span className="text-xs text-blue-700">Documento digitalmente autorizado por el titular.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => (
  <div className="space-y-8">
    <p className="text-slate-600 mb-6">Una selección de proyectos significativos que demuestran capacidad técnica y de gestión.</p>
    <div className="grid gap-8">
      {RESUME_DATA.projects.map((project, i) => (
        <div key={i} className="group bg-slate-50 hover:bg-blue-50 p-6 rounded-lg transition-colors border border-slate-100 hover:border-blue-200">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
            <span className="text-xs font-mono bg-slate-200 px-2 py-1 rounded">{project.year}</span>
          </div>
          <p className="text-blue-700 font-medium text-sm mb-3">{project.role}</p>
          <p 
            className="text-slate-600 text-sm mb-4 leading-relaxed" 
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-500">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8 pt-8 border-t border-slate-200">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <BookOpen size={20} /> Publicaciones
      </h3>
      <ul className="list-disc list-inside text-sm text-slate-600 space-y-3">
        <li>
          "Dos Corazones, Mil Horizontes: La Épica Aventura de María y Gonzalo" <br/>
          de Gonzalo Segura Taguas, 2025. eBook Kindle: 
          <a href="https://www.amazon.com/dp/B0FSKP22J4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ver en Amazon</a>
        </li>
        <li>
          "El Príncipe Estratega (FAN MADE): Mi Ascensión Silenciosa al Trono Cósmico" <br/>
          de Gonzalo Segura Taguas, 2025. eBook Kindle: 
          <a href="https://www.amazon.es/dp/B0FSGVXTX2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ver en Amazon</a>
        </li>
        <li>
          "El Peso de la Visión: Una Odisea del Pensamiento en la Era del Vacío" <br/>
          de Gonzalo Segura Taguas, 2025. eBook Kindle: 
          <a href="https://www.amazon.com/dp/B0FRXTY984" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ver en Amazon</a>
        </li>
      </ul>
    </div>

    <div className="mt-6 bg-amber-50 p-6 rounded-xl border border-amber-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-3 text-md flex items-center gap-2">
            <BookOpen size={18} className="text-amber-700"/> Investigación y Desarrollo (Archivo Manuscrito)
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed italic">
            "Cuento con un extenso archivo de <strong>cuadernos y cuadernos manuscritos</strong> donde he desarrollado y planificado meticulosamente cada aspecto de mis proyectos. Desde la lógica de programación compleja hasta el diseño detallado de <strong>bases de datos</strong> relacionales y arquitecturas de sistemas, todo ha sido escrito y estructurado en papel antes de su implementación digital, demostrando una profundidad de ingeniería y planificación exhaustiva."
        </p>
    </div>
  </div>
);

const ExperienceSection = () => (
  <div className="relative border-l-2 border-slate-200 ml-3 space-y-12 py-4">
    {RESUME_DATA.experience.map((job, i) => (
      <div key={i} className="relative pl-8">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
          <h3 className="text-2xl font-bold text-slate-800">{job.company}</h3>
          <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{job.period}</span>
        </div>
        
        <h4 className="text-lg text-blue-700 font-medium mb-4">{job.role}</h4>
        <p className="text-slate-600 mb-4 italic">{job.description}</p>
        
        <div className="space-y-2">
          {job.achievements.map((ach, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="text-blue-500 mt-1.5">•</span>
              <span>{ach}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const PersonalitySection = ({ title, traits, icon: Icon }: { title: string, traits: string[], icon: any }) => (
  <div className="h-full flex flex-col justify-center">
    <div className="grid grid-cols-1 gap-6">
      {traits.map((trait, i) => (
        <div key={i} className="flex items-center gap-6 p-6 bg-white border-b border-slate-100 last:border-0">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
            <Icon size={24} />
          </div>
          <span className="text-lg sm:text-xl text-slate-700 font-serif">{trait}</span>
        </div>
      ))}
    </div>
    <div className="mt-12 p-8 bg-slate-50 rounded-xl text-center">
      <p className="text-slate-500 text-sm italic">
        "El carácter es el destino. Estas cualidades definen mi enfoque profesional y personal."
      </p>
    </div>
  </div>
);

const CertificationsSection: React.FC = () => (
  <div className="space-y-8">
    <p className="text-slate-600 mb-6">Mis logros académicos y certificaciones profesionales que respaldan mi experiencia y conocimiento.</p>
    
    <a 
      href="https://www.skills.google/public_profiles/1eb38f97-fa72-4ab0-8949-17b801917193"
      target="_blank"
      rel="noopener noreferrer" 
      className="flex items-center p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all group border-l-4 border-l-blue-500 mb-6"
    >
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0 mr-4">
        <Award size={24} />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition-colors">Google Cloud Skills Badges</h3>
        <p className="text-slate-600 text-sm">Ver perfil público completo y logros verificados</p>
      </div>
      <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-600" />
    </a>

    <div className="grid gap-6">
      {/* Education entries */}
      <h3 className="text-lg font-bold text-slate-800 mt-4 border-b-2 border-blue-600 pb-2">Formación Académica</h3>
      {RESUME_DATA.education
        .filter(entry => entry.type === 'academic')
        .sort((a, b) => {
          const parseYear = (period: string) => {
            const parts = period.split(' - ');
            return parseInt(parts[1] || parts[0]);
          };
          return parseYear(b.period) - parseYear(a.period);
        }) 
        .map((entry, i) => (
        <div key={i} className="flex items-start gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg">
              {entry.url ? (
                <a href={entry.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center gap-2">
                   {entry.title} <ExternalLink size={16} className="inline-block text-slate-400" />
                </a>
              ) : (
                entry.title
              )}
            </h3>
            <p className="text-slate-600 text-sm">{entry.institution}</p>
            <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded mt-2 inline-block">{entry.period}</span>
            {entry.details && <p className="text-xs text-slate-500 mt-1 italic">{entry.details}</p>}
          </div>
        </div>
      ))}

      {/* Course and Certification entries */}
      <h3 className="text-lg font-bold text-slate-800 mt-8 border-b-2 border-green-600 pb-2">Cursos y Certificaciones</h3>
      {RESUME_DATA.education
        .filter(entry => entry.type === 'course' || entry.type === 'certification')
        .sort((a, b) => parseInt(b.period.split(' ')[0]) - parseInt(a.period.split(' ')[0])) // Sort by start year, newest first
        .map((entry, i) => (
        <div key={i} className="flex items-start gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
            <Award size={24} />
          </div>
          <div>
             <h3 className="font-bold text-slate-800 text-lg">
              {entry.url ? (
                <a href={entry.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center gap-2">
                   {entry.title} <ExternalLink size={16} className="inline-block text-slate-400" />
                </a>
              ) : (
                entry.title
              )}
            </h3>
            <p className="text-slate-600 text-sm">{entry.institution}</p>
            <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded mt-2 inline-block">{entry.period}</span>
            {entry.details && <p className="text-xs text-slate-500 mt-1 italic">{entry.details}</p>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ITSkillsSection = () => (
  <div className="space-y-10">
    <p className="text-slate-600">Dominio técnico en múltiples áreas, con experiencia práctica en desarrollo web, análisis de datos, hardware, redes y gestión de sistemas, validado en entornos de producción de alto rendimiento y proyectos innovadores.</p>
    
    <div className="space-y-8">
      {RESUME_DATA.itSkills.map((skill, i) => (
        <div key={i}>
          <div className="flex justify-between mb-2">
            <span className="font-bold text-slate-800">{skill.name}</span>
            <span className="text-slate-500 text-sm">{skill.level}%</span>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 grid grid-cols-3 gap-4 text-center">
      <div className="p-4 border border-slate-200 rounded-lg">
        <div className="text-2xl font-bold text-slate-800">10+</div>
        <div className="text-xs text-slate-500 uppercase mt-1">Años Exp</div>
      </div>
      <div className="p-4 border border-slate-200 rounded-lg">
        <div className="text-2xl font-bold text-slate-800">50+</div>
        <div className="text-xs text-slate-500 uppercase mt-1">Proyectos</div>
      </div>
      <div className="p-4 border border-slate-200 rounded-lg">
        <div className="text-2xl font-bold text-slate-800">3</div>
        <div className="text-xs text-slate-500 uppercase mt-1">Idiomas</div>
      </div>
    </div>
  </div>
);

const ExperienceKnowledgeSection = () => (
  <div className="space-y-8">
    <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
      <h3 className="text-lg font-bold text-blue-900 mb-2">Conocimiento Tácito y Habilidades Inobservables</h3>
      <p className="text-blue-800 text-sm">
        Habilidades críticas desarrolladas a través de la experiencia directa y la resolución de problemas en contextos reales, más allá de la teoría.
      </p>
    </div>

    <div className="grid gap-6">
      {[
        { 
          title: "Análisis Predictivo de Mercados y Gestión de Riesgos Algorítmicos", 
          desc: "Capacidad forjada en la inversión algorítmica para anticipar movimientos del mercado, construir estrategias resilientes y minimizar la exposición a la volatilidad imprevista." 
        },
        { 
          title: "Liderazgo Intercultural y Resolución de Problemas Globales", 
          desc: "Competencia desarrollada en +60 países y roles diversos, permitiendo navegar dinámicas culturales complejas y resolver desafíos imprevistos con agilidad y empatía en cualquier contexto." 
        },
        { 
          title: "Optimización Full Stack para el Rendimiento Crítico", 
          desc: "Intuición para identificar y resolver cuellos de botella en la arquitectura de software y hardware, garantizando escalabilidad y eficiencia en aplicaciones de alto tráfico y procesamiento intensivo." 
        },
        { 
          title: "Ingeniería de Prompt Avanzada para Impacto de Negocio", 
          desc: "Habilidad para traducir necesidades de negocio complejas en instrucciones precisas para IA, desbloqueando soluciones innovadoras en optimización de contenido, análisis y automatización en un 20%." 
        },
        { 
          title: "Coordinación Logística Extrema y Resiliencia Operativa", 
          desc: "Experiencia práctica en la planificación y ejecución de proyectos de gran envergadura (expediciones, travesías continentales) en entornos de alta incertidumbre, manteniendo la moral y los objetivos bajo presión." 
        }
      ].map((item, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 bg-slate-300 rounded-full mt-2"></div>
            <div className="w-0.5 h-full bg-slate-100 mt-1"></div>
          </div>
          <div className="pb-6">
            <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const investmentSkills = [
  "Análisis Financiero",
  "Análisis Técnico",
  "Análisis Fundamental",
  "Creación de Indicadores Propietarios (TradingView)",
  "Gestión de Riesgo Rigurosa",
  "Filosofía de Inversión Estratégica",
  "Conocimiento en Macroeconomía",
  "Innovación Algorítmica",
  "Construcción de Carteras Diversificadas y Resilientes",
  "Generación de Valor en Entornos Complejos y Volátiles",
  ];

const StockPortfolioSection = () => {
  const data = RESUME_DATA.investmentPortfolio;

  return (
    <div className="h-full flex flex-col">
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">
        {RESUME_DATA.investmentInsight}
      </p>

      <div className="mb-8">
        <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-wider">Habilidades Clave en Inversión</h3>
        <div className="flex flex-wrap gap-2">
          {investmentSkills.map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-wider">Distribución del Portfolio por Categoría</h3>
        <div className="w-full h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" unit="%" />
              <YAxis dataKey="name" type="category" tick={{fontSize: 12}} width={120} /> {/* Ajustado width para nombres más largos */}
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="allocation" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const BusinessKnowledgeSection = () => (
  <div className="grid grid-cols-1 gap-6 h-full content-start">
    <p className="text-slate-600 mb-4">Competencias fundamentales para la toma de decisiones estratégicas.</p>
    
    {RESUME_DATA.businessKnowledge.map((item, i) => (
      <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex items-center justify-between group hover:shadow-md transition-shadow">
        <span className="font-serif text-slate-700 text-lg">{item}</span>
        <TrendingUp className="text-slate-300 group-hover:text-blue-500 transition-colors" size={24} />
      </div>
    ))}

    <div className="mt-auto bg-slate-900 text-white p-8 rounded-lg">
      <h3 className="text-xl font-bold mb-2">MBA en Práctica</h3>
      <p className="text-slate-300 text-sm">
        Combinación de teoría académica y ejecución en el mundo real. Enfoque en resultados medibles y crecimiento sostenible.
      </p>
    </div>
  </div>
);

const GlobalMobilitySection: React.FC = () => (
  <div className="space-y-8">
    <p className="text-slate-600 leading-relaxed">
      Desarrollo de competencias estratégicas a través de la inmersión internacional (65 países) y desafíos de autoliderazgo.
    </p>

    <div className="relative border-l-2 border-blue-200 ml-4 pl-4 space-y-8">
      {/* Section 1 */}
      <div>
        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
        <h3 className="font-bold text-slate-800 text-xl mb-2">1. Gestión de Proyectos en Entornos VUCA (Alta Complejidad)</h3>
        <p className="text-slate-700 font-medium mb-3">Expedición Europa – Cabo Norte (14.700 km) & Vía de la Plata BTT</p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
          <li><strong>Gestión de Riesgos:</strong> Mitigación de amenazas en rutas de larga distancia y entornos hostiles.</li>
          <li><strong>Resiliencia:</strong> Capacidad probada para operar bajo fatiga y condiciones adversas, manteniendo el foco en el objetivo final.</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div>
        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
        <h3 className="font-bold text-slate-800 text-xl mb-2">2. Logística Internacional y Adaptabilidad (Movilidad Global)</h3>
        <p className="text-slate-700 font-medium mb-3">Residencia Internacional (Australia, Canadá x2, Irlanda, Hawaii) & 3 Vueltas al Mundo</p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
          <li><strong>Inteligencia Cultural (CQ):</strong> Adaptación operativa inmediata a normativas y culturas diversas en 3 continentes.</li>
          <li><strong>Logística Compleja:</strong> Planificación y ejecución de travesía transamericana en vehículo autónomo (RV Vancouver-Houston) y coordinación de itinerarios globales.</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div>
        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
        <h3 className="font-bold text-slate-800 text-xl mb-2">3. Disciplina y Orientación al Logro (Constancia)</h3>
        <p className="text-slate-700 font-medium mb-3">Desafíos de Resistencia (Caminos de Santiago - 3 ediciones)</p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
          <li><strong>Gestión por Objetivos:</strong> Desglose de grandes metas en etapas diarias ejecutables (Micro-metas), asegurando el cumplimiento del cronograma mediante autodisciplina estricta.</li>
        </ul>
      </div>
    </div>
  </div>
);


const LanguagesSection = () => (
  <div className="h-full flex flex-col">
    <div className="mb-8">
      <p className="text-slate-600 leading-relaxed">
        La comunicación efectiva trasciende las barreras lingüísticas. Mi experiencia internacional me ha permitido perfeccionar la negociación y el liderazgo técnico en múltiples idiomas.
      </p>
    </div>

    <div className="grid gap-6">
      {/* Spanish */}
      <div className="group bg-white p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">ES</div>
            <div>
              <h3 className="font-bold text-slate-900">Español</h3>
              <p className="text-xs text-slate-500">Nativo</p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-300 bg-slate-50 px-2 py-1 rounded">C2+</span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div className="bg-red-500 h-full w-full"></div>
        </div>
      </div>

      {/* English */}
      <div className="group bg-white p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">EN</div>
            <div>
              <h3 className="font-bold text-slate-900">Inglés</h3>
              <p className="text-xs text-slate-500">Profesional Completo</p>
            </div>
          </div>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">C2</span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div className="bg-blue-600 h-full w-[95%]"></div>
        </div>
        <p className="mt-3 text-xs text-slate-500 italic">
          Certificado Cambridge Proficiency (CPE), Nivel C2 de Inglés para Negocios (Testizer) & IELTS. 5 años de residencia en Londres.
        </p>
        <div className="mt-4 space-y-3">
          <div className="text-xs text-slate-700">
            <h4 className="font-bold mb-1">Proficient (C2) level of Business English (TESTIZER)</h4>
            <p><strong>Expedición:</strong> mayo 2025</p>
            <p><strong>ID de la credencial:</strong> T-0264582</p>
            <a href="https://drive.google.com/file/d/1OQWWnBcb6wa7xJhkbeqmIq0vKK65Vy96/view" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mostrar credencial</a>
          </div>
          <div className="text-xs text-slate-700">
            <h4 className="font-bold mb-1">International English Language Testing System (IELTS) (TESTIZER) - C2</h4>
            <p><strong>Expedición:</strong> abril 2025</p>
            <p><strong>ID de la credencial:</strong> T-0264309</p>
            <a href="https://drive.google.com/file/d/1OQWWnBcb6wa7xJhkbeqmIq0vKK65Vy96/view" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mostrar credencial</a>
          </div>
        </div>
      </div>

      {/* Portuguese */}
      <div className="group bg-white p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">PT</div>
            <div>
              <h3 className="font-bold text-slate-900">Portugués</h3>
              <p className="text-xs text-slate-500">Intermedio Avanzado</p>
            </div>
          </div>
          <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">B2</span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div className="bg-green-600 h-full w-[70%]"></div>
        </div>
      </div>
    </div>

    <div className="mt-auto bg-slate-50 p-6 rounded-lg border border-slate-100">
      <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
        <Globe size={16} />
        Experiencia Internacional
      </h4>
      <ul className="space-y-2 text-sm text-slate-600">
        <li>• <strong>2013:</strong> Vuelta al mundo.</li>
        <li>• <strong>2014:</strong> Residencia en Australia y Canadá.</li>
        <li>• <strong>2016:</strong> Vuelta al mundo y residencia en Hawaii.</li>
        <li>• <strong>2023:</strong> Residencia en Irlanda.</li>
        <li>• <strong>2024:</strong> Residencia en Canadá.</li>
      </ul>
    </div>
  </div>
);

const App: React.FC = () => {
  const [activePage, setActivePage] = useState(1);

  const pages = [
    { id: 1, title: 'Presentación & RGPD', icon: ShieldCheck, component: <IntroSection /> },
    { id: 2, title: 'Proyectos & Publicaciones', icon: Code, component: <ProjectsSection /> },
    { id: 3, title: 'Experiencia Profesional', icon: Briefcase, component: <ExperienceSection /> },
    { id: 4, title: 'Competencias Clave y Liderazgo', icon: User, component: <PersonalitySection title="Competencias Clave y Liderazgo" traits={RESUME_DATA.softSkills} icon={Briefcase} /> },
    { id: 5, title: 'Títulos y Certificaciones', icon: GraduationCap, component: <CertificationsSection /> },
    { id: 6, title: 'Conocimientos Informáticos', icon: Cpu, component: <ITSkillsSection /> },
    { id: 7, title: 'Conocimiento Empírico', icon: Award, component: <ExperienceKnowledgeSection /> },
    { id: 8, title: 'Personalidad & Valores', icon: User, component: <PersonalitySection title="Valores Personales" traits={RESUME_DATA.personalTraits} icon={User} /> },
    { id: 9, title: 'Portfolio de Inversión', icon: PieChart, component: <StockPortfolioSection /> },
    { id: 10, title: 'Business Knowledge', icon: TrendingUp, component: <BusinessKnowledgeSection /> },
    { id: 11, title: 'Trayectoria de Movilidad Global y Gestión de Proyectos', icon: Plane, component: <GlobalMobilitySection /> },
    { id: 12, title: 'Idiomas', icon: Globe, component: <LanguagesSection /> },
  ];

  const totalPages = pages.length;

  const handleNext = () => {
    if (activePage < totalPages) setActivePage(p => p + 1);
  };

  const handlePrev = () => {
    if (activePage > 1) setActivePage(p => p - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePage]);

  // Prepare menu items for A4Page props
  const menuItems = pages.map(p => ({ id: p.id, title: p.title }));

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col text-slate-800 overflow-hidden">
      <main className="flex-1 relative flex flex-col h-screen overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        
        {/* Page Container */}
        <div className="flex-1 overflow-y-auto no-scrollbar flex items-start justify-center p-4 sm:p-8 lg:p-12">
            <div className="w-full flex justify-center mb-24 lg:mb-0">
              <A4Page 
                pageNumber={activePage} 
                title={pages[activePage-1].title}
                className="shadow-2xl shadow-black/50 transition-all duration-500 ease-in-out"
                menuItems={menuItems}
                onNavigate={setActivePage}
                onNext={handleNext}
                onPrev={handlePrev}
              >
                {pages[activePage-1].component}
              </A4Page>
            </div>
        </div>
      </main>
    </div>
  );
};

export default App;