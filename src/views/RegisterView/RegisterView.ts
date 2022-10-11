import { Options, Vue } from 'vue-class-component'
import InputBox from '@/components/input-box/input-box.vue'

@Options({
  components: {
    InputBox,
  },
})
export default class LoginView extends Vue {
  userName = ''
  password = ''

  handleInputAction(event: KeyboardEvent) {
    const id = (event.target as HTMLInputElement).id
    const value = (event.target as HTMLInputElement).value

    switch (id) {
      case 'userName':
        this.userName = value
        break
      case 'password':
        this.password = value
        break
    }
  }

  formSubmitHandler(): void {
    const userInfo = {
      userName: this.userName,
      password: this.password,
    }
    console.log(userInfo)
  }
}
