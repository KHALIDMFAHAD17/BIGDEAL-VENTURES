let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'next');
    if (i === index) {
      slide.classList.add('active');
    } else if (i === (index + 1) % slides.length) {
      slide.classList.add('next');
    }
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Next slide click handler
slides.forEach((slide, i) => {
  slide.onclick = () => {
    if (slide.classList.contains('next')) {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  };
});

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function autoScrollCarousel(interval = 4000) {
  setInterval(() => {
    nextSlide();
  }, interval);
}

// Add click handlers to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

// Initialize the carousel
showSlide(currentSlide);

// Start auto-scrolling the carousel
autoScrollCarousel();

// Testimonial Carousel
let currentTestimonial = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialPrev = document.getElementById('testimonial-prev');
const testimonialNext = document.getElementById('testimonial-next');

function showTestimonial(index) {
  testimonialSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
  showTestimonial(currentTestimonial);
}

if (testimonialPrev && testimonialNext) {
  testimonialPrev.addEventListener('click', prevTestimonial);
  testimonialNext.addEventListener('click', nextTestimonial);
}

// FAQ Toggle Functionality
const faqItems = document.querySelectorAll('.FaqQ-item');

faqItems.forEach(item => {
  const title = item.querySelector('.FaqQ-title');
  const arrow = title.querySelector('.farrow');

  title.addEventListener('click', () => {
    // Close all other items
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        const arr = i.querySelector('.farrow');
        arr.classList.remove('up');
        arr.classList.add('down');
      }
    });

    // Toggle current item
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      arrow.classList.remove('up');
      arrow.classList.add('down');
    } else {
      item.classList.add('active');
      arrow.classList.remove('down');
      arrow.classList.add('up');
    }
  });
});

// search box 
var search=document.getElementById('search');

search.addEventListener('focus',(event)=>{

  document.getElementById('search-wrapper').style.border="1px solid #1dbf73";

});

search.addEventListener('focusout',(event)=>{

  document.getElementById('search-wrapper').style.border="1px solid rgba(0, 0, 0, 0.276)";

});


// Added filter dropdown toggle logic and height matching logic

// Filter dropdown toggle logic
function setupFilterDropdowns() {
  const filterTitles = document.querySelectorAll('.filter-title');
  filterTitles.forEach(title => {
    title.addEventListener('click', () => {
      const toggleKey = title.getAttribute('data-toggle');
      const content = document.getElementById(toggleKey + 'Content');
      const isActive = content.classList.contains('active');
      // Toggle only the clicked filter content and expanded class without closing others
      if (isActive) {
        content.classList.remove('active');
        title.classList.remove('expanded');
      } else {
        content.classList.add('active');
        title.classList.add('expanded');
      }
    });
  });
}

// Height matching logic for filter container and adjacent column
function matchFilterHeight() {
  const filterContainer = document.querySelector('.filter-container');
  const adjacentColumn = document.querySelector('.col-md-9.aproperty');
  if (filterContainer && adjacentColumn) {
    const height = adjacentColumn.offsetHeight;
    filterContainer.style.height = height + 'px';
  }
}


// Update height on window resize
window.addEventListener('resize', () => {
  matchFilterHeight();
});

// Sidebar filter toggle functionality for article.html
function setupSidebarToggles() {
  const headers = document.querySelectorAll('.filter-section-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.getAttribute('data-toggle-target');
      const content = document.getElementById(targetId).querySelector('.filter-section-content');
      const caret = header.querySelector('.caret');
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        caret.style.transform = 'rotate(180deg)';
      } else {
        content.style.display = 'none';
        caret.style.transform = 'rotate(0deg)';
      }
    });
  });
}

// Range slider sync functionality
function setupRangeSliders() {
  // Budget range
  const budgetMin = document.getElementById('budgetMin');
  const budgetMax = document.getElementById('budgetMax');
  const budgetMinInput = document.getElementById('budgetMinInput');
  const budgetMaxInput = document.getElementById('budgetMaxInput');

  if (budgetMin && budgetMax && budgetMinInput && budgetMaxInput) {
    budgetMin.addEventListener('input', () => {
      budgetMinInput.value = budgetMin.value;
    });
    budgetMax.addEventListener('input', () => {
      budgetMaxInput.value = budgetMax.value;
    });
    budgetMinInput.addEventListener('input', () => {
      budgetMin.value = budgetMinInput.value;
    });
    budgetMaxInput.addEventListener('input', () => {
      budgetMax.value = budgetMaxInput.value;
    });
  }

  // Area range
  const areaMin = document.getElementById('areaMin');
  const areaMax = document.getElementById('areaMax');
  const areaMinInput = document.getElementById('areaMinInput');
  const areaMaxInput = document.getElementById('areaMaxInput');

  if (areaMin && areaMax && areaMinInput && areaMaxInput) {
    areaMin.addEventListener('input', () => {
      areaMinInput.value = areaMin.value;
    });
    areaMax.addEventListener('input', () => {
      areaMaxInput.value = areaMax.value;
    });
    areaMinInput.addEventListener('input', () => {
      areaMin.value = areaMinInput.value;
    });
    areaMaxInput.addEventListener('input', () => {
      areaMax.value = areaMaxInput.value;
    });
  }
}

// Applied filters functionality
let appliedFilters = {};

function addAppliedFilter(filterType, value) {
  if (!appliedFilters[filterType]) {
    appliedFilters[filterType] = [];
  }
  if (!appliedFilters[filterType].includes(value)) {
    appliedFilters[filterType].push(value);
    updateAppliedFiltersDisplay();
  }
}

function removeAppliedFilter(filterType, value) {
  if (appliedFilters[filterType]) {
    appliedFilters[filterType] = appliedFilters[filterType].filter(v => v !== value);
    if (appliedFilters[filterType].length === 0) {
      delete appliedFilters[filterType];
    }
    updateAppliedFiltersDisplay();
  }
}

function updateAppliedFiltersDisplay() {
  const container = document.getElementById('appliedFiltersContainer');
  if (!container) return;
  container.innerHTML = '';
  for (const [type, values] of Object.entries(appliedFilters)) {
    values.forEach(value => {
      const tag = document.createElement('div');
      tag.className = 'applied-filter-tag';
      tag.innerHTML = `${value} <span class="remove-icon" data-type="${type}" data-value="${value}">×</span>`;
      container.appendChild(tag);
    });
  }
  // Add event listeners to remove icons
  document.querySelectorAll('.remove-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
      const type = e.target.getAttribute('data-type');
      const value = e.target.getAttribute('data-value');
      removeAppliedFilter(type, value);
    });
  });
}

// Tag click functionality
function setupFilterTags() {
  const tags = document.querySelectorAll('.tag');
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      const filterType = tag.getAttribute('data-filter');
      const value = tag.getAttribute('data-value');
      addAppliedFilter(filterType, value);
    });
  });
}

// Clear all filters
function setupClearAll() {
  const clearBtn = document.getElementById('clearAllBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      appliedFilters = {};
      updateAppliedFiltersDisplay();
      // Reset checkboxes
      document.querySelectorAll('#localitiesList input[type="checkbox"], #extraLocalities input[type="checkbox"]').forEach(cb => cb.checked = false);
      // Reset ranges to default
      const budgetMin = document.getElementById('budgetMin');
      const budgetMax = document.getElementById('budgetMax');
      const budgetMinInput = document.getElementById('budgetMinInput');
      const budgetMaxInput = document.getElementById('budgetMaxInput');
      const areaMin = document.getElementById('areaMin');
      const areaMax = document.getElementById('areaMax');
      const areaMinInput = document.getElementById('areaMinInput');
      const areaMaxInput = document.getElementById('areaMaxInput');
      if (budgetMin) budgetMin.value = 10000;
      if (budgetMax) budgetMax.value = 65000;
      if (budgetMinInput) budgetMinInput.value = 10000;
      if (budgetMaxInput) budgetMaxInput.value = 65000;
      if (areaMin) areaMin.value = 200;
      if (areaMax) areaMax.value = 1300;
      if (areaMinInput) areaMinInput.value = 200;
      if (areaMaxInput) areaMaxInput.value = 1300;
    });
  }
}

// Toggle more localities
function setupMoreLocalities() {
  const toggleBtn = document.getElementById('toggleMoreLocalities');
  const extra = document.getElementById('extraLocalities');
  if (toggleBtn && extra) {
    toggleBtn.addEventListener('click', () => {
      if (extra.style.display === 'none' || extra.style.display === '') {
        extra.style.display = 'block';
        toggleBtn.textContent = '- Less Localities';
      } else {
        extra.style.display = 'none';
        toggleBtn.textContent = '+ More Localities';
      }
    });
  }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setupFilterDropdowns();
  setupClearAll();
  matchFilterHeight();
  setupSidebarToggles();
  setupRangeSliders();
  setupFilterTags();
  setupMoreLocalities();
  updateAppliedFiltersDisplay();
});





document.addEventListener('DOMContentLoaded', function() {
  const viewMore = document.querySelector('.view-more');
  const description = document.querySelector('.property-desc .pdesc');
  
  viewMore.addEventListener('click', function(e) {
    e.preventDefault();

    if (description.classList.contains('expanded')) {
      description.classList.remove('expanded');
      viewMore.innerHTML = 'View More <span><img src="img/icon/parrowdown.svg" alt="arrow down" class="pdarrow"></span>';
    } else {
      description.classList.add('expanded');
      viewMore.innerHTML = 'View Less <span><img src="img/icon/parrowdown.svg" alt="arrow down" class="pdarrow"></span>';
    }
  });
});



