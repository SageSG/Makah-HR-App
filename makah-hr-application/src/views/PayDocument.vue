<template>
  <ion-page>
    <TopToolbar />
    <ion-content :fullscreen="true">
      <ion-grid class="grid-main">
        <ion-row class="ion-align-items-center back" @click="back()">
          <ion-col size="1">
            <ion-icon :icon="arrowBack"></ion-icon>
          </ion-col>
        </ion-row>

        <ion-row class="singleTask">
          <ion-col size="6" style="padding-left: 8px">
            <h4 class="title" style="margin: 0">{{ data[0] }}</h4>
            <p style="padding-top:2px;">Regular payroll</p>
          </ion-col>
          <ion-col class="btn-col" size="6">
            
            <ion-button
              @click="downloadPayslip()"
              color="primary"
              class="dl-btn"
              >Download</ion-button
            >
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-img src="assets/PayslipImg.png" style="margin:0 24px 8px 24px"/>
      <ion-toast
    :is-open="toast"
    message="Your payslip is downloading..."
    :duration="2000"
    @didDismiss="completeDownload(false)"
    position="top"
  >
  </ion-toast>
  <ion-toast
    :is-open="downloaded"
    message="Your payslip is downloaded successfully!"
    :duration="4000"
    color="primary"
    @didDismiss="downloaded=false"
    position="top"
  >
  </ion-toast>
    </ion-content>
  </ion-page>
</template>

<script>
import { ellipsisVerticalSharp, arrowBack } from "ionicons/icons";
import TopToolbar from "@/components/TopNav.vue";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
  alertController,
  IonButton,
  IonImg,
  IonToast,
} from "@ionic/vue";

export default {
  name: "PayDocument",
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
    IonButton,
    IonImg,
    TopToolbar,
    IonToast,
  },
  props: ["data"],
  setup() {
    return {
      ellipsisVerticalSharp,
      arrowBack,
    };
  },
  data() {
    return {
    pdfFile: this.pdfFile || "/John Doe_PayslipOct.pdf",
    toast: false,
      downloaded: false,
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    // prompt user if they would like to download the payslip
    downloadPayslip() {
      return alertController
        .create({
          header: "Download Payslip",
          message: "Are you sure you want to download this payslip?",
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
              handler: () => {
                console.log("Confirm Cancel");
              },
            },
            {
              text: "Confirm",
              handler: () => {
                this.confirmedDownload();
                this.toastDownload();
              },
            },
          ],
        })
        .then((a) => a.present());
    },
    // confirm download after payslip is downloaded
    confirmedDownload() {
      return alertController
        .create({
          header: "Download Successful",
          message: "Your payslip has been downloaded successfully!",
          buttons: ["Return"],
        })
        .then((a) => a.present());
    },
    // show that toast of download
    toastDownload(){
      this.toast=true
    },
    // show the download is completed toast
    completeDownload(bol){
      this.toast=bol
      this.downloaded=true
    },
  },
};
</script>

<style scoped>
.btn-col {
  text-align: right;
  padding-right: 16px;
  margin-top: auto;
  margin-bottom: auto;
}

.pdf-view{
  display:absolute;
  z-index:-1;
}
</style>