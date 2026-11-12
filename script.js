/**
 * Developer Portfolio - Gullapudi Bhargava Subrahmanyam Guptha
 * Pure Vanilla JavaScript (Zero Dependencies, Zero Build Tools)
 * 
 * ============================================================================
 * CONFIGURATION - EASILY EDITABLE CONTACT DETAILS
 * Change the email address below to update it across all scripts & form actions.
 * ============================================================================
 */
const CONTACT_CONFIG = {
  email: 'gbsgupth2006@gmail.com',
  github: 'https://github.com/2303A51740',
  linkedin: 'https://www.linkedin.com/in/gullapudi-bhargav-guptha-1aab40347/'
};

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

  // 5. Copy Email to Clipboard using JavaScript Clipboard API
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const emailToCopy = CONTACT_CONFIG.email;

      navigator.clipboard.writeText(emailToCopy).then(() => {
        const btnText = copyEmailBtn.querySelector('.btn-copy-text');
        const originalText = btnText ? btnText.textContent : 'Copy';
        if (btnText) btnText.textContent = 'Copied!';
        copyEmailBtn.classList.add('copied');
        copyEmailBtn.style.borderColor = '#10b981';
        copyEmailBtn.style.color = '#34d399';

        setTimeout(() => {
          if (btnText) btnText.textContent = originalText;
          copyEmailBtn.classList.remove('copied');
          copyEmailBtn.style.borderColor = '';
          copyEmailBtn.style.color = '';
        }, 2200);
      }).catch((err) => {
        console.error('Could not copy email: ', err);
        // Fallback for older environments
        const textArea = document.createElement('textarea');
        textArea.value = emailToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          const btnText = copyEmailBtn.querySelector('.btn-copy-text');
          if (btnText) btnText.textContent = 'Copied!';
          setTimeout(() => {
            if (btnText) btnText.textContent = 'Copy';
          }, 2200);
        } catch (fallbackErr) {
          console.error('Fallback copy failed: ', fallbackErr);
        }
        document.body.removeChild(textArea);
      });
    });
  }

  // 6. Contact Form Submission (Direct Mailto Integration)
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const subject = document.getElementById('subject')?.value || 'Portfolio Inquiry';
      const message = document.getElementById('message')?.value || '';

      const mailtoUrl = `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(
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
