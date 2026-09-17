/**
 * Egsale India — Core Application JavaScript
 * Handlers for Catalog, Filters, Calculator, Countdown, Wizard, Modals & Social Proof
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdownTimer();
  initPlotCalculator();
  initCatalogFilters();
  initAmenityIcons();
  initFAQAccordion();
  initSocialProofToast();
  initFloatingHub();
  initWizard();
  initMobileMenu();
});

/* ==========================================================================
   1. COUNTDOWN TIMER (FOR LUCKY DRAW ALLOTMENT)
   ========================================================================== */
function initCountdownTimer() {
  // Target date set to 14 days from current date for persistent urgency
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);
  targetDate.setHours(18, 0, 0, 0);

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      document.querySelectorAll('.time-val').forEach(el => el.textContent = '00');
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => n.toString().padStart(2, '0');

    const dayEl = document.getElementById('timer-days');
    const hourEl = document.getElementById('timer-hours');
    const minEl = document.getElementById('timer-minutes');
    const secEl = document.getElementById('timer-seconds');

    if (dayEl) dayEl.textContent = pad(days);
    if (hourEl) hourEl.textContent = pad(hours);
    if (minEl) minEl.textContent = pad(minutes);
    if (secEl) secEl.textContent = pad(seconds);
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   2. INTERACTIVE PLOT PRICE & EMI CALCULATOR
   ========================================================================== */
function initPlotCalculator() {
  const slider = document.getElementById('plot-size-slider');
  const sizeDisplay = document.getElementById('plot-size-val');
  const facingOptions = document.querySelectorAll('.facing-option');
  const presetBtns = document.querySelectorAll('.preset-btn');

  let currentSize = 121;
  let currentRate = 25000; // Special offer default (South-facing)
  const registrationFee = 21000;
  const bookingAmount = 31000;

  function calculate() {
    const baseCost = currentSize * currentRate;
    const totalCost = baseCost + registrationFee;
    const balanceCost = totalCost - bookingAmount;

    // Estimated Loan EMI (80% loan at 8.5% for 15 years)
    const loanPrincipal = totalCost * 0.8;
    const monthlyRate = 8.5 / (12 * 100);
    const months = 15 * 12;
    const emi = Math.round(
      (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    );

    const formatINR = (val) => '₹ ' + Number(val).toLocaleString('en-IN');

    if (sizeDisplay) sizeDisplay.textContent = `${currentSize} Sq. Yards`;
    
    const baseCostEl = document.getElementById('calc-base-cost');
    const regFeeEl = document.getElementById('calc-reg-fee');
    const bookingEl = document.getElementById('calc-booking-amt');
    const totalCostEl = document.getElementById('calc-total-cost');
    const balanceEl = document.getElementById('calc-balance-cost');
    const emiEl = document.getElementById('calc-estimated-emi');

    if (baseCostEl) baseCostEl.textContent = formatINR(baseCost);
    if (regFeeEl) regFeeEl.textContent = formatINR(registrationFee);
    if (bookingEl) bookingEl.textContent = formatINR(bookingAmount);
    if (totalCostEl) totalCostEl.textContent = formatINR(totalCost);
    if (balanceEl) balanceEl.textContent = formatINR(balanceCost);
    if (emiEl) emiEl.textContent = `${formatINR(emi)} / mo*`;
  }

  if (slider) {
    slider.addEventListener('input', (e) => {
      currentSize = parseInt(e.target.value, 10);
      presetBtns.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.size, 10) === currentSize);
      });
      calculate();
    });
  }

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentSize = parseInt(btn.dataset.size, 10);
      if (slider) slider.value = currentSize;
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calculate();
    });
  });

  facingOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      facingOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      currentRate = parseInt(opt.dataset.rate, 10);
      calculate();
    });
  });

  calculate();
}

/* ==========================================================================
   3. CATALOG FILTERING & RENDERING (24 GURGAON PROJECTS)
   ========================================================================== */
function initCatalogFilters() {
  const container = document.getElementById('projects-container');
  const searchInput = document.getElementById('catalog-search');
  const sectorSelect = document.getElementById('catalog-sector-filter');
  const bhkSelect = document.getElementById('catalog-bhk-filter');
  const sortSelect = document.getElementById('catalog-sort');
  const statusPills = document.querySelectorAll('.status-pill-btn');
  const counterText = document.getElementById('catalog-count');

  if (!container || !window.EGSALE_DATA) return;

  let activeStatus = 'all';

  function filterProjects() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedSector = sectorSelect ? sectorSelect.value : 'all';
    const selectedBhk = bhkSelect ? bhkSelect.value : 'all';
    const sortBy = sortSelect ? sortSelect.value : 'default';

    let filtered = EGSALE_DATA.projects.filter(project => {
      // Search query filter
      const matchesQuery = !query || 
        project.name.toLowerCase().includes(query) ||
        project.builder.toLowerCase().includes(query) ||
        project.sector.toLowerCase().includes(query) ||
        project.rera.toLowerCase().includes(query);

      // Sector filter
      const matchesSector = selectedSector === 'all' || 
        project.sector.toLowerCase().replace(/\s+/g, '') === selectedSector.toLowerCase().replace(/\s+/g, '');

      // BHK filter
      const matchesBhk = selectedBhk === 'all' || 
        project.bhk.some(b => b.toLowerCase().includes(selectedBhk.toLowerCase()));

      // Status pill filter
      let matchesStatus = true;
      if (activeStatus !== 'all') {
        matchesStatus = project.statusCode === activeStatus || 
          project.status.toLowerCase().includes(activeStatus.toLowerCase());
      }

      return matchesQuery && matchesSector && matchesBhk && matchesStatus;
    });

    // Sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.minPriceLacs - b.minPriceLacs);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.minPriceLacs - a.minPriceLacs);
    } else if (sortBy === 'sector') {
      filtered.sort((a, b) => a.sectorNum - b.sectorNum);
    }

    renderProjects(filtered);
  }

  function renderProjects(list) {
    if (counterText) {
      counterText.innerHTML = `Showing <strong>${list.length}</strong> of <strong>${EGSALE_DATA.projects.length}</strong> Gurgaon Properties`;
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div class="no-results-box">
          <h3>No properties matched your criteria</h3>
          <p>Try clearing filters or search with another sector/builder name.</p>
          <button class="btn btn-gold btn-sm" onclick="resetFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(p => {
      let badgeClass = 'badge-gold';
      if (p.statusCode === 'ready') badgeClass = 'badge-emerald';
      else if (p.statusCode === 'launch') badgeClass = 'badge-ruby';
      else if (p.statusCode === 'construction') badgeClass = 'badge-blue';

      let progressClass = '';
      if (p.possessionProgress === 100) progressClass = '';
      else if (p.possessionProgress > 70) progressClass = 'gold';
      else progressClass = 'ruby';

      const bhkChips = p.bhk.map(b => `<span class="bhk-pill">${b}</span>`).join('');

      return `
        <article class="project-card" data-id="${p.id}">
          <div class="project-card-image-wrap">
            <img src="${p.image}" alt="${p.name}" class="project-card-image" loading="lazy">
            <div class="project-card-image-overlay"></div>
            <div class="project-floating-status">
              <span class="badge ${badgeClass}">${p.status}</span>
            </div>
            <div class="project-floating-sector">
              ${p.sector}
            </div>
          </div>
          <div class="project-card-body">
            <div class="project-builder-name">${p.builder}</div>
            <h3 class="project-card-title">
              <a href="project-detail.html?id=${p.id}" style="color: #ffffff; transition: color 0.2s;" onmouseover="this.style.color='var(--gold-light)'" onmouseout="this.style.color='#ffffff'">${p.name}</a>
            </h3>
            
            <div class="project-rera-pill" title="Verified Haryana Real Estate Regulatory Authority Registration">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>${p.rera}</span>
            </div>

            <div class="project-price-row">
              <div class="project-price-tag">${p.priceRange}</div>
            </div>

            <div class="project-bhk-tags">
              ${bhkChips}
            </div>

            <div class="possession-progress-wrap">
              <div class="possession-label-row">
                <span>Delivery Status</span>
                <span><strong>${p.possessionProgress}% Complete</strong></span>
              </div>
              <div class="possession-progress-track">
                <div class="possession-progress-fill ${progressClass}" style="width: ${p.possessionProgress}%"></div>
              </div>
            </div>

            <div class="project-card-actions">
              <a href="project-detail.html?id=${p.id}" class="btn btn-outline-gold btn-sm">
                Full Details
              </a>
              <a href="https://wa.me/918800466499?text=Hello%20Egsale%20India,%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}%20(${encodeURIComponent(p.sector)}).%20Please%20share%20floor%20plans%20and%20pricing." 
                 target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">
                WhatsApp
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Event Listeners
  if (searchInput) searchInput.addEventListener('input', filterProjects);
  if (sectorSelect) sectorSelect.addEventListener('change', filterProjects);
  if (bhkSelect) bhkSelect.addEventListener('change', filterProjects);
  if (sortSelect) sortSelect.addEventListener('change', filterProjects);

  statusPills.forEach(pill => {
    pill.addEventListener('click', () => {
      statusPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeStatus = pill.dataset.status;
      filterProjects();
    });
  });

  window.resetFilters = function() {
    if (searchInput) searchInput.value = '';
    if (sectorSelect) sectorSelect.value = 'all';
    if (bhkSelect) bhkSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'default';
    statusPills.forEach(p => p.classList.remove('active'));
    if (statusPills[0]) statusPills[0].classList.add('active');
    activeStatus = 'all';
    filterProjects();
  };

  // Initial render
  filterProjects();
}

/* ==========================================================================
   4. PROJECT DETAILS MODAL
   ========================================================================== */
window.openProjectModal = function(projectId) {
  const project = EGSALE_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('project-modal-content');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <div style="height: 260px; border-radius: 14px; overflow: hidden; position: relative; margin-bottom: 1.25rem;">
        <img src="${project.image}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover;">
        <div style="position: absolute; top: 1rem; left: 1rem;">
          <span class="badge badge-gold">${project.status}</span>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
        <div>
          <span style="font-size: 0.8rem; color: var(--gold-light); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">
            ${project.builder}
          </span>
          <h2 style="font-family: var(--font-heading); font-size: 1.8rem; color: #ffffff; margin-top: 0.2rem;">
            ${project.name}
          </h2>
          <div style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.2rem;">
            📍 ${project.sector}, Dwarka Expressway Corridor, Gurgaon
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase;">Price Spectrum</div>
          <div style="font-family: var(--font-accent); font-size: 1.6rem; font-weight: 800; color: var(--gold-bright);">
            ${project.priceRange}
          </div>
        </div>
      </div>
    </div>

    <div style="background: rgba(8, 16, 35, 0.6); border: 1px solid var(--border-glass); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center;">
        <div>
          <div style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase;">Configuration</div>
          <div style="font-weight: 700; color: #ffffff; margin-top: 0.25rem;">${project.bhk.join(', ')}</div>
        </div>
        <div>
          <div style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase;">RERA Registration</div>
          <div style="font-weight: 700; color: var(--emerald-light); margin-top: 0.25rem;">${project.rera}</div>
        </div>
        <div>
          <div style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase;">Progress</div>
          <div style="font-weight: 700; color: var(--gold-light); margin-top: 0.25rem;">${project.possessionProgress}% Complete</div>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 1.75rem;">
      <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 0.5rem;">Property Highlight</h4>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${project.highlight}</p>
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="https://wa.me/918800466499?text=Hello%20Egsale%20India,%20I%20am%20inquiring%20about%20${encodeURIComponent(project.name)}%20(${encodeURIComponent(project.sector)}).%20Please%20schedule%20a%20site%20visit." 
         target="_blank" rel="noopener" class="btn btn-whatsapp" style="flex: 1;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.86L2.8 22l4.31-1.12C8.7 21.6 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.57 0-3.04-.42-4.32-1.16l-.31-.18-2.56.67.68-2.5-.19-.32C4.54 15.17 4.1 13.63 4.1 12c0-4.36 3.54-7.9 7.9-7.9s7.9 3.54 7.9 7.9-3.54 7.9-7.9 7.9z"/></svg>
        WhatsApp Inquiry
      </a>
      <a href="tel:+918800466499" class="btn btn-gold" style="flex: 1;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        Call Agency Desk
      </a>
    </div>
  `;

  modal.classList.add('open');
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
};

// Close on backdrop click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});

/* ==========================================================================
   5. AMENITY ICONS MARKUP
   ========================================================================== */
function initAmenityIcons() {
  const iconMap = {
    playarea: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>`,
    jogging: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z"/></svg>`,
    temple: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-9 5v2h18V7l-9-5zm-7 8v9h2v-9H5zm4 0v9h2v-9H9zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2zm-12 11v2h18v-2H3z"/></svg>`,
    security: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`,
    sewage: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/></svg>`,
    parks: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 21v-4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V21h3v-7.24c2.42-.69 4-2.85 4-5.36 0-3.37-2.92-6.1-6.5-5.32C12.44 2.1 11.02 2 9.5 2 5.36 2 2 5.36 2 9.5c0 2.58 1.62 4.77 3.9 5.36V21h4.1z"/></svg>`,
    roads: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.11 3.55L14.77 21h-2.18l1.45-8h-4.08l1.45 8H9.23L5.89 3.55h4.19l-1.3 7.45h4.08l-1.3-7.45h2.52z"/></svg>`,
    gated: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12z"/></svg>`,
    banquet: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/></svg>`
  };

  const grid = document.getElementById('amenities-container');
  if (!grid || !window.EGSALE_DATA) return;

  grid.innerHTML = EGSALE_DATA.flagshipPlot.amenities.map(a => `
    <div class="amenity-card">
      <div class="amenity-icon-box">
        ${iconMap[a.icon] || iconMap.parks}
      </div>
      <h4 class="amenity-name">${a.name}</h4>
      <p class="amenity-desc">${a.desc}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   6. FAQ ACCORDION
   ========================================================================== */
function initFAQAccordion() {
  const container = document.getElementById('faq-container');
  if (!container || !window.EGSALE_DATA) return;

  container.innerHTML = EGSALE_DATA.faqs.map((faq, idx) => `
    <div class="faq-card ${idx === 0 ? 'active' : ''}">
      <button class="faq-question" aria-expanded="${idx === 0}">
        <span>${faq.q}</span>
        <div class="faq-toggle-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </button>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.faq-card');
      const isActive = card.classList.contains('active');

      container.querySelectorAll('.faq-card').forEach(c => c.classList.remove('active'));

      if (!isActive) {
        card.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      } else {
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ==========================================================================
   7. LIVE SOCIAL PROOF TOAST
   ========================================================================== */
function initSocialProofToast() {
  const toast = document.getElementById('social-proof-toast');
  if (!toast || !window.EGSALE_DATA) return;

  let streamIndex = 0;
  const stream = EGSALE_DATA.socialProofStream;

  function showNextToast() {
    const item = stream[streamIndex];
    document.getElementById('sp-name').textContent = item.name;
    document.getElementById('sp-action').textContent = `${item.action} (${item.location})`;
    document.getElementById('sp-time').textContent = item.time;
    document.getElementById('sp-avatar').textContent = item.name.charAt(0);

    toast.classList.add('visible');

    setTimeout(() => {
      toast.classList.remove('visible');
    }, 5500);

    streamIndex = (streamIndex + 1) % stream.length;
  }

  // Initial delay of 4 seconds, then repeat every 11 seconds
  setTimeout(() => {
    showNextToast();
    setInterval(showNextToast, 11000);
  }, 4000);

  const closeBtn = document.getElementById('sp-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      toast.classList.remove('visible');
    });
  }
}

/* ==========================================================================
   8. FLOATING ACTION HUB
   ========================================================================== */
function initFloatingHub() {
  const trigger = document.getElementById('floating-whatsapp-trigger');
  const drawer = document.getElementById('floating-drawer');

  if (trigger && drawer) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      drawer.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!drawer.contains(e.target) && !trigger.contains(e.target)) {
        drawer.classList.remove('open');
      }
    });
  }
}

/* ==========================================================================
   9. STEP-BY-STEP LUCKY DRAW REGISTRATION WIZARD
   ========================================================================== */
function initWizard() {
  window.currentWizardStep = 1;

  window.openWizardModal = function() {
    const modal = document.getElementById('wizard-modal');
    if (modal) {
      window.setWizardStep(1);
      modal.classList.add('open');
    }
  };

  window.setWizardStep = function(step) {
    window.currentWizardStep = step;

    document.querySelectorAll('.wizard-step').forEach((el, idx) => {
      const s = idx + 1;
      el.classList.toggle('active', s === step);
      el.classList.toggle('completed', s < step);
    });

    document.querySelectorAll('.wizard-content-step').forEach((el, idx) => {
      el.classList.toggle('active', (idx + 1) === step);
    });
  };

  window.nextWizardStep = function() {
    if (window.currentWizardStep === 1) {
      const name = document.getElementById('w-name').value.trim();
      const phone = document.getElementById('w-phone').value.trim();
      if (!name || !phone) {
        alert('Please enter your full name and valid 10-digit mobile number.');
        return;
      }
    } else if (window.currentWizardStep === 2) {
      // Summary update
      const size = document.getElementById('w-plot-size').value;
      const facing = document.getElementById('w-facing').value;
      const name = document.getElementById('w-name').value;
      
      const summaryEl = document.getElementById('w-summary-box');
      if (summaryEl) {
        summaryEl.innerHTML = `
          <div style="font-size: 0.9rem; line-height: 1.6;">
            <div><strong>Applicant:</strong> ${name}</div>
            <div><strong>Township:</strong> Aayan Residency / Suraksha Enclave (S.E.T)</div>
            <div><strong>Govt NOC:</strong> TCP-OFA/19907/2026</div>
            <div><strong>Plot Preference:</strong> ${size} Sq. Yards (${facing})</div>
            <div><strong>Refundable Token:</strong> ₹31,000 (100% money-back guarantee)</div>
          </div>
        `;
      }
    }
    window.setWizardStep(window.currentWizardStep + 1);
  };

  window.prevWizardStep = function() {
    if (window.currentWizardStep > 1) {
      window.setWizardStep(window.currentWizardStep - 1);
    }
  };

  window.submitWizardEntry = function(e) {
    e.preventDefault();
    const name = document.getElementById('w-name').value;
    const phone = document.getElementById('w-phone').value;
    const size = document.getElementById('w-plot-size').value;
    const refId = 'EGS-SET-' + Math.floor(100000 + Math.random() * 900000);

    const step3 = document.getElementById('wizard-step-3');
    if (step3) {
      step3.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--emerald); color: #ffffff; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2rem;">
            ✓
          </div>
          <h3 style="font-size: 1.5rem; color: #ffffff; margin-bottom: 0.5rem;">Lucky Draw Registration Confirmed!</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
            Thank you, <strong>${name}</strong>. Your provisional allotment token for <strong>${size} Sq. Yards</strong> has been logged.
          </p>
          <div style="background: rgba(8, 16, 35, 0.7); border: 1px solid var(--border-glow); border-radius: 12px; padding: 1rem; margin-bottom: 1.5rem;">
            <div style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase;">Application Reference Token</div>
            <div style="font-family: var(--font-accent); font-size: 1.5rem; font-weight: 800; color: var(--gold-bright);">${refId}</div>
          </div>
          <div style="display: flex; gap: 1rem; justify-content: center;">
            <a href="https://wa.me/918800466891?text=Hello,%20I%20have%20registered%20for%20Aayan%20Residency%20Lucky%20Draw.%20My%20Token%20is%20${refId}.%20Please%20send%20payment%20details." 
               target="_blank" rel="noopener" class="btn btn-whatsapp">
              Verify On WhatsApp
            </a>
            <button class="btn btn-outline-gold" onclick="closeModal('wizard-modal')">Done</button>
          </div>
        </div>
      `;
    }
  };
}

/* ==========================================================================
   10. MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
    });

    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('open');
        toggle.classList.remove('active');
      }
    });
  }
}
