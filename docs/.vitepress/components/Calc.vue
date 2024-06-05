<template>
    <div class="layout">
      <main>
        <slot/>
      </main>
  
      <footer>
        <span id="busuanzi_container_site_pv">
          本站總訪問量<span id="busuanzi_value_site_pv"></span>次
        </span>
        <br />
        <span id="busuanzi_container_page_pv">
          本頁總訪問量<span id="busuanzi_value_page_pv"></span>次
        </span>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const script = document.createElement('script');
      script.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }
  </script>
  
  <style scoped>
  /* 你的CSS樣式 */
  </style>