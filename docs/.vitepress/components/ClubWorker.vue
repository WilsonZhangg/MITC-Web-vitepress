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

<script>
import leadersData from '../src/json/workers.json';

export default {
  data() {
    return {
      groups: leadersData.groups,
    };
  },
}
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