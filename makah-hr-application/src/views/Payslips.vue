<template>
  <ion-page>
    <TopToolbar/>
    <ion-content :fullscreen="true">
      <ion-grid class="grid-main">
        <ion-row class="ion-justify-content-start">
          <ion-col size="12">
            <h3 class="title">Payslips</h3>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12">
            <ion-row size="12" class="taskList" style="margin-top: 10px">
              <ion-col size="6"> Payslip </ion-col>
              <ion-col size="6">
                <div >Last updated</div>
              </ion-col>
            </ion-row>
            <ion-row size="12" class="ion-align-items-center singleTask">
              <ion-col size="6">
                <div v-on:click="checkPassword('view',1)">
                  <h6>October 2021 <br /></h6>
                  <p>Regular payroll</p>
                </div>
              </ion-col>

              <ion-col size="3"  style="padding:0">
                <div>31/10/21</div></ion-col
              >

              <ion-col size="3" >
                <ion-row class="ion-justify-content-around">
                
                <ion-col size="1">
                  <ion-icon
                    :icon="downloadOutline"
                    @click="checkPassword('download', 0)"
                    size="small"
                    class="dl-icon"
                  ></ion-icon>
                </ion-col>
                </ion-row>
              </ion-col>
            </ion-row>

            <ion-row size="12" class="ion-align-items-center singleTask">
              <ion-col size="6">
                <div v-on:click="checkPassword('view', 2)">
                  <h6>September 2021 <br /></h6>
                  <p>Regular payroll</p>
                </div>
              </ion-col>
              <ion-col size="3" style="padding:0">
                <div>29/09/21</div></ion-col
              >
              
              <ion-col size="3" >
                <ion-row class="ion-justify-content-around">
                
                <ion-col size="1">
                  <ion-icon
                    :icon="downloadOutline"
                    @click="checkPassword('download', 0)"
                    size="small"
                    class="dl-icon"
                  ></ion-icon>
                </ion-col>
                </ion-row>
              </ion-col>
              
            </ion-row>

            <ion-row size="12" class="ion-align-items-center singleTask">
              <ion-col size="6">
                <div v-on:click="checkPassword('view', 3)">
                  <h6>August 2021 <br /></h6>
                  <p>Regular payroll</p>
                </div>
              </ion-col>
              <ion-col size="3" style="padding:0">
                <div>31/08/21</div></ion-col
              >
                <ion-col size="3" >
                <ion-row class="ion-justify-content-around">
                
                <ion-col size="1">
                  <ion-icon
                    :icon="downloadOutline"
                    @click="checkPassword('download', 0)"
                    size="small"
                    class="dl-icon" 
                  ></ion-icon>
                </ion-col>
                </ion-row>
              </ion-col>
            </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
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
import TopToolbar from "@/components/TopNav.vue";
import {
  ellipsisVerticalSharp,
  warningOutline,
  downloadOutline,
  eyeOutline,
} from "ionicons/icons";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
  alertController,
  IonToast
} from "@ionic/vue";

export default {
  name: "Payslips",
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
    TopToolbar,
    IonToast
  },
  setup() {
    return {
      ellipsisVerticalSharp,
      warningOutline,
      downloadOutline,
      eyeOutline,
    };
  },
  data() {
    return {
      docInfo:[
      ["October 2021", "October Pay", "This is a summary of your October Pay."], 
      ["September 2021", "September Pay", "This is a summary of your September Pay."], 
      ["August 2021", "August Pay", "This is a summary of your August Pay."]],
      toast: false,
      downloaded: false,
    }
  },
  methods: {
    // Prompt user to enter password and verify
    checkPassword(type, row) {
      return alertController
        .create({
          header: "Enter Password",
          message: "This document is protected. Enter password to continue.",
          inputs: [
            {
              name: "password",
              type: "password",
              placeholder: "Enter your password",
            },
          ],
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
              text: "Proceed",
              handler: (alertData) => {
                if(!alertData.password || alertData.password != this.$store.state.password){
                  this.enterPassword()
                  return;
                }
                if (type == "view") {
                  const data = this.docInfo[row-1]
                  this.$router.push({name: "ps", params: { data }});
                } else if (type == "appeal") {
                  this.$router.push("/Payslips/Appeal");
                } else if (type == "download") {
                  this.downloadPayslip();
                }
              },
            },
          ],
        })
        .then((a) => a.present());
    },
    // prompt password for the user for download of payslip and then toast drop
    downloadPayslip() {
      return alertController
        .create({
          header: "Download Payslip",
          message:
            "Are you sure you want to download this payslip?",
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
    // ensure user has succesfully downloaded the payslip
    confirmedDownload() {
      return alertController
        .create({
          header: "Download Successful",
          message: "Your payslip has been downloaded successfully!",
          buttons: ["Return"],
        })
        .then((a) => a.present());
    },
    // for user to know the download has started
    toastDownload(){
      this.toast=true
    },
    // to let user know the download is completed
    completeDownload(bol){
      this.toast=bol
      this.downloaded=true
    },
    // to prompt for user password
    enterPassword() {
      return alertController
        .create({
          header: "Invalid Password",
          message: "Please key in the right password",
          buttons: ["Try again"],
        })
        .then((a) => a.present());
    },
  },
};
</script>

<style scoped>
* {
  /* border:1px solid grey; */
  /* padding:0; */
}
h6 {
  color: var(--ion-color-primary);
}

ion-fab {
  float: right;
  z-index: revert;
  /* z-index: 1; */
}

ion-fab-list {
  margin: 52px 0px;
  z-index: 100;
}

ion-fab-list ion-fab-button {
  border-radius: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

ion-fab .fab-list-active .fab-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn ease 0.3s;
  -webkit-animation: fadeIn ease 0.3s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.singleTask {
  margin-bottom: 8px;
}

router-link,
a {
  text-decoration: none;
  color: black;
}

.dl-icon{
  width:24px;
  height:24px;
  color: var(--ion-color-primary)
}
</style>