/* ===== i18n ===== */
const translations = {
  pt: {
    nav_home: "Início",
    nav_about: "Sobre",
    nav_skills: "Skills",
    nav_projects: "Projetos",
    nav_education: "Formação",
    nav_contact: "Contato",
    hero_role: "Estudante de Ciência da Computação | Desenvolvimento de Software",
    hero_badge: "Disponível para estágio ou contratações",
    sys_user: "WHO AM I?",
    sys_role: "CS Student / Dev",
    sys_status: "Available for internship",
    sys_stack: "TECH STACK",
    sys_langs: "LANGUAGES",
    lang_pt_tag: "PT Nativo",
    lang_en_tag: "EN Avançado",
    lang_es_tag: "ES Intermediário",
    btn_projects: "./view_projects",
    btn_contact: "./contact",
    about_title: "Sobre mim",
    about_who: "WHO AM I",
    about_p1: "Sou estudante de Ciência da Computação no 2º semestre, com grande interesse em programação e desenvolvimento de software. Busco minha primeira oportunidade de estágio na área de Tecnologia da Informação para desenvolver minhas habilidades técnicas, adquirir experiência prática e contribuir com soluções inovadoras.",
    about_p2: "Me destaco pela facilidade de aprendizado, comprometimento e vontade constante de evoluir profissionalmente. Estou motivado a aprender novas tecnologias e enfrentar desafios.",
    about_looking: "OBJECTIVES",
    about_item1: "Estágio em Desenvolvimento de Software",
    about_item2: "Aplicar conhecimentos em Python e C",
    about_item3: "Ambiente de aprendizado contínuo",
    about_item4: "Contribuir com soluções inovadoras",
    skills_title: "Skills",
    skills_tech: "TECHNICAL",
    skills_soft: "SOFT SKILLS",
    skills_lang: "LANGUAGES",
    soft1: "Facilidade de aprendizado",
    soft2: "Raciocínio lógico",
    soft3: "Trabalho em equipe",
    soft4: "Organização",
    soft5: "Proatividade",
    soft6: "Resolução de problemas",
    soft7: "Comprometimento",
    lang_pt: "Português",
    lang_en: "Inglês",
    lang_es: "Espanhol",
    level_native: "Nativo",
    level_adv: "Avançado",
    level_int: "Intermediário",
    projects_title: "Projetos",
    proj1_title: "Calculadora de Física",
    proj1_desc: "Calculadora interativa com 6 opções de cálculo de física, desenvolvida em Python com interface web via Streamlit.",
    proj2_title: "Calculadora de Matemática",
    proj2_desc: "Calculadora matemática interativa inspirada no modelo de física, também construída com Python e Streamlit.",
    edu_title: "Formação",
    edu_course: "Bacharelado em Ciência da Computação",
    edu_status: "Em andamento • 2º semestre",
    contact_title: "Contato",
    contact_intro: "Estou disponível para oportunidades de estágio. Entre em contato!",
    phone_label: "TELEFONE",
    footer: "system.exit(0)"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",
    hero_role: "Computer Science Student | Software Development",
    hero_badge: "Available for internship",
    sys_user: "WHO AM I?",
    sys_role: "CS Student / Dev",
    sys_status: "Available for internship",
    sys_stack: "TECH STACK",
    sys_langs: "LANGUAGES",
    lang_pt_tag: "PT Native",
    lang_en_tag: "EN Advanced",
    lang_es_tag: "ES Intermediate",
    btn_projects: "./view_projects",
    btn_contact: "./contact",
    about_title: "About me",
    about_who: "WHO AM I",
    about_p1: "I'm a Computer Science student in my 2nd semester, with a strong interest in programming and software development. I'm looking for my first internship opportunity in Information Technology to develop my technical skills, gain practical experience, and contribute with innovative solutions.",
    about_p2: "I stand out for my ease of learning, commitment, and constant desire to grow professionally. I'm motivated to learn new technologies and face challenges.",
    about_looking: "OBJECTIVES",
    about_item1: "Software Development Internship",
    about_item2: "Apply Python and C knowledge",
    about_item3: "Continuous learning environment",
    about_item4: "Contribute with innovative solutions",
    skills_title: "Skills",
    skills_tech: "TECHNICAL",
    skills_soft: "SOFT SKILLS",
    skills_lang: "LANGUAGES",
    soft1: "Quick learner",
    soft2: "Logical reasoning",
    soft3: "Teamwork",
    soft4: "Organization",
    soft5: "Proactivity",
    soft6: "Problem solving",
    soft7: "Commitment",
    lang_pt: "Portuguese",
    lang_en: "English",
    lang_es: "Spanish",
    level_native: "Native",
    level_adv: "Advanced",
    level_int: "Intermediate",
    projects_title: "Projects",
    proj1_title: "Physics Calculator",
    proj1_desc: "Interactive calculator with 6 physics calculation options, built in Python with a web interface using Streamlit.",
    proj2_title: "Math Calculator",
    proj2_desc: "Interactive math calculator inspired by the physics model, also built with Python and Streamlit.",
    edu_title: "Education",
    edu_course: "Bachelor's in Computer Science",
    edu_status: "In progress • 2nd semester",
    contact_title: "Contact",
    contact_intro: "I'm available for internship opportunities. Get in touch!",
    phone_label: "PHONE",
    footer: "system.exit(0)"
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'pt';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    const active = toggle.querySelector('.lang-active');
    const inactive = toggle.querySelector('.lang-inactive');
    if (lang === 'pt') {
      active.textContent = 'PT';
      inactive.textContent = 'EN';
    } else {
      active.textContent = 'EN';
      inactive.textContent = 'PT';
    }
  }
}

document.getElementById('lang-toggle')?.addEventListener('click', () => {
  setLanguage(currentLang === 'pt' ? 'en' : 'pt');
});

setLanguage(currentLang);

/* ===== Mobile Menu ===== */
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle?.classList.remove('active');
    navLinks?.classList.remove('open');
  });
});

/* ===== Active Nav ===== */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function highlightNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${id}`) {
          item.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', highlightNav);

/* ===== Matrix Rain ===== */
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00ff41';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});

/* ===== Fade-in on scroll ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.panel, .section-header').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
