const tab = {
  methods: {
    change(name) {
      this.active !== name &&
        this.$emit("update:active", name).$emit("change", name);
    }
  },
  props: {
    active: {
      type: [Number, String, Object],
      required: true
    },
    layout: {
      type: String,
      default: "default"
    }
  }
};

export { tab };
