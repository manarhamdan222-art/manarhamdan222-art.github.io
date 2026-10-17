'use strict';

/* =====================================================================
   1. Content: GitHub links, translations, projects
   ===================================================================== */

const PROFILE_URL = 'https://github.com/manarhamdan222-art';
const EMAIL = 'manarhamdan222@gmail.com';

// UI strings, one dictionary per language. Keys match data-i18n attributes in index.html.
const i18n = {
  en: {
    doc_title: 'Manar Hamdan | Cyber Security',
    brand: 'Manar Hamdan',
    nav_home: 'Home', nav_about: 'About', nav_skills: 'Skills', nav_projects: 'Projects', nav_contact: 'Contact',
    hero_name: 'Manar Hamdan',
    hero_role: 'Cyber Security ',
    hero_summary: 'Hands-on experience in penetration testing, digital forensics, network security and IoT protocol analysis. Recently completed an ISO 27001 internship at the Ministry of Digital Economy and Entrepreneurship.',
    btn_projects: 'View projects',
    btn_cv: 'Download CV',
    alt_photo: 'Portrait of Manar Hamdan in a black blazer and light hijab',
    about_title: 'About me',
    about_lead: 'I completed an Information Security internship at the Ministry of Digital Economy and Entrepreneurship, focusing on ISO 27001 and Information Security Management System (ISMS) policies, risk assessments and compliance frameworks. Alongside my degree, I built hands-on experience through forensic investigations, Linux server hardening, IoT protocol measurements and a blockchain-based graduation project.',
    edu_title: 'Education',
    edu_name: 'Tafila Technical University',
    edu_text: 'Cyber Security, graduated with Very Good standing.',
    exp_title: 'Experience',
    exp_role: 'Information Security Intern',
    exp_org: 'Ministry of Digital Economy and Entrepreneurship, Jordan, 3 months',
    exp_b1: 'Studied and applied the concepts of ISO 27001, the Information Security Management System standard.',
    exp_b2: 'Gained exposure to information security policies, risk assessment and compliance frameworks.',
    skills_title: 'Skills',
    skills_sub: "Tools and concepts I've used in coursework and projects.",
    sk_forensics: 'Digital forensics',
    sk_network: 'Network security',
    sk_pentest: 'Penetration testing',
    sk_prog: 'Programming',
    sk_std: 'Standards and compliance',
    projects_title: 'Project Showcase',
    projects_sub: 'Web engineering coursework, with the code on GitHub.',
    projects_academic: 'Graduation and university projects',
    repo_btn: 'View Repository',
    contact_title: 'Get in touch',
    contact_sub: 'Send me a message and it will reach my inbox directly, or contact me through the links.',
    loc: 'Amman, Jordan',
    f_name: 'Name', f_email: 'Email', f_message: 'Message', f_send: 'Send message',
    f_err: 'Fill in all fields with a valid email address.',
    f_sending: 'Sending...',
    f_ok: 'Thank you, your message was sent.',
    f_fail: 'The message could not be sent. Please email me directly at manarhamdan222@gmail.com.',
    footer: '© 2026 Manar Hamdan. Built with HTML, CSS and JavaScript.',
    aria_mode: 'Switch between light and dark mode',
    aria_theme: 'Change color theme',
    aria_cv: 'Download CV',
    cv_short: 'CV',
    aria_lang: 'Switch language',
    aria_menu: 'Toggle menu',
    th_cyan: 'Cyan', th_violet: 'Violet', th_emerald: 'Emerald', th_amber: 'Amber',
    lang_btn: 'العربية'
  },
  ar: {
    doc_title: 'منار حمدان | الأمن السيبراني',
    brand: 'منار حمدان',
    nav_home: 'الرئيسية', nav_about: 'نبذة', nav_skills: 'المهارات', nav_projects: 'المشاريع', nav_contact: 'التواصل',
    hero_name: 'منار حمدان',
    hero_role: ' أمن سيبراني',
    hero_summary: 'خبرة عملية في اختبار الاختراق والتحقيق الجنائي الرقمي وأمن الشبكات وتحليل بروتوكولات إنترنت الأشياء. أنهيت مؤخرًا تدريبًا على معيار ISO 27001 في وزارة الاقتصاد الرقمي والريادة.',
    btn_projects: 'عرض المشاريع',
    btn_cv: 'تحميل السيرة الذاتية',
    alt_photo: 'صورة منار حمدان مرتدية سترة سوداء وحجابًا فاتحًا',
    about_title: 'نبذة عني',
    about_lead: 'أنهيت تدريبًا في أمن المعلومات في وزارة الاقتصاد الرقمي والريادة، ركّز على معيار ISO 27001 وسياسات نظام إدارة أمن المعلومات (ISMS) وتقييم المخاطر وأطر الامتثال. وإلى جانب دراستي، اكتسبت خبرة عملية من خلال التحقيقات الجنائية الرقمية، وتحصين خوادم لينكس، وقياس أداء بروتوكولات إنترنت الأشياء، ومشروع تخرج يعتمد على البلوكتشين.',
    edu_title: 'التعليم',
    edu_name: 'جامعة الطفيلة التقنية',
    edu_text: 'الأمن السيبراني، تخرجت بتقدير جيد جدًا.',
    exp_title: 'الخبرة',
    exp_role: 'متدربة في أمن المعلومات',
    exp_org: 'وزارة الاقتصاد الرقمي والريادة، الأردن، 3 أشهر',
    exp_b1: 'درست وطبّقت مفاهيم ISO 27001، معيار نظام إدارة أمن المعلومات.',
    exp_b2: 'تعرّفت على سياسات أمن المعلومات وتقييم المخاطر وأطر الامتثال.',
    skills_title: 'المهارات',
    skills_sub: 'أدوات ومفاهيم استخدمتها في مقرراتي الجامعية ومشاريعي.',
    sk_forensics: 'التحقيق الجنائي الرقمي',
    sk_network: 'أمن الشبكات',
    sk_pentest: 'اختبار الاختراق',
    sk_prog: 'البرمجة',
    sk_std: 'المعايير والامتثال',
    projects_title: 'معرض المشاريع',
    projects_sub: 'مشاريع مقرر هندسة الويب، مع الشيفرة على GitHub.',
    projects_academic: 'مشاريع التخرج والمقررات الجامعية',
    repo_btn: 'عرض المستودع',
    contact_title: 'تواصل معي',
    contact_sub: 'أرسل لي رسالة وستصلني مباشرة على بريدي الإلكتروني، أو تواصل معي عبر الروابط.',
    loc: 'عمّان، الأردن',
    f_name: 'الاسم', f_email: 'البريد الإلكتروني', f_message: 'الرسالة', f_send: 'إرسال الرسالة',
    f_err: 'عبّئ جميع الحقول وأدخل بريدًا إلكترونيًا صحيحًا.',
    f_sending: 'جارٍ الإرسال...',
    f_ok: 'شكرًا لك، تم إرسال رسالتك.',
    f_fail: 'تعذر إرسال الرسالة. يرجى مراسلتي مباشرة على manarhamdan222@gmail.com.',
    footer: '© 2026 منار حمدان. بُني باستخدام HTML وCSS وJavaScript.',
    aria_mode: 'التبديل بين الوضع الفاتح والداكن',
    aria_theme: 'تغيير لون الموقع',
    aria_cv: 'تحميل السيرة الذاتية',
    cv_short: 'السيرة',
    aria_lang: 'تغيير اللغة',
    aria_menu: 'فتح القائمة وإغلاقها',
    th_cyan: 'سماوي', th_violet: 'بنفسجي', th_emerald: 'زمردي', th_amber: 'كهرماني',
    lang_btn: 'English'
  }
};

// Projects. `group: 'showcase'` cards show a repository link (put the exact
// repository link in `repo`).
// `group: 'academic'` cards come from the CV and have no link.
const projects = [
  {
    group: 'showcase', repo: 'https://github.com/manarhamdan222-art/project-00',
    tags: ['HTML5', 'CSS3', 'Git'],
    course: { en: 'Project 00', ar: 'Project 00' },
    title: { en: 'Project 00', ar: 'Project 00' },
    desc: {
      en: 'Web engineering coursework exercise covering foundational web concepts, project structure, and core page setup.',
      ar: 'تمرين ضمن مقرر هندسة الويب يغطي مفاهيم الويب الأساسية وهيكلة المشروع وإعداد الصفحة الأساسي.'
    }
  },
  {
    group: 'showcase', repo: 'https://github.com/manarhamdan222-art/project-01',
    tags: ['HTML5', 'CSS3', 'Flexbox'],
    course: { en: 'Project 01', ar: 'Project 01' },
    title: { en: 'Project 01', ar: 'Project 01' },
    desc: {
      en: 'Web engineering coursework module focused on layout structuring, navigation design, and styling standards.',
      ar: 'وحدة ضمن مقرر هندسة الويب تركّز على بناء تخطيط الصفحة وتصميم التنقل ومعايير التنسيق.'
    }
  },
  {
    group: 'showcase', repo: 'https://github.com/manarhamdan222-art/project-02',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    course: { en: 'Project 02', ar: 'Project 02' },
    title: { en: 'Project 02', ar: 'Project 02' },
    desc: {
      en: 'Web development project covering interactive features, modern styling techniques, and responsive components.',
      ar: 'مشروع تطوير ويب يغطي الميزات التفاعلية وتقنيات التنسيق الحديثة والمكوّنات المتجاوبة.'
    }
  },
  {
    group: 'showcase', repo: 'https://github.com/manarhamdan222-art/project-03',
    tags: ['JavaScript ES6+', 'DOM API', 'Git'],
    course: { en: 'Project 03', ar: 'Project 03' },
    title: { en: 'Project 03', ar: 'Project 03' },
    desc: {
      en: 'Web engineering module covering client-side logic, dynamic DOM interaction, and script modularity.',
      ar: 'وحدة ضمن مقرر هندسة الويب تغطي منطق جهة العميل والتفاعل الديناميكي مع DOM وتقسيم السكربتات إلى وحدات.'
    }
  },
  {
    group: 'academic', featured: true,
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'SHA-256', 'QR codes'],
    course: { en: 'Graduation project', ar: 'مشروع التخرج' },
    title: { en: 'PharmaChain: Pharmaceutical Supply Chain Tracking', ar: 'PharmaChain: نظام تتبع سلسلة توريد الأدوية' },
    desc: {
      en: 'A tamper-evident blockchain ledger built on SHA-256 hash chaining for tracking pharmaceutical supply chains. It includes QR code generation and verification for drug authentication, a block explorer page and a live tamper demonstration. Supervised by Prof. Ashraf Al-Khresheh, team of 4.',
      ar: 'سجل بلوكتشين مقاوم للتلاعب يعتمد على ربط الكتل بالتجزئة SHA-256 لتتبع سلسلة توريد الأدوية. يتضمن توليد رموز QR والتحقق منها لإثبات أصالة الدواء، وصفحة لاستعراض الكتل، وعرضًا حيًا لكشف التلاعب. بإشراف Prof. Ashraf Al-Khresheh، ضمن فريق من 4 أعضاء.'
    }
  },
  {
    group: 'academic',
    tags: ['FTK Imager', 'Autopsy', 'MD5', 'SHA1'],
    course: { en: 'Course: Digital Forensics', ar: 'مقرر التحقيق الجنائي الرقمي' },
    title: { en: 'Digital Forensic Investigation: Recovering Deleted Evidence from USB Storage', ar: 'التحقيق الجنائي الرقمي: استرجاع الأدلة المحذوفة من وسائط USB' },
    desc: {
      en: 'Acquired a bit-by-bit forensic image of a USB drive with FTK Imager, verified its integrity with MD5/SHA1 hashing, and recovered deleted temporary-file artifacts using Autopsy.',
      ar: 'أنشأت صورة جنائية بت ببت لوحدة USB باستخدام FTK Imager، وتحققت من سلامتها عبر تجزئة MD5/SHA1، واسترجعت آثار الملفات المؤقتة المحذوفة باستخدام Autopsy.'
    }
  },
  {
    group: 'academic',
    tags: ['Ubuntu', 'LAMP', 'UFW', 'Nmap', 'Nikto', 'Dirb'],
    course: { en: 'Course: Infrastructure Security Using Linux', ar: 'مقرر أمن البنية التحتية باستخدام لينكس' },
    title: { en: 'Linux Web Server Deployment and Penetration Testing', ar: 'نشر خادم ويب على لينكس واختبار اختراقه' },
    desc: {
      en: 'Deployed Simple PHP Blog on Ubuntu with the LAMP stack and configured the UFW firewall, SSH hardening and server identity suppression. Testing with Nmap, Nikto and Dirb exposed a public .git directory and directory indexing.',
      ar: 'نشرت تطبيق Simple PHP Blog على Ubuntu باستخدام حزمة LAMP، وضبطت جدار الحماية UFW وتحصين SSH وإخفاء هوية الخادم. وكشف الاختبار بأدوات Nmap وNikto وDirb عن مجلد .git مكشوف وتصفّح للمجلدات.'
    }
  },
  {
    group: 'academic',
    tags: ['MQTT', 'Mosquitto', 'Flask', 'Python', 'VirtualBox'],
    course: { en: 'Courses: Scientific Research Methods in ICT, Wireless and Mobile Networks', ar: 'المقرران: مناهج البحث العلمي في تكنولوجيا المعلومات والاتصالات، والشبكات اللاسلكية والمتنقلة' },
    title: { en: 'Performance Comparison of MQTT and HTTP for IoT Applications', ar: 'مقارنة أداء MQTT وHTTP لتطبيقات إنترنت الأشياء' },
    desc: {
      en: 'Set up Ubuntu Server on VirtualBox with a Mosquitto MQTT broker and a Flask HTTP server, wrote Python clients for both, and measured latency, throughput, scalability and reliability under simulated packet loss. Published as a research paper.',
      ar: 'جهزت Ubuntu Server على VirtualBox مع وسيط Mosquitto لبروتوكول MQTT وخادم Flask لبروتوكول HTTP، وكتبت عملاء بلغة Python للاثنين، وقست زمن الاستجابة والإنتاجية وقابلية التوسع والموثوقية مع فقدان حزم محاكى. نُشر المشروع كورقة بحثية.'
    }
  },
  {
    group: 'academic',
    tags: ['Hadoop', 'Python', 'Google Colab', 'matplotlib'],
    course: { en: 'Course: Cloud Computing', ar: 'مقرر الحوسبة السحابية' },
    title: { en: 'MapReduce Word Count Using Hadoop', ar: 'عدّ الكلمات باستخدام MapReduce وHadoop' },
    desc: {
      en: 'Implemented a distributed word count job with the Hadoop Streaming API and Python, ran it on Google Colab, and visualized word frequencies with matplotlib.',
      ar: 'نفّذت مهمة عدّ كلمات موزعة باستخدام Hadoop Streaming API ولغة Python، وشغّلتها على Google Colab، وعرضت تكرار الكلمات بيانيًا باستخدام matplotlib.'
    }
  },
  {
    group: 'academic',
    tags: ['Spyware', 'Detection', 'Mitigation'],
    course: { en: '', ar: '' },
    title: { en: 'Spyware Analysis and Threat Research', ar: 'تحليل برامج التجسس وبحث التهديدات' },
    desc: {
      en: 'Analyzed spyware behavior and attack vectors, and researched detection and mitigation techniques.',
      ar: 'حللت سلوك برامج التجسس وأساليب الهجوم المستخدمة فيها، وبحثت في تقنيات الكشف والحد من خطرها.'
    }
  }
];

/* =====================================================================
   2. State helpers (saved in localStorage, wrapped for safety)
   ===================================================================== */

const root = document.documentElement;

function saveSetting(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable, ignore */ }
}

function announceThemeChange() {
  document.dispatchEvent(new CustomEvent('themechange'));
}

/* =====================================================================
   3. Language switcher (EN / AR) with dir + lang
   ===================================================================== */

const ARROW_ICON = '<svg class="arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>';

function buildProjectCard(p, lang) {
  const card = document.createElement('article');
  card.className = 'card project' + (p.featured ? ' featured' : '');

  if (p.course[lang]) {
    const label = document.createElement('p');
    label.className = 'label';
    label.textContent = p.course[lang];
    card.appendChild(label);
  }

  const h3 = document.createElement('h3');
  h3.textContent = p.title[lang];
  card.appendChild(h3);

  const desc = document.createElement('p');
  desc.className = 'desc';
  desc.textContent = p.desc[lang];
  card.appendChild(desc);

  const chips = document.createElement('ul');
  chips.className = 'chips';
  p.tags.forEach(function (tag) {
    const li = document.createElement('li');
    li.textContent = tag;
    chips.appendChild(li);
  });
  card.appendChild(chips);

  // only the showcase projects have a repository link
  if (p.repo) {
    const link = document.createElement('a');
    link.className = 'repo-link';
    link.href = p.repo;
    link.target = '_blank';
    link.rel = 'noopener';
    link.innerHTML = '<span></span>' + ARROW_ICON;
    link.querySelector('span').textContent = i18n[lang].repo_btn;
    card.appendChild(link);
  }
  return card;
}

function renderProjects(lang) {
  const showcase = document.getElementById('projectsGrid');
  const academic = document.getElementById('academicGrid');
  showcase.textContent = '';
  academic.textContent = '';

  projects.forEach(function (p) {
    (p.group === 'showcase' ? showcase : academic).appendChild(buildProjectCard(p, lang));
  });
}

function setLanguage(lang) {
  const t = i18n[lang];

  // direction and language of the whole document
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = t.doc_title;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.textContent = t[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    el.setAttribute('aria-label', t[el.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    el.alt = t[el.dataset.i18nAlt];
  });

  document.getElementById('langLabel').textContent = t.lang_btn;
  renderProjects(lang);
  document.getElementById('formStatus').textContent = '';
  saveSetting('mh-lang', lang);
}

document.getElementById('langBtn').addEventListener('click', function () {
  setLanguage(root.lang === 'ar' ? 'en' : 'ar');
});

/* =====================================================================
   4. Light / dark mode and accent color
   ===================================================================== */

document.getElementById('modeBtn').addEventListener('click', function () {
  const next = root.dataset.mode === 'light' ? 'dark' : 'light';
  root.dataset.mode = next;
  saveSetting('mh-mode', next);
  announceThemeChange();
});

const themeBtn = document.getElementById('themeBtn');
const ACCENTS = ['cyan', 'violet', 'emerald', 'amber'];

// one click moves to the next color theme
themeBtn.addEventListener('click', function () {
  const i = ACCENTS.indexOf(root.dataset.accent);
  const next = ACCENTS[(i + 1) % ACCENTS.length];
  root.dataset.accent = next;
  saveSetting('mh-accent', next);
  announceThemeChange();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMenu();
});

/* =====================================================================
   5. Mobile menu and active link while scrolling
   ===================================================================== */

const header = document.getElementById('siteHeader');
const menuBtn = document.getElementById('menuBtn');

function closeMenu() {
  header.classList.remove('nav-open');
  menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn.addEventListener('click', function () {
  const open = header.classList.toggle('nav-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(function (a) {
  a.addEventListener('click', closeMenu);
});

const navAnchors = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      navAnchors.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('main section[id]').forEach(function (s) { observer.observe(s); });

/* =====================================================================
   6. Contact form (opens the visitor's email app, no backend needed)
   ===================================================================== */

const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
const sendBtn = form.querySelector('button[type="submit"]');

function showStatus(text, isError) {
  statusEl.textContent = text;
  statusEl.classList.toggle('error', Boolean(isError));
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const t = i18n[root.lang];
  const name = document.getElementById('fName').value.trim();
  const email = document.getElementById('fEmail').value.trim();
  const message = document.getElementById('fMsg').value.trim();
  const honeypot = document.getElementById('fHoney').value;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !message || !emailOk) {
    showStatus(t.f_err, true);
    return;
  }
  if (honeypot) return; // a bot filled the hidden field

  showStatus(t.f_sending, false);
  sendBtn.disabled = true;

  // FormSubmit forwards the message to the address in the URL
  fetch('https://formsubmit.co/ajax/' + EMAIL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
      _subject: 'Portfolio message from ' + name,
      _template: 'table',
      _captcha: 'false'
    })
  })
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function (data) {
      if (String(data.success) !== 'true') throw new Error(data.message || 'not sent');
      showStatus(i18n[root.lang].f_ok, false);
      form.reset();
    })
    .catch(function () {
      showStatus(i18n[root.lang].f_fail, true);
    })
    .then(function () {
      sendBtn.disabled = false;
    });
});

/* =====================================================================
   7. Neural network background (reacts to the pointer)
   ===================================================================== */

(function neuralBackground() {
  const canvas = document.getElementById('neural');
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const LINK_DIST = 130;   // max distance for a link between two neurons
  const REACH = 170;       // how far the pointer influences neurons

  let w = 0, h = 0, nodes = [], rgb = '29,161,242', boost = 1;
  const pointer = { x: -9999, y: -9999, active: false };

  function readTheme() {
    const style = getComputedStyle(root);
    rgb = style.getPropertyValue('--accent-rgb').replace(/\s/g, '') || rgb;
    boost = root.dataset.mode === 'light' ? 1.3 : 1;
  }

  function build() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(110, Math.round((w * h) / 15000));
    nodes = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      nodes.push({
        hx: x, hy: y, x: x, y: y, vx: 0, vy: 0,
        r: 1.4 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function update(time) {
    nodes.forEach(function (n) {
      // each neuron rests near its home position with a very slight drift
      const tx = n.hx + Math.sin(time / 2600 + n.phase) * 6;
      const ty = n.hy + Math.cos(time / 3100 + n.phase) * 6;
      let ax = (tx - n.x) * 0.02;
      let ay = (ty - n.y) * 0.02;

      // neurons near the pointer reach toward it
      if (pointer.active) {
        const dx = pointer.x - n.x;
        const dy = pointer.y - n.y;
        const d = Math.hypot(dx, dy);
        if (d < REACH && d > 1) {
          const pull = (1 - d / REACH) * 0.9;
          ax += (dx / d) * pull;
          ay += (dy / d) * pull;
        }
      }

      n.vx = (n.vx + ax) * 0.86;
      n.vy = (n.vy + ay) * 0.86;
      n.x += n.vx;
      n.y += n.vy;
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 0.8;

    // links between neighbouring neurons
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.hypot(dx, dy);
        if (d < LINK_DIST) {
          ctx.strokeStyle = 'rgba(' + rgb + ',' + ((1 - d / LINK_DIST) * 0.35 * boost) + ')';
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // neurons, plus a signal line from the pointer to the ones it excites
    nodes.forEach(function (n) {
      let excite = 0;
      if (pointer.active) {
        const d = Math.hypot(pointer.x - n.x, pointer.y - n.y);
        if (d < REACH) {
          excite = 1 - d / REACH;
          ctx.strokeStyle = 'rgba(' + rgb + ',' + (excite * 0.7 * boost) + ')';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(pointer.x, pointer.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
      }
      if (excite > 0) {
        ctx.fillStyle = 'rgba(' + rgb + ',' + (excite * 0.18) + ')';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (3 + excite * 4), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = 'rgba(' + rgb + ',' + Math.min(1, (0.5 + excite * 0.5) * boost) + ')';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * (1 + excite * 0.9), 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.lineWidth = 0.8;
  }

  function frame(time) {
    update(time);
    draw();
    requestAnimationFrame(frame);
  }

  window.addEventListener('pointermove', function (e) {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = true;
  }, { passive: true });
  window.addEventListener('pointerup', function (e) {
    if (e.pointerType !== 'mouse') pointer.active = false;
  });
  window.addEventListener('pointercancel', function () { pointer.active = false; });
  document.addEventListener('mouseleave', function () { pointer.active = false; });
  window.addEventListener('blur', function () { pointer.active = false; });

  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      build();
      if (reduceMotion) draw();
    }, 150);
  });

  document.addEventListener('themechange', function () {
    readTheme();
    if (reduceMotion) draw();
  });

  readTheme();
  build();
  if (reduceMotion) {
    draw();                       // still image, no animation
  } else {
    requestAnimationFrame(frame);
  }
})();

/* =====================================================================
   8. Start
   ===================================================================== */

setLanguage(root.lang === 'ar' ? 'ar' : 'en');
