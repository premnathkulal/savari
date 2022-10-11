<style lang="scss" src="./LandingView.scss"></style>
<script lang="ts" src="./LandingView.ts"></script>

<template>
  <div class="landing">
    <div v-if="showSplashScreen" class="initial">
      <div class="initial-screen">
        <img src="@/assets/appicon.png" alt="app-icon" />
        <p class="initial-screen-app-name">MOTORBIKE</p>
        <p class="initial-screen-app-description">Ride Free</p>
      </div>
    </div>
    <Transition v-else :name="`slide-${slideAnimationName}`">
      <div v-if="!showRoyalQueryScreen" class="app-tour">
        <div class="app-tour-contents">
          <div class="skip-link">
            <p v-if="!(landingScreenIndex === 2)" @click="handleButtonClick">
              Skip
            </p>
          </div>
          <div class="container">
            <template
              v-for="(item, index) in landingPageScreenInfo"
              :key="index"
            >
              <Transition :name="`slide-${slideAnimationName}`">
                <div
                  v-if="index === landingScreenIndex"
                  class="app-tour-contents-contents"
                >
                  <img
                    :src="require(`@/assets/${item.image}`)"
                    class="app-tour-img"
                    alt="app-tour-image"
                  />
                  <div class="app-tour-info">
                    <p class="app-tour-title">{{ item.title }}</p>
                    <p class="app-tour-description">
                      {{ item.description }}
                    </p>
                  </div>
                  <div v-if="index === 2" class="btn-container">
                    <button @click="handleButtonClick" class="btn btn-primary">
                      REGISTER
                    </button>
                  </div>
                  <div class="indicators">
                    <div
                      v-for="indicator in 3"
                      :key="indicator"
                      class="indicator-dot"
                      :class="{ 'indicator-dot-lg': index + 1 === indicator }"
                    ></div>
                  </div>
                </div>
              </Transition>
            </template>
          </div>
        </div>
      </div>
      <div v-else class="app-tour royal-query">
        <div class="app-tour-contents">
          <div class="container">
            <div class="app-tour-contents-contents">
              <img
                src="@/assets/Illustration4.png"
                class="app-tour-img royal-query-img"
                alt="app-tour-image"
              />
              <div class="app-tour-info royal-query-title-tour-info">
                <p class="app-tour-title royal-query-title">
                  Do you have a Royal Bike
                </p>
              </div>
              <div class="btn-container choice-btn-container">
                <button
                  class="btn btn-primary"
                  @click="handleRoyalBikeQuestion(true)"
                >
                  YES
                </button>
                <button
                  class="btn btn-secondary"
                  @click="handleRoyalBikeQuestion(false)"
                >
                  NO
                </button>
              </div>
              <div class="footer-img-container">
                <img
                  src="@/assets/trees.png"
                  class="app-tour-img tree-img"
                  alt="app-tour-image"
                />
                <img
                  src="@/assets/tree.png"
                  class="app-tour-img tree-img"
                  alt="app-tour-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
