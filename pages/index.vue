<template>
  <div id="home">
    <div class="container">
      <img src="~/assets/images/icon_transparent.png" alt="">
      <h1 class="title">Payw</h1>
      <p class="manifesto">Pay as you want</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#home {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 3rem;
    height: 3rem;
  }

  .title {
    font-weight: 800;
    font-size: 2rem;
    margin: 0;
  }

  .manifesto {
    font-size: 1rem;
    color: #7a7a7a;
    margin: 0;
    margin-top: 0.3rem;
  }
}
</style>
