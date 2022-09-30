<template>
  <div class="landing">
    <!-- <div class="initial">
      <div class="initial-screen">
        <img src="@/assets/appicon.png" alt="app-icon" />
        <p class="initial-screen-app-name">MOTORBIKE</p>
        <p class="initial-screen-app-description">Ride Free</p>
      </div>
    </div> -->
    <div class="app-tour">
      <div class="app-tour-contents">
        <div class="skip-link">
          <p>Skip</p>
        </div>
        <template v-for="(item, index) in landingPageScreenInfo" :key="index">
          <template v-if="item.showContent">
            <img :src="require(`@/assets/${item.image}`)" alt="app-icon" />
            <div class="app-tour-info">
              <p class="app-tour-title">{{ item.title }}</p>
              <p class="app-tour-description">
                {{ item.description }}
              </p>
            </div>
            <div class="indicators">
              <div
                v-for="indicator in 3"
                :key="indicator"
                class="indicator-dot"
                :class="{ 'indicator-dot-lg': index + 1 === indicator }"
              ></div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
})
export default class HomeView extends Vue {
  landingPageScreenInfo = [
    {
      image: 'Illustration.png',
      title: 'Ride Free',
      description: 'Create a hassle free ride anytime and anywhere',
      showContent: false,
    },
    {
      image: 'Illustartion2.png',
      title: 'Know your Bike',
      description: 'Keep your bike fettle!',
      showContent: true,
    },
    {
      image: 'Illustration3.png',
      title: 'Your Cart',
      description: 'Book bike online and shop accessories',
      showContent: false,
    },
  ]
}
</script>

<style lang="scss">
.landing {
  min-height: 100vh;
  @include flex-align-justify-center();

  .initial {
    bottom: 0px;
    width: 100%;
    background-image: $app-theme-gradient;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    @include flex-align-justify-center();

    .initial-screen {
      img {
        width: auto;
      }

      p {
        color: $white;
        font-weight: 600;
        text-align: center;
        line-height: 3.5rem;
      }

      &-app-name {
        font-size: 2.25rem;
        font-family: 'Oswald', sans-serif;
      }

      &-app-description {
        font-weight: 200;
        font-size: 1.25rem;
      }
    }
  }

  .app-tour {
    min-height: 100vh;
    @include flex-align-justify-center();

    .app-tour-contents {
      min-height: 100vh;
      flex-direction: column;
      line-height: 29px;
      @include flex-align-justify-center();

      .skip-link {
        width: 100%;
        position: relative;
        padding: 2rem 1rem;
        font-size: 1rem;
        color: $primary-orange;
        font-weight: 600;
        @include flex-align-justify-center();
        justify-content: flex-end;
      }

      img {
        width: 100vw;
      }

      .app-tour-info {
        flex: 1;
        text-align: center;
        color: $gray;
        @media only screen and (max-width: 600px) {
          max-width: 12rem;
        }

        .app-tour-title {
          padding-top: 2.5rem;
          font-size: 1.5rem;
        }
        .app-tour-description {
          padding-top: 2rem;
          line-height: 1.2rem;
          font-size: 1rem;
        }
      }

      .indicators {
        flex: 1;
        display: flex;
        min-width: 2.8rem;
        justify-content: space-between;
        align-items: center;

        .indicator-dot {
          background: $secondary-orange;
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
        }

        .indicator-dot-lg {
          padding: 0.5rem;
        }
      }
    }
  }
}
</style>
