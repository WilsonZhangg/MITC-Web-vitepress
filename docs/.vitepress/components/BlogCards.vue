<!-- .vitepress/components/BlogCards.vue -->
<template>
  <div class="cards-container">
    <div v-for="post in sortedPosts" :key="post.title" class="card">
      <a :href="post.link" class="card-link">
        <img :src="post.image" alt="Card Image" class="card-image" />
        <h3 class="card-title">{{ post.title }}</h3>
        <p class="card-description">{{ post.description }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const posts = ref([]);

onMounted(async () => {
  const context = import.meta.glob('/blog/*.md');
  for (const path in context) {
    const module = await context[path]();
    const { frontmatter } = module.__pageData;
    const link = path.replace('/docs', '').replace('.md', '');
    frontmatter.link = `/MITC-Web-vitepress${link}`; // 修改路徑以匹配 VitePress 的路徑
    posts.value.push(frontmatter);
  }
});

const sortedPosts = computed(() => {
  return posts.value.sort((a, b) => new Date(b.date) - new Date(a.date));
});
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: calc(33.333% - 2rem);
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.card-title {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

.card-description {
  font-size: 1rem;
  color: #666;
}
</style>
