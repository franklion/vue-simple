<template>
  <div>
    <header class="header">header component</header>
    <div class="main-content">
      <PostItem></PostItem>
    </div>
    <footer class="footer">footer component</footer>
  </div>
</template>


<script>
  import PostItem from '@/components/PostItem'

  export default {
      components: {
        PostItem
      }
  }

</script>

<style>
  .header {
    height: 35vh;
    line-height: 35vh;
    text-align: center;
    background-color: coral;
  }

  .main-content {
    height: 80vh;
    line-height: 80vh;
    text-align: center;
    background-color: cornsilk;
  }

  .footer {
    height: 35vh;
    line-height: 35vh;
    text-align: center;
    background-color: lightcoral;
  }
</style>
