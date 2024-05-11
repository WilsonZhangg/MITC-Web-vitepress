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
  }
  
  .member {
    flex: 0 1 calc(20% - 10px); /* 每行五個成員 */
    margin: 30px;
    text-align: center;
  }
  
  .member-image {
    width: 100pt;
    height: 100pt;
    border-radius: 50%;
  }
  </style>
  