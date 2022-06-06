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
            <ion-grid >
              <ion-row size="12" >
                <ion-col size="12"><h5>Hi {{homeName}}, How Can We Help?</h5> </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12">
                  <ion-col size="12">Ask anything: </ion-col>
          <ion-col size="12">
            <ion-textarea class="remarksText"> </ion-textarea>
          </ion-col>
                </ion-col>
                <ion-row>
        
        </ion-row>
                <ion-row style="width: 100%; margin-top:16px; margin-bottom:16px;" class="ion-justify-content-center">
          <ion-button @click="sentEmail()">Submit</ion-button>
        </ion-row>
        <ion-row>
        <ion-col size="12">
                  <ion-col size="5">Call Us: </ion-col>
                  <ion-col size="7" >6592 1136 </ion-col>
          </ion-col>
        <ion-col size="12">
          <ion-col size="5" >Email Us: </ion-col>
                  <ion-col size="7" >SkillsFutureWS@Singaporetech.edu.sg </ion-col>
          </ion-col>
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
  IonTextarea,
  IonButton,
  alertController
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
    IonTextarea,
    IonButton
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
    // alert modal prompts input is invalid
    sentEmail() {
      return alertController
        .create({
          header: "Support Email Sent",
          message: "Please wait 3 business days for a reply",
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                this.$router.back();
              },
            },
          ],
        })
        .then((a) => a.present());
    },
  },
};
</script>

<style scoped>

.buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
}

.remarksText{
  background:white;
  height: 300px;
  margin-top:16px;
}
</style>
