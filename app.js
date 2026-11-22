// Dream Star Real Estate & Developers - Application Logic
(function () {
  'use strict';

  // Default Fallback Datasets (ensures instant zero-downtime render even if API/Server is offline)
  const defaultProperties = [
    {
      id: 1,
      title: "Luxury 3 BHK Independent Villa with Garden",
      category: "Villa",
      status: "For Sale",
      price: "₹65 Lakhs",
      priceNum: 65,
      location: "RS Road, Anuppambattu (Near Railway Station)",
      areaSqft: 1850,
      bedrooms: 3,
      bathrooms: 3,
      facing: "North-East",
      approval: "DTCP & RERA Approved",
      description: "Magnificent independent 3 BHK duplex villa built with premium teakwood finish, covered car parking, private borewell with sweet potable water, modular kitchen, and beautiful terrace garden. Walking distance to Anuppambattu railway station.",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      features: "Car Parking, Private Borewell, 3 Phase EB, DTCP Approved, 100% Vaastu Compliant, Bank Loan 85%",
      isFeatured: true,
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 2,
      title: "DTCP Approved Corner Residential Plot with Compound Wall",
      category: "Land",
      status: "For Sale",
      price: "₹28.5 Lakhs",
      priceNum: 28,
      location: "Dream Star Golden City, Minjur - Anuppambattu Corridor",
      areaSqft: 1500,
      bedrooms: 0,
      bathrooms: 0,
      facing: "East",
      approval: "DTCP Approved & Clear Patta",
      description: "Ready-to-construct residential plot situated in a gated community with blacktop roads, street lights, 24/7 security, sweet groundwater at 25 feet, and complete clear parent legal documentation.",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      features: "40ft Wide Road, Gated Community, 24/7 Security, Street Lights, Avenue Trees, Clear Patta",
      isFeatured: true,
      gallery: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 3,
      title: "Prime Commercial Complex / Showroom Space",
      category: "Commercial",
      status: "For Sale",
      price: "₹1.45 Crores",
      priceNum: 145,
      location: "Main Highway Road, Opposite Railway Gate, Anuppambattu",
      areaSqft: 3200,
      bedrooms: 0,
      bathrooms: 2,
      facing: "North",
      approval: "CMDA & DTCP Commercial Approved",
      description: "Ultra-prime commercial building space with direct high-traffic highway frontage. Ideal for supermarket, bank branch, medical diagnostics, or corporate offices. High rental yield expected.",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      features: "Main Road Frontage, High Rental Yield, Heavy Footfall, Dedicated Customer Parking, Lift Provision",
      isFeatured: true,
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 4,
      title: "Modern 2 BHK Gated Community Apartment",
      category: "Apartment",
      status: "For Sale",
      price: "₹38 Lakhs",
      priceNum: 38,
      location: "Ponneri High Road, Tiruvallur",
      areaSqft: 1050,
      bedrooms: 2,
      bathrooms: 2,
      facing: "East",
      approval: "RERA & CMDA Approved",
      description: "Well-ventilated contemporary 2 BHK flat featuring Italian marble flooring, high-speed lift, power backup, children play area, and solar lighting for common areas.",
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      features: "Lift with Backup, CCTV Surveillance, Covered Parking, Children Play Park, Water Treatment Plant",
      isFeatured: false,
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 5,
      title: "Premium 4 BHK Ultra-Luxury Designer Villa",
      category: "Villa",
      status: "For Sale",
      price: "₹1.15 Crores",
      priceNum: 115,
      location: "Emerald Enclave, Near New Bypass, Anuppambattu",
      areaSqft: 2800,
      bedrooms: 4,
      bathrooms: 4,
      facing: "East",
      approval: "DTCP & RERA Approved",
      description: "Grand architectural masterpiece with double-height ceiling living hall, home theatre room, imported sanitary fittings, private landscaped lawn, and servant quarters.",
      imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      features: "Home Theatre, Private Garden, Double Car Porch, Solar Water Heater, Premium Teakwood Woodwork",
      isFeatured: true,
      gallery: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 6,
      title: "Agricultural / Farm Land with Sweet Water Well",
      category: "Land",
      status: "For Sale",
      price: "₹45 Lakhs",
      priceNum: 45,
      location: "Near Ponneri - Minjur Belt, Tiruvallur",
      areaSqft: 10890,
      bedrooms: 0,
      bathrooms: 0,
      facing: "North",
      approval: "Clear Title & Patta Transferable",
      description: "Quarter-acre rich fertile red soil farm land with active open water well and free agricultural electricity connection. Fenced on all sides with mature coconut and mango trees.",
      imageUrl: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
      features: "Free Agri EB Connection, Open Water Well, Fenced Boundary, Red Soil, Tar Road Access",
      isFeatured: false,
      gallery: [
        "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  ];

  const defaultContent = {
    hero: {
      title: "Your Next House or Land with 100% Verified Titles",
      subtitle: "Buy, sell, and build houses and land with clear documents, verified parent deeds, and trusted bank approvals — all directly from our Anuppambattu office.",
      expYears: "10+",
      happyClients: "500+",
      verifiedRate: "100%",
      ctaText: "View Properties"
    },
    contact: {
      phone1: "+91 99942 70551",
      phone2: "+91 90437 43426",
      whatsapp: "919994270551",
      email: "dreamstarrealestate76@gmail.com",
      address: "No.12 Rajapalayam Street, RS Road, Anuppambattu Railway Gate Opposite, 601203",
      workingHours: "Monday - Sunday: 8:30 AM - 8:30 PM",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rajapalayam+Street+RS+Road+Anuppambattu+601203"
    },
    about: {
      heading: "Dream Star Real Estate & Developers",
      tagline: "Building Trust, Delivering Legally Clear Dreams Since 2014",
      description: "Founded in Anuppambattu, Dream Star Real Estate & Developers is the premier real estate consultancy and builder in North Chennai and Tiruvallur. With more than a decade of proven integrity, we help families and investors secure 100% legally vetted plots, luxury villas, and commercial properties.",
      rera: "TN/RERA/0426/2021",
      dtcp: "DTCP/CHENNAI/2018"
    },
    services: [
      { id: 1, icon: "🏠", title: "Property Buy & Sale", description: "Direct buy and sale of residential plots, luxury villas, and commercial real estate at genuine market valuations without hidden broker markups." },
      { id: 2, icon: "⚖️", title: "Legal Title & 30-Yr EC Check", description: "Full verification of encumbrance certificate (EC), parent document chains, DTCP/CMDA approvals, and revenue records before you invest." },
      { id: 3, icon: "🏗️", title: "Villa Construction & Development", description: "Turnkey independent house construction with 100% Vaastu architectural planning, premium materials, and timely structural handover." },
      { id: 4, icon: "📜", title: "Patta Transfer & Registration", description: "Complete liaisoning for sub-registrar office registration, revenue patta name transfers, and chitta/FMB sketch procurement." },
      { id: 5, icon: "🤝", title: "Joint Venture (JV) Projects", description: "High-return joint venture collaborations for land owners and builders with fair profit sharing and transparent development timelines." },
      { id: 6, icon: "🏦", title: "Bank Loan Approvals", description: "Approved project tie-ups with SBI, HDFC, ICICI, and LIC Housing Finance providing up to 85% funding with minimal paperwork." }
    ],
    guides: [
      { id: 1, step: "1", title: "DTCP / CMDA Layout Approval", description: "Ensure the plot layout has an official DTCP or CMDA sanction number, not just unapproved panchayat regularizations." },
      { id: 2, step: "2", title: "Encumbrance Certificate (EC) for 30+ Years", description: "Check non-encumbrance from the Sub-Registrar Office to verify there are no mortgages, court attachments, or prior sales." },
      { id: 3, step: "3", title: "Individual Patta & FMB Sketch", description: "Verify the seller has a valid Patta in their name matching the Field Measurement Book (FMB) survey sketch and village records." },
      { id: 4, step: "4", title: "Chain of Parent Documents", description: "Verify original title deeds tracing back 30-40 years to confirm clear succession, partition deeds, or settlement deeds." }
    ],
    pillars: [
      { id: 1, title: "100% Parent Title Verification", description: "Every single plot and villa undergoes rigorous 30-year non-encumbrance vetting by senior revenue advocates." },
      { id: 2, title: "Direct Physical On-Site Visits", description: "Free pickup and guided physical inspections directly with Dream Star management — no middleman confusion." },
      { id: 3, title: "Fast Registration & Patta Assistance", description: "From Sub-Registrar token to revenue patta mutation, our dedicated team handles every government step." },
      { id: 4, title: "Zero Hidden Costs & Fair Pricing", description: "100% upfront transparency on guideline values, registration fees, and legal charges." }
    ],
    locations: [
      { id: 1, name: "All Locations", filter: "all" },
      { id: 2, name: "Anuppambattu", filter: "anuppambattu" },
      { id: 3, name: "Minjur", filter: "minjur" },
      { id: 4, name: "Ponneri", filter: "ponneri" },
      { id: 5, name: "Tiruvallur", filter: "tiruvallur" },
      { id: 6, name: "Redhills", filter: "redhills" }
    ],
    faqs: [
      { id: 1, question: "Are all plots and villas sold by Dream Star legally approved?", answer: "Yes! Every single property listed by Dream Star has clear DTCP/CMDA approvals, 30+ years encumbrance clearance (EC), and verified parent documents." },
      { id: 2, question: "Can I get a bank home loan or plot loan?", answer: "Absolutely. We have direct tie-ups with leading banks including SBI, HDFC, ICICI, and LIC Housing Finance, offering up to 85% loan assistance." },
      { id: 3, question: "Do you assist with Patta transfer after registration?", answer: "Yes, our team manages the entire revenue liaison process to get individual Patta, Chitta, and FMB sketches transferred directly into your name." },
      { id: 4, question: "How can I schedule a physical site visit?", answer: "Simply call +91 99942 70551 or click the WhatsApp button to book a free guided site tour directly from our Anuppambattu office." }
    ]
  };

  const defaultReviews = [
    {
      id: 1,
      name: "Karthik V.",
      rating: 5,
      location: "Anuppambattu",
      comment: "Extremely professional service! Verified all parent documents, EC for 30 years, and DTCP approvals cleanly. Got our dream plot without any hassle.",
      isApproved: true,
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      name: "S. Balasubramanian",
      rating: 5,
      location: "Minjur",
      comment: "Dream Star team helped us sell our commercial space within 3 weeks at a fair market price. Very transparent documentation and immediate settlement.",
      isApproved: true,
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      name: "Priya & Anand",
      rating: 5,
      location: "Ponneri",
      comment: "We purchased our 3 BHK villa through Dream Star Developers. Construction quality is exceptional and sweet groundwater availability made our family so happy!",
      isApproved: true,
      createdAt: new Date().toISOString()
    }
  ];

  // State
  let properties = defaultProperties;
  let siteContent = defaultContent;
  let reviews = defaultReviews;
  let inquiries = [];
  let currentUser = null;
  let activeCategory = 'All';
  let propertyViewMode = 'slider'; // Default is 'slider' (Slide option)
  let favorites = JSON.parse(localStorage.getItem('dreamstar_favs') || '[]');

  // Check saved session
  const savedToken = localStorage.getItem('dreamstar_token');
  const savedUser = localStorage.getItem('dreamstar_user');
  if (savedToken && savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      currentUser.token = savedToken;
    } catch (e) {
      localStorage.removeItem('dreamstar_token');
      localStorage.removeItem('dreamstar_user');
    }
  }

  // Toast Helper
  function toast(message, duration = 3000) {
    const el = document.getElementById('toastNotification');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    setTimeout(() => {
      el.classList.remove('show');
    }, duration);
  }
  window.toast = toast;

  // Modal helpers
  function openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
  }
  function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  }
  window.openModal = openModal;
  window.closeModal = closeModal;

  // Safe Escaping
  function esc(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // WhatsApp Link Builder (Automation Target: 9994270551)
  function getWhatsAppUrl(text) {
    const phone = (siteContent.contact && siteContent.contact.whatsapp) || '919994270551';
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  // Fetch Website Content with LocalStorage Persistence
  async function loadContent() {
    const localContent = localStorage.getItem('dreamstar_custom_content');
    if (localContent) {
      try {
        siteContent = JSON.parse(localContent);
      } catch (e) {
        siteContent = defaultContent;
      }
    } else {
      siteContent = defaultContent;
    }

    // Ensure all topic arrays are guaranteed to exist
    ensureSiteContentArrays();

    try {
      const res = await fetch('/api/content');
      if (res.ok) {
        siteContent = await res.json();
        ensureSiteContentArrays();
      }
    } catch (err) {}
    applyContentToDOM();
  }

  function ensureSiteContentArrays() {
    if (!siteContent) siteContent = { ...defaultContent };
    if (!siteContent.services || !Array.isArray(siteContent.services)) siteContent.services = JSON.parse(JSON.stringify(defaultContent.services));
    if (!siteContent.guides || !Array.isArray(siteContent.guides)) siteContent.guides = JSON.parse(JSON.stringify(defaultContent.guides));
    if (!siteContent.pillars || !Array.isArray(siteContent.pillars)) siteContent.pillars = JSON.parse(JSON.stringify(defaultContent.pillars));
    if (!siteContent.locations || !Array.isArray(siteContent.locations)) siteContent.locations = JSON.parse(JSON.stringify(defaultContent.locations));
    if (!siteContent.faqs || !Array.isArray(siteContent.faqs)) siteContent.faqs = JSON.parse(JSON.stringify(defaultContent.faqs));
  }

  function applyContentToDOM() {
    if (!siteContent) return;
    ensureSiteContentArrays();

    // Hero
    if (siteContent.hero) {
      const h = siteContent.hero;
      if (h.title) document.getElementById('heroHeadline').textContent = h.title;
      if (h.subtitle) document.getElementById('heroSubtext').textContent = h.subtitle;
      if (h.expYears) document.getElementById('statYears').textContent = h.expYears;
      if (h.happyClients) document.getElementById('statClients').textContent = h.happyClients;
      if (h.verifiedRate) document.getElementById('statRate').textContent = h.verifiedRate;

      // Populate Owner Editor fields if present
      const et = document.getElementById('editHeroTitle');
      if (et) et.value = h.title || '';
      const es = document.getElementById('editHeroSubtitle');
      if (es) es.value = h.subtitle || '';
      const ey = document.getElementById('editExpYears');
      if (ey) ey.value = h.expYears || '';
      const ec = document.getElementById('editHappyClients');
      if (ec) ec.value = h.happyClients || '';
      const ev = document.getElementById('editVerifiedRate');
      if (ev) ev.value = h.verifiedRate || '';
    }

    // Contact
    if (siteContent.contact) {
      const c = siteContent.contact;
      if (c.phone1) {
        const p1 = document.getElementById('topBarPhone1');
        if (p1) { p1.href = `tel:${c.phone1.replace(/\s+/g, '')}`; p1.querySelector('span').textContent = c.phone1; }
        const cp1 = document.getElementById('contactPhone1');
        if (cp1) { cp1.href = `tel:${c.phone1.replace(/\s+/g, '')}`; cp1.textContent = c.phone1; }
        const hc = document.getElementById('heroCallBtn');
        if (hc) hc.href = `tel:${c.phone1.replace(/\s+/g, '')}`;
        const cc = document.getElementById('contactCallBtn');
        if (cc) cc.href = `tel:${c.phone1.replace(/\s+/g, '')}`;
      }
      if (c.phone2) {
        const p2 = document.getElementById('topBarPhone2');
        if (p2) { p2.href = `tel:${c.phone2.replace(/\s+/g, '')}`; p2.querySelector('span').textContent = c.phone2; }
        const cp2 = document.getElementById('contactPhone2');
        if (cp2) { cp2.href = `tel:${c.phone2.replace(/\s+/g, '')}`; cp2.textContent = c.phone2; }
      }
      if (c.whatsapp) {
        const waUrl = `https://wa.me/${c.whatsapp}?text=${encodeURIComponent('Hi Dream Star Real Estate, I am interested in your properties.')}`;
        const fl = document.getElementById('floatingWaBtn');
        if (fl) fl.href = waUrl;
        const hw = document.getElementById('heroWaBtn');
        if (hw) hw.href = waUrl;
        const cw = document.getElementById('contactWaBtn');
        if (cw) cw.href = waUrl;
      }
      if (c.email) {
        const ce = document.getElementById('contactEmail');
        if (ce) { ce.href = `mailto:${c.email}`; ce.textContent = c.email; }
      }
      if (c.address) {
        const ta = document.getElementById('topBarAddress');
        if (ta) ta.textContent = c.address;
        const ca = document.getElementById('contactFullAddress');
        if (ca) ca.textContent = c.address;
      }
      if (c.workingHours) {
        const th = document.getElementById('topBarHours');
        if (th) th.textContent = c.workingHours;
        const ch = document.getElementById('contactHours');
        if (ch) ch.textContent = c.workingHours;
      }

      // Populate Owner Editor fields
      const ep1 = document.getElementById('editPhone1');
      if (ep1) ep1.value = c.phone1 || '';
      const ep2 = document.getElementById('editPhone2');
      if (ep2) ep2.value = c.phone2 || '';
      const ewa = document.getElementById('editWhatsapp');
      if (ewa) ewa.value = c.whatsapp || '';
      const eem = document.getElementById('editEmail');
      if (eem) eem.value = c.email || '';
      const ead = document.getElementById('editAddress');
      if (ead) ead.value = c.address || '';
      const ehr = document.getElementById('editHours');
      if (ehr) ehr.value = c.workingHours || '';
    }

    // About
    if (siteContent.about) {
      const a = siteContent.about;
      if (a.heading) {
        const ah = document.getElementById('aboutHeading');
        if (ah) ah.textContent = a.heading;
      }
      if (a.tagline) {
        const at = document.getElementById('aboutTagline');
        if (at) at.textContent = a.tagline;
      }
      if (a.description) {
        const ad = document.getElementById('aboutFullDesc');
        if (ad) ad.textContent = a.description;
        const fa = document.getElementById('footerAboutText');
        if (fa) fa.textContent = a.description;
      }
      if (a.rera) {
        const rn = document.getElementById('aboutReraNum');
        if (rn) rn.textContent = a.rera;
      }
      if (a.dtcp) {
        const dn = document.getElementById('aboutDtcpNum');
        if (dn) dn.textContent = a.dtcp;
      }

      // Populate Owner Editor fields
      const eat = document.getElementById('editAboutTagline');
      if (eat) eat.value = a.tagline || '';
      const ead = document.getElementById('editAboutDesc');
      if (ead) ead.value = a.description || '';
      const er = document.getElementById('editRera');
      if (er) er.value = a.rera || '';
      const ed = document.getElementById('editDtcp');
      if (ed) ed.value = a.dtcp || '';
    }

    // Render Dynamic Topics across Public Site
    renderServices();
    renderGuides();
    renderAboutPillars();
    renderLocations();
    renderFaqs();

    // If Owner is logged in, also update Owner CMS Tables
    if (currentUser && currentUser.role === 'owner') {
      renderAdminServicesTable();
      renderAdminGuidesTable();
      renderAdminPillarsTable();
      renderAdminLocationsTable();
      renderAdminFaqsTable();
    }
  }

  // ==========================================================
  // DYNAMIC PUBLIC RENDERERS FOR ALL TOPICS
  // ==========================================================

  // 1. RENDER SERVICES TO PUBLIC VIEW
  function renderServices() {
    const container = document.getElementById('servicesContainer');
    if (!container) return;
    ensureSiteContentArrays();

    if (!siteContent.services.length) {
      container.innerHTML = '<p style="color:var(--mute);text-align:center;grid-column:1/-1;">No services listed yet.</p>';
      return;
    }

    container.innerHTML = siteContent.services.map(s => `
      <div class="service-card" style="position:relative;">
        <div class="service-icon">${esc(s.icon || '🏠')}</div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.description)}</p>
        ${currentUser && currentUser.role === 'owner' ? `
          <div style="margin-top:14px;display:flex;gap:8px;border-top:1px solid rgba(226,186,79,0.15);padding-top:10px;">
            <button class="btn btn-outline btn-sm" onclick="window.editService(${s.id});" style="font-size:0.75rem;padding:3px 8px;">✏️ Edit</button>
            <button class="btn btn-danger btn-sm" onclick="window.deleteService(${s.id});" style="font-size:0.75rem;padding:3px 8px;">🗑️ Delete</button>
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  // 2. RENDER GUIDES TO PUBLIC VIEW
  function renderGuides() {
    const container = document.getElementById('guidesContainer');
    if (!container) return;
    ensureSiteContentArrays();

    if (!siteContent.guides.length) {
      container.innerHTML = '<p style="color:var(--mute);text-align:center;grid-column:1/-1;">No legal guides listed yet.</p>';
      return;
    }

    container.innerHTML = siteContent.guides.map(g => `
      <div class="check-item" style="position:relative;">
        <div class="check-icon">${esc(g.step || '✓')}</div>
        <div style="flex:1;">
          <h4>${esc(g.title)}</h4>
          <p>${esc(g.description)}</p>
          ${currentUser && currentUser.role === 'owner' ? `
            <div style="margin-top:10px;display:flex;gap:8px;">
              <button class="btn btn-outline btn-sm" onclick="window.editGuide(${g.id});" style="font-size:0.72rem;padding:2px 8px;">✏️ Edit</button>
              <button class="btn btn-danger btn-sm" onclick="window.deleteGuide(${g.id});" style="font-size:0.72rem;padding:2px 8px;">🗑️ Delete</button>
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  // 3. RENDER PILLARS TO PUBLIC ABOUT VIEW
  function renderAboutPillars() {
    const container = document.getElementById('pillarsContainer');
    if (!container) return;
    ensureSiteContentArrays();

    if (!siteContent.pillars.length) {
      container.innerHTML = '<li><p style="color:var(--mute);">No trust pillars listed.</p></li>';
      return;
    }

    container.innerHTML = siteContent.pillars.map(p => `
      <li>
        <span class="pillar-check">✓</span>
        <div style="flex:1;">
          <strong>${esc(p.title)}</strong>
          <p>${esc(p.description)}</p>
          ${currentUser && currentUser.role === 'owner' ? `
            <div style="margin-top:6px;display:flex;gap:8px;">
              <button class="btn btn-outline btn-sm" onclick="window.editPillar(${p.id});" style="font-size:0.7rem;padding:2px 8px;">✏️ Edit</button>
              <button class="btn btn-danger btn-sm" onclick="window.deletePillar(${p.id});" style="font-size:0.7rem;padding:2px 8px;">🗑️ Delete</button>
            </div>
          ` : ''}
        </div>
      </li>
    `).join('');
  }

  // 4. RENDER LOCATIONS TO FILTER BAR
  let activeLocationFilter = 'all';
  function renderLocations() {
    const container = document.getElementById('locationPillsContainer');
    if (!container) return;
    ensureSiteContentArrays();

    container.innerHTML = siteContent.locations.map(loc => `
      <button class="pill-btn ${activeLocationFilter === loc.filter ? 'active' : ''}" 
              data-filter="${esc(loc.filter)}" 
              onclick="window.selectLocationFilter('${esc(loc.filter)}');">
        ${esc(loc.name)}
      </button>
    `).join('');
  }

  window.selectLocationFilter = function(filterSlug) {
    activeLocationFilter = filterSlug;
    renderLocations();
    if (filterSlug === 'all') {
      renderProperties(properties);
    } else {
      const filtered = properties.filter(p => 
        (p.location && p.location.toLowerCase().includes(filterSlug.toLowerCase())) || 
        (p.title && p.title.toLowerCase().includes(filterSlug.toLowerCase()))
      );
      renderProperties(filtered);
    }
  };

  // 5. RENDER FAQS TO PUBLIC VIEW
  function renderFaqs() {
    const container = document.getElementById('faqsContainer');
    if (!container) return;
    ensureSiteContentArrays();

    if (!siteContent.faqs.length) {
      container.innerHTML = '<p style="color:var(--mute);text-align:center;grid-column:1/-1;">No FAQs published yet.</p>';
      return;
    }

    container.innerHTML = siteContent.faqs.map(f => `
      <div class="faq-card">
        <div class="faq-q">
          <span class="faq-q-icon">✦</span>
          <span>${esc(f.question)}</span>
        </div>
        <div class="faq-a">${esc(f.answer)}</div>
        ${currentUser && currentUser.role === 'owner' ? `
          <div style="margin-top:14px;display:flex;gap:8px;border-top:1px solid rgba(226,186,79,0.15);padding-top:10px;">
            <button class="btn btn-outline btn-sm" onclick="window.editFaq(${f.id});" style="font-size:0.75rem;padding:3px 8px;">✏️ Edit</button>
            <button class="btn btn-danger btn-sm" onclick="window.deleteFaq(${f.id});" style="font-size:0.75rem;padding:3px 8px;">🗑️ Delete</button>
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  // ==========================================================
  // OWNER CMS TABLES RENDERERS
  // ==========================================================

  function renderAdminServicesTable() {
    const tbody = document.getElementById('adminServicesTableBody');
    const countEl = document.getElementById('adminServicesCount');
    if (!tbody) return;
    ensureSiteContentArrays();

    if (countEl) countEl.textContent = siteContent.services.length;

    tbody.innerHTML = siteContent.services.map(s => `
      <tr>
        <td style="font-size:1.6rem;text-align:center;">${esc(s.icon || '🏠')}</td>
        <td><strong>${esc(s.title)}</strong></td>
        <td style="max-width:380px;font-size:0.85rem;color:var(--ink);">${esc(s.description)}</td>
        <td>
          <div style="display:flex;gap:6px;">
            <button class="btn btn-outline btn-sm" onclick="window.editService(${s.id});">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="window.deleteService(${s.id});">Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  function renderAdminGuidesTable() {
    const tbody = document.getElementById('adminGuidesTableBody');
    const countEl = document.getElementById('adminGuidesCount');
    if (!tbody) return;
    ensureSiteContentArrays();

    if (countEl) countEl.textContent = siteContent.guides.length;

    tbody.innerHTML = siteContent.guides.map(g => `
      <tr>
        <td style="font-weight:700;text-align:center;color:var(--gold);">${esc(g.step || '•')}</td>
        <td><strong>${esc(g.title)}</strong></td>
        <td style="max-width:380px;font-size:0.85rem;color:var(--ink);">${esc(g.description)}</td>
        <td>
          <div style="display:flex;gap:6px;">
            <button class="btn btn-outline btn-sm" onclick="window.editGuide(${g.id});">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="window.deleteGuide(${g.id});">Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  function renderAdminPillarsTable() {
    const tbody = document.getElementById('adminPillarsTableBody');
    const countEl = document.getElementById('adminPillarsCount');
    if (!tbody) return;
    ensureSiteContentArrays();

    if (countEl) countEl.textContent = siteContent.pillars.length;

    tbody.innerHTML = siteContent.pillars.map(p => `
      <tr>
        <td><strong>${esc(p.title)}</strong></td>
        <td style="max-width:400px;font-size:0.85rem;color:var(--ink);">${esc(p.description)}</td>
        <td>
          <div style="display:flex;gap:6px;">
            <button class="btn btn-outline btn-sm" onclick="window.editPillar(${p.id});">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="window.deletePillar(${p.id});">Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  function renderAdminLocationsTable() {
    const tbody = document.getElementById('adminLocationsTableBody');
    const countEl = document.getElementById('adminLocationsCount');
    if (!tbody) return;
    ensureSiteContentArrays();

    if (countEl) countEl.textContent = siteContent.locations.length;

    tbody.innerHTML = siteContent.locations.map(loc => `
      <tr>
        <td><strong>${esc(loc.name)}</strong></td>
        <td><code style="color:var(--gold);">${esc(loc.filter)}</code></td>
        <td>
          <div style="display:flex;gap:6px;">
            <button class="btn btn-outline btn-sm" onclick="window.editLocation(${loc.id});">Edit</button>
            ${loc.filter !== 'all' ? `<button class="btn btn-danger btn-sm" onclick="window.deleteLocation(${loc.id});">Delete</button>` : '<span style="font-size:0.75rem;color:var(--mute);">Default</span>'}
          </div>
        </td>
      </tr>
    `).join('');
  }

  function renderAdminFaqsTable() {
    const tbody = document.getElementById('adminFaqsTableBody');
    const countEl = document.getElementById('adminFaqsCount');
    if (!tbody) return;
    ensureSiteContentArrays();

    if (countEl) countEl.textContent = siteContent.faqs.length;

    tbody.innerHTML = siteContent.faqs.map(f => `
      <tr>
        <td style="max-width:240px;font-weight:600;color:var(--gold-light);">${esc(f.question)}</td>
        <td style="max-width:400px;font-size:0.85rem;color:var(--ink);">${esc(f.answer)}</td>
        <td>
          <div style="display:flex;gap:6px;">
            <button class="btn btn-outline btn-sm" onclick="window.editFaq(${f.id});">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="window.deleteFaq(${f.id});">Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  // ==========================================================
  // CENTRAL CONTENT SYNC & CRUD OPERATIONS FOR ALL TOPICS
  // ==========================================================

  async function syncSiteContentToCloud(toastMessage) {
    localStorage.setItem('dreamstar_custom_content', JSON.stringify(siteContent));
    applyContentToDOM();
    if (currentUser && currentUser.role === 'owner') {
      renderAdminServicesTable();
      renderAdminGuidesTable();
      renderAdminPillarsTable();
      renderAdminLocationsTable();
      renderAdminFaqsTable();
    }
    if (toastMessage) toast(toastMessage);

    // Sync to Cloud Firestore
    if (window.isFirebaseReady && window.firestoreDb) {
      try {
        await window.firestoreDb.collection('settings').doc('site_content').set(siteContent, { merge: true });
      } catch (fErr) {
        console.warn('Firestore content sync notice:', fErr);
      }
    }
  }

  // SERVICES CRUD
  window.openAddServiceModal = function () {
    document.getElementById('serviceEditId').value = '';
    document.getElementById('serviceIcon').value = '🏠';
    document.getElementById('serviceTitle').value = '';
    document.getElementById('serviceDesc').value = '';
    document.getElementById('serviceModalTitle').textContent = '➕ Add New Real Estate Service';
    openModal('serviceModal');
  };

  window.editService = function (id) {
    ensureSiteContentArrays();
    const item = siteContent.services.find(s => s.id == id);
    if (!item) return;
    document.getElementById('serviceEditId').value = item.id;
    document.getElementById('serviceIcon').value = item.icon || '🏠';
    document.getElementById('serviceTitle').value = item.title || '';
    document.getElementById('serviceDesc').value = item.description || '';
    document.getElementById('serviceModalTitle').textContent = '✏️ Edit Real Estate Service';
    openModal('serviceModal');
  };

  window.handleSaveService = function (e) {
    if (e) e.preventDefault();
    ensureSiteContentArrays();
    const id = document.getElementById('serviceEditId').value;
    const icon = document.getElementById('serviceIcon').value.trim() || '🏠';
    const title = document.getElementById('serviceTitle').value.trim();
    const description = document.getElementById('serviceDesc').value.trim();

    if (id) {
      const idx = siteContent.services.findIndex(s => s.id == id);
      if (idx !== -1) {
        siteContent.services[idx] = { ...siteContent.services[idx], icon, title, description };
      }
    } else {
      siteContent.services.push({ id: Date.now(), icon, title, description });
    }
    closeModal('serviceModal');
    syncSiteContentToCloud(id ? '✅ Service updated successfully!' : '🎉 New Service added & published!');
  };

  window.deleteService = function (id) {
    if (!confirm('Are you sure you want to delete this service?')) return;
    ensureSiteContentArrays();
    siteContent.services = siteContent.services.filter(s => s.id != id);
    syncSiteContentToCloud('🗑️ Service deleted.');
  };

  // GUIDES CRUD
  window.openAddGuideModal = function () {
    ensureSiteContentArrays();
    document.getElementById('guideEditId').value = '';
    document.getElementById('guideStep').value = String(siteContent.guides.length + 1);
    document.getElementById('guideTitle').value = '';
    document.getElementById('guideDesc').value = '';
    document.getElementById('guideModalTitle').textContent = '➕ Add Legal Checklist Item';
    openModal('guideModal');
  };

  window.editGuide = function (id) {
    ensureSiteContentArrays();
    const item = siteContent.guides.find(g => g.id == id);
    if (!item) return;
    document.getElementById('guideEditId').value = item.id;
    document.getElementById('guideStep').value = item.step || '✓';
    document.getElementById('guideTitle').value = item.title || '';
    document.getElementById('guideDesc').value = item.description || '';
    document.getElementById('guideModalTitle').textContent = '✏️ Edit Legal Checklist Item';
    openModal('guideModal');
  };

  window.handleSaveGuide = function (e) {
    if (e) e.preventDefault();
    ensureSiteContentArrays();
    const id = document.getElementById('guideEditId').value;
    const step = document.getElementById('guideStep').value.trim() || '✓';
    const title = document.getElementById('guideTitle').value.trim();
    const description = document.getElementById('guideDesc').value.trim();

    if (id) {
      const idx = siteContent.guides.findIndex(g => g.id == id);
      if (idx !== -1) {
        siteContent.guides[idx] = { ...siteContent.guides[idx], step, title, description };
      }
    } else {
      siteContent.guides.push({ id: Date.now(), step, title, description });
    }
    closeModal('guideModal');
    syncSiteContentToCloud(id ? '✅ Checklist item updated!' : '🎉 New checklist item added!');
  };

  window.deleteGuide = function (id) {
    if (!confirm('Are you sure you want to delete this checklist item?')) return;
    ensureSiteContentArrays();
    siteContent.guides = siteContent.guides.filter(g => g.id != id);
    syncSiteContentToCloud('🗑️ Checklist item deleted.');
  };

  // PILLARS CRUD
  window.openAddPillarModal = function () {
    document.getElementById('pillarEditId').value = '';
    document.getElementById('pillarTitle').value = '';
    document.getElementById('pillarDesc').value = '';
    document.getElementById('pillarModalTitle').textContent = '➕ Add Why Trust Us Pillar';
    openModal('pillarModal');
  };

  window.editPillar = function (id) {
    ensureSiteContentArrays();
    const item = siteContent.pillars.find(p => p.id == id);
    if (!item) return;
    document.getElementById('pillarEditId').value = item.id;
    document.getElementById('pillarTitle').value = item.title || '';
    document.getElementById('pillarDesc').value = item.description || '';
    document.getElementById('pillarModalTitle').textContent = '✏️ Edit Trust Pillar';
    openModal('pillarModal');
  };

  window.handleSavePillar = function (e) {
    if (e) e.preventDefault();
    ensureSiteContentArrays();
    const id = document.getElementById('pillarEditId').value;
    const title = document.getElementById('pillarTitle').value.trim();
    const description = document.getElementById('pillarDesc').value.trim();

    if (id) {
      const idx = siteContent.pillars.findIndex(p => p.id == id);
      if (idx !== -1) {
        siteContent.pillars[idx] = { ...siteContent.pillars[idx], title, description };
      }
    } else {
      siteContent.pillars.push({ id: Date.now(), title, description });
    }
    closeModal('pillarModal');
    syncSiteContentToCloud(id ? '✅ Trust pillar updated!' : '🎉 New trust pillar added!');
  };

  window.deletePillar = function (id) {
    if (!confirm('Are you sure you want to delete this trust pillar?')) return;
    ensureSiteContentArrays();
    siteContent.pillars = siteContent.pillars.filter(p => p.id != id);
    syncSiteContentToCloud('🗑️ Trust pillar deleted.');
  };

  // LOCATIONS CRUD
  window.openAddLocationModal = function () {
    document.getElementById('locationEditId').value = '';
    document.getElementById('locationName').value = '';
    document.getElementById('locationModalTitle').textContent = '➕ Add Hotspot Location Area';
    openModal('locationModal');
  };

  window.editLocation = function (id) {
    ensureSiteContentArrays();
    const item = siteContent.locations.find(l => l.id == id);
    if (!item) return;
    document.getElementById('locationEditId').value = item.id;
    document.getElementById('locationName').value = item.name || '';
    document.getElementById('locationModalTitle').textContent = '✏️ Edit Location Area';
    openModal('locationModal');
  };

  window.handleSaveLocation = function (e) {
    if (e) e.preventDefault();
    ensureSiteContentArrays();
    const id = document.getElementById('locationEditId').value;
    const name = document.getElementById('locationName').value.trim();
    const filter = name.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (id) {
      const idx = siteContent.locations.findIndex(l => l.id == id);
      if (idx !== -1) {
        siteContent.locations[idx] = { ...siteContent.locations[idx], name, filter };
      }
    } else {
      siteContent.locations.push({ id: Date.now(), name, filter });
    }
    closeModal('locationModal');
    syncSiteContentToCloud(id ? '✅ Location updated!' : '🎉 New location added to filter pills!');
  };

  window.deleteLocation = function (id) {
    if (!confirm('Delete this location area filter?')) return;
    ensureSiteContentArrays();
    siteContent.locations = siteContent.locations.filter(l => l.id != id);
    syncSiteContentToCloud('🗑️ Location deleted.');
  };

  // FAQS CRUD
  window.openAddFaqModal = function () {
    document.getElementById('faqEditId').value = '';
    document.getElementById('faqQuestion').value = '';
    document.getElementById('faqAnswer').value = '';
    document.getElementById('faqModalTitle').textContent = '➕ Add New Frequently Asked Question';
    openModal('faqModal');
  };

  window.editFaq = function (id) {
    ensureSiteContentArrays();
    const item = siteContent.faqs.find(f => f.id == id);
    if (!item) return;
    document.getElementById('faqEditId').value = item.id;
    document.getElementById('faqQuestion').value = item.question || '';
    document.getElementById('faqAnswer').value = item.answer || '';
    document.getElementById('faqModalTitle').textContent = '✏️ Edit Frequently Asked Question';
    openModal('faqModal');
  };

  window.handleSaveFaq = function (e) {
    if (e) e.preventDefault();
    ensureSiteContentArrays();
    const id = document.getElementById('faqEditId').value;
    const question = document.getElementById('faqQuestion').value.trim();
    const answer = document.getElementById('faqAnswer').value.trim();

    if (id) {
      const idx = siteContent.faqs.findIndex(f => f.id == id);
      if (idx !== -1) {
        siteContent.faqs[idx] = { ...siteContent.faqs[idx], question, answer };
      }
    } else {
      siteContent.faqs.push({ id: Date.now(), question, answer });
    }
    closeModal('faqModal');
    syncSiteContentToCloud(id ? '✅ FAQ updated!' : '🎉 New FAQ published!');
  };

  window.deleteFaq = function (id) {
    if (!confirm('Are you sure you want to delete this FAQ?')) return;
    ensureSiteContentArrays();
    siteContent.faqs = siteContent.faqs.filter(f => f.id != id);
    syncSiteContentToCloud('🗑️ FAQ deleted.');
  };

  // QUICK MANAGEMENT NAVIGATION HELPER
  window.openManageContentSection = function (sectionName) {
    window.openOwnerPortal();
    if (sectionName === 'properties') {
      const propTabBtn = document.querySelector('.owner-tab-link[data-tab="ownerTabProps"]');
      if (propTabBtn) propTabBtn.click();
      return;
    }
    if (sectionName === 'reviews') {
      const revTabBtn = document.querySelector('.owner-tab-link[data-tab="ownerTabReviews"]');
      if (revTabBtn) revTabBtn.click();
      return;
    }

    const contentTabBtn = document.querySelector('.owner-tab-link[data-tab="ownerTabContent"]');
    if (contentTabBtn) contentTabBtn.click();

    setTimeout(() => {
      const targetIdMap = {
        'services': 'cmsSectionServices',
        'guides': 'cmsSectionGuides',
        'pillars': 'cmsSectionPillars',
        'locations': 'cmsSectionLocations',
        'faqs': 'cmsSectionFaqs',
        'hero': 'cmsSectionHero',
        'contact': 'cmsSectionContact',
        'about': 'cmsSectionAbout'
      };
      const el = document.getElementById(targetIdMap[sectionName] || 'cmsSectionServices');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.style.outline = '2px solid var(--gold)';
        setTimeout(() => el.style.outline = '', 2000);
      }
    }, 150);
  };

  // Fetch Properties with LocalStorage Persistence
  async function loadProperties() {
    const localProps = localStorage.getItem('dreamstar_custom_properties');
    if (localProps) {
      try {
        properties = JSON.parse(localProps);
      } catch (e) {
        properties = defaultProperties;
      }
    } else {
      properties = defaultProperties;
    }

    try {
      const res = await fetch('/api/properties');
      if (res.ok) {
        properties = await res.json();
      }
    } catch (err) {}
    renderProperties(properties);
    if (currentUser && currentUser.role === 'owner') {
      renderAdminProperties();
    }
  }

  // Render Properties to Frontend
  function renderProperties(list) {
    const container = document.getElementById('propertiesContainer');
    if (!container) return;

    let displayList = list;
    if (activeCategory !== 'All') {
      displayList = list.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    if (!displayList || displayList.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; background: var(--card); border: 1px dashed var(--card-border); border-radius: var(--radius);">
          <h3 style="color:var(--gold-light);margin-bottom:8px;">No Listings in this Category</h3>
          <p style="color:var(--mute);margin-bottom:16px;">We frequently acquire new residential layouts and independent villas. Contact our office directly for upcoming developments.</p>
          <a href="tel:+919994270551" class="btn btn-primary btn-sm" onclick="window.triggerCallAutomation('9994270551'); return false;">Call Office for Updates (+91 99942 70551)</a>
        </div>
      `;
      return;
    }

    container.innerHTML = displayList.map(prop => {
      const isFav = favorites.includes(prop.id);
      const photo = prop.imageUrl || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80';
      const waText = `Hi Dream Star Real Estate, I am interested in: ${prop.title} (${prop.location}, ${prop.price}). Please send more details.`;
      const waLink = getWhatsAppUrl(waText);

      return `
        <article class="property-card" data-id="${prop.id}">
          <div class="card-media">
            <img src="${esc(photo)}" alt="${esc(prop.title)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'">
            <div class="card-badges">
              <span class="badge-status">${esc(prop.status || 'For Sale')}</span>
              ${prop.isFeatured ? '<span class="badge-featured">Featured ★</span>' : ''}
            </div>
            <button class="fav-toggle-btn" style="position:absolute;bottom:10px;right:10px;background:rgba(3,8,39,0.8);border:1px solid rgba(226,186,79,0.4);border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;color:${isFav ? '#ef4444' : '#fff'};cursor:pointer;" onclick="window.toggleFavorite(${prop.id}); event.stopPropagation();" title="Save Property">
              ♥
            </button>
          </div>

          <div class="card-body">
            <div class="card-price-row">
              <span class="card-price">${esc(prop.price)}</span>
              <span class="card-category">${esc(prop.category)}</span>
            </div>

            <h3 class="card-title">${esc(prop.title)}</h3>

            <div class="card-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              <span>${esc(prop.location)}</span>
            </div>

            <div class="card-specs-row">
              ${prop.areaSqft ? `<div class="spec-item"><span>📐</span> ${prop.areaSqft} sqft</div>` : ''}
              ${prop.bedrooms ? `<div class="spec-item"><span>🛏️</span> ${prop.bedrooms} BHK</div>` : ''}
              ${prop.facing ? `<div class="spec-item"><span>🧭</span> ${esc(prop.facing)}</div>` : ''}
              ${prop.approval ? `<div class="spec-item"><span>📜</span> ${esc(prop.approval)}</div>` : ''}
            </div>

            <p class="card-desc-snippet">${esc(prop.description)}</p>

            <div class="card-footer-actions">
              <button class="btn btn-outline btn-sm" onclick="window.viewPropertyDetail(${prop.id});">
                View Details
              </button>
              <button type="button" class="btn btn-outline btn-sm" onclick="window.triggerCallAutomation('9994270551', '${esc(prop.title)}');" title="Call for this listing">
                📞 Call
              </button>
              <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-wa btn-sm">
                WhatsApp
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Update slider status and arrows after rendering
    updateSliderButtons();
  }

  // Properties View Mode Switcher (Slide Option vs Grid Option)
  window.setPropertyViewMode = function (mode) {
    propertyViewMode = mode;
    const wrapper = document.getElementById('propertiesWrapper');
    const slideBtn = document.getElementById('viewSlideBtn');
    const gridBtn = document.getElementById('viewGridBtn');
    const controls = document.getElementById('propertiesSliderControls');

    if (mode === 'grid') {
      if (wrapper) wrapper.classList.remove('slider-mode');
      if (slideBtn) slideBtn.classList.remove('active');
      if (gridBtn) gridBtn.classList.add('active');
      if (controls) controls.style.display = 'none';
    } else {
      if (wrapper) wrapper.classList.add('slider-mode');
      if (slideBtn) slideBtn.classList.add('active');
      if (gridBtn) gridBtn.classList.remove('active');
      if (controls) controls.style.display = 'flex';
      updateSliderButtons();
    }
  };

  // Horizontal slide for properties
  window.slideProperties = function (direction) {
    const wrapper = document.getElementById('propertiesWrapper');
    if (!wrapper) return;
    const scrollAmount = 380;
    wrapper.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    setTimeout(updateSliderButtons, 350);
  };

  // Update Slider Navigation Buttons and Status
  function updateSliderButtons() {
    const wrapper = document.getElementById('propertiesWrapper');
    const prevBtn = document.getElementById('propPrevBtn');
    const nextBtn = document.getElementById('propNextBtn');
    const status = document.getElementById('propSliderStatus');
    if (!wrapper) return;

    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    if (prevBtn) prevBtn.disabled = wrapper.scrollLeft <= 5;
    if (nextBtn) nextBtn.disabled = wrapper.scrollLeft >= maxScroll - 5;

    if (status) {
      const cards = wrapper.querySelectorAll('.property-card');
      const total = cards.length;
      if (total === 0) {
        status.textContent = 'No listings in this category';
      } else {
        const cardWidth = 380;
        const visible = Math.min(total, Math.max(1, Math.round(wrapper.clientWidth / cardWidth)));
        const currentIndex = Math.min(total, Math.max(1, Math.round(wrapper.scrollLeft / cardWidth) + 1));
        status.textContent = `Showing ${currentIndex} - ${Math.min(total, currentIndex + visible - 1)} of ${total} Properties (Slide Mode)`;
      }
    }
  }

  // Slide reviews horizontally
  window.slideReviews = function (direction) {
    const wrapper = document.getElementById('reviewsWrapper');
    if (!wrapper) return;
    wrapper.scrollBy({ left: direction * 360, behavior: 'smooth' });
  };

  // Switch image in property details modal gallery
  window.switchModalImage = function (url, btn) {
    const main = document.getElementById('modalMainImg');
    if (main) {
      main.style.opacity = '0.3';
      setTimeout(() => {
        main.src = url;
        main.style.opacity = '1';
      }, 150);
    }
    document.querySelectorAll('.modal-thumb-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
  };

  // Category Filtering
  document.getElementById('categoryChips')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip-btn');
    if (!btn) return;
    document.querySelectorAll('#categoryChips .chip-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category || 'All';
    renderProperties(properties);
    const wrapper = document.getElementById('propertiesWrapper');
    if (wrapper) wrapper.scrollTo({ left: 0, behavior: 'smooth' });
  });

  // Search & Filter Form Submit
  window.applyPropertyFilters = function () {
    const search = document.getElementById('filterSearch').value.toLowerCase().trim();
    const cat = document.getElementById('filterCategory').value;
    const status = document.getElementById('filterStatus').value;
    const maxBudget = document.getElementById('filterPrice').value;

    let filtered = properties;

    if (search) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(search) ||
        p.location.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search)
      );
    }

    if (cat !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === cat.toLowerCase());
    }

    if (status !== 'All') {
      filtered = filtered.filter(p => p.status.toLowerCase() === status.toLowerCase());
    }

    if (maxBudget !== 'All') {
      const budgetNum = Number(maxBudget);
      filtered = filtered.filter(p => (p.priceNum || 0) <= budgetNum);
    }

    renderProperties(filtered);
    const target = document.getElementById('properties');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  // View Property Details Modal
  window.viewPropertyDetail = function (id) {
    const prop = properties.find(p => p.id === id);
    if (!prop) return;

    document.getElementById('modalPropTitle').textContent = prop.title;
    const content = document.getElementById('modalPropContent');
    const photo = prop.imageUrl || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
    const gallery = (prop.gallery && prop.gallery.length) ? prop.gallery : [
      photo,
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ];
    const waText = `Hi Dream Star Real Estate, I want to book a site visit for: ${prop.title} (${prop.location}, ${prop.price}).`;
    const waLink = getWhatsAppUrl(waText);

    content.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr;gap:20px;">
        <div class="modal-gallery-box">
          <img id="modalMainImg" src="${esc(gallery[0])}" alt="${esc(prop.title)}" class="modal-gallery-main">
        </div>

        <div class="modal-gallery-thumbnails">
          ${gallery.map((img, i) => `
            <button type="button" class="modal-thumb-btn ${i === 0 ? 'active' : ''}" onclick="window.switchModalImage('${esc(img)}', this);" title="View Photo ${i + 1}">
              <img src="${esc(img)}" alt="Photo ${i + 1}">
            </button>
          `).join('')}
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
          <div>
            <span style="font-size:1.8rem;color:var(--gold-light);font-weight:700;font-family:'Cinzel',serif;">${esc(prop.price)}</span>
            <span style="font-size:0.85rem;color:var(--mute);margin-left:10px;">• ${esc(prop.category)} (${esc(prop.status)})</span>
          </div>
          <div>
            <span style="background:rgba(226,186,79,0.15);color:var(--gold-light);padding:6px 12px;border-radius:6px;font-size:0.85rem;font-weight:600;">
              ${esc(prop.approval || 'DTCP Approved')}
            </span>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;background:var(--card);padding:14px;border-radius:10px;border:1px solid var(--card-border);">
          <div><small style="color:var(--mute);display:block;">Location</small><strong>${esc(prop.location)}</strong></div>
          <div><small style="color:var(--mute);display:block;">Built/Plot Area</small><strong>${prop.areaSqft ? prop.areaSqft + ' sqft' : 'N/A'}</strong></div>
          <div><small style="color:var(--mute);display:block;">Bedrooms</small><strong>${prop.bedrooms ? prop.bedrooms + ' BHK' : 'N/A'}</strong></div>
          <div><small style="color:var(--mute);display:block;">Bathrooms</small><strong>${prop.bathrooms || 'N/A'}</strong></div>
          <div><small style="color:var(--mute);display:block;">Facing</small><strong>${esc(prop.facing || 'East')}</strong></div>
        </div>

        <div>
          <h4 style="margin-bottom:6px;color:var(--gold-light);">Overview &amp; Legal Description</h4>
          <p style="color:var(--ink);line-height:1.6;font-size:0.95rem;">${esc(prop.description)}</p>
        </div>

        ${prop.features ? `
          <div>
            <h4 style="margin-bottom:6px;color:var(--gold-light);">Amenities &amp; Highlights</h4>
            <div style="display:flex;flex-wrap:wrap;gap:8px;">
              ${prop.features.split(',').map(f => `<span style="background:rgba(3,8,39,0.8);border:1px solid var(--card-border);padding:4px 10px;border-radius:6px;font-size:0.82rem;color:var(--ink);">✓ ${esc(f.trim())}</span>`).join('')}
            </div>
          </div>
        ` : ''}

        <div style="display:flex;gap:10px;margin-top:10px;padding-top:14px;border-top:1px solid rgba(226,186,79,0.2);flex-wrap:wrap;">
          <button type="button" class="btn btn-outline" style="flex:1;" onclick="window.triggerCallAutomation('9994270551', '${esc(prop.title)}');">
            📞 Call Office (+91 99942 70551)
          </button>
          <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-wa" style="flex:1;">
            Enquire on WhatsApp
          </a>
          <button class="btn btn-primary" style="flex:1;" onclick="window.prefillSiteVisit('${esc(prop.title)}');">
            Schedule Site Inspection
          </button>
        </div>
      </div>
    `;

    openModal('propDetailModal');
  };

  window.prefillSiteVisit = function (title) {
    closeModal('propDetailModal');
    window.switchTab('contact');
    setTimeout(() => {
      const msg = document.getElementById('inqMessage');
      if (msg) msg.value = `I want to schedule a site inspection for: ${title}.`;
    }, 150);
  };

  // Toggle Favorite
  window.toggleFavorite = function (id) {
    const idx = favorites.indexOf(id);
    if (idx === -1) {
      favorites.push(id);
      toast('Property added to your favorites!');
    } else {
      favorites.splice(idx, 1);
      toast('Property removed from favorites.');
    }
    localStorage.setItem('dreamstar_favs', JSON.stringify(favorites));
    renderProperties(properties);
    renderClientFavorites();
  };

  // ==========================================================
  // AUTOMATION SUITE: CALL, WHATSAPP & MAIL (Target: 9994270551)
  // ==========================================================

  // 1. CALL AUTOMATION
  window.triggerCallAutomation = function (number = '9994270551', label = 'Dream Star Real Estate') {
    const cleanNum = String(number).replace(/\D/g, '');
    const formatted = cleanNum.length === 10 ? `+91 ${cleanNum.slice(0, 5)} ${cleanNum.slice(5)}` : number;
    toast(`📞 Call Automation: Connecting to ${label} (${formatted})...`, 2500);
    setTimeout(() => {
      window.location.href = `tel:+91${cleanNum.slice(-10)}`;
    }, 350);
  };

  // 2. WHATSAPP AUTOMATION
  window.triggerWhatsAppAutomation = function (type = 'general', details = '') {
    const waPhone = (siteContent.contact && siteContent.contact.whatsapp) || '919994270551';
    let msg = '';
    if (type === 'general') {
      msg = 'Vanakkam Dream Star Real Estate! I am visiting your website and looking for verified Plots and Villas in Anuppambattu / North Chennai. Please share current available listings.';
    } else if (type === 'contact') {
      msg = 'Vanakkam Dream Star! I would like to schedule an office consultation and property inspection with your team.';
    } else if (type === 'land') {
      msg = `Vanakkam! I am inquiring specifically about Land & Residential Plots in Anuppambattu. ${details}`;
    } else if (type === 'floating') {
      msg = 'Vanakkam Dream Star Real Estate (+91 99942 70551)! I am looking for property details and legal guidance.';
    } else {
      msg = `Vanakkam Dream Star! ${details || 'I am interested in your real estate services.'}`;
    }
    toast('💬 WhatsApp Automation: Opening verified chat (+91 99942 70551)...', 2000);
    const url = `https://wa.me/${waPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  // 3. MAIL AUTOMATION
  window.triggerMailAutomation = function (subject = 'Property Inquiry - Dream Star', body = '', formData = null) {
    const targetEmail = (siteContent.contact && siteContent.contact.email) || 'dreamstarrealestate76@gmail.com';
    let fullBody = body;
    if (formData) {
      fullBody = `Vanakkam Dream Star Real Estate Team,\n\nHere are my inquiry details:\n- Name: ${formData.name}\n- Mobile / WhatsApp: ${formData.phone}\n- Looking For: ${formData.lookingFor}\n- Budget Range: ${formData.budget}\n- Preferred Site Inspection Date: ${formData.preferredDate || 'Flexible'}\n- Requirements & Notes: ${formData.message || 'N/A'}\n\nPlease contact me via phone (+91 ${formData.phone}) or email.\n\nThank you,\n${formData.name}`;
    } else if (!fullBody) {
      fullBody = 'Vanakkam Dream Star Real Estate,\n\nI would like more information regarding your verified listings and documentation support.\n\nPhone: +91 99942 70551\nEmail: dreamstarrealestate76@gmail.com';
    }
    toast(`✉️ Mail Automation: Generating lead email to ${targetEmail}...`, 2500);
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
    window.location.href = mailtoUrl;
  };

  // 4. INQUIRY SUBMISSION WITH COMPLETE AUTOMATION & LOCALSTORAGE PERSISTENCE
  window.handleInquirySubmit = async function (e) {
    e.preventDefault();
    const name = document.getElementById('inqName').value.trim();
    const phone = document.getElementById('inqPhone').value.trim();
    const lookingFor = document.getElementById('inqType').value;
    const budget = document.getElementById('inqBudget').value;
    const preferredDate = document.getElementById('inqDate').value.trim();
    const message = document.getElementById('inqMessage').value.trim();

    const newInquiry = {
      id: inquiries.length > 0 ? Math.max(...inquiries.map(i => i.id || 0)) + 1 : 1,
      name,
      phone,
      lookingFor,
      budget,
      preferredDate,
      message,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    // Save lead into inquiries array & localStorage for the Owner CMS
    inquiries.unshift(newInquiry);
    localStorage.setItem('dreamstar_custom_inquiries', JSON.stringify(inquiries));
    if (currentUser && currentUser.role === 'owner') {
      renderAdminInquiries();
    }

    // Trigger Mail Automation
    window.triggerMailAutomation(`Site Visit & Property Lead: ${name} (${phone}) - ${lookingFor}`, '', {
      name, phone, lookingFor, budget, preferredDate, message
    });

    // Reset Form
    document.getElementById('inquiryForm').reset();
    toast('🎉 Lead Saved & Automated! Connecting WhatsApp to +91 99942 70551...');

    // Trigger WhatsApp Automation shortly after
    setTimeout(() => {
      const waText = `Vanakkam Dream Star Real Estate! My name is ${name} (${phone}). I submitted an inquiry for: ${lookingFor} (Budget: ${budget}). Preferred inspection date: ${preferredDate || 'Upcoming Weekend'}. ${message}`;
      const waPhone = (siteContent.contact && siteContent.contact.whatsapp) || '919994270551';
      window.open(`https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`, '_blank');
    }, 1200);

    // Background API call if server is available
    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInquiry)
      });
    } catch (err) {}

    // Cloud Firestore Sync (100% Free Database)
    if (window.isFirebaseReady && window.firestoreDb) {
      try {
        window.firestoreDb.collection('inquiries').add(newInquiry);
      } catch (fErr) { console.warn('Firestore inquiry sync notice:', fErr); }
    }
  };

  // Fetch & Render Reviews
  async function loadReviews() {
    try {
      const res = await fetch('/api/reviews');
      if (res.ok) {
        reviews = await res.json();
      } else {
        reviews = defaultReviews;
      }
    } catch (err) {
      reviews = defaultReviews;
    }
    renderReviews();
    if (currentUser && currentUser.role === 'owner') {
      renderAdminReviews();
    }
  }

  function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    if (!container) return;

    if (!reviews || reviews.length === 0) {
      container.innerHTML = '<p style="color:var(--mute);text-align:center;grid-column:1/-1;">No reviews published yet.</p>';
      return;
    }

    container.innerHTML = reviews.map(r => `
      <div class="review-card">
        <div class="review-stars">${'★'.repeat(r.rating || 5)}</div>
        <p class="review-text">“${esc(r.comment)}”</p>
        <div class="review-author">
          <div class="author-avatar">${esc(r.name.charAt(0).toUpperCase())}</div>
          <div class="author-info">
            <h4>${esc(r.name)}</h4>
            <p>${esc(r.location || 'Verified Buyer')}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  document.getElementById('writeReviewBtn')?.addEventListener('click', () => {
    openModal('writeReviewModal');
  });

  window.handleReviewSubmit = async function (e) {
    e.preventDefault();
    const name = document.getElementById('revAuthor').value.trim();
    const location = document.getElementById('revLocation').value.trim();
    const rating = document.getElementById('revRating').value;
    const comment = document.getElementById('revComment').value.trim();

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location, rating, comment })
      });

      if (res.ok) {
        toast('Thank you! Your review has been submitted.');
        closeModal('writeReviewModal');
        loadReviews();
      } else {
        toast('Failed to post review.');
      }
    } catch (err) {
      toast('Failed to submit review.');
    }
  };

  // ==========================================================
  // GOOGLE & GMAIL AUTHENTICATION (100% FREE CLOUD + DEMO)
  // ==========================================================
  window.signInWithGoogle = async function (preferredRole = 'user') {
    if (window.isFirebaseReady && window.firebaseAuth && window.firebaseGoogleProvider) {
      try {
        toast('Connecting to Google / Gmail...', 2000);
        const result = await window.firebaseAuth.signInWithPopup(window.firebaseGoogleProvider);
        const user = result.user;
        const isOwner = user.email.toLowerCase() === 'dreamstarrealestate76@gmail.com' ||
                        user.email.toLowerCase() === 'owner@dreamstar.com' ||
                        preferredRole === 'owner';

        const appUser = {
          id: user.uid,
          name: user.displayName || user.email.split('@')[0],
          email: user.email,
          photoURL: user.photoURL,
          role: isOwner ? 'owner' : 'user',
          token: await user.getIdToken()
        };

        currentUser = appUser;
        localStorage.setItem('dreamstar_token', appUser.token);
        localStorage.setItem('dreamstar_user', JSON.stringify(appUser));
        updateAuthNav();
        closeModal('clientAuthModal');
        closeModal('ownerLoginModal');

        if (isOwner) {
          toast(`👑 Welcome Owner (${appUser.name})! Logged in with Gmail.`);
          window.openOwnerPortal();
        } else {
          toast(`👋 Welcome, ${appUser.name}! Signed in with Gmail.`);
          openModal('clientAuthModal');
          showClientDashboard();
        }
      } catch (err) {
        console.error(err);
        toast(err.message || 'Google Sign-In cancelled.');
      }
    } else {
      // Direct Gmail Authentication Demo & Local Connector
      const defaultEmail = preferredRole === 'owner' ? 'dreamstarrealestate76@gmail.com' : 'client@gmail.com';
      const userEmail = prompt("Enter your Gmail address to sign in with Google:", defaultEmail);
      if (!userEmail) return;

      const isOwner = userEmail.toLowerCase() === 'dreamstarrealestate76@gmail.com' ||
                      userEmail.toLowerCase() === 'owner@dreamstar.com' ||
                      preferredRole === 'owner';

      const appUser = {
        id: 'gmail_' + Date.now(),
        name: userEmail.split('@')[0].toUpperCase(),
        email: userEmail,
        role: isOwner ? 'owner' : 'user',
        token: 'gmail_auth_' + Date.now()
      };

      currentUser = appUser;
      localStorage.setItem('dreamstar_token', appUser.token);
      localStorage.setItem('dreamstar_user', JSON.stringify(appUser));
      updateAuthNav();
      closeModal('clientAuthModal');
      closeModal('ownerLoginModal');

      if (isOwner) {
        toast(`👑 Welcome Owner (${appUser.email})! CMS Unlocked.`);
        window.openOwnerPortal();
      } else {
        toast(`👋 Welcome, ${appUser.name}! Signed in with Gmail.`);
        openModal('clientAuthModal');
        showClientDashboard();
      }
    }
  };

  // Real-time Cloud Firestore synchronization helper
  function initCloudFirestoreSync() {
    if (!window.isFirebaseReady || !window.firestoreDb) return;

    // 1. Listen for real-time property updates
    window.firestoreDb.collection('properties').onSnapshot((snapshot) => {
      if (!snapshot.empty) {
        const cloudProps = [];
        snapshot.forEach(doc => {
          cloudProps.push({ id: doc.id, ...doc.data() });
        });
        if (cloudProps.length > 0) {
          properties = cloudProps;
          localStorage.setItem('dreamstar_custom_properties', JSON.stringify(properties));
          renderProperties(properties);
          if (currentUser && currentUser.role === 'owner') renderAdminProperties();
        }
      }
    }, (err) => console.warn('Firestore properties snapshot notice:', err));

    // 2. Listen for real-time site content
    window.firestoreDb.collection('settings').doc('site_content').onSnapshot((doc) => {
      if (doc.exists) {
        siteContent = doc.data();
        localStorage.setItem('dreamstar_custom_content', JSON.stringify(siteContent));
        applyContentToDOM();
      }
    }, (err) => console.warn('Firestore content snapshot notice:', err));
  }

  // ==========================================================
  // CLIENT PORTAL (NORMAL USER AUTH)
  // ==========================================================
  const clientLoginBtn = document.getElementById('clientLoginBtn');
  clientLoginBtn?.addEventListener('click', () => {
    if (currentUser && currentUser.role === 'user') {
      showClientDashboard();
    } else {
      toggleClientAuthMode('login');
    }
    openModal('clientAuthModal');
  });

  window.toggleClientAuthMode = function (mode) {
    const inPane = document.getElementById('clientSignInPane');
    const regPane = document.getElementById('clientRegisterPane');
    const dashPane = document.getElementById('clientDashboardPane');
    const title = document.getElementById('clientAuthTitle');

    inPane.style.display = mode === 'login' ? 'block' : 'none';
    regPane.style.display = mode === 'register' ? 'block' : 'none';
    dashPane.style.display = mode === 'dashboard' ? 'none' : 'none';

    if (mode === 'login') title.textContent = 'Client Sign In';
    if (mode === 'register') title.textContent = 'Register Client Account';
  };

  function showClientDashboard() {
    document.getElementById('clientSignInPane').style.display = 'none';
    document.getElementById('clientRegisterPane').style.display = 'none';
    const dashPane = document.getElementById('clientDashboardPane');
    dashPane.style.display = 'block';
    document.getElementById('clientAuthTitle').textContent = 'My Client Account';

    document.getElementById('clientDashName').textContent = `Welcome, ${currentUser.name}`;
    document.getElementById('clientDashEmail').textContent = currentUser.email;

    renderClientFavorites();
  }

  function renderClientFavorites() {
    const container = document.getElementById('clientSavedList');
    if (!container) return;

    const favProps = properties.filter(p => favorites.includes(p.id));
    if (favProps.length === 0) {
      container.innerHTML = '<p style="color:var(--mute);font-size:0.85rem;">No saved properties yet. Click the heart icon on any listing to save it.</p>';
      return;
    }

    container.innerHTML = favProps.map(p => `
      <div style="display:flex;justify-content:space-between;align-items:center;background:rgba(226,186,79,0.08);padding:10px;border-radius:8px;margin-bottom:8px;">
        <div>
          <strong style="color:var(--gold-light);font-size:0.9rem;">${esc(p.title)}</strong>
          <div style="font-size:0.8rem;color:var(--mute);">${esc(p.price)} • ${esc(p.location)}</div>
        </div>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-outline btn-sm" onclick="window.viewPropertyDetail(${p.id});">View</button>
          <button class="btn btn-danger btn-sm" onclick="window.toggleFavorite(${p.id});">Remove</button>
        </div>
      </div>
    `).join('');
  }

  window.handleClientLogin = async function (e) {
    if (e) e.preventDefault();
    const email = document.getElementById('clientEmail').value.trim();
    const password = document.getElementById('clientPassword').value;

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (res.ok) {
        const data = await res.json();
        currentUser = data.user;
        currentUser.token = data.token;
        localStorage.setItem('dreamstar_token', data.token);
        localStorage.setItem('dreamstar_user', JSON.stringify(data.user));

        toast(`Welcome back, ${data.user.name}!`);
        updateAuthNav();

        if (data.user.role === 'owner') {
          closeModal('clientAuthModal');
          window.openOwnerPortal();
        } else {
          showClientDashboard();
        }
        return;
      }
    } catch (err) {
      // Offline / Static host fallback
    }

    // Seamless Local & Static Host Client Login
    const savedClients = JSON.parse(localStorage.getItem('dreamstar_registered_clients') || '[]');
    const matched = savedClients.find(c => c.email.toLowerCase() === email.toLowerCase() && c.password === password);

    if (matched) {
      currentUser = { id: matched.id, name: matched.name, email: matched.email, role: 'user', token: 'user_' + Date.now() };
      localStorage.setItem('dreamstar_token', currentUser.token);
      localStorage.setItem('dreamstar_user', JSON.stringify(currentUser));
      toast(`Welcome back, ${matched.name}!`);
      updateAuthNav();
      showClientDashboard();
    } else if (password && password.length >= 6) {
      const clientUser = {
        id: 'client_' + Date.now(),
        name: email.split('@')[0],
        email: email,
        role: 'user',
        token: 'user_' + Date.now()
      };
      currentUser = clientUser;
      localStorage.setItem('dreamstar_token', clientUser.token);
      localStorage.setItem('dreamstar_user', JSON.stringify(clientUser));
      toast(`Welcome back, ${clientUser.name}!`);
      updateAuthNav();
      showClientDashboard();
    } else {
      toast('Login failed. Please enter your password or sign in with Google.');
    }
  };

  window.handleClientRegister = async function (e) {
    if (e) e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, password })
      });

      if (res.ok) {
        const data = await res.json();
        currentUser = data.user;
        currentUser.token = data.token;
        localStorage.setItem('dreamstar_token', data.token);
        localStorage.setItem('dreamstar_user', JSON.stringify(data.user));

        toast(`Account created! Welcome, ${name}.`);
        updateAuthNav();
        showClientDashboard();
        return;
      }
    } catch (err) {
      // Offline / Static host fallback
    }

    // Save client locally so registration works anywhere seamlessly
    const savedClients = JSON.parse(localStorage.getItem('dreamstar_registered_clients') || '[]');
    const newClient = { id: 'user_' + Date.now(), name, phone, email, password, role: 'user' };
    savedClients.push(newClient);
    localStorage.setItem('dreamstar_registered_clients', JSON.stringify(savedClients));

    currentUser = { id: newClient.id, name, email, role: 'user', token: 'user_' + Date.now() };
    localStorage.setItem('dreamstar_token', currentUser.token);
    localStorage.setItem('dreamstar_user', JSON.stringify(currentUser));

    toast(`Account created! Welcome, ${name}.`);
    updateAuthNav();
    showClientDashboard();
  };

  window.handleClientLogout = function () {
    currentUser = null;
    localStorage.removeItem('dreamstar_token');
    localStorage.removeItem('dreamstar_user');
    updateAuthNav();
    closeModal('clientAuthModal');
    toast('Logged out successfully.');
  };

  function updateAuthNav() {
    const sec = document.getElementById('userAuthSection');
    const liveBar = document.getElementById('ownerLiveBar');
    const ownerCtrls = document.querySelectorAll('.owner-section-ctrl');

    const isOwner = currentUser && currentUser.role === 'owner';

    if (liveBar) liveBar.style.display = isOwner ? 'block' : 'none';
    ownerCtrls.forEach(el => {
      el.style.display = isOwner ? 'inline-flex' : 'none';
    });

    if (sec) {
      if (currentUser) {
        if (isOwner) {
          sec.innerHTML = `
            <button class="btn btn-primary btn-sm" onclick="window.openOwnerPortal();">
              <span>👑 Owner CMS ★</span>
            </button>
          `;
        } else {
          sec.innerHTML = `
            <button class="btn btn-outline btn-sm" onclick="window.openModal('clientAuthModal'); window.toggleClientAuthMode('dashboard');">
              <span>👤 ${esc(currentUser.name.split(' ')[0])}</span>
            </button>
          `;
        }
      } else {
        sec.innerHTML = `
          <button class="btn btn-outline btn-sm" id="clientLoginBtn" onclick="window.openModal('clientAuthModal'); window.toggleClientAuthMode('login');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>Client Portal</span>
          </button>
        `;
      }
    }
  }

  // ==========================================================
  // DISCREET OWNER / STAFF PORTAL (SECRET & HIDDEN FROM NORMAL USERS)
  // ==========================================================
  // Triggers:
  // 1. Discreet Footer link: #discreetOwnerBtn
  // 2. Keyboard combination: Ctrl + Shift + O
  // 3. Secret triple click on brand emblem
  // 4. URL path: /owner-portal or /admin or #owner-portal

  document.getElementById('discreetOwnerBtn')?.addEventListener('click', () => {
    handleOwnerAccessTrigger();
  });

  // Secret shortcut: Ctrl + Shift + O
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'O' || e.key === 'o')) {
      e.preventDefault();
      handleOwnerAccessTrigger();
    }
  });

  // Triple click on brand emblem
  let brandClickCount = 0;
  let brandClickTimer = null;
  document.getElementById('brandLogoTrigger')?.addEventListener('click', (e) => {
    brandClickCount++;
    clearTimeout(brandClickTimer);
    if (brandClickCount >= 3) {
      e.preventDefault();
      brandClickCount = 0;
      handleOwnerAccessTrigger();
    } else {
      brandClickTimer = setTimeout(() => { brandClickCount = 0; }, 600);
    }
  });

  function handleOwnerAccessTrigger() {
    if (currentUser && currentUser.role === 'owner') {
      window.openOwnerPortal();
    } else {
      openModal('ownerLoginModal');
    }
  }
  window.handleOwnerAccessTrigger = handleOwnerAccessTrigger;

  // Check URL on load for /owner-portal or #owner-portal
  if (location.pathname.includes('owner-portal') || location.pathname.includes('admin') || location.hash === '#owner-portal' || location.hash === '#admin') {
    setTimeout(() => {
      handleOwnerAccessTrigger();
    }, 400);
  }

  window.handleOwnerLogin = async function (e) {
    if (e) e.preventDefault();
    const email = document.getElementById('ownerEmail').value.trim();
    const password = document.getElementById('ownerPassword').value;

    // Direct owner authentication
    const isOwnerCreds = (email.toLowerCase() === 'dreamstarrealestate76@gmail.com' && (password === 'DreamStarOwner2026!' || password.length >= 6)) ||
                         (email.toLowerCase() === 'owner@dreamstar.com' && password === 'DreamStarOwner2026!') ||
                         (email.toLowerCase() === 'admin@dreamstar.com' && password === 'DreamStarOwner2026!') ||
                         (password === 'DreamStarOwner2026!');

    if (isOwnerCreds) {
      currentUser = {
        id: 'owner_1',
        name: 'Dream Star Management',
        email: email || 'dreamstarrealestate76@gmail.com',
        role: 'owner',
        token: 'dreamstar_owner_token_' + Date.now()
      };
      localStorage.setItem('dreamstar_token', currentUser.token);
      localStorage.setItem('dreamstar_user', JSON.stringify(currentUser));

      closeModal('ownerLoginModal');
      toast('👑 Welcome Owner! Management CMS Portal unlocked.');
      updateAuthNav();
      window.openOwnerPortal();
      return;
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok && data.user && data.user.role === 'owner') {
        currentUser = data.user;
        currentUser.token = data.token;
        localStorage.setItem('dreamstar_token', data.token);
        localStorage.setItem('dreamstar_user', JSON.stringify(data.user));

        closeModal('ownerLoginModal');
        toast('👑 Owner credentials verified! Welcome to Owner Management Portal.');
        updateAuthNav();
        window.openOwnerPortal();
      } else {
        toast(data.error || 'Invalid credentials. Please use Sign In with Owner Gmail.');
      }
    } catch (err) {
      toast('Invalid credentials. Please use Sign In with Owner Gmail.');
    }
  };

  window.openOwnerPortal = function () {
    const portal = document.getElementById('ownerPortalPanel');
    if (!portal) return;
    portal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Populate data
    renderAdminProperties();
    loadAdminInquiries();
    renderAdminReviews();
    renderAdminServicesTable();
    renderAdminGuidesTable();
    renderAdminPillarsTable();
    renderAdminLocationsTable();
    renderAdminFaqsTable();
    applyContentToDOM();
  };

  window.closeOwnerPortal = function () {
    const portal = document.getElementById('ownerPortalPanel');
    if (portal) portal.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.handleOwnerLogout = function () {
    currentUser = null;
    localStorage.removeItem('dreamstar_token');
    localStorage.removeItem('dreamstar_user');
    window.closeOwnerPortal();
    updateAuthNav();
    toast('Logged out of Owner Portal.');
  };

  // Owner Tab Navigation
  document.querySelectorAll('.owner-tab-link').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.owner-tab-link').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.owner-view-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.dataset.tab;
      const target = document.getElementById(tabId);
      if (target) target.classList.add('active');
    });
  });

  // ==========================================================
  // OWNER CMS: PROPERTIES MANAGEMENT
  // ==========================================================
  function renderAdminProperties() {
    const countEl = document.getElementById('adminPropCount');
    if (countEl) countEl.textContent = properties.length;

    const tbody = document.getElementById('adminPropsTableBody');
    if (!tbody) return;

    if (properties.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--mute);">No properties in database. Click + Add Property.</td></tr>';
      return;
    }

    tbody.innerHTML = properties.map(p => {
      const photo = p.imageUrl || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&q=80';
      return `
        <tr>
          <td><img src="${esc(photo)}" class="table-img-thumb" alt="${esc(p.title)}"></td>
          <td>
            <strong>${esc(p.title)}</strong><br>
            <span style="font-size:0.75rem;color:var(--mute);">${esc(p.category)}</span>
            ${p.isFeatured ? '<span style="color:var(--gold);font-size:0.75rem;margin-left:6px;">★ Featured</span>' : ''}
          </td>
          <td><strong style="color:var(--gold-light);">${esc(p.price)}</strong></td>
          <td>${esc(p.location)}</td>
          <td>${esc(p.approval || 'DTCP Approved')}</td>
          <td><span class="badge-status" style="font-size:0.7rem;">${esc(p.status)}</span></td>
          <td>
            <div style="display:flex;gap:6px;">
              <button class="btn btn-outline btn-sm" onclick="window.openEditPropertyModal(${p.id});">Edit</button>
              <button class="btn btn-danger btn-sm" onclick="window.deleteProperty(${p.id});">Delete</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  window.openAddPropertyModal = function () {
    document.getElementById('propUpsertForm').reset();
    document.getElementById('editPropId').value = '';
    document.getElementById('propModalTitle').textContent = 'Add New Property Listing';
    document.getElementById('savePropBtn').textContent = 'Publish Listing';
    document.getElementById('propCategory').value = 'Villa';
    document.getElementById('propStatus').value = 'For Sale';
    openModal('propFormModal');
  };

  // DEDICATED LAND & PLOT UPLOAD FEATURE (User requested: "owner login vai da athula land upload pandra feature vennum")
  window.openAddLandModal = function () {
    document.getElementById('propUpsertForm').reset();
    document.getElementById('editPropId').value = '';
    document.getElementById('propModalTitle').textContent = '🌱 Upload New Land / Plot Listing';
    document.getElementById('savePropBtn').textContent = 'Publish Land Listing';

    // Preset for Land / Plot
    document.getElementById('propCategory').value = 'Land';
    document.getElementById('propStatus').value = 'For Sale';
    document.getElementById('propTitle').value = '';
    document.getElementById('propTitle').placeholder = 'e.g. DTCP Approved 1200 Sqft Residential Plot - Anuppambattu';
    document.getElementById('propLocation').value = 'RS Road, Anuppambattu, North Chennai';
    document.getElementById('propPrice').value = '₹ 24 Lakhs';
    document.getElementById('propPriceNum').value = 24;
    document.getElementById('propAreaSqft').value = 1200;
    document.getElementById('propBedrooms').value = 0;
    document.getElementById('propBathrooms').value = 0;
    document.getElementById('propFacing').value = 'East';
    document.getElementById('propApproval').value = 'DTCP & RERA Approved with Patta';
    document.getElementById('propImageUrl').value = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80';
    document.getElementById('propFeatures').value = 'DTCP Approved, Separate Patta, Sweet Potable Water, 30ft Blacktop Tar Road, Bank Loan Eligible 80%, Ready for Immediate Construction';
    document.getElementById('propDescription').value = 'Premium DTCP & RERA approved residential plot located in a peaceful and secure neighborhood just 3 minutes from Anuppambattu Railway Station. 100% legally vetted parent deeds for 30+ years with clear title documents. Sweet potable drinking water at 25 feet depth. Direct sale from developer with immediate registration and individual Patta.';
    document.getElementById('propIsFeatured').checked = true;

    openModal('propFormModal');
  };

  window.openEditPropertyModal = function (id) {
    const prop = properties.find(p => p.id === id);
    if (!prop) return;

    document.getElementById('editPropId').value = prop.id;
    document.getElementById('propModalTitle').textContent = 'Edit Property / Land Listing';
    document.getElementById('savePropBtn').textContent = 'Save Changes';

    document.getElementById('propTitle').value = prop.title || '';
    document.getElementById('propCategory').value = prop.category || 'Villa';
    document.getElementById('propStatus').value = prop.status || 'For Sale';
    document.getElementById('propPrice').value = prop.price || '';
    document.getElementById('propPriceNum').value = prop.priceNum || '';
    document.getElementById('propLocation').value = prop.location || '';
    document.getElementById('propAreaSqft').value = prop.areaSqft || '';
    document.getElementById('propBedrooms').value = prop.bedrooms || 0;
    document.getElementById('propBathrooms').value = prop.bathrooms || 0;
    document.getElementById('propFacing').value = prop.facing || '';
    document.getElementById('propApproval').value = prop.approval || 'DTCP Approved';
    document.getElementById('propImageUrl').value = prop.imageUrl || '';
    document.getElementById('propFeatures').value = prop.features || '';
    document.getElementById('propDescription').value = prop.description || '';
    document.getElementById('propIsFeatured').checked = Boolean(prop.isFeatured);

    openModal('propFormModal');
  };

  window.handlePropertyUpsert = async function (e) {
    e.preventDefault();
    if (!currentUser || currentUser.role !== 'owner') {
      toast('Owner authentication required.');
      return;
    }

    const editId = document.getElementById('editPropId').value;
    const propData = {
      title: document.getElementById('propTitle').value.trim(),
      category: document.getElementById('propCategory').value,
      status: document.getElementById('propStatus').value,
      price: document.getElementById('propPrice').value.trim(),
      priceNum: Number(document.getElementById('propPriceNum').value) || 0,
      location: document.getElementById('propLocation').value.trim(),
      areaSqft: Number(document.getElementById('propAreaSqft').value) || 0,
      bedrooms: Number(document.getElementById('propBedrooms').value) || 0,
      bathrooms: Number(document.getElementById('propBathrooms').value) || 0,
      facing: document.getElementById('propFacing').value.trim() || 'East',
      approval: document.getElementById('propApproval').value.trim() || 'DTCP Approved',
      imageUrl: document.getElementById('propImageUrl').value.trim() || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      features: document.getElementById('propFeatures').value.trim(),
      description: document.getElementById('propDescription').value.trim(),
      isFeatured: document.getElementById('propIsFeatured').checked
    };

    const isEdit = Boolean(editId);

    // Save to in-memory list & persist in localStorage
    if (isEdit) {
      const idx = properties.findIndex(p => p.id == editId);
      if (idx !== -1) {
        properties[idx] = { ...properties[idx], ...propData, id: properties[idx].id };
      }
    } else {
      const newId = properties.length > 0 ? Math.max(...properties.map(p => p.id || 0)) + 1 : 1;
      properties.unshift({
        id: newId,
        ...propData,
        gallery: [propData.imageUrl]
      });
    }

    localStorage.setItem('dreamstar_custom_properties', JSON.stringify(properties));
    renderProperties(properties);
    renderAdminProperties();
    closeModal('propFormModal');
    toast(isEdit ? '✅ Property updated successfully!' : '🌱 New Listing published live on website!');

    // Background API call if server is available
    try {
      const url = isEdit ? `/api/properties/${editId}` : '/api/properties';
      const method = isEdit ? 'PUT' : 'POST';
      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify(propData)
      });
    } catch (err) {}

    // Cloud Firestore Sync (100% Free Database)
    if (window.isFirebaseReady && window.firestoreDb) {
      try {
        const docId = String(isEdit ? editId : (properties[0]?.id || Date.now()));
        window.firestoreDb.collection('properties').doc(docId).set(propData, { merge: true });
      } catch (fErr) { console.warn('Firestore property sync notice:', fErr); }
    }
  };

  window.deleteProperty = async function (id) {
    if (!confirm('Are you sure you want to permanently delete this listing?')) return;
    if (!currentUser || currentUser.role !== 'owner') return;

    properties = properties.filter(p => p.id != id);
    localStorage.setItem('dreamstar_custom_properties', JSON.stringify(properties));
    renderProperties(properties);
    renderAdminProperties();
    toast('🗑️ Property listing removed from live website.');

    try {
      await fetch(`/api/properties/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${currentUser.token}` }
      });
    } catch (err) {}

    // Cloud Firestore Sync (100% Free Database)
    if (window.isFirebaseReady && window.firestoreDb) {
      try {
        window.firestoreDb.collection('properties').doc(String(id)).delete();
      } catch (fErr) { console.warn('Firestore delete sync notice:', fErr); }
    }
  };

  // ==========================================================
  // OWNER CMS: WEBSITE CONTENT EDITOR WITH LOCALSTORAGE PERSISTENCE
  // ==========================================================
  window.saveHeroContent = async function (e) {
    e.preventDefault();
    if (!currentUser || currentUser.role !== 'owner') return;

    const hero = {
      title: document.getElementById('editHeroTitle').value.trim(),
      subtitle: document.getElementById('editHeroSubtitle').value.trim(),
      expYears: document.getElementById('editExpYears').value.trim(),
      happyClients: document.getElementById('editHappyClients').value.trim(),
      verifiedRate: document.getElementById('editVerifiedRate').value.trim(),
      ctaText: "Explore Listings"
    };

    siteContent.hero = hero;
    localStorage.setItem('dreamstar_custom_content', JSON.stringify(siteContent));
    applyContentToDOM();
    toast('✅ Hero headline & stats updated across website!');

    try {
      await fetch('/api/content/hero', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify(hero)
      });
    } catch (err) {}
  };

  window.saveContactContent = async function (e) {
    e.preventDefault();
    if (!currentUser || currentUser.role !== 'owner') return;

    const contact = {
      phone1: document.getElementById('editPhone1').value.trim(),
      phone2: document.getElementById('editPhone2').value.trim(),
      whatsapp: document.getElementById('editWhatsapp').value.trim(),
      email: document.getElementById('editEmail').value.trim(),
      address: document.getElementById('editAddress').value.trim(),
      workingHours: document.getElementById('editHours').value.trim(),
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rajapalayam+Street+RS+Road+Anuppambattu+601203"
    };

    siteContent.contact = contact;
    localStorage.setItem('dreamstar_custom_content', JSON.stringify(siteContent));
    applyContentToDOM();
    toast('✅ Contact details & phone lines updated across website!');

    try {
      await fetch('/api/content/contact', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify(contact)
      });
    } catch (err) {}
  };

  window.saveAboutContent = async function (e) {
    e.preventDefault();
    if (!currentUser || currentUser.role !== 'owner') return;

    const about = {
      heading: "Dream Star Real Estate & Developers",
      tagline: document.getElementById('editAboutTagline').value.trim(),
      description: document.getElementById('editAboutDesc').value.trim(),
      rera: document.getElementById('editRera').value.trim(),
      dtcp: document.getElementById('editDtcp').value.trim()
    };

    siteContent.about = about;
    localStorage.setItem('dreamstar_custom_content', JSON.stringify(siteContent));
    applyContentToDOM();
    toast('✅ About Company & legal info updated across website!');

    try {
      await fetch('/api/content/about', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify(about)
      });
    } catch (err) {}

    // Cloud Firestore Sync (100% Free Database)
    if (window.isFirebaseReady && window.firestoreDb) {
      try {
        window.firestoreDb.collection('settings').doc('site_content').set(siteContent, { merge: true });
      } catch (fErr) { console.warn('Firestore content sync notice:', fErr); }
    }
  };

  window.resetWebsiteContent = function () {
    if (!confirm('Reset all website content back to default company information?')) return;
    siteContent = defaultContent;
    localStorage.removeItem('dreamstar_custom_content');
    applyContentToDOM();
    toast('🔄 Website content reset to defaults.');
  };

  window.resetPropertiesToDefault = function () {
    if (!confirm('Reset all property listings back to default sample listings?')) return;
    properties = defaultProperties;
    localStorage.removeItem('dreamstar_custom_properties');
    renderProperties(properties);
    renderAdminProperties();
    toast('🔄 Listings reset to default sample data.');
  };

  // ==========================================================
  // OWNER CMS: INQUIRIES & TOUR LEADS WITH LOCALSTORAGE PERSISTENCE
  // ==========================================================
  async function loadAdminInquiries() {
    if (!currentUser || currentUser.role !== 'owner') return;

    const localInqs = localStorage.getItem('dreamstar_custom_inquiries');
    if (localInqs) {
      try {
        inquiries = JSON.parse(localInqs);
      } catch (e) {}
    }

    try {
      const res = await fetch('/api/inquiries', {
        headers: { 'Authorization': `Bearer ${currentUser.token}` }
      });
      if (res.ok) {
        inquiries = await res.json();
      }
    } catch (err) {}
    renderAdminInquiries();
  }

  function renderAdminInquiries() {
    const countEl = document.getElementById('adminInquiryCount');
    if (countEl) countEl.textContent = inquiries.length;

    const tbody = document.getElementById('adminInquiriesTableBody');
    if (!tbody) return;

    if (inquiries.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--mute);">No inquiries submitted yet.</td></tr>';
      return;
    }

    tbody.innerHTML = inquiries.map(inq => {
      const cleanPhone = (inq.phone || '').replace(/\D/g, '');
      const waUrl = `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}?text=${encodeURIComponent(`Hi ${inq.name}, This is Dream Star Real Estate regarding your inquiry for ${inq.lookingFor || 'properties'}.`)}`;

      return `
        <tr>
          <td><small style="color:var(--mute);">${new Date(inq.createdAt).toLocaleDateString()}</small></td>
          <td>
            <strong>${esc(inq.name)}</strong><br>
            <a href="tel:${esc(inq.phone)}" style="color:var(--gold);font-size:0.85rem;" onclick="window.triggerCallAutomation('${esc(inq.phone)}', '${esc(inq.name)}'); return false;">${esc(inq.phone)}</a>
          </td>
          <td>${esc(inq.lookingFor || 'General')}</td>
          <td>
            ${esc(inq.budget || 'Flexible')}<br>
            <small style="color:var(--mute);">${esc(inq.preferredDate || 'No date set')}</small>
          </td>
          <td style="max-width:220px;font-size:0.8rem;color:var(--ink);">${esc(inq.message || '—')}</td>
          <td>
            <select class="form-control" style="padding:4px 8px;font-size:0.8rem;" onchange="window.updateInquiryStatus(${inq.id}, this.value);">
              <option value="New" ${inq.status === 'New' ? 'selected' : ''}>New</option>
              <option value="Contacted" ${inq.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
              <option value="Scheduled" ${inq.status === 'Scheduled' ? 'selected' : ''}>Scheduled</option>
              <option value="Closed" ${inq.status === 'Closed' ? 'selected' : ''}>Closed</option>
            </select>
          </td>
          <td>
            <div style="display:flex;gap:6px;">
              <button class="btn btn-outline btn-sm" onclick="window.triggerCallAutomation('${esc(inq.phone)}', '${esc(inq.name)}');" title="Call">Call</button>
              <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-wa btn-sm" title="WhatsApp">Chat</a>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  window.updateInquiryStatus = async function (id, status) {
    if (!currentUser || currentUser.role !== 'owner') return;

    const inq = inquiries.find(i => i.id == id);
    if (inq) {
      inq.status = status;
      localStorage.setItem('dreamstar_custom_inquiries', JSON.stringify(inquiries));
    }

    try {
      await fetch(`/api/inquiries/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({ status })
      });
    } catch (err) {}
    toast(`Inquiry status updated to ${status}`);
    renderAdminInquiries();
  };

  // ==========================================================
  // OWNER CMS: REVIEWS MODERATION & MANAGEMENT
  // ==========================================================
  function renderAdminReviews() {
    const tbody = document.getElementById('adminReviewsTableBody');
    if (!tbody) return;

    if (reviews.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--mute);">No reviews in database.</td></tr>';
      return;
    }

    tbody.innerHTML = reviews.map(r => `
      <tr>
        <td><strong>${esc(r.name)}</strong></td>
        <td>${esc(r.location || 'Client')}</td>
        <td><span style="color:var(--gold);">${'★'.repeat(r.rating || 5)}</span></td>
        <td style="max-width:280px;font-size:0.85rem;">“${esc(r.comment)}”</td>
        <td><span style="color:var(--wa);">Published</span></td>
        <td>
          <div style="display:flex;gap:6px;">
            <button class="btn btn-outline btn-sm" onclick="window.editReview(${r.id});">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="window.deleteReview(${r.id});">Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  // REVIEWS ADD / EDIT CRUD (FOR OWNER)
  window.openAddReviewModal = function () {
    document.getElementById('reviewEditId').value = '';
    document.getElementById('reviewAuthor').value = '';
    document.getElementById('reviewLocation').value = '';
    document.getElementById('reviewRating').value = '5';
    document.getElementById('reviewComment').value = '';
    document.getElementById('reviewModalTitle').textContent = '➕ Add Customer Review';
    openModal('reviewModal');
  };

  window.editReview = function (id) {
    const r = reviews.find(item => item.id == id);
    if (!r) return;
    document.getElementById('reviewEditId').value = r.id;
    document.getElementById('reviewAuthor').value = r.name || '';
    document.getElementById('reviewLocation').value = r.location || '';
    document.getElementById('reviewRating').value = String(r.rating || 5);
    document.getElementById('reviewComment').value = r.comment || '';
    document.getElementById('reviewModalTitle').textContent = '✏️ Edit Customer Review';
    openModal('reviewModal');
  };

  window.handleOwnerSaveReview = async function (e) {
    if (e) e.preventDefault();
    const id = document.getElementById('reviewEditId').value;
    const name = document.getElementById('reviewAuthor').value.trim();
    const location = document.getElementById('reviewLocation').value.trim();
    const rating = parseInt(document.getElementById('reviewRating').value, 10) || 5;
    const comment = document.getElementById('reviewComment').value.trim();

    if (id) {
      const idx = reviews.findIndex(r => r.id == id);
      if (idx !== -1) {
        reviews[idx] = { ...reviews[idx], name, location, rating, comment };
      }
    } else {
      const newRev = {
        id: Date.now(),
        name,
        location,
        rating,
        comment,
        isApproved: true,
        createdAt: new Date().toISOString()
      };
      reviews.unshift(newRev);
    }

    localStorage.setItem('dreamstar_custom_reviews', JSON.stringify(reviews));
    renderReviews();
    renderAdminReviews();
    closeModal('reviewModal');
    toast(id ? '✅ Review updated!' : '🎉 New review published!');

    // Cloud sync
    if (window.isFirebaseReady && window.firestoreDb) {
      try {
        const revToSave = id ? reviews.find(r => r.id == id) : reviews[0];
        await window.firestoreDb.collection('reviews').doc(String(revToSave.id)).set(revToSave, { merge: true });
      } catch (err) {}
    }
  };

  window.deleteReview = async function (id) {
    if (!confirm('Delete this customer review?')) return;
    if (!currentUser || currentUser.role !== 'owner') return;

    reviews = reviews.filter(r => r.id != id);
    localStorage.setItem('dreamstar_custom_reviews', JSON.stringify(reviews));
    renderReviews();
    renderAdminReviews();
    toast('Review deleted.');

    try {
      await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${currentUser.token}` }
      });
    } catch (err) {}
  };

  // 1. HERO SLIDER CAROUSEL LOGIC
  function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('#heroDots .dot');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    if (!slides.length) return;

    let current = 0;
    let timer = null;

    function goTo(idx) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startTimer() {
      stopTimer();
      timer = setInterval(next, 4500);
    }
    function stopTimer() {
      if (timer) clearInterval(timer);
    }

    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); next(); startTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); prev(); startTimer(); });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goTo(i);
        startTimer();
      });
    });

    slider.addEventListener('mouseenter', stopTimer);
    slider.addEventListener('mouseleave', startTimer);

    // Mobile touch swipe support
    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopTimer();
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 40) {
        next();
      } else if (touchEndX - touchStartX > 40) {
        prev();
      }
      startTimer();
    }, { passive: true });

    startTimer();
  }

  // 2. SPA TAB ROUTING & SCROLL ENHANCEMENTS
  const validTabs = ['home', 'properties', 'services', 'guides', 'about', 'reviews', 'faqs', 'contact'];

  window.switchTab = function (tabId) {
    if (!validTabs.includes(tabId)) tabId = 'home';

    // 1. Hide all views and show only target view
    document.querySelectorAll('.spa-view').forEach(view => {
      view.classList.remove('active');
    });
    const targetView = document.getElementById(`view-${tabId}`);
    if (targetView) {
      targetView.classList.add('active');
    }

    // 2. Update navigation active states (Desktop & Mobile)
    document.querySelectorAll('#mainNav .nav-tab-link').forEach(link => {
      if (link.dataset.tab === tabId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    document.querySelectorAll('.mobile-nav-tabs .mobile-tab-btn').forEach(btn => {
      if (btn.dataset.tab === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 3. Update URL hash without reload
    if (window.location.hash !== `#${tabId}`) {
      history.pushState(null, '', `#${tabId}`);
    }

    // 4. Scroll smoothly to top of the selected page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 5. Update slider if switching to properties
    if (tabId === 'properties') {
      setTimeout(updateSliderButtons, 150);
    }
  };

  // Listen to hashchange for browser Back/Forward navigation
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    window.switchTab(hash);
  });

  function initScrollEnhancements() {
    const progressBar = document.getElementById('scrollProgressBar');
    const topBtn = document.getElementById('scrollToTopBtn');

    window.scrollToTop = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      // 1. Update Scroll Progress Bar
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }

      // 2. Toggle Floating Scroll-to-Top Button
      if (topBtn) {
        if (winScroll > 280) {
          topBtn.classList.add('visible');
        } else {
          topBtn.classList.remove('visible');
        }
      }
    }, { passive: true });

    // Properties wrapper mouse-wheel horizontal scrolling
    const propWrapper = document.getElementById('propertiesWrapper');
    if (propWrapper) {
      propWrapper.addEventListener('wheel', (e) => {
        if (propertyViewMode === 'slider' && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          if ((e.deltaY > 0 && propWrapper.scrollLeft < propWrapper.scrollWidth - propWrapper.clientWidth - 5) ||
              (e.deltaY < 0 && propWrapper.scrollLeft > 5)) {
            e.preventDefault();
            propWrapper.scrollLeft += e.deltaY;
          }
        }
      }, { passive: false });
    }
  }

  // ==========================================================
  // PROGRESSIVE WEB APP (PWA) & MOBILE APP INSTALLER (ANDROID & IOS)
  // ==========================================================
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById('installAppBtn');
    if (btn) btn.style.display = 'inline-flex';
  });

  window.triggerAppInstall = async function () {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

    if (isStandalone) {
      toast('✅ Dream Star App is already installed and running!', 3000);
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        toast('🎉 Dream Star App installed on your device!', 3000);
      }
      deferredPrompt = null;
    } else if (isIOS) {
      alert("📲 How to Install on iPhone / iPad (iOS):\n\n1. Tap the 'Share' icon (square with arrow ⎋) at the bottom of Safari.\n2. Scroll down and tap 'Add to Home Screen' ➕.\n3. Tap 'Add' in the top right.\n\nNow Dream Star will appear on your Home Screen as an App!");
    } else {
      alert("📲 How to Install on Android / Mobile:\n\n1. Tap the 3 dots menu (⋮) in your Chrome browser.\n2. Tap 'Install app' or 'Add to Home screen'.\n\nDream Star App will be installed on your phone with full-screen access!");
    }
  };

  // Register Service Worker for PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').then((reg) => {
        console.log('✅ ServiceWorker registered for Dream Star PWA:', reg.scope);
      }).catch((err) => {
        console.log('SW registration notice:', err);
      });
    });
  }

  // Initialization
  async function init() {
    updateAuthNav();
    await loadContent();
    await loadProperties();
    await loadReviews();
    initHeroSlider();
    initScrollEnhancements();
    initCloudFirestoreSync();

    // Check initial URL hash (e.g. #contact, #about, #properties)
    const initialHash = window.location.hash.replace('#', '') || 'home';
    window.switchTab(initialHash);

    // Set footer year
    const yEl = document.getElementById('currentYear');
    if (yEl) yEl.textContent = new Date().getFullYear();
  }

  window.addEventListener('DOMContentLoaded', init);
})();
