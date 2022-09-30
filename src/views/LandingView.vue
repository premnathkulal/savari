<template>
  <div class="landing">
    <div class="initial-screen">
      <img src="@/assets/appicon.png" alt="app-icon" />
      <p class="initial-screen-app-name">MOTORBIKE</p>
      <p class="initial-screen-app-description">Ride Free</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
.landing {
  bottom: 0px;
  width: 100%;
  min-height: 100vh;
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
</style>
