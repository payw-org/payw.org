<template>
  <div id="home">
    <div class="container">
      <div class="logo-container">
        <img class="logo" src="~/assets/images/icon_transparent.png" alt="">
        <h1 class="title">Payw</h1>
      </div>
      <p class="manifesto">Pay as you want</p>
      <p class="description">We create beautiful and sophisticated software.</p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Payw'
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  width: calc(100% - 2rem);
  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      $logo-size: 2.5rem;
      width: $logo-size;
      height: $logo-size;
      margin-left: -0.3rem;
    }
    
    .title {
      font-weight: 700;
      font-size: 2rem;
      margin: 0;
      margin-left: 0.3rem;
    }
  }

  .manifesto {
    font-size: 0.9rem;
    color: #8a8a8a;
    margin: 0;
    margin-top: 0.5rem;
    background-color: #f4f5f7;
    border-radius: 0.3rem;
    padding: 0.2rem 0.5rem;
    display: inline-block;
  }

  .description {
    font-weight: 400;
    font-size: 0.8rem;
    margin: 0;
    margin-top: 1rem;
  }
}
</style>
