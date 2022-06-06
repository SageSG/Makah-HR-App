<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row
          class="ion-align-items-center ion-margin-top ion-margin-bottom"
          @click="back()"
        >
          <ion-col size="1">
            <ion-icon :icon="arrowBackCircleOutline"></ion-icon>
          </ion-col>
          <ion-col size="2">
            Back
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12">
            <ion-grid class="listColor">
              <ion-row size="12" class="documentTitle">
                <ion-col size="12"> <h5>MAKAH Email</h5> </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12">
                  <p>
                    User: {{homeName}} 
                    <br /><br />
                  </p>
                  <p>
                    Password: {{passWord}}
                  </p>
                </ion-col>
                <ion-row
                  style="width:100%; margin:24px;"
                  class="ion-justify-content-center"
                >
                </ion-row>
              </ion-row>
            </ion-grid>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { ellipsisVerticalSharp, arrowBackCircleOutline } from "ionicons/icons";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
} from "@ionic/vue";

export default {
  name: "Document",
  data: () => ({
    options: {
      penColor: "#c0f",
    },
  }),
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
  },
  setup() {
    return {
      ellipsisVerticalSharp,
      arrowBackCircleOutline,
    };
  },
  computed:{
    homeName(){
      return this.$store.state.name
    },
    passWord(){
      return this.$store.state.password
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.documentTitle {
  text-align: center;
  margin: 24px;
}
.signatureButton {
  padding: 12px;
  width: 80%;
  margin: auto;
  background: lightgrey;
}
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.container {
  width: "100%";
  padding: 8px 16px;
}

.buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
}
</style>
