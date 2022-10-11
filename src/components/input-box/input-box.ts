import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    inputFor: {
      type: String,
      default: '',
    },

    value: {
      type: String,
      default: '',
    },

    fieldId: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    inputType: {
      type: String,
      default: 'text',
    },
  },
})
export default class InputBox extends Vue {
  inputFor!: string
  value!: string
  fieldId!: string
  placeholder!: string
  inputType!: string
  inputTypeValue = ''
  apedIconName = ''
  prependIconName = ''

  handleIcons(): void {
    this.inputTypeValue = this.inputType

    switch (this.inputFor) {
      case 'user-name':
        this.prependIconName = 'fa-regular fa-user'
        break
      case 'password':
        this.prependIconName = 'a-solid fa-lock'
        this.apedIconName = 'fa-regular fa-eye'
        break
    }
  }

  toggleIcon(): void {
    if (this.inputFor === 'password') {
      this.apedIconName =
        this.apedIconName === 'fa-regular fa-eye'
          ? 'fa-regular fa-eye-slash'
          : 'fa-regular fa-eye'

      this.inputTypeValue =
        this.inputTypeValue && this.inputTypeValue === 'text'
          ? 'password'
          : 'text'
    }
  }

  mounted(): void {
    this.handleIcons()
  }
}
