/**
 * Developer Portfolio - Gullapudi Bhargava Subrahmanyam Guptha
 * Pure Vanilla JavaScript (Zero Dependencies, Zero Build Tools)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DOM Elements
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const currentYearSpan = document.getElementById('current-year');

  // Set Current Year in Footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 2. Navbar Scroll Behavior
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scrollspy for active nav link
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
    const scrollPos = window.scrollY + 130;

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Navigation Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);

      // Toggle hamburger and close icon
      const iconMenu = mobileToggle.querySelector('.icon-menu');
      const iconClose = mobileToggle.querySelector('.icon-close');
      if (iconMenu && iconClose) {
        if (isOpen) {
          iconMenu.style.display = 'none';
          iconClose.style.display = 'block';
        } else {
          iconMenu.style.display = 'block';
          iconClose.style.display = 'none';
        }
      }
    });

    // Close mobile menu when any nav link or CTA is clicked
    const allMenuClickables = navMenu.querySelectorAll('a');
    allMenuClickables.forEach((item) => {
      item.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const iconMenu = mobileToggle.querySelector('.icon-menu');
        const iconClose = mobileToggle.querySelector('.icon-close');
        if (iconMenu && iconClose) {
          iconMenu.style.display = 'block';
          iconClose.style.display = 'none';
        }
      });
    });
  }

  // 4. Smooth Scrolling for Internal Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // 5. Copy Email to Clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const emailText = document.getElementById('placeholder-email')?.textContent?.trim() || 'bhargav.guptha@example.com';
      
      navigator.clipboard.writeText(emailText).then(() => {
        const btnText = copyEmailBtn.querySelector('.btn-copy-text');
        const originalText = btnText ? btnText.textContent : 'Copy';
        if (btnText) btnText.textContent = 'Copied!';
        copyEmailBtn.style.borderColor = '#10b981';
        copyEmailBtn.style.color = '#34d399';

        setTimeout(() => {
          if (btnText) btnText.textContent = originalText;
          copyEmailBtn.style.borderColor = '';
          copyEmailBtn.style.color = '';
        }, 2200);
      }).catch((err) => {
        console.error('Could not copy text: ', err);
      });
    });
  }

  // 6. Contact Form Submission (Mailto Integration)
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const subject = document.getElementById('subject')?.value || 'Portfolio Inquiry';
      const message = document.getElementById('message')?.value || '';
      const recipientEmail = document.getElementById('placeholder-email')?.textContent?.trim() || 'bhargav.guptha@example.com';

      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        `From: ${name} (${email})\n\nMessage:\n${message}`
      )}`;

      window.location.href = mailtoUrl;

      if (formSuccess) {
        formSuccess.classList.add('visible');
        setTimeout(() => {
          formSuccess.classList.remove('visible');
        }, 6000);
      }
    });
  }

  // 7. Scroll To Top Button
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

