 
    // Data
    const projects = [
      {
        id: 1,
        title: "Fintech Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        year: "2024"
      },
      {
        id: 2,
        title: "E-commerce Platform",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        year: "2024"
      },
      {
        id: 3,
        title: "Brand Identity System",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
        year: "2023"
      },
      {
        id: 4,
        title: "Mobile Banking App",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        year: "2023"
      }
    ];

    const skills = [
      { name: "UI/UX Design", level: 95 },
      { name: "Web Development", level: 90 },
      { name: "Brand Identity", level: 85 },
      { name: "Motion Design", level: 80 }
    ];

    const services = [
      {
        title: "UI/UX Design",
        description: "User-centered design solutions that are both beautiful and functional. From research to high-fidelity prototypes."
      },
      {
        title: "Web Development",
        description: "Modern, performant websites and web applications built with cutting-edge technologies and best practices."
      },
      {
        title: "Brand Identity",
        description: "Comprehensive brand systems including logos, typography, color palettes, and visual guidelines."
      },
      {
        title: "Motion Design",
        description: "Engaging animations and micro-interactions that bring interfaces to life and enhance user experience."
      }
    ];

    const testimonials = [
      {
        text: "Humayun transformed our vision into reality. His attention to detail and creative approach exceeded our expectations. The project was delivered on time and the results were outstanding.",
        author: "Priya Sharma",
        role: "CEO, TechStart India"
      },
      {
        text: "Working with Humayun was an absolute pleasure. He understood our brand instantly and delivered a website that perfectly represents our company. Highly recommended!",
        author: "Rahul Verma",
        role: "Founder, DesignHub"
      },
      {
        text: "Exceptional talent and professionalism. Humayun's design sense is remarkable and his technical skills are top-notch. He delivered beyond what we imagined.",
        author: "Ananya Patel",
        role: "Marketing Director, GrowthCo"
      }
    ];

    // Initialize
    let currentTestimonial = 0;

    // DOM Elements
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursorDot');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const projectsGrid = document.getElementById('projectsGrid');
    const skillsContainer = document.getElementById('skillsContainer');
    const servicesContainer = document.getElementById('servicesContainer');
    const testimonialSlider = document.getElementById('testimonialSlider');

    // Render Projects
    function renderProjects() {
      projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card aspect-[4/3] reveal" style="transition-delay: ${index * 0.1}s;">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
          <div class="project-info">
            <span class="text-[var(--accent)] text-sm tracking-wider">${project.category} — ${project.year}</span>
            <h3 class="font-display text-2xl md:text-3xl font-bold mt-2">${project.title}</h3>
          </div>
        </div>
      `).join('');
    }

    // Render Skills
    function renderSkills() {
      skillsContainer.innerHTML = skills.map(skill => `
        <div>
          <div class="flex justify-between mb-2">
            <span class="font-medium">${skill.name}</span>
            <span class="text-[var(--muted)]">${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" data-width="${skill.level}"></div>
          </div>
        </div>
      `).join('');
    }

    // Render Services
    function renderServices() {
      servicesContainer.innerHTML = services.map((service, index) => `
        <div class="p-6 border border-[var(--border)] hover:border-[var(--accent)] transition-colors group reveal" style="transition-delay: ${index * 0.1}s;">
          <span class="text-[var(--accent)] font-mono text-sm">0${index + 1}</span>
          <h4 class="font-display text-xl font-bold mt-2 mb-3 group-hover:text-[var(--accent)] transition-colors">${service.title}</h4>
          <p class="text-[var(--muted)] text-sm leading-relaxed">${service.description}</p>
        </div>
      `).join('');
    }

    // Render Testimonial
    function renderTestimonial() {
      const t = testimonials[currentTestimonial];
      testimonialSlider.innerHTML = `
        <blockquote class="font-display text-2xl md:text-3xl font-medium leading-relaxed mb-8">
          "${t.text}"
        </blockquote>
        <div>
          <p class="font-bold">${t.author}</p>
          <p class="text-[var(--muted)]">${t.role}</p>
        </div>
      `;
    }

    // Custom Cursor
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    });

    function animateCursor() {
      dotX += (cursorX - dotX) * 0.5;
      dotY += (cursorY - dotY) * 0.5;
      
      cursor.style.left = cursorX - 10 + 'px';
      cursor.style.top = cursorY - 10 + 'px';
      cursorDot.style.left = dotX - 3 + 'px';
      cursorDot.style.top = dotY - 3 + 'px';
      
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects for cursor
    document.querySelectorAll('a, button, .project-card, .magnetic').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Mobile Menu
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Scroll Reveal
    function revealOnScroll() {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });

      // Animate skill bars
      document.querySelectorAll('.skill-progress').forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          bar.style.width = bar.dataset.width + '%';
        }
      });
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Testimonial Navigation
    document.getElementById('prevTestimonial').addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      renderTestimonial();
    });

    document.getElementById('nextTestimonial').addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      renderTestimonial();
    });

    // Form Submit
    document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = e.target.querySelector('button');
      btn.innerHTML = '<span>Message Sent!</span>';
      btn.style.background = '#22c55e';
      setTimeout(() => {
        btn.innerHTML = `<span>Send Message</span>
          <span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </span>`;
        btn.style.background = '';
        e.target.reset();
      }, 3000);
    });

    // Magnetic Effect
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });

    // Initialize
    renderProjects();
    renderSkills();
    renderServices();
    renderTestimonial();
  
    