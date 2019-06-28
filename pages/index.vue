<template>
  <div id="home">
    <div class="container payw">
      <div class="logo-container">
        <img class="logo" src="~/assets/images/v2.0.png" alt="">
        <h1 class="title">PAYW</h1>
      </div>
      <p class="manifesto">지금껏 보지 못했던 새로운 결제 시스템을 소개합니다.</p>
      <div class="category">
        <div class="grid-item">
          <div class="payw-group pay-as-you-want">
            <h1 class="title">Pay As You Want</h1>
            <p class="description">원하는 만큼 지불하세요. 매 달 절반의 구매자에게 100%의 페이백이 제공됩니다.</p>
          </div>
        </div>
        <div class="grid-item">
          <div class="payw-group pay-anywhere-you-want">
            <h1 class="title">Pay Anywhere You Want</h1>
            <p class="description">내 손 안의 Kiosk. 이제 오프라인 매장도 온라인처럼.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container eodiro">
      <a href="https://eodiro.com" target="_blank" class="link expand"></a>
      <img src="~/assets/images/eodiro_logo_r.svg" class="logo" alt="">
      <h1 class="name">어디로</h1>
      <p class="description">중앙대학교 빈 강의실 찾기 서비스 ></p>
    </div>

    <div class="container webuffet">
      <a href="" target="_blank" class="expand"></a>
      <div class="logo-circle"></div>
      <div class="content">
        <p class="description">웹사이트를 내맘대로</p>
        <h1 class="title">WEBuffet</h1>
        <p class="github">GitHub Repository 보기 ></p>
      </div>
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
@import '~assets/scss/global-mixins.scss';

#home {
  margin: auto;
  height: 100vh;
  text-align: center;

  .container {
    background-color: #f8f8f8;
    padding: 7rem 1.5rem;
    margin: 1.5rem 0;
  }

  .container.payw {
    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
    
      .logo {
        $logo-size: 5rem;
        width: $logo-size;
        height: $logo-size;
        margin-left: -0.3rem;
      }
      
      .title {
        font-weight: 700;
        font-size: 4.5rem;
        margin: 0;
        margin-left: 0.5rem;
      }
    }
    
    @include smaller-than(500px) {
      .logo-container {
        .logo {
          $logo-size: 3rem;
          width: $logo-size;
          height: $logo-size;
          margin-left: -0.3rem;
        }
        
        .title {
          font-weight: 700;
          font-size: 2.7rem;
          margin: 0;
          margin-left: 0.3rem;
        }
      }
    }
    
    .manifesto {
      font-size: 1rem;
      padding-top: 2rem;
    }
    
    .category {
      text-align: left;
      padding-top: 3rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 2rem;
      max-width: 57rem;
      margin: auto;
    
      .payw-group {
        padding: 2rem 1.5rem;
        border-radius: 0.5rem;
        background-color: #333;
        color: #fff;
        box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.22);
        cursor: pointer;
    
        .title {
          font-weight: 700;
          font-size: 2rem;
          margin: 0;
          line-height: 1.1;
        }
    
        .description {
          margin: 0;
          margin-top: 1.5rem;
          font-size: 1rem;
          line-height: 1.4;
        }
      }
    }
  }

  .container.eodiro {
    position: relative;
    background-color: #ff355d;
    color: #fff;
    cursor: pointer;

    &:hover {
      .description {
        text-decoration: underline;
      }
    }

    .logo {
      width: 6rem;
      filter: drop-shadow(0.8rem 0.8rem 0.8rem rgba(0,0,0,0.2));
    }

    .name {
      margin: 1rem 0 0;
      font-size: 3rem;
      font-weight: 900;
    }

    .description {
      font-size: 1rem;
      margin-top: 2rem;
    }
  }

  .container.webuffet {
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &:hover {
      .github {
        text-decoration: underline;
      }
    }

    .logo-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: calc(100% - 2rem);
      max-width: 50rem;
      background-image: linear-gradient(#00ffe9, #0089ff);
      border-radius: 50%;

      &::before {
        content: '';
        display: block;
        padding-bottom: 100%;
      }
    }

    .content {
      z-index: 2;

      .title {
        font-size: 4rem;
      }

      .description {
        margin-bottom: 0;
        font-size: 1rem;
      }

      .github {
        margin-top: 3rem;
        font-size: 1rem;
      }
    }
  }
}
</style>
