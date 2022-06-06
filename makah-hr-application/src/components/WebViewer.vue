<template>
  <div id="webviewer" ref="viewer"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import WebViewer from "@pdftron/webviewer";

export default {
  name: "WebViewer",
  props: { initialDoc: { type: String } },
  setup(props) {
    const viewer = ref(null);
    onMounted(() => {
      const path = `${process.env.BASE_URL}webviewer`;
      const input = "@public/assets/John Doe_PayslipOct.pdf";

      WebViewer(
        {
          path,
          initialDoc: props.initialDoc,
          //   documentType: 'xod',
          disabledElements: ["header", "toolsHeader"],
        },
        viewer.value
      ).then((instance) => {
        instance.UI.loadDocument(input, {
          extension: "pdf",
        });
      });
    });
    return { viewer };
  },
};
</script>


<style scoped>
#webviewer {
  height: 60vh;
}
</style>