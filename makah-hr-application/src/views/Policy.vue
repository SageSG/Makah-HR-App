<template>
  <ion-page>
      <TopToolbar/>
    <ion-content :fullscreen="true">
      <ion-grid class="grid-main">
        <ion-row class="ion-align-items-center back" @click="back()">
          <ion-col size="1">
            <ion-icon :icon="arrowBack"></ion-icon>
          </ion-col>
          <ion-col size="6" style="margin-bottom: 3px">
          </ion-col>
        </ion-row>

        <ion-row class="taskTitle ion-justify-content-between" style="margin-top: 10px">
            <ion-col size="12" style="text-align:center"> <h5>MAKAH Company Policies</h5> </ion-col>
          </ion-row>

        <ion-row>
          <ion-col size="12">
            <ion-grid>
              <ion-row>
                <ion-col size="12">
                  <p>
                    The Employee Code of Conduct and Ethics sets out the standards of behavior by 
                    which we deal with our customers, business associates, stakeholders and each other. All MAKAH employees 
                    are expected to follow this Code and portray the highest professional standards in 
                    performing daily operation. It is the responsibility of all employee to comply with the Company’s
                    guidelines, policies, regulations and rules in all areas, including attendance, safe work practices 
                    and professional conduct at all times. For the purposes of this Policy, the “Company” shall refer 
                    to MAKAH Inc. or any of its subsidiaries and/or related companies and/or designated associate 
                    companies.<br><br> 
                  </p>
                  <p>
                    The Company reserves the right to amend the guidelines, policies (including this Code), 
                    regulations and rules of the Company from time to time, such amendment being binding on the 
                    employee from the date of such amendment.
                  </p>
                </ion-col>
                <ion-row
                  style="width:100%; margin:24px;"
                  class="ion-justify-content-center"
                >
                <ion-button class="signatureButton" @click="openModal">Click here to sign</ion-button
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
import { ellipsisVerticalSharp, arrowBack } from "ionicons/icons";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
  modalController,
  IonButton,
} from "@ionic/vue";
import Modal from '../modals/signature.vue'
import TopToolbar from "@/components/TopNav.vue";
export default {
  name: "Document",
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
    TopToolbar,
    IonButton
  },
  setup() {
    return {
      ellipsisVerticalSharp,
      arrowBack,
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    async openModal() {
      const modal = await modalController
        .create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: 'Please sign here',
            id: this.$route.params.id,
          },
        })
      return modal.present();
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
  width:240px;
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
