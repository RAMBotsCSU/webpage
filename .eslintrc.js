module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "plugin:vue/base", // Equivalent to vue.configs['flat/base']
      "plugin:vuetify/base", // Equivalent to vuetify.configs['flat/base']
    ],
    rules: {
      "vue/no-v-text-v-html-on-component": "off",
    },
  };
