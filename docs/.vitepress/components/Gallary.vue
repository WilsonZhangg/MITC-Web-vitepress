<!-- .vitepress/components/Gallery.vue -->
<template>
    <div>
      <div class="pa-gallery-player-widget" style="width:100%; height:480px; display:none;"
        data-link="https://photos.google.com/share/AF1QipMk8DQC8z9um9xvW-vRYsEpd_gBNCMAjlto_Ly7AExQXbCnDpVe4n-uReuvZeGSww?key=YnRIVkpCM0ZjcEZJRHJqR0k1QVNZVmhQeHdMczNR"
        data-title="2024 PyDay活動"
        data-description="352 new items added to shared album">
        <object data="https://lh3.googleusercontent.com/pw/AP1GczPdnXipXhRFeRkoqlMndkBk972KBm-yi1N4Y5w5AZ9MIN4hdnqDiepvxCjFFhTbE7n3GZMW1g5pZbX5CeZElo1w3gFcFBif1yLxglh208EjEdd3SX8l=w1920-h1080"></object>
        <object data="https://lh3.googleusercontent.com/pw/AP1GczOCJV6dQ5CKKodPPa5GRHAfeP62QUihGBHONuRm2kXUsONH0QDm8h5ZnBrEINPcrS5oo3HhuCxOT08ecor7VypqN4BGaNd0qqswoM22BM-9tVWio8BO=w1920-h1080"></object>
        <object data="https://lh3.googleusercontent.com/pw/AP1GczMsK81qJPE7dEnsBGddrRgl4kkjJKK8TmuKg7juwNIW5Ogj3jlXxE_Zxc6_HOmkthXKiVpUw2xM0K0MOtod5Hf0dzwMX_-vWjNVgAAUDi9x4xgBjro0=w1920-h1080"></object>
  
        <!-- 其他 object 標籤 -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }
  </script>
  