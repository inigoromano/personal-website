import React, { useState, useEffect } from 'react';
import { Moon, Sun, ArrowUpRight, Mail, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { PROJECTS, EXPERIENCE, SOCIALS, SECTION_SOCIALS, NORTHWORKS_TEXT } from './constants';
import SectionHeader from './components/SectionHeader';
import ExternalLink from './components/ExternalLink';

const App: React.FC = () => {
  // Theme state
  const [darkMode, setDarkMode] = useState(true);
  // Default to 'show-all' to allow users to see content initially, but can filter by clicking nav
  const [activeSection, setActiveSection] = useState('show-all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Check system preference on mount if no local storage
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const navItems = [
    { id: 'about', label: 'about' },
    { id: 'projects', label: 'projects' },
    { id: 'northworks', label: 'northworks digital' },
    { id: 'experience', label: 'experience' },
    { id: 'socials', label: 'socials' },
    { id: 'show-all', label: 'show all' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSectionVisible = (id: string) => {
    return activeSection === 'show-all' || activeSection === id;
  };

  return (
    <div className="min-h-screen w-full lg:w-[60%] mx-auto px-6 py-12 md:py-20 relative font-sans selection:bg-gray-300 dark:selection:bg-gray-700">
      
      {/* Background Glow Effect */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${isMobile ? '0px 0px' : `${mousePosition.x}px ${mousePosition.y}px`}, ${darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}, transparent 80%)`
        }}
      />



      {/* Main Grid Layout */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-4 relative">
        
        {/* Sidebar / Navigation (Sticky on Desktop) */}
        <nav className="md:w-1/3 md:shrink-0">
          <div className="md:sticky md:top-20 flex flex-col justify-between h-auto md:h-[calc(100vh-12rem)]">
            
            <div>
              {/* Header / Top Navigation */}
              <header className="flex justify-between items-start mb-8 md:mb-12">
                <div>
                  <h1 className="text-xl font-bold tracking-tight">inigo romano</h1>
                  <p className="text-gray-600 dark:text-gray-400">software engineering student</p>
                </div>
                
                <button 
                  onClick={toggleTheme}
                  className="group flex items-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none"
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? <Moon size={20} fill="currentColor" /> : <Sun size={20} fill="currentColor" />}
                  <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-300 ease-in-out">
                    <span className="pl-2 text-sm font-medium whitespace-nowrap block">
                      {darkMode ? 'Dark' : 'Light'}
                    </span>
                  </span>
                </button>
              </header>

              {/* Nav Links */}
              <ul className="space-y-6 md:space-y-8 mb-12 md:mb-0 hidden md:block">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`flex items-center gap-2 group transition-colors duration-200 cursor-pointer ${
                      activeSection === item.id 
                        ? 'text-black dark:text-white' 
                        : 'text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <span className={`h-[1px] bg-current transition-all duration-300 ${
                      activeSection === item.id ? 'w-8 md:w-12' : 'w-4 md:w-8 opacity-50 group-hover:w-12 group-hover:opacity-100'
                    }`}></span>
                    <span className="text-base lowercase">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            </div>

            {/* Bottom Contacts (Inverted Hover) */}
            <div className="space-y-0 border-t border-gray-200 dark:border-gray-800 md:border-none pt-6 md:pt-0">
               {SOCIALS.map((social, index) => (
                 <a 
                   key={index}
                   href={social.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block w-full border-b border-gray-200 dark:border-gray-800 py-3 px-1 md:-mx-1 text-sm font-medium
                              transition-colors duration-200
                              hover:bg-black hover:text-white 
                              dark:hover:bg-white dark:hover:text-black
                              flex justify-between items-center group"
                 >
                   <span>{social.label}</span>
                   <ArrowUpRight size={12} className="opacity-100" />
                 </a>
               ))}
            </div>

          </div>
        </nav>

        {/* Content Area */}
        <main className="flex-1 space-y-24 md:space-y-32 pb-32 min-h-[50vh]">
          
          {/* About Section */}
          {isSectionVisible('about') && (
            <section key={`about-${activeSection}`} id="about" className="flex flex-col gap-6 animate-fade-in">
              <SectionHeader title="ABOUT ME" />
              <div className="flex-1 text-base leading-relaxed text-gray-800 dark:text-gray-400">
                <p>I'm a 22 year old New Zealand-based Software Engineer and developer in the making, driven by the goal of becoming a solopreneur by creating useful, meaningful solutions whether it be websites, web apps, mobile apps, games, or SaaS products. I’m passionate about learning, taking on new challenges, and building things that genuinely help people. I'm a fan of and enjoy using AI to accelerate my learning and streamline workflows, but never as a crutch. Outside of tech, I stay active through baseball, the gym, biking, running, and gaming. I’m always looking for the next project or idea that pushes me to grow and improve.</p>
              </div>
            </section>
          )}

          {/* Projects Section */}
          {isSectionVisible('projects') && (
            <section key={`projects-${activeSection}`} id="projects" className="flex flex-col gap-6 animate-fade-in">
              <SectionHeader title="PROJECTS" />
              <div className="flex-1 space-y-12">
                {PROJECTS.map((project) => (
                  <div key={project.id} className="group flex flex-col sm:flex-row gap-6">
                    {/* Project Thumbnail */}
                    <div className="shrink-0">
                      <div className="w-20 h-20 rounded-lg bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                        {project.image && (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        )}
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="flex-1">
                      <h4 className="font-bold mb-2 text-lg">{project.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base mb-4">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.highlightTags && project.highlightTags.map((tag, index) => (
                          <span 
                            key={`highlight-${index}`}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-black text-white dark:bg-white dark:text-black border border-transparent"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags && project.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 bg-transparent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Northworks Section */}
          {isSectionVisible('northworks') && (
            <section key={`northworks-${activeSection}`} id="northworks" className="flex flex-col gap-6 animate-fade-in">
              <SectionHeader title="NORTHWORKS DIGITAL" />
              <div className="flex-1 space-y-6 text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                 {NORTHWORKS_TEXT.split('\n\n').map((para, i) => {
                   if (para.includes('Visit Website')) {
                     return (
                       <div key={i} className="pt-2">
                         <ExternalLink href="https://northworks.co.nz" className="text-black dark:text-white no-underline hover:underline hover:text-blue-600 hover:dark:text-blue-300 transition-all font-medium">
                           Visit Website
                         </ExternalLink>
                       </div>
                     );
                   }
                   return <p key={i}>{para}</p>;
                 })}
              </div>
            </section>
          )}

          {/* Experience Section */}
          {isSectionVisible('experience') && (
            <section key={`experience-${activeSection}`} id="experience" className="flex flex-col gap-6 animate-fade-in">
              <SectionHeader title="EXPERIENCE" />
              <div className="flex-1 space-y-8">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.id} className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
                     <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                       {exp.period}
                     </div>
                     <div>
                       <h4 className="font-bold text-base text-gray-800 dark:text-gray-200">{exp.role}</h4>
                       <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.company}</p>
                       <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                         {exp.description}
                       </p>
                     </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Socials Section */}
          {isSectionVisible('socials') && (
            <section key={`socials-${activeSection}`} id="socials" className="flex flex-col gap-6 animate-fade-in">
              <SectionHeader title="SOCIALS" />
              <div className="flex-1 flex flex-wrap gap-6 items-center">
                 {SECTION_SOCIALS.map((social, index) => {
                    if (social.label === 'northworks.co.nz') {
                       return (
                        <div key={index} className="w-full pt-2">
                           <ExternalLink href={social.url} className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 hover:dark:text-blue-300 transition-all flex items-center gap-2">
                            {social.label}
                          </ExternalLink>
                        </div>
                      );
                    }

                    let Icon = null;
                    if (social.label === 'Email') Icon = Mail;
                    if (social.label === 'LinkedIn') Icon = Linkedin;
                    if (social.label === 'Twitter') Icon = Twitter;
                    if (social.label === 'Instagram') Icon = Instagram;
                    if (social.label === 'GitHub') Icon = Github;
                    
                    if (social.label === 'TikTok') {
                       return (
                          <a 
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
                            aria-label={social.label}
                          >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="24" 
                              height="24" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              className="w-7 h-7"
                            >
                              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                          </a>
                       );
                    }

                    return (
                      <a 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        {Icon && <Icon size={28} />}
                      </a>
                    );
                 })}
              </div>
            </section>
          )}
          
        </main>
      </div>
    </div>
  );
};

export default App;