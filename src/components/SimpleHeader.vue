<template>
  <header class="header" :class="{ 'mobile-menu-open': mobileMenuOpen }">
    <div class="container">
      <div class="nav-content">
        <!-- Logo -->
        <div class="logo">
          <div class="logo-icon">🎨</div>
          <span class="logo-text">Lanva</span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="nav-actions desktop-nav">
          <button class="nav-btn" @click="openDemo">Demo</button>
          <button class="nav-btn" @click="openGitHub">GitHub</button>
          <button @click="toggleTheme" class="icon-btn" :title="isDark ? 'Modo Claro' : 'Modo Escuro'">
            <Sun v-if="isDark" :size="20" />
            <Moon v-else :size="20" />
          </button>
          <button @click="toggleLanguage" class="lang-btn" :title="currentLocale === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'">
            {{ currentLocale === 'pt-BR' ? 'EN' : 'PT' }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="mobile-menu-btn">
          <X v-if="mobileMenuOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
        <div class="mobile-menu-content">
          <button class="mobile-nav-btn" @click="openDemo">Demo</button>
          <button class="mobile-nav-btn" @click="openGitHub">GitHub</button>
          <div class="mobile-controls">
            <button @click="toggleTheme" class="mobile-icon-btn">
              <Sun v-if="isDark" :size="20" />
              <Moon v-else :size="20" />
              <span>{{ isDark ? 'Modo Claro' : 'Modo Escuro' }}</span>
            </button>
            <button @click="toggleLanguage" class="mobile-lang-btn">
              <Languages :size="20" />
              <span>{{ currentLocale === 'pt-BR' ? 'English' : 'Português' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'
import { Sun, Moon, Menu, X, Languages } from 'lucide-vue-next'

const { locale } = useI18n()
const theme = useTheme()

const mobileMenuOpen = ref(false)
const isDark = computed(() => theme.global.name.value === 'dark')
const currentLocale = computed(() => locale.value)

const toggleTheme = () => {
  const newTheme = isDark.value ? 'light' : 'dark'
  theme.global.name.value = newTheme
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
}

const toggleLanguage = () => {
  const newLocale = locale.value === 'pt-BR' ? 'en' : 'pt-BR'
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const openDemo = () => {
  console.log('Opening demo...')
  // Aqui você pode adicionar a navegação para a demo
}

const openGitHub = () => {
  window.open('https://github.com/FerrazRezende/Lanva', '_blank')
}

onMounted(() => {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light'
  theme.global.name.value = savedTheme
  document.documentElement.setAttribute('data-theme', savedTheme)

  // Load saved locale
  const savedLocale = localStorage.getItem('locale') || 'pt-BR'
  locale.value = savedLocale

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const header = document.querySelector('.header')
    if (header && !header.contains(e.target as Node)) {
      mobileMenuOpen.value = false
    }
  })
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  max-width: 900px;
  min-width: 320px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  padding: 0.75rem 2rem;
  z-index: 1000;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] .header {
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.header:hover {
  transform: translateX(-50%) translateY(-2px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

[data-theme="dark"] .header:hover {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.container {
  width: 100%;
  padding: 0;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
  transition: all 0.3s;
  cursor: pointer;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  transition: all 0.3s;
}

.logo:hover .logo-icon {
  transform: rotate(15deg);
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-btn {
  background: none;
  border: none;
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 1rem;
  transition: all 0.3s;
  opacity: 0.7;
}

.nav-btn:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.05);
  transform: translateY(-1px);
}

[data-theme="dark"] .nav-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.icon-btn {
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.icon-btn:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  transform: translateY(-1px) scale(1.05);
}

.lang-btn {
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-radius: 1rem;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-width: 50px;
}

.lang-btn:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  transform: translateY(-1px);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 0.3s;
  width: 40px;
  height: 40px;
}

.mobile-menu-btn:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin-top: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] .mobile-menu {
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.mobile-menu-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-btn {
  background: none;
  border: none;
  color: var(--text);
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  cursor: pointer;
  border-radius: 0.75rem;
  transition: all 0.3s;
  text-align: left;
}

.mobile-nav-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .mobile-nav-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .mobile-controls {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-icon-btn,
.mobile-lang-btn {
  background: none;
  border: none;
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 0.75rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mobile-icon-btn:hover,
.mobile-lang-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .mobile-icon-btn:hover,
[data-theme="dark"] .mobile-lang-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 1024px) {
  .header {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .header {
    width: 85%;
    padding: 0.5rem 1.5rem;
    top: 1rem;
  }
  
  .nav-content {
    height: 44px;
  }
  
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .header {
    width: 95%;
    padding: 0.5rem 1rem;
  }
  
  .logo-text {
    font-size: 1.1rem;
  }
}

/* Prevent horizontal scroll */
body {
  overflow-x: hidden;
  max-width: 100vw;
}
</style>
