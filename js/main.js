/**
 * AURELIS — ARCHITECTURE BEYOND EXPECTATION
 * Core Interactive Architecture & Editorial Systems
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. DATA REPOSITORIES: RESIDENCES, ESSAYS & MATERIALS
  // ==========================================================================
  
  const RESIDENCES_DATA = {
    'desert-house': {
      index: '01',
      title: 'Desert House',
      location: 'Palm Springs, California · 2026',
      heroImage: 'assets/images/hero_desert_villa.jpg',
      secondaryImage: 'assets/images/interior_living_room.jpg',
      area: '12,400 SQ. FT',
      materials: 'Rammed Earth, Travertine, Low-Iron Glass',
      lead: 'Julian Vance & AURELIS Studio',
      program: 'Private Residential Estate',
      summary: 'Perched in the high Sonoran desert, the Desert House was conceived as a monolithic sanctuary carved directly from ancient earth. Sweeping curved concrete canopies cast deep shadow over floor-to-ceiling glass pavilions, while rammed earth thermal mass passively shields the interior from extreme diurnal temperature swings. The infinity perimeter pool mirrors dusk skies, dissolving the threshold between architectural shelter and desert wilderness.'
    },
    'ocean-residence': {
      index: '02',
      title: 'Ocean Residence',
      location: 'Big Sur, California · 2025',
      heroImage: 'assets/images/project_ocean_residence.jpg',
      secondaryImage: 'assets/images/interior_pool_terrace.jpg',
      area: '9,850 SQ. FT',
      materials: 'Board-Formed Concrete, Teak, Marine Bronze',
      lead: 'Elena Rostova',
      program: 'Coastal Cliff Villa',
      summary: 'Anchored directly into the steep granite cliffs of Big Sur, the Ocean Residence commands panoramic horizon vistas of the Pacific. Dramatically cantilevered concrete terraces appear to hover weightlessly above crashing surf. Monolithic board-formed concrete walls shield the house from prevailing coastal winds, guiding occupants toward sheltered outdoor fire courts and continuous ocean horizons.'
    },
    'hillside-villa': {
      index: '03',
      title: 'Hillside Villa',
      location: 'Lake Lugano, Switzerland · 2024',
      heroImage: 'assets/images/project_hillside_villa.jpg',
      secondaryImage: 'assets/images/interior_sculptural_staircase.jpg',
      area: '14,200 SQ. FT',
      materials: 'Hand-Cut Alpine Granite, Cedar Slats, Steel',
      lead: 'Marcus Lindqvist',
      program: 'Alpine Lake Residence',
      summary: 'Stepped along the contours of a lush subalpine slope overlooking Lake Lugano, this multi-tiered villa harmonizes ancient Swiss stonemasonry with razor-sharp modernist geometry. Tiered garden terraces create a vertical succession of micro-ecosystems, with every primary suite orientated toward morning sun reflections across the lake waters.'
    },
    'urban-pavilion': {
      index: '04',
      title: 'Urban Pavilion',
      location: 'Aoyama, Tokyo · 2025',
      heroImage: 'assets/images/project_urban_pavilion.jpg',
      secondaryImage: 'assets/images/interior_bedroom.jpg',
      area: '6,500 SQ. FT',
      materials: 'Hinoki Cypress, Microcement, Basalt Pavers',
      lead: 'Kenji Takahashi & Julian Vance',
      program: 'Urban Sanctuary & Courtyard',
      summary: 'A quiet architectural refuge within the metropolitan density of Tokyo. Slatted Hinoki wood screens modulate solar exposure and urban noise, framing a contemplative central courtyard centered around an ancient bonsai and a shallow black basalt water mirror. Traditional Japanese spatial layering meets contemporary European minimalism.'
    }
  };

  const ARTICLES_DATA = {
    'natural-light': {
      category: 'Light & Form',
      date: 'OCTOBER 2026 · 5 MIN READ',
      title: 'Designing Homes Around Natural Light',
      heroImage: 'assets/images/journal_natural_light.jpg',
      quote: '“Architecture is the learned game, correct and magnificent, of forms assembled in the light.”',
      paragraphs: [
        'Light is not merely an illuminant; it is the most visceral material at an architect’s disposal. When designing luxury private residences, our first act is never drawing walls—it is studying the solar azimuth, calculating how morning rays graze stone and how late afternoon shadows sculpt domestic spaces.',
        'By integrating precise deep overhangs, clerestory oculus apertures, and slatted brise-soleil screens, we modulate direct glare into soft ambient luminescence. This rhythmic interplay regulates the circadian rhythms of residents and creates living rooms that change mood organically throughout the passing hours.'
      ]
    },
    'sustainable-luxury': {
      category: 'Ecological Craft',
      date: 'SEPTEMBER 2026 · 7 MIN READ',
      title: 'The Future of Sustainable Luxury',
      heroImage: 'assets/images/journal_sustainable_luxury.jpg',
      quote: '“True sustainability is not an additive technology—it is the intrinsic thermal intelligence of geometry.”',
      paragraphs: [
        'The conventional concept of luxury has long been associated with conspicuous consumption and excessive mechanical climate control. At AURELIS, we pioneer an alternative paradigm: passive architectural luxury.',
        'By utilizing high thermal mass materials such as rammed earth and dense architectural concrete, buildings absorb midday desert heat and radiate it gently during chill nights. Combined with geothermal cooling, rainwater retention gardens, and locally quarried materials, residences achieve carbon-neutral longevity while elevating daily sensory comfort.'
      ]
    },
    'timeless-architecture': {
      category: 'Material Philosophy',
      date: 'AUGUST 2026 · 4 MIN READ',
      title: 'Why Timeless Architecture Matters',
      heroImage: 'assets/images/journal_timeless_architecture.jpg',
      quote: '“Fashion fades; proportions, shadows, and the honest texture of stone remain unassailable.”',
      paragraphs: [
        'In an era dominated by rapid trend cycles, architectural restraint has become the rarest luxury. We design residences intended to stand for centuries, maturing with an elegant patina rather than dating within a decade.',
        'Our palette is intentionally limited to materials that age with dignity: travertine that softens with weather, bronze that deepens in hue, untreated teak that silvers in sea air. A house built on genuine proportion needs no decorative excuses.'
      ]
    }
  };

  const MATERIALS_DATA = {
    'travertine': '<strong>Tivoli Travertine:</strong> Hand-cut sedimentary limestone quarried outside Rome. Warm ivory striations diffuse desert light and impart timeless acoustic resonance to living salons.',
    'concrete': '<strong>Board-Formed Concrete:</strong> Custom architectural mix cured against rough-sawn Douglas fir boards. Structural honesty with rich tactile wood-grain imprints that catch dramatic raking sunlight.',
    'walnut': '<strong>Smoked European Walnut:</strong> Slow-grown timber hand-rubbed with natural organic oils. Rich deep espresso and amber tones that introduce warmth and domestic intimacy into open pavilions.',
    'bronze': '<strong>Patinated Architectural Bronze:</strong> Custom unlacquered alloy designed to oxidize naturally over decades. Tactile hardware and door pulls that register the touch of generations.'
  };

  // ==========================================================================
  // 2. CUSTOM ARCHITECTURAL CURSOR
  // ==========================================================================
  const cursorDot = document.getElementById('custom-cursor');
  const cursorFollower = document.getElementById('custom-cursor-follower');
  
  if (cursorDot && cursorFollower && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = -100, mouseY = -100;
    let followerX = -100, followerY = -100;

    window.addEventListener('mousemove', (e) => {
      document.body.classList.add('cursor-active');
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    const renderCursor = () => {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      cursorFollower.style.left = `${followerX}px`;
      cursorFollower.style.top = `${followerY}px`;
      requestAnimationFrame(renderCursor);
    };
    renderCursor();

    // Hover expanders
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, .project-card, .service-card, .hero-thumb-btn');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('hover-grow');
        cursorDot.classList.add('hover-grow');
      });
      el.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('hover-grow');
        cursorDot.classList.remove('hover-grow');
      });
    });
  }

  // ==========================================================================
  // 3. SCROLL PROGRESS BAR & HEADER BLUR
  // ==========================================================================
  const progressBar = document.getElementById('scroll-progress');
  const siteHeader = document.getElementById('site-header');

  const onScrollUpdate = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    if (siteHeader) {
      if (scrollTop > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', onScrollUpdate, { passive: true });
  onScrollUpdate();

  // ==========================================================================
  // 4. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileClose = document.getElementById('mobile-close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const openMobileMenu = () => {
    mobileDrawer.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileDrawer.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', openMobileMenu);
    if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
    mobileLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));
  }

  // ==========================================================================
  // 5. HERO THUMBNAIL INTERACTION
  // ==========================================================================
  const heroImg = document.getElementById('hero-img');
  const heroThumbBtns = document.querySelectorAll('.hero-thumb-btn');

  heroThumbBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      heroThumbBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const targetSrc = btn.getAttribute('data-img');
      if (heroImg && targetSrc) {
        heroImg.style.opacity = '0.4';
        setTimeout(() => {
          heroImg.src = targetSrc;
          heroImg.style.opacity = '1';
        }, 200);
      }
    });
  });

  // ==========================================================================
  // 6. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach((el) => revealObserver.observe(el));

  // ==========================================================================
  // 7. PROJECT FILTERING
  // ==========================================================================
  const filterChips = document.querySelectorAll('.filter-chip');
  const projectCards = document.querySelectorAll('.project-card');

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-selected', 'true');

      const filterValue = chip.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ==========================================================================
  // 8. PROJECT QUICK-VIEW MODAL
  // ==========================================================================
  const projectModal = document.getElementById('project-modal');
  const projectModalBody = document.getElementById('project-modal-body');
  const projectModalClose = document.getElementById('project-modal-close');
  const projectModalBackdrop = document.getElementById('project-modal-backdrop');

  const openProjectModal = (projectId) => {
    const data = RESIDENCES_DATA[projectId];
    if (!data || !projectModal || !projectModalBody) return;

    projectModalBody.innerHTML = `
      <div class="modal-project-layout">
        <div class="modal-header-block">
          <span class="modal-tag">${data.index} · ${data.program}</span>
          <h2 class="modal-project-title">${data.title}</h2>
          <p class="modal-project-meta">${data.location}</p>
        </div>

        <div class="modal-gallery-row">
          <div class="modal-main-img-wrap">
            <img src="${data.heroImage}" alt="${data.title} primary view">
          </div>
          <div class="modal-secondary-img-wrap">
            <img src="${data.secondaryImage}" alt="${data.title} interior design">
          </div>
        </div>

        <div class="modal-specs-grid">
          <div class="modal-spec-item">
            <span class="spec-label">ENCLOSED AREA</span>
            <span class="spec-value">${data.area}</span>
          </div>
          <div class="modal-spec-item">
            <span class="spec-label">LEAD ARCHITECT</span>
            <span class="spec-value">${data.lead}</span>
          </div>
          <div class="modal-spec-item">
            <span class="spec-label">PRIMARY MATERIALS</span>
            <span class="spec-value">${data.materials}</span>
          </div>
          <div class="modal-spec-item">
            <span class="spec-label">STATUS</span>
            <span class="spec-value">Commission Executed</span>
          </div>
        </div>

        <p class="modal-narrative-copy">${data.summary}</p>

        <div class="modal-cta-row">
          <a href="#contact" class="btn-primary" onclick="document.getElementById('project-modal').classList.remove('open');">
            <span>Inquire About Similar Commission</span>
            <span class="link-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
  if (projectModalBackdrop) projectModalBackdrop.addEventListener('click', closeProjectModal);

  // Trigger bindings on cards
  document.querySelectorAll('[data-project-target], .quick-view-trigger').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.project-card');
      const id = btn.getAttribute('data-project-target') || (card ? card.getAttribute('data-id') : null);
      if (id) openProjectModal(id);
    });
  });

  // ==========================================================================
  // 9. CINEMATIC FILM REEL MODAL & AMBIENT AUDIO SIMULATOR
  // ==========================================================================
  const btnPlayFilm = document.getElementById('btn-play-film');
  const filmModal = document.getElementById('film-modal');
  const filmModalClose = document.getElementById('film-modal-close');
  const filmModalBackdrop = document.getElementById('film-modal-backdrop');
  const filmPlayToggle = document.getElementById('film-play-toggle');
  const filmTimelineProgress = document.getElementById('film-timeline-progress');
  const filmAudioToggle = document.getElementById('film-audio-toggle');
  
  let isFilmPlaying = true;
  let filmProgress = 38;
  let filmInterval = null;
  let audioCtx = null;
  let isAudioPlaying = false;
  let oscNodes = [];

  const startAmbientAudio = () => {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      // Warm ethereal ambient chords (Sonoran Desert Drone)
      const freqs = [110, 164.81, 220, 277.18]; // A2, E3, A3, C#4
      oscNodes = freqs.map((freq) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.012, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        return { osc, gain };
      });
      isAudioPlaying = true;
    } catch (e) {
      console.log('Audio contextual note:', e);
    }
  };

  const stopAmbientAudio = () => {
    if (oscNodes && oscNodes.length) {
      oscNodes.forEach(({ osc, gain }) => {
        try {
          gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.6);
          setTimeout(() => osc.stop(), 600);
        } catch (e) {}
      });
      oscNodes = [];
    }
    isAudioPlaying = false;
  };

  const openFilmModal = () => {
    if (!filmModal) return;
    filmModal.classList.add('open');
    filmModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    startAmbientAudio();

    // Start progress simulation
    if (filmInterval) clearInterval(filmInterval);
    filmInterval = setInterval(() => {
      if (isFilmPlaying) {
        filmProgress += 0.8;
        if (filmProgress >= 100) filmProgress = 0;
        if (filmTimelineProgress) filmTimelineProgress.style.width = `${filmProgress}%`;
      }
    }, 200);
  };

  const closeFilmModal = () => {
    if (!filmModal) return;
    filmModal.classList.remove('open');
    filmModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopAmbientAudio();
    if (filmInterval) clearInterval(filmInterval);
  };

  if (btnPlayFilm) btnPlayFilm.addEventListener('click', openFilmModal);
  if (filmModalClose) filmModalClose.addEventListener('click', closeFilmModal);
  if (filmModalBackdrop) filmModalBackdrop.addEventListener('click', closeFilmModal);

  if (filmPlayToggle) {
    filmPlayToggle.addEventListener('click', () => {
      isFilmPlaying = !isFilmPlaying;
      filmPlayToggle.innerHTML = isFilmPlaying
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20"/></svg>`;
    });
  }

  if (filmAudioToggle) {
    filmAudioToggle.addEventListener('click', () => {
      if (isAudioPlaying) {
        stopAmbientAudio();
        filmAudioToggle.querySelector('.sound-text').textContent = 'SOUNDSCAPE: MUTED (CLICK TO UNMUTE)';
      } else {
        startAmbientAudio();
        filmAudioToggle.querySelector('.sound-text').textContent = 'SOUNDSCAPE: SONORAN DUSK (ACTIVE)';
      }
    });
  }

  // ==========================================================================
  // 10. MATERIALITY PALETTE SWITCHER
  // ==========================================================================
  const materialBtns = document.querySelectorAll('.material-btn');
  const materialDetailPanel = document.getElementById('material-detail-panel');

  materialBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      materialBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');

      const matKey = btn.getAttribute('data-material');
      if (materialDetailPanel && MATERIALS_DATA[matKey]) {
        materialDetailPanel.innerHTML = `<p class="mat-desc">${MATERIALS_DATA[matKey]}</p>`;
      }
    });
  });

  // ==========================================================================
  // 11. HORIZONTAL IMAGE SHOWCASE DRAG & CONTROLS
  // ==========================================================================
  const showcaseContainer = document.getElementById('showcase-track-container');
  const showcasePrevBtn = document.getElementById('showcase-prev-btn');
  const showcaseNextBtn = document.getElementById('showcase-next-btn');
  const showcaseProgressBar = document.getElementById('showcase-progress-bar');

  if (showcaseContainer) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    showcaseContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - showcaseContainer.offsetLeft;
      scrollLeft = showcaseContainer.scrollLeft;
    });

    showcaseContainer.addEventListener('mouseleave', () => { isDown = false; });
    showcaseContainer.addEventListener('mouseup', () => { isDown = false; });

    showcaseContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - showcaseContainer.offsetLeft;
      const walk = (x - startX) * 1.8;
      showcaseContainer.scrollLeft = scrollLeft - walk;
    });

    const updateShowcaseProgress = () => {
      const maxScroll = showcaseContainer.scrollWidth - showcaseContainer.clientWidth;
      if (maxScroll > 0 && showcaseProgressBar) {
        const ratio = Math.max(0.166, (showcaseContainer.scrollLeft / maxScroll));
        showcaseProgressBar.style.width = `${ratio * 100}%`;
      }
    };

    showcaseContainer.addEventListener('scroll', updateShowcaseProgress, { passive: true });

    if (showcasePrevBtn) {
      showcasePrevBtn.addEventListener('click', () => {
        showcaseContainer.scrollBy({ left: -440, behavior: 'smooth' });
      });
    }

    if (showcaseNextBtn) {
      showcaseNextBtn.addEventListener('click', () => {
        showcaseContainer.scrollBy({ left: 440, behavior: 'smooth' });
      });
    }
  }

  // ==========================================================================
  // 12. JOURNAL READER DRAWER
  // ==========================================================================
  const journalModal = document.getElementById('journal-modal');
  const journalModalContent = document.getElementById('journal-modal-content');
  const journalModalClose = document.getElementById('journal-modal-close');
  const journalModalBackdrop = document.getElementById('journal-modal-backdrop');

  const openJournalModal = (articleId) => {
    const article = ARTICLES_DATA[articleId];
    if (!article || !journalModal || !journalModalContent) return;

    journalModalContent.innerHTML = `
      <div class="article-reader-layout">
        <span class="modal-tag">${article.category} · ${article.date}</span>
        <h2 class="article-full-title">${article.title}</h2>

        <div class="article-hero-img-wrap">
          <img src="${article.heroImage}" alt="${article.title}">
        </div>

        <div class="article-body-text">
          <blockquote>${article.quote}</blockquote>
          ${article.paragraphs.map((p) => `<p>${p}</p>`).join('')}
          <p>The dialogue between structure, landscape, and human experience remains at the core of all AURELIS projects. We invite you to explore our monograph series for comprehensive photographic essays.</p>
        </div>
      </div>
    `;

    journalModal.classList.add('open');
    journalModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeJournalModal = () => {
    if (!journalModal) return;
    journalModal.classList.remove('open');
    journalModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (journalModalClose) journalModalClose.addEventListener('click', closeJournalModal);
  if (journalModalBackdrop) journalModalBackdrop.addEventListener('click', closeJournalModal);

  document.querySelectorAll('[data-article-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-article-target');
      if (id) openJournalModal(id);
    });
  });

  // ==========================================================================
  // 13. LIVE STUDIO CLOCKS (Los Angeles & Zürich)
  // ==========================================================================
  const clockLA = document.getElementById('clock-la');
  const clockZurich = document.getElementById('clock-zurich');

  const updateClocks = () => {
    const now = new Date();
    
    // Los Angeles (PST / UTC-7 or -8)
    const optionsLA = { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', hour12: false };
    const timeLA = new Intl.DateTimeFormat([], optionsLA).format(now);
    if (clockLA) clockLA.textContent = `${timeLA} PST`;

    // Zurich (CET / UTC+1 or +2)
    const optionsCH = { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit', hour12: false };
    const timeCH = new Intl.DateTimeFormat([], optionsCH).format(now);
    if (clockZurich) clockZurich.textContent = `${timeCH} CET`;
  };

  updateClocks();
  setInterval(updateClocks, 10000);

  // ==========================================================================
  // 14. INQUIRY FORM VALIDATION & CONFIRMATION
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const inquiryDialog = document.getElementById('inquiry-dialog');
  const dialogDismissBtn = document.getElementById('dialog-dismiss-btn');
  const dialogBackdrop = document.getElementById('dialog-backdrop');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const typeSelect = document.getElementById('contact-project-type');
      const messageText = document.getElementById('contact-message');

      // Simple Validation
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('has-error');
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        emailInput.closest('.form-group').classList.remove('has-error');
      }

      if (!typeSelect.value) {
        typeSelect.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        typeSelect.closest('.form-group').classList.remove('has-error');
      }

      if (!messageText.value.trim()) {
        messageText.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        messageText.closest('.form-group').classList.remove('has-error');
      }

      if (isValid) {
        contactForm.reset();
        if (inquiryDialog) {
          inquiryDialog.classList.add('open');
          inquiryDialog.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        }
      }
    });
  }

  const closeInquiryDialog = () => {
    if (!inquiryDialog) return;
    inquiryDialog.classList.remove('open');
    inquiryDialog.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (dialogDismissBtn) dialogDismissBtn.addEventListener('click', closeInquiryDialog);
  if (dialogBackdrop) dialogBackdrop.addEventListener('click', closeInquiryDialog);

  // ==========================================================================
  // 15. NEWSLETTER FORM & TOAST
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterSuccess = document.getElementById('newsletter-success');
  const toastContainer = document.getElementById('toast-container');

  const showToast = (message) => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✓</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  };

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsletterForm.reset();
      if (newsletterSuccess) {
        newsletterSuccess.classList.add('visible');
        setTimeout(() => newsletterSuccess.classList.remove('visible'), 5000);
      }
      showToast('Subscribed to AURELIS Monograph Dispatches');
    });
  }

  // ==========================================================================
  // 16. BACK TO TOP
  // ==========================================================================
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Keyboard accessibility: ESC key closes all active modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeFilmModal();
      closeJournalModal();
      closeInquiryDialog();
      closeMobileMenu();
    }
  });

});
