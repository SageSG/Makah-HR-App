<template>
  <div id="app">
    <PSPDFKitContainer :pdfFile="pdfFile" @loaded="handleLoaded" />
  </div>
</template>

<script>
import PSPDFKitContainer from "@/components/PSPDFKitContainer";

export default {
  data() {
    return {
      pdfFile: this.pdfFile || "/John Doe_PayslipOct.pdf",
    };
  },
  components: {
    PSPDFKitContainer,
  },
  methods: {
    handleLoaded(instance) {
      console.log("PSPDFKit has loaded: ", instance);
      // do something
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
