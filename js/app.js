/* Main Application Logic for UniTutor Platform */

document.addEventListener('DOMContentLoaded', async () => {
  initThemeAndDirection();
  await loadNavbarAndFooter();
  initStickyScrollEffect();
  activateCurrentNavPage();
  updateUserAuthStateUI();
});

function updateRTLUI(dir) {
  const rtlBadges = document.querySelectorAll('#rtl-badge');
  rtlBadges.forEach(b => { b.textContent = dir.toUpperCase(); });

  const btnRtlToggles = document.querySelectorAll('#btn-rtl-toggle, #rtl-toggle-btn');
  btnRtlToggles.forEach(btn => {
    const span = btn.querySelector('span');
    if (span) {
      span.textContent = dir === 'rtl' ? '⇄ LTR' : '⇄ RTL';
    }
  });
}

function initThemeAndDirection() {
  const currentTheme = localStorage.getItem('unitutor_theme') || 'light';
  const currentDir = localStorage.getItem('unitutor_dir') || 'ltr';

  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  document.documentElement.setAttribute('dir', currentDir);
  updateRTLUI(currentDir);
}

function initStickyScrollEffect() {
  const header = document.getElementById('app-navbar');
  const container = document.getElementById('navbar-container');

  const handleScroll = () => {
    const isScrolled = window.scrollY > 20;
    if (header) header.classList.toggle('scrolled', isScrolled);
    if (container) container.classList.toggle('scrolled', isScrolled);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

function activateCurrentNavPage() {
  const rawPath = window.location.pathname.split('/').pop();
  const page = (rawPath && rawPath !== '' && rawPath !== '/') ? rawPath : 'index.html';
  
  const allTargets = document.querySelectorAll('#app-navbar nav a, #app-navbar nav button, #mobile-menu a, #mobile-menu button');
  allTargets.forEach(el => el.classList.remove('nav-link-active'));

  const links = document.querySelectorAll('#app-navbar nav a, #mobile-menu a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const cleanHref = href.split('?')[0].split('#')[0];

    const isMatch = (cleanHref === page) || 
      (page === 'index.html' && (cleanHref === 'index.html' || cleanHref === './' || cleanHref === '')) ||
      ((page === 'user-dashboard.html' || page === 'student-dashboard.html') && (cleanHref === 'user-dashboard.html' || cleanHref === 'student-dashboard.html'));

    if (isMatch) {
      link.classList.add('nav-link-active');

      const dropdownGroup = link.closest('.group');
      if (dropdownGroup) {
        const triggerBtn = dropdownGroup.querySelector('button');
        if (triggerBtn) {
          triggerBtn.classList.add('nav-link-active');
        }
      }

      const mobileSubmenu = link.closest('.mobile-submenu');
      if (mobileSubmenu) {
        mobileSubmenu.classList.remove('hidden');
        const toggleBtn = mobileSubmenu.previousElementSibling;
        if (toggleBtn && toggleBtn.tagName === 'BUTTON') {
          toggleBtn.classList.add('nav-link-active');
          const arrow = toggleBtn.querySelector('.submenu-arrow');
          if (arrow) arrow.classList.add('rotate-180');
        }
      }
    }
  });
}

window.toggleMobileSubmenu = function(submenuId, btn) {
  const submenu = document.getElementById(submenuId);
  if (!submenu) return;
  const isHidden = submenu.classList.contains('hidden');
  
  if (isHidden) {
    submenu.classList.remove('hidden');
    if (btn) {
      const arrow = btn.querySelector('.submenu-arrow');
      if (arrow) arrow.classList.add('rotate-180');
    }
  } else {
    submenu.classList.add('hidden');
    if (btn) {
      const arrow = btn.querySelector('.submenu-arrow');
      if (arrow) arrow.classList.remove('rotate-180');
    }
  }
};

window.toggleDarkMode = function () {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('unitutor_theme', isDark ? 'dark' : 'light');
};

window.toggleRTL = function () {
  const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
  const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
  
  document.documentElement.setAttribute('dir', newDir);
  localStorage.setItem('unitutor_dir', newDir);

  updateRTLUI(newDir);

  showToast(`Text Direction set to ${newDir.toUpperCase()}`, 'info');
};

async function loadNavbarAndFooter() {
  const navContainer = document.getElementById('navbar-container');
  const footContainer = document.getElementById('footer-container');

  if (navContainer || footContainer) {
    try {
      const res = await fetch('navbar.html');
      if (res.ok) {
        const text = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        const headerEl = doc.getElementById('app-navbar');
        const loginModalEl = doc.getElementById('login-modal');
        const footerEl = doc.getElementById('app-footer');

        if (navContainer && headerEl) {
          // If container doesn't already have children or needs dynamic content
          if (navContainer.children.length === 0) {
            navContainer.innerHTML = headerEl.outerHTML;
          }
          if (loginModalEl && !document.getElementById('login-modal')) {
            document.body.appendChild(loginModalEl);
          }
        }

        if (footContainer && footerEl && footContainer.children.length === 0) {
          footContainer.innerHTML = footerEl.outerHTML;
        }
      }
    } catch (err) {
      console.warn("Dynamic navbar load fallback", err);
    }
  }

  initThemeAndDirection();
  initStickyScrollEffect();
  activateCurrentNavPage();
  updateUserAuthStateUI();
  initMobileMenuBehavior();
}

window.toggleMobileMenu = function (forceState) {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;

  const isOpen = menu.classList.contains('open');
  const shouldOpen = forceState !== undefined ? forceState : !isOpen;

  if (shouldOpen) {
    menu.classList.remove('hidden');
    // Force reflow for smooth CSS transition
    void menu.offsetWidth;
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    menu.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!menu.classList.contains('open')) {
        menu.classList.add('hidden');
      }
    }, 300);
  }
};

function initMobileMenuBehavior() {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      const menu = document.getElementById('mobile-menu');
      if (menu && menu.classList.contains('open')) {
        toggleMobileMenu(false);
      } else {
        document.body.style.overflow = '';
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const menu = document.getElementById('mobile-menu');
      if (menu && menu.classList.contains('open')) {
        toggleMobileMenu(false);
      }
      if (typeof closeLoginModal === 'function') {
        closeLoginModal();
      }
    }
  });

  const mobileLinks = document.querySelectorAll('#mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu(false);
    });
  });
}

window.openLoginModal = function () {
  window.location.href = 'login.html';
};

window.closeLoginModal = function () {
  const modal = document.getElementById('login-modal');
  if (modal) modal.classList.add('hidden');
};

window.selectDemoRole = function (role) {
  const emailInput = document.getElementById('login-email');
  const btnStudent = document.getElementById('role-btn-student');
  const btnTutor = document.getElementById('role-btn-tutor');
  const btnAdmin = document.getElementById('role-btn-admin');

  const activeClasses = ['bg-white', 'dark:bg-theme-600', 'text-theme-600', 'dark:text-white', 'shadow-sm'];
  const inactiveClasses = ['text-slate-500', 'hover:text-slate-700', 'dark:hover:text-slate-300'];

  [btnStudent, btnTutor, btnAdmin].forEach(btn => {
    if (btn) {
      btn.classList.remove(...activeClasses);
      btn.classList.add(...inactiveClasses);
    }
  });

  if (role === 'Student') {
    if (emailInput) emailInput.value = 'student@university.edu';
    if (btnStudent) {
      btnStudent.classList.add(...activeClasses);
      btnStudent.classList.remove(...inactiveClasses);
    }
  } else if (role === 'Tutor') {
    if (emailInput) emailInput.value = 'aris.thorne@oxford.edu';
    if (btnTutor) {
      btnTutor.classList.add(...activeClasses);
      btnTutor.classList.remove(...inactiveClasses);
    }
  } else if (role === 'Admin') {
    if (emailInput) emailInput.value = 'admin@unitutor.edu';
    if (btnAdmin) {
      btnAdmin.classList.add(...activeClasses);
      btnAdmin.classList.remove(...inactiveClasses);
    }
  }
};

function deriveNameFromEmail(email) {
  if (!email) return "Student Account";
  if (email.includes('thorne') || email.includes('tutor') || email.includes('oxford')) return "Dr. Aris Thorne";
  if (email.includes('admin')) return "Platform Administrator";
  
  const prefix = email.split('@')[0];
  const parts = prefix.split(/[\._\-]/).filter(Boolean);
  if (parts.length > 0) {
    return parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(' ');
  }
  return "Student Account";
}

window.handleLogin = function (e) {
  if (e && e.preventDefault) e.preventDefault();
  const emailInput = document.getElementById('login-email');
  const email = emailInput ? emailInput.value.trim() : '';
  
  let role = "Student";
  if (email.includes('thorne') || email.includes('tutor')) {
    role = "Tutor";
  } else if (email.includes('admin')) {
    role = "Admin";
  }

  const name = deriveNameFromEmail(email);

  const userData = { name, email, role };
  localStorage.setItem('unitutor_user', JSON.stringify(userData));

  showToast(`Welcome back, ${name} (${role})!`, 'success');
  if (typeof closeLoginModal === 'function') closeLoginModal();
  updateUserAuthStateUI();

  setTimeout(() => {
    if (role === 'Admin') {
      window.location.href = 'admin-dashboard.html';
    } else {
      window.location.href = 'user-dashboard.html';
    }
  }, 600);
};

function updateUserAuthStateUI() {
  const userArea = document.getElementById('user-auth-area');
  if (!userArea) return;

  const savedUser = localStorage.getItem('unitutor_user');
  if (savedUser) {
    try {
      const u = JSON.parse(savedUser);
      const dashUrl = u.role === 'Admin' ? 'admin-dashboard.html' : 'user-dashboard.html';
      userArea.innerHTML = `
        <div class="flex items-center gap-2">
          <a href="${dashUrl}" class="px-3.5 py-1.5 text-xs font-extrabold text-slate-800 dark:text-slate-100 hover:text-theme-600 bg-emerald-50 dark:bg-[#163830] border border-emerald-200 dark:border-[#1a3d35] rounded-xl transition inline-flex items-center gap-1.5 shadow-sm">
            <span>👤</span> <span>${u.name || 'Dashboard'}</span>
          </a>
          <button onclick="handleLogout()" type="button" class="p-1.5 text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition" title="Logout">
            🚪
          </button>
        </div>
      `;
      return;
    } catch (e) {}
  }

  userArea.innerHTML = `
    <a href="login.html" class="px-4 py-2 text-xs font-black text-white bg-gradient-to-r from-theme-600 to-amberGold-600 hover:from-theme-700 hover:to-amberGold-700 rounded-xl shadow-md shadow-theme-600/20 transition hover:scale-105 inline-block">
      Login Portal
    </a>
  `;
}

window.handleLogout = function () {
  localStorage.removeItem('unitutor_user');
  showToast('Logged out successfully', 'info');
  updateUserAuthStateUI();
};

function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-theme-600' : 'bg-slate-900 dark:bg-emerald-950';
  toast.className = `${bgClass} text-white px-5 py-3 rounded-2xl shadow-xl border border-white/10 text-xs font-semibold flex items-center gap-2 pointer-events-auto transform translate-y-4 opacity-0 transition-all duration-300`;
  
  toast.innerHTML = `<span>${message}</span>`;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => toast.classList.remove('translate-y-4', 'opacity-0'));

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

window.showToast = showToast;
