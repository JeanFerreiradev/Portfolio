// ===================================
// Internationalization (i18n)
// ===================================
const translations = {
    pt: {
        nav: {
            about: "Sobre",
            skills: "Habilidades",
            experience: "Experiência",
            projects: "Projetos",
            contact: "Contato"
        },
        button: {
            changeLanguage: "Mudar"
        },
        hero: {
            tag: "Analista de Sistemas",
            greeting: "Olá, eu sou",
            name: "Jean Wilson Ferreira",
            subtitle: "Analista de Sistemas com experiência em Java (Spring Boot) e Python (Django), além de sólidos conhecimentos em front-end. Crio soluções modernas, escaláveis e com foco em performance e usabilidade.",
            viewProjects: "Ver Projetos",
            contact: "Contato"
        },
        about: {
            title: "Sobre Mim",
            paragraph1: "Sou Analista de Sistemas com sólida experiência em desenvolvimento back-end, especializado em criar aplicações web robustas e escaláveis utilizando <span class=\"highlight\">Java (Spring Boot)</span> e <span class=\"highlight\">Python (Django)</span>.",
            paragraph2: "Tenho ampla experiência na <span class=\"highlight\">construção de APIs RESTful</span>, <span class=\"highlight\">integração entre sistemas</span>, <span class=\"highlight\">automação de processos</span> e <span class=\"highlight\">otimização de desempenho</span>. Atuo em todas as etapas do ciclo de desenvolvimento — do levantamento de requisitos à implantação — sempre com foco em entregar soluções eficientes e alinhadas às necessidades do negócio.",
            paragraph3: "No meu trabalho atual, venho aprimorando minhas habilidades com integrações complexas, customizações de sistemas corporativos e <span class=\"highlight\">desenvolvimento de soluções que otimizam fluxos internos</span> e <span class=\"highlight\">aprimoram a experiência do usuário</span>.",
            stats: {
                experience: "Anos de Experiência",
                projects: "Projetos Concluídos",
                commitment: "Comprometimento"
            }
        },
        skills: {
            title: "Habilidades Técnicas",
            languages: "Linguagens",
            frameworks: "Frameworks & Tecnologias",
            cloud: "Cloud & DevOps",
            databases: "Banco de Dados",
            tools: "Sistemas & Ferramentas",
            soft: "Soft Skills",
            softSkills: {
                requirements: "Análise de Requisitos",
                documentation: "Documentação Técnica",
                management: "Gestão de Projetos",
                problem: "Resolução de Problemas",
                teamwork: "Trabalho em Equipe"
            }
        },
        experience: {
            title: "Experiência Profissional",
            period: "Dezembro 2023 - Atual",
            role: "Analista de Sistemas",
            description: "Responsável por análise e desenvolvimento de sistemas institucionais, gerenciamento completo de projetos de TI e customização do ERP RM TOTVS. Atuo desde o levantamento de requisitos até a implantação e treinamento de usuários.",
            highlight1: "Desenvolvimento de aplicações web com Java e Spring Boot",
            highlight2: "Administração e customização dos módulos RM TOTVS",
            highlight3: "Integração de dados e criação de APIs RESTful",
            highlight4: "Documentação técnica e gerenciamento de projetos",
            highlight5: "Monitoramento de desempenho e otimização de sistemas"
        },
        projects: {
            title: "Projetos em Destaque",
            project1: {
                title: "Portal Interno de Tickets",
                description: "Sistema completo de gerenciamento de tickets de suporte de TI para funcionários. Desenvolvido com arquitetura robusta, inclui web service RESTful para comunicação com front-end, agendamento automático de tarefas e sistema de notificações por email.",
                feature1: "Sistema de acompanhamento em tempo real",
                feature2: "Notificações automáticas por email",
                feature3: "Agendamento de tarefas (Schedulers)",
                feature4: "Tratamento robusto de erros"
            },
            project2: {
                title: "Sistema de Captura de Leads",
                description: "Formulário inteligente de pré-cadastro com validação completa de campos e integração automática com sistemas externos. Inclui painel dedicado para gestão de leads e sincronização com RM TOTVS para acompanhamento de processos seletivos.",
                feature1: "Validação completa de campos",
                feature2: "Integração com API iAgente",
                feature3: "Sincronização com RM TOTVS",
                feature4: "Dashboard de gerenciamento"
            },
            project3: {
                title: "Customizações RM TOTVS",
                description: "Desenvolvimento de customizações e relatórios personalizados para os módulos Global Services e Educacional do RM TOTVS. Inclui automação de processos, criação de views otimizadas e integração de dados entre diferentes módulos do sistema.",
                feature1: "Relatórios personalizados",
                feature2: "Automação de processos",
                feature3: "Otimização de consultas SQL",
                feature4: "Integração entre módulos"
            }
        },
        education: {
            title: "Formação & Certificações",
            degree: "Análise e Desenvolvimento de Sistemas"
        },
        contact: {
            title: "Vamos Trabalhar Juntos?",
            subtitle: "Estou sempre aberto a novas oportunidades e desafios. Entre em contato!",
            phone: "Telefone",
            form: {
                name: "Nome",
                subject: "Assunto",
                message: "Mensagem",
                send: "Enviar Mensagem"
            }
        },
        footer: {
            text: "© 2025 Jean Wilson Ferreira. Desenvolvido com amor ☕ e muita dedicação."
        }
    },
    en: {
        nav: {
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        button: {
            changeLanguage: "Change"
        },
        hero: {
            tag: "Systems Analyst",
            greeting: "Hello, I'm",
            name: "Jean Wilson Ferreira",
            subtitle: "Systems Analyst experienced in Java (Spring Boot) and Python (Django), with solid front-end knowledge. I build modern, scalable solutions focused on performance and user experience.",
            viewProjects: "View Projects",
            contact: "Contact"
        },
        about: {
            title: "About Me",
            paragraph1: "I am a Systems Analyst with solid experience in back-end development, specialized in building robust and scalable web applications using <span class=\"highlight\">Java (Spring Boot)</span> and <span class=\"highlight\">Python (Django)</span>.",
            paragraph2: "I have extensive experience in <span class=\"highlight\">developing RESTful APIs</span>, <span class=\"highlight\">system integrations</span>, <span class=\"highlight\">process automation</span>, and <span class=\"highlight\">performance optimization</span>. I work across all stages of the development cycle — from requirements gathering to deployment — always focused on delivering efficient solutions aligned with business needs.",
            paragraph3: "In my current role, I’ve been enhancing my skills in complex integrations, corporate system customization, and <span class=\"highlight\">developing solutions that optimize internal workflows</span> and <span class=\"highlight\">improve user experience</span>.",
            stats: {
                experience: "Years of Experience",
                projects: "Completed Projects",
                commitment: "Commitment"
            }
        },
        skills: {
            title: "Technical Skills",
            languages: "Languages",
            frameworks: "Frameworks & Technologies",
            cloud: "Cloud & DevOps",
            databases: "Databases",
            tools: "Systems & Tools",
            soft: "Soft Skills",
            softSkills: {
                requirements: "Requirements Analysis",
                documentation: "Technical Documentation",
                management: "Project Management",
                problem: "Problem Solving",
                teamwork: "Teamwork"
            }
        },
        experience: {
            title: "Professional Experience",
            period: "December 2023 - Present",
            role: "Systems Analyst",
            description: "Responsible for analysis and development of institutional systems, complete IT project management and RM TOTVS ERP customization. I work from requirements gathering to deployment and user training.",
            highlight1: "Web application development with Java and Spring Boot",
            highlight2: "Administration and customization of RM TOTVS modules",
            highlight3: "Data integration and RESTful API creation",
            highlight4: "Technical documentation and project management",
            highlight5: "Performance monitoring and system optimization"
        },
        projects: {
            title: "Featured Projects",
            project1: {
                title: "Internal Ticketing Portal",
                description: "Complete IT support ticket management system for employees. Developed with robust architecture, includes RESTful web service for front-end communication, automatic task scheduling, and email notification system.",
                feature1: "Real-time tracking system",
                feature2: "Automatic email notifications",
                feature3: "Task scheduling (Schedulers)",
                feature4: "Robust error handling"
            },
            project2: {
                title: "Lead Capture System",
                description: "Smart pre-registration form with complete field validation and automatic integration with external systems. Includes dedicated panel for lead management and synchronization with RM TOTVS for tracking selection processes.",
                feature1: "Complete field validation",
                feature2: "iAgente API integration",
                feature3: "RM TOTVS synchronization",
                feature4: "Management dashboard"
            },
            project3: {
                title: "RM TOTVS Customizations",
                description: "Development of customizations and personalized reports for RM TOTVS Global Services and Educational modules. Includes process automation, creation of optimized views, and data integration between different system modules.",
                feature1: "Custom reports",
                feature2: "Process automation",
                feature3: "SQL query optimization",
                feature4: "Module integration"
            }
        },
        education: {
            title: "Education & Certifications",
            degree: "Systems Analysis and Development"
        },
        contact: {
            title: "Let's Work Together?",
            subtitle: "I'm always open to new opportunities and challenges. Get in touch!",
            phone: "Phone",
            form: {
                name: "Name",
                subject: "Subject",
                message: "Message",
                send: "Send Message"
            }
        },
        footer: {
            text: "© 2025 Jean Wilson Ferreira. Built with love ☕ and lots of dedication."
        }
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'pt';

// Function to update translations
function updateTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];

        // Navigate through nested object
        for (const k of keys) {
            translation = translation[k];
        }

        element.textContent = '';
        if (translation !== undefined) {
            // Remove qualquer texto fora do elemento (irmãos imediatos)
            const prev = element.previousSibling;
            const next = element.nextSibling;
            if (prev && prev.nodeType === Node.TEXT_NODE) prev.remove();
            if (next && next.nodeType === Node.TEXT_NODE) next.remove();

            // Recria o elemento traduzido
            const newElement = element.cloneNode(false);
            newElement.setAttribute('data-i18n', key);
            if (element.getAttribute('class')) {
                newElement.setAttribute('class', element.getAttribute('class'));
            }

            // Insere a tradução
            if (translation.includes('<') && translation.includes('>')) {
                newElement.innerHTML = translation;
            } else {
                newElement.textContent = translation;
            }

            // Substitui o elemento antigo pelo novo
            element.parentNode.replaceChild(newElement, element);
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Update page title
    const titleText = lang === 'pt'
        ? 'Jean Wilson Ferreira - Desenvolvedor Back-End'
        : 'Jean Wilson Ferreira - Back-End Developer';
    document.title = titleText;
}

// Function to toggle language
function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('language', currentLang);

    // Update translations
    updateTranslations(currentLang);

    // Update language toggle button
    const languageToggle = document.getElementById('languageToggle');
    const flag = languageToggle.querySelector('.flag');
    const langText = languageToggle.querySelector('.lang-text');

    if (currentLang === 'en') {
        flag.textContent = 'US';
        langText.textContent = 'EN';
        languageToggle.setAttribute('aria-label', 'Change language');
    } else {
        flag.textContent = 'BR';
        langText.textContent = 'PT';
        languageToggle.setAttribute('aria-label', 'Mudar idioma');
    }

    // Show notification
    const message = currentLang === 'pt'
        ? 'Idioma alterado para Português'
        : 'Language changed to English';
    showNotification(message, 'success');
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {

    // Force clear all data-i18n elements first to prevent content mixing
    const allI18nElements = document.querySelectorAll('[data-i18n]');
    allI18nElements.forEach(element => {
        const prev = element.previousSibling;
        const next = element.nextSibling;
        if (prev && prev.nodeType === Node.TEXT_NODE) prev.remove();
        if (next && next.nodeType === Node.TEXT_NODE) next.remove();
        element.textContent = ''; // limpa conteúdo interno
    });

    // Apply saved language (first time)
    updateTranslations(currentLang);

    // Apply again to ensure no content mixing
    setTimeout(() => {
        console.log("teste")
        updateTranslations(currentLang);
    }, 50);

    // Update language toggle button initial state
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        const flag = languageToggle.querySelector('.flag');
        const langText = languageToggle.querySelector('.lang-text');

        if (currentLang === 'en') {
            flag.textContent = 'US';
            langText.textContent = 'EN';
            languageToggle.setAttribute('aria-label', 'Change language');
        } else {
            flag.textContent = 'BR';
            langText.textContent = 'PT';
            languageToggle.setAttribute('aria-label', 'Mudar idioma');
        }

        // Add click event
        languageToggle.addEventListener('click', toggleLanguage);
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 72; // navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function highlightNavigation() {
        let scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // ===================================
    // Scroll Animations
    // ===================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });

    // Auto-add animation attributes to key elements
    const animateElements = document.querySelectorAll(`
        .section-title,
        .about-text,
        .skill-category,
        .experience-item,
        .project-card,
        .education-card
    `);

    animateElements.forEach((el, index) => {
        if (!el.hasAttribute('data-animate')) {
            el.setAttribute('data-animate', '');
            el.style.transitionDelay = `${index * 0.1}s`;
        }
        observer.observe(el);
    });

    // ===================================
    // Typing Effect for Hero Title
    // ===================================
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        heroTitle.style.opacity = '1';

        let index = 0;
        let isTag = false;
        let tagBuffer = '';
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = text;
        const fullText = tempDiv.innerHTML;

        function type() {
            if (index < fullText.length) {
                const char = fullText.charAt(index);

                if (char === '<') {
                    isTag = true;
                    tagBuffer = '<';
                } else if (char === '>' && isTag) {
                    isTag = false;
                    tagBuffer += '>';
                    heroTitle.innerHTML += tagBuffer;
                    tagBuffer = '';
                } else if (isTag) {
                    tagBuffer += char;
                } else {
                    heroTitle.innerHTML += char;
                }

                index++;
                setTimeout(type, 30);
            }
        }

        setTimeout(type, 500);
    }

    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', function () {
            navLinksContainer.classList.toggle('active');
            this.classList.toggle('active');

            // Animate icon
            const icon = this.querySelector('svg');
            if (this.classList.contains('active')) {
                icon.innerHTML = `
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                `;
            } else {
                icon.innerHTML = `
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                `;
            }
        });

        // Close mobile menu when clicking a link
        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                navLinksContainer.classList.remove('active');
                mobileMenuBtn.classList.remove('active');

                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = `
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                `;
            });
        });
    }

    // ===================================
    // Form Handling
    // ===================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Create mailto link
            const mailtoLink = `mailto:jeanwferreira@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Nome: ${formData.name}\n` +
                `Email: ${formData.email}\n\n` +
                `Mensagem:\n${formData.message}`
            )}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            const successMsg = currentLang === 'pt'
                ? 'Abrindo seu cliente de email...'
                : 'Opening your email client...';
            showNotification(successMsg, 'success');

            // Reset form
            contactForm.reset();
        });
    }

    // ===================================
    // Notification System
    // ===================================
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${type === 'success' ?
                '<polyline points="20 6 9 17 4 12"></polyline>' :
                '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
            }
                </svg>
                <span>${message}</span>
            </div>
        `;

        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '16px 24px',
            background: type === 'success' ? '#22C55E' : '#0091FF',
            color: '#0A0A0A',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            zIndex: '9999',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '14px',
            fontWeight: '600',
            animation: 'slideInRight 0.3s ease-out',
            maxWidth: '400px'
        });

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Make showNotification global
    window.showNotification = showNotification;

    // Add notification animations to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        /* Mobile menu styles */
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 72px;
                left: 0;
                right: 0;
                background: rgba(10, 10, 10, 0.98);
                backdrop-filter: blur(10px);
                border-bottom: 1px solid var(--neutral-700);
                flex-direction: column;
                padding: 24px;
                gap: 16px;
                transform: translateY(-100%);
                opacity: 0;
                transition: transform 0.3s ease-out, opacity 0.3s ease-out;
                pointer-events: none;
            }
            
            .nav-links.active {
                display: flex;
                transform: translateY(0);
                opacity: 1;
                pointer-events: all;
            }
            
            .nav-links a {
                font-size: 18px;
                padding: 12px 0;
            }
            
            .mobile-menu-btn.active {
                color: var(--primary-500);
            }
        }
    `;
    document.head.appendChild(style);

    // ===================================
    // Parallax Effect for Hero
    // ===================================
    const hero = document.querySelector('.hero');
    const particles = document.querySelector('.particles');

    if (hero && particles) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            particles.style.transform = `translateY(${rate}px)`;
        });
    }

    // ===================================
    // Skill Tags Animation
    // ===================================
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.05}s`;
    });

    // ===================================
    // Project Cards Tilt Effect
    // ===================================
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = '';
        });
    });

    // ===================================
    // Counter Animation for Stats
    // ===================================
    function animateCounter(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);
        const isPercentage = target === 100;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            if (isPercentage) {
                element.textContent = Math.floor(current) + '%';
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }

    // Observe stats and trigger animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                const isPercentage = text.includes('%');
                const number = parseInt(text);

                animateCounter(entry.target, number, 2000);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // ===================================
    // Dynamic Year in Footer
    // ===================================
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-content p');
    if (footerText && footerText.textContent.includes('2025')) {
        footerText.textContent = footerText.textContent.replace('2025', currentYear);
    }

    // ===================================
    // Performance Optimization
    // ===================================

    // Lazy load images (if any are added)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===================================
    // Smooth Page Load
    // ===================================
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

    // ===================================
    // Console Easter Egg
    // ===================================
    if (currentLang === 'pt') {
        console.log('%c🚀 Portfólio Jean Wilson Ferreira', 'color: #0091FF; font-size: 24px; font-weight: bold;');
        console.log('%c💻 Desenvolvedor Back-End | Java & Spring Boot', 'color: #66BFFF; font-size: 14px;');
        console.log('%cInteressado em trabalhar junto? Entre em contato: jeanwferreira@gmail.com', 'color: #A1A1AA; font-size: 12px;');
    } else {
        console.log('%c🚀 Jean Wilson Ferreira Portfolio', 'color: #0091FF; font-size: 24px; font-weight: bold;');
        console.log('%c💻 Back-End Developer | Java & Spring Boot', 'color: #66BFFF; font-size: 14px;');
        console.log('%cInterested in working together? Get in touch: jeanwferreira@gmail.com', 'color: #A1A1AA; font-size: 12px;');
    }

    // ===================================
    // Keyboard Navigation Enhancement
    // ===================================
    document.addEventListener('keydown', function (e) {
        // Press 'H' to go to home
        if (e.key === 'h' || e.key === 'H') {
            if (!e.target.matches('input, textarea')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Press 'C' to go to contact
        if (e.key === 'c' || e.key === 'C') {
            if (!e.target.matches('input, textarea')) {
                const contactSection = document.getElementById('contato');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }

        // Press 'L' to toggle language
        if (e.key === 'l' || e.key === 'L') {
            if (!e.target.matches('input, textarea')) {
                toggleLanguage();
            }
        }
    });

    // ===================================
    // Accessibility Enhancements
    // ===================================

    // Skip to main content
    const skipLink = document.createElement('a');
    skipLink.href = '#sobre';
    skipLink.className = 'skip-link';
    skipLink.textContent = currentLang === 'pt'
        ? 'Pular para o conteúdo principal'
        : 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-500);
        color: var(--neutral-950);
        padding: 8px 16px;
        text-decoration: none;
        z-index: 10000;
        font-weight: 600;
    `;

    skipLink.addEventListener('focus', function () {
        this.style.top = '0';
    });

    skipLink.addEventListener('blur', function () {
        this.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // ===================================
    // Print Styles Detection
    // ===================================
    window.addEventListener('beforeprint', function () {
        document.body.classList.add('printing');
    });

    window.addEventListener('afterprint', function () {
        document.body.classList.remove('printing');
    });

});

// ===================================
// Service Worker Registration (PWA)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable PWA functionality
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}
