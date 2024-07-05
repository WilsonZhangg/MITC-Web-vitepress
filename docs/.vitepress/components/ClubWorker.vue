<template>
  <div>
    <div v-for="group in groups" :key="group.groupName" class="group">
      <h2>{{ group.groupName }}</h2>
      <div class="members">
        <div class="member" v-for="member in group.members" :key="member.name">
          <img :src="member.image" alt="member.name" class="member-image">
          <h3>{{ member.name }}</h3>
          <h4>{{ member.position }}</h4>
          <p>{{ member.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // 引入 Vue 的 ref 和 onMounted

const groups = ref([]); // 定義一個空陣列，用於存放幹部資料

const fetchMembers = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/members'); // 發送 API 請求
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // 將回應解析為 JSON
    groups.value = data.groups; // 將資料賦值給 groups
  } catch (err) {
    console.error('Failed to fetch members:', err.message); // 捕捉並輸出錯誤
  }
};

onMounted(fetchMembers); // 在組件掛載後執行 fetchMembers
</script>

<style scoped>
.group {
  margin-bottom: 20px;
}

.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.member {
  flex: 0 1 calc(20% - 10px); /* 每行五個成員 */
  margin: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* 垂直居中 */
}

.member img {
  margin-bottom: 10px; /* 確保圖片和文字有間距 */
}

.member-image {
  width: 100pt;
  height: 100pt;
  border-radius: 50%;
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .member {
    flex: 0 1 calc(25% - 10px); /* 每行四個成員 */
  }
}

@media (max-width: 992px) {
  .member {
    flex: 0 1 calc(33.33% - 10px); /* 每行三個成員 */
  }
}

@media (max-width: 768px) {
  .member {
    flex: 0 1 calc(50% - 10px); /* 每行兩個成員 */
  }
}

@media (max-width: 576px) {
  .member {
    flex: 0 1 calc(100% - 10px); /* 每行一個成員 */
  }
}
</style>
