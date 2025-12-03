
import React, { useState, useEffect } from 'react';
import { A4Page } from './components/A4Page';
import { RESUME_DATA_EN as RESUME_DATA, DATA_PROTECTION_TEXT_EN as DATA_PROTECTION_TEXT } from './constants.en';
import {
  Briefcase, Code, Award, User, TrendingUp,
  BookOpen, Cpu, PieChart, ShieldCheck, CheckCircle, Globe, GraduationCap, Plane, ExternalLink, Wrench
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

// Components for specific page contents
const IntroSection: React.FC = () => (
  <div className="flex flex-col h-full justify-center gap-12">
    <div className="text-center space-y-6">
      <h1 className="font-serif font-extrabold text-5xl text-slate-900 mb-10">Curriculum Vitae</h1> {/* Added main title */}
      <h3 className="text-xl text-slate-400 font-serif italic">Executive Summary</h3>
      <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-blue-600 italic text-slate-700 leading-loose text-lg">
        "{RESUME_DATA.personalInfo.summary}"
      </div>
    </div>

    <div className="p-8 border border-slate-200 rounded-xl bg-white shadow-sm">
      <div className="flex items-start gap-6">
        <ShieldCheck className="mt-1 flex-shrink-0 text-blue-600" size={32} />
        <div>
          <h3 className="font-bold text-slate-800 text-lg mb-3">GDPR Consent Declaration</h3>
          <p className="text-sm text-justify text-slate-500 mb-6 leading-relaxed font-serif">
            {DATA_PROTECTION_TEXT}
          </p>

          <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-lg w-fit">
            <CheckCircle size={24} className="text-blue-600" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-blue-900 uppercase tracking-wide">Consent Granted</span>
              <span className="text-xs text-blue-700">Digitally authorized by the data subject.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => (
  <div className="space-y-8">
    <p className="text-slate-600 mb-6">A selection of significant projects demonstrating technical and management capabilities.</p>
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
        <BookOpen size={20} /> Publications
      </h3>
      <ul className="list-disc list-inside text-sm text-slate-600 space-y-3">
        <li>
          "Dos Corazones, Mil Horizontes: La Épica Aventura de María y Gonzalo" <br />
          by Gonzalo Segura Taguas, 2025. Kindle eBook:
          <a href="https://www.amazon.com/dp/B0FSKP22J4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on Amazon</a>
        </li>
        <li>
          "El Príncipe Estratega (FAN MADE): Mi Ascensión Silenciosa al Trono Cósmico" <br />
          by Gonzalo Segura Taguas, 2025. Kindle eBook:
          <a href="https://www.amazon.es/dp/B0FSGVXTX2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on Amazon</a>
        </li>
        <li>
          "El Peso de la Visión: Una Odisea del Pensamiento en la Era del Vacío" <br />
          by Gonzalo Segura Taguas, 2025. Kindle eBook:
          <a href="https://www.amazon.com/dp/B0FRXTY984" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on Amazon</a>
        </li>
      </ul>
    </div>

    <div className="mt-6 bg-amber-50 p-6 rounded-xl border border-amber-100 shadow-sm">
      <h3 className="font-bold text-slate-800 mb-3 text-md flex items-center gap-2">
        <BookOpen size={18} className="text-amber-700" /> Research and Development (Handwritten Archive)
      </h3>
      <p className="text-sm text-slate-700 leading-relaxed italic">
        "I possess an extensive archive of <strong>notebooks and handwritten journals</strong> where I have meticulously developed and planned every aspect of my projects. From complex programming logic to detailed design of relational <strong>databases</strong> and system architectures, everything has been written and structured on paper before its digital implementation, demonstrating a depth of engineering and exhaustive planning."
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
        "Character is destiny. These qualities define my professional and personal approach."
      </p>
    </div>
  </div>
);

const CertificationsSection: React.FC = () => (
  <div className="space-y-8">
    <p className="text-slate-600 mb-6">My academic achievements and professional certifications that support my experience and knowledge.</p>

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
        <p className="text-slate-600 text-sm">View full public profile and verified achievements</p>
      </div>
      <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-600" />
    </a>

    <div className="grid gap-6">
      {/* Education entries */}
      <h3 className="text-lg font-bold text-slate-800 mt-4 border-b-2 border-blue-600 pb-2">Academic Background</h3>
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
      <h3 className="text-lg font-bold text-slate-800 mt-8 border-b-2 border-green-600 pb-2">Courses and Certifications</h3>
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
    <p className="text-slate-600">Technical mastery in multiple areas, with practical experience in web development, data analysis, hardware, networks and systems management, validated in high-performance production environments and innovative projects.</p>

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
        <div className="text-xs text-slate-500 uppercase mt-1">Years Exp</div>
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

const PhysicalToolsSection = () => (
  <div className="space-y-8">
    <p className="text-slate-600 mb-6">
      Mastery of physical tools and professional machinery, acquired through practical experience in construction, maintenance and logistics.
    </p>
    <div className="grid gap-6">
      {RESUME_DATA.physicalTools.map((category, i) => (
        <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-slate-800 text-lg mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
            <Wrench size={20} className="text-blue-600" />
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.tools.map((tool, j) => (
              <span key={j} className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-sm border border-slate-100 font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ExperienceKnowledgeSection = () => (
  <div className="space-y-8">
    <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
      <h3 className="text-lg font-bold text-blue-900 mb-2">Tacit Knowledge and Unobservable Skills</h3>
      <p className="text-blue-800 text-sm">
        Critical skills developed through direct experience and problem-solving in real contexts, beyond theory.
      </p>
    </div>

    <div className="grid gap-6">
      {[
        {
          title: "Predictive Market Analysis and Algorithmic Risk Management",
          desc: "Capability forged in algorithmic investment to anticipate market movements, build resilient strategies, and minimize exposure to unforeseen volatility."
        },
        {
          title: "Intercultural Leadership and Global Problem Solving",
          desc: "Competence developed in +60 countries and diverse roles, enabling navigation of complex cultural dynamics and resolution of unforeseen challenges with agility and empathy in any context."
        },
        {
          title: "Full Stack Optimization for Critical Performance",
          desc: "Intuition to identify and resolve bottlenecks in software and hardware architecture, ensuring scalability and efficiency in high-traffic and intensive processing applications."
        },
        {
          title: "Advanced Prompt Engineering for Business Impact",
          desc: "Ability to translate complex business needs into precise instructions for AI, unlocking innovative solutions in content optimization, analysis, and automation by 20%."
        },
        {
          title: "Extreme Logistics Coordination and Operational Resilience",
          desc: "Practical experience in planning and executing large-scale projects (expeditions, continental journeys) in high-uncertainty environments, maintaining morale and objectives under pressure."
        },
        {
          title: "Transnational Communication and Multilingual Team Cohesion",
          desc: "Expert ability to forge solid interpersonal relationships in global environments, using native-level English proficiency to eliminate cultural barriers. Proven capacity to integrate and lead in any international work ecosystem, ensuring smooth operations and frictionless collaboration regardless of language or geographic location."
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
  "Financial Analysis",
  "Technical Analysis",
  "Fundamental Analysis",
  "Creation of Proprietary Indicators (TradingView)",
  "Rigorous Risk Management",
  "Strategic Investment Philosophy",
  "Macroeconomics Knowledge",
  "Algorithmic Innovation",
  "Construction of Diversified and Resilient Portfolios",
  "Value Generation in Complex and Volatile Environments",
];

const StockPortfolioSection = () => {
  const data = RESUME_DATA.investmentPortfolio;

  return (
    <div className="h-full flex flex-col">
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">
        {RESUME_DATA.investmentInsight}
      </p>

      <div className="mb-8">
        <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-wider">Key Investment Skills</h3>
        <div className="flex flex-wrap gap-2">
          {investmentSkills.map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-wider">Portfolio Distribution by Category</h3>
        <div className="w-full h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" unit="%" />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={120} /> {/* Ajustado width para nombres más largos */}
              <Tooltip cursor={{ fill: 'transparent' }} />
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
    <p className="text-slate-600 mb-4">Fundamental competencies for strategic decision-making.</p>

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
      Development of strategic competencies through international immersion (65 countries) and self-leadership challenges.
    </p>

    <div className="relative border-l-2 border-blue-200 ml-4 pl-4 space-y-8">
      {/* Section 1 */}
      <div>
        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
        <h3 className="font-bold text-slate-800 text-xl mb-2">1. Project Management in VUCA Environments (High Complexity)</h3>
        <p className="text-slate-700 font-medium mb-3">Europe Expedition – North Cape (14,700 km) & Vía de la Plata MTB</p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
          <li><strong>Risk Management:</strong> Threat mitigation on long-distance routes and hostile environments.</li>
          <li><strong>Resilience:</strong> Proven ability to operate under fatigue and adverse conditions, maintaining focus on the final objective.</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div>
        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
        <h3 className="font-bold text-slate-800 text-xl mb-2">2. International Logistics and Adaptability (Global Mobility)</h3>
        <p className="text-slate-700 font-medium mb-3">International Residence (Australia, Canada x2, Ireland, Hawaii) & 3 World Tours</p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
          <li><strong>Cultural Intelligence (CQ):</strong> Immediate operational adaptation to diverse regulations and cultures across 3 continents.</li>
          <li><strong>Complex Logistics:</strong> Planning and execution of trans-American journey in autonomous vehicle (RV Vancouver-Houston) and coordination of global itineraries.</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div>
        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
        <h3 className="font-bold text-slate-800 text-xl mb-2">3. Discipline and Achievement Orientation (Consistency)</h3>
        <p className="text-slate-700 font-medium mb-3">Endurance Challenges (Camino de Santiago - 3 editions)</p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
          <li><strong>Management by Objectives:</strong> Breaking down large goals into executable daily stages (Micro-goals), ensuring schedule compliance through strict self-discipline.</li>
        </ul>
      </div>
    </div>
  </div>
);


const LanguagesSection = () => (
  <div className="h-full flex flex-col">
    <div className="mb-8">
      <p className="text-slate-600 leading-relaxed">
        Effective communication transcends language barriers. My international experience has enabled me to perfect negotiation and technical leadership in multiple languages.
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
              <p className="text-xs text-slate-500">Native</p>
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
              <p className="text-xs text-slate-500">Full Professional</p>
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
              <p className="text-xs text-slate-500">Advanced Intermediate</p>
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
        International Experience
      </h4>
      <ul className="space-y-2 text-sm text-slate-600">
        <li>• <strong>2013:</strong> World Tour.</li>
        <li>• <strong>2014:</strong> Residence in Australia and Canada.</li>
        <li>• <strong>2016:</strong> World Tour and residence in Hawaii.</li>
        <li>• <strong>2023:</strong> Residence in Ireland.</li>
        <li>• <strong>2024:</strong> Residence in Canada.</li>
      </ul>
    </div>
  </div>
);

const App: React.FC = () => {
  const [activePage, setActivePage] = useState(1);

  const pages = [
    { id: 1, title: 'Introduction & GDPR', icon: ShieldCheck, component: <IntroSection /> },
    { id: 2, title: 'Projects & Publications', icon: Code, component: <ProjectsSection /> },
    { id: 3, title: 'Professional Experience', icon: Briefcase, component: <ExperienceSection /> },
    { id: 4, title: 'Key Competencies & Leadership', icon: User, component: <PersonalitySection title="Key Competencies & Leadership" traits={RESUME_DATA.softSkills} icon={Briefcase} /> },
    { id: 5, title: 'Degrees & Certifications', icon: GraduationCap, component: <CertificationsSection /> },
    { id: 6, title: 'IT Skills', icon: Cpu, component: <ITSkillsSection /> },
    { id: 7, title: 'Physical Tools & Machinery', icon: Wrench, component: <PhysicalToolsSection /> },
    { id: 8, title: 'Empirical Knowledge', icon: Award, component: <ExperienceKnowledgeSection /> },
    { id: 9, title: 'Personality & Values', icon: User, component: <PersonalitySection title="Personal Values" traits={RESUME_DATA.personalTraits} icon={User} /> },
    { id: 10, title: 'Investment Portfolio', icon: PieChart, component: <StockPortfolioSection /> },
    { id: 11, title: 'Business Knowledge', icon: TrendingUp, component: <BusinessKnowledgeSection /> },
    { id: 12, title: 'Global Mobility & Project Management', icon: Plane, component: <GlobalMobilitySection /> },
    { id: 13, title: 'Languages', icon: Globe, component: <LanguagesSection /> },
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
              title={pages[activePage - 1].title}
              className="shadow-2xl shadow-black/50 transition-all duration-500 ease-in-out"
              menuItems={menuItems}
              onNavigate={setActivePage}
              onNext={handleNext}
              onPrev={handlePrev}
              language="en"
              personalInfo={RESUME_DATA.personalInfo}
              qualifiedRoles={RESUME_DATA.qualifiedRoles}
            >
              {pages[activePage - 1].component}
            </A4Page>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

