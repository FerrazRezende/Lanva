<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <v-icon icon="mdi-code-tags" size="16" />
            <span>Projeto Open Source</span>
          </div>
          <h1 class="hero-title">{{ $t('hero.title') }}</h1>
          <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
          
          <div class="hero-buttons">
            <button class="btn-primary" @click="startDesigning">
              <Play :size="20" />
              <span>{{ $t('hero.cta.primary') }}</span>
            </button>
            <button class="btn-secondary" @click="learnMore">
              <Github :size="20" />
              <span>{{ $t('hero.cta.secondary') }}</span>
            </button>
          </div>

          <div class="hero-stats">
            <div class="stat">
              <div class="stat-number">Vue 3</div>
              <div class="stat-label">Framework</div>
            </div>
            <div class="stat">
              <div class="stat-number">TypeScript</div>
              <div class="stat-label">Linguagem</div>
            </div>
            <div class="stat">
              <div class="stat-number">Fabric.js</div>
              <div class="stat-label">Canvas</div>
            </div>
          </div>
        </div>
        
        <div class="hero-demo">
          <div class="canvas-mockup">
            <div class="canvas-header">
              <div class="canvas-toolbar">
                <div class="tool-group">
                  <div class="tool-icon">✏️</div>
                  <div class="tool-icon">🎨</div>
                  <div class="tool-icon">📐</div>
                  <div class="tool-icon">�</div>
                </div>
              </div>
            </div>
            <div class="canvas-content">
              <div class="design-element rect"></div>
              <div class="design-element circle"></div>
              <div class="design-element text">Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Play, Github } from 'lucide-vue-next'

const startDesigning = () => {
  console.log('Demo clicked')
  // Scroll para a seção de features para simular demo
  const featuresSection = document.getElementById('features')
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const learnMore = () => {
  window.open('https://github.com/FerrazRezende/Lanva', '_blank')
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  padding-top: 80px;
  background: var(--bg);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  max-width: 500px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(142, 68, 173, 0.1);
  color: var(--primary);
  border: 1px solid rgba(142, 68, 173, 0.2);
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--text) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
}

.btn-primary, .btn-secondary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-family: inherit;
}

.btn-primary {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 20px rgba(142, 68, 173, 0.3);
}

.btn-primary:hover {
  box-shadow: 0 8px 30px rgba(142, 68, 173, 0.4);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--border);
  color: var(--text);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  gap: 2rem;
  opacity: 0.8;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-demo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.canvas-mockup {
  background: var(--surface);
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  transition: all 0.3s ease;
  position: relative;
  margin: 1rem auto;
}

.canvas-mockup:hover {
  transform: translateY(-5px);
  box-shadow: 0 35px 70px rgba(142, 68, 173, 0.2);
}

.canvas-header {
  background: linear-gradient(135deg, var(--bg) 0%, var(--surface) 100%);
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.canvas-toolbar {
  display: flex;
  justify-content: center;
}

.tool-group {
  display: flex;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 0.75rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
}

.tool-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface);
  border-radius: 0.75rem;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid var(--border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.tool-icon:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(142, 68, 173, 0.3);
}

.canvas-content {
  height: 320px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  padding: 1rem;
}

.design-element {
  position: absolute;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  z-index: 1;
}

.design-element.rect {
  top: 2rem;
  left: 2rem;
  width: 4rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--highlight) 100%);
  box-shadow: 0 8px 25px rgba(142, 68, 173, 0.3);
}

.design-element.circle {
  top: 1.5rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(135deg, var(--secondary) 0%, var(--support) 100%);
  border-radius: 50%;
  box-shadow: 0 8px 25px rgba(39, 174, 96, 0.3);
}

.design-element.text {
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 8px 25px rgba(149, 165, 166, 0.3);
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .canvas-mockup {
    max-width: 450px;
    margin: 2rem auto;
  }
  
  .hero-buttons {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
    min-height: 85vh;
  }

  .hero-title {
    font-size: clamp(2rem, 8vw, 2.5rem);
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
  }

  .btn-primary, .btn-secondary {
    width: 100%;
    max-width: 250px;
    justify-content: center;
    padding: 1rem 1.5rem;
  }

  .hero-stats {
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .canvas-content {
    height: 280px;
    padding: 0.75rem;
  }

  .canvas-mockup {
    max-width: 400px;
    margin: 1.5rem auto;
  }

  .tool-group {
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .tool-icon {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }

  .design-element.rect {
    top: 1.5rem;
    left: 1.5rem;
    width: 3.5rem;
    height: 2.5rem;
  }

  .design-element.circle {
    top: 1rem;
    right: 1.5rem;
    width: 3rem;
    height: 3rem;
  }

  .design-element.text {
    bottom: 1.5rem;
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: 90px;
  }

  .hero-container {
    padding: 0 1rem;
  }

  .canvas-mockup {
    max-width: 320px;
  }

  .canvas-content {
    height: 240px;
  }

  .design-element.rect {
    top: 2rem;
    left: 2rem;
    width: 3.5rem;
    height: 3rem;
  }

  .design-element.circle {
    top: 1.5rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
  }

  .design-element.text {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
}
</style>
