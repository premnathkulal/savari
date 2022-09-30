const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                    @import '~@/scss/_variables.scss';
                    @import '~@/scss/_reset.scss';
                    @import '~@/scss/_common.scss';
                `,
      },
    },
  },
})
