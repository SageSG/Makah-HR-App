<template>
  <div class="pdf-view"></div>
</template>

<script>
import PSPDFKit from "pspdfkit";

export default {
  props: {
    pdfFile: {
      type: String,
      required: true,
    },
  },
  watch: {
    pdfFile(val) {
      if (val) {
        this.loadPSPDFKit();
      }
    },
  },
  methods: {
    async loadPSPDFKit() {
      PSPDFKit.unload(".pdf-view");
      return PSPDFKit.load({
        // import the PDF File from properties
        document: this.pdfFile,
        container: ".pdf-view",
      });
    },
  },
  beforeUnmount() {
    PSPDFKit.unload(".pdf-view");
  },
  mounted() {
    this.loadPSPDFKit().then((instance) => {
      this.$emit("loaded", instance);
    });
  },
};
</script>
<style scoped>
.pdf-view {
  height: 100vh;
}
</style>
