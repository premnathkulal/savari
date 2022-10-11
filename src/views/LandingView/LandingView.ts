import { Options, Vue } from 'vue-class-component'
import { landingScreenData } from '@/utils/landing-screen-data'
import router from '@/router'
import { ViewName } from '@/constants/enum'

@Options({
  components: {},
})
export default class HomeView extends Vue {
  landingPageScreenInfo = [...landingScreenData]
  touchstartX = 0
  touchendX = 0
  landingScreenIndex = 0
  slideAnimationName = 'left'
  showRoyalQueryScreen = false
  showSplashScreen = false
  isUserHaveRoyalBike = false

  checkDirection() {
    if (this.touchendX < this.touchstartX) {
      this.slideAnimationName = 'left'
      if (this.landingScreenIndex >= this.landingPageScreenInfo.length - 1) {
        return
      }
      this.landingScreenIndex += 1
    }

    if (this.touchendX > this.touchstartX) {
      this.slideAnimationName = 'right'
      if (!this.landingScreenIndex) {
        return
      }
      this.landingScreenIndex -= 1
    }
  }

  updateLandingScreenData() {
    document.addEventListener('touchstart', (e: TouchEvent) => {
      this.touchstartX = e.changedTouches[0].screenX
    })

    document.addEventListener('touchend', (e: TouchEvent) => {
      this.touchendX = e.changedTouches[0].screenX
      this.checkDirection()
    })
  }

  handleButtonClick() {
    this.showRoyalQueryScreen = true
  }

  handleRoyalBikeQuestion(isUserHaveRoyalBike: boolean) {
    this.isUserHaveRoyalBike = isUserHaveRoyalBike
    router.push({ name: ViewName.LOGIN })
  }

  mounted() {
    this.updateLandingScreenData()
    this.showSplashScreen = true
    setTimeout(() => {
      this.showSplashScreen = !this.showSplashScreen
    }, 2000)
  }
}
