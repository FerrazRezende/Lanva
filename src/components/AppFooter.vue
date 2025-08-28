<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Logo and Description -->
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-icon">🎨</div>
            <span class="logo-text">Lanva</span>
          </div>
          <p class="footer-description">
            {{ $t('footer.description') }}
          </p>
        </div>
        
        <!-- Links -->
        <div class="footer-links">
          <a href="https://github.com/FerrazRezende/Lanva" target="_blank" class="footer-link">
            <Github :size="20" />
            <span>GitHub</span>
          </a>
          <a href="#features" class="footer-link">
            <Info :size="20" />
            <span>{{ $t('nav.about') }}</span>
          </a>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="footer-bottom">
        <p class="footer-rights">{{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Github, Info } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<style scoped>
.footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 3rem 0 1.5rem;
  margin-top: 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 2rem;
}

.footer-brand {
  flex: 1;
  max-width: 400px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.logo-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  border-radius: 8px;
  color: white;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
}

.footer-description {
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-weight: 500;
}

.footer-link:hover {
  color: var(--primary);
  background: rgba(142, 68, 173, 0.1);
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
  text-align: center;
}

.footer-rights {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin: 0;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .footer-brand {
    max-width: 100%;
  }
  
  .footer-links {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .footer-link {
    padding: 0.75rem 1.25rem;
  }
}
</style>
