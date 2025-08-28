<template>
  <section id="features" class="features">
    <div class="features-container">
      <div class="features-header">
        <h2 class="features-title">{{ $t('features.title') }}</h2>
        <p class="features-subtitle">{{ $t('features.subtitle') }}</p>
      </div>

      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.key">
          <div class="feature-icon">
            <component :is="feature.icon" :size="32" />
          </div>
          <h3 class="feature-title">{{ $t(feature.title) }}</h3>
          <p class="feature-description">{{ $t(feature.description) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Palette, Download, Smartphone } from 'lucide-vue-next'

const features = [
  {
    key: 'design',
    icon: Palette,
    title: 'features.items.design.title',
    description: 'features.items.design.description'
  },
  {
    key: 'export',
    icon: Download,
    title: 'features.items.export.title',
    description: 'features.items.export.description'
  },
  {
    key: 'responsive',
    icon: Smartphone,
    title: 'features.items.responsive.title',
    description: 'features.items.responsive.description'
  }
]
</script><style scoped>
.features {
  padding: 5rem 0;
  background: var(--surface);
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.features-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1rem;
}

.features-subtitle {
  font-size: 1.125rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.feature-card {
  background: var(--bg);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  text-align: center;
  transition: all 0.3s ease;
  overflow: visible;
  position: relative;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(142, 68, 173, 0.15);
  border-color: var(--primary);
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  background: var(--primary);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.feature-card:hover .feature-icon {
  background: var(--secondary);
  box-shadow: 0 8px 25px rgba(39, 174, 96, 0.3);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
}

.feature-description {
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
