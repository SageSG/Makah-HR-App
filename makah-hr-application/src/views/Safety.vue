<template>
  <ion-page>
    <TopToolbar/>
    <ion-content :fullscreen="true">
      <ion-grid class="grid-main">
        <ion-row class="ion-align-items-center back" @click="back()">
          <ion-col size="1">
            <ion-icon :icon="arrowBack"></ion-icon>
          </ion-col>
        </ion-row>
        <ion-row class="taskTitle ion-justify-content-between">
            <ion-col size="12" style="text-align:center"> <h5>Workplace Safety Briefing</h5> </ion-col>
          </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-grid>
              <ion-row>
                <ion-col size="12">
                  <p>
                    In the event of an emergency and if we are required to
                    evacuate the building, there are two nearest emergency exits
                    out of the building from this floor which are:
                    <br /><br />
                  </p>
                  <p>
                    1) From this floor, you can exit out of the building through
                    the main entrance.
                  </p>
                  <br />
                  <p>
                    2) From the floor on the left, you can exit out of the
                    building through the staff entrance at the loading bay
                    area.<br /><br />
                  </p>
                  <p>
                    3) The emergency staircase is located next to the lift landing.
                    <br />
                    <br />
                  </p>
                  <p>
                    4) Once you have exitted the building, please proceed to the
                    Fountain Of Wealth located opposite our Headquarters and
                    await further instructions by the appointed Safety Warden.
                  </p>
                  
                </ion-col>
                <br />
              </ion-row>
              <ion-row style="margin-top:24px; justify-content:center; ">
                  <iframe
                    width="400"
                    height="240"
                    src="https://www.youtube.com/embed/cYVBVx-dX6k"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>

                <ion-row
                  style="width: 100%; margin: 24px"
                  class="ion-justify-content-center"
                >
                  <ion-button @click="presentAlertConfirm"
                    >Acknowledge</ion-button
                  >
                </ion-row>
              </ion-row>
            </ion-grid>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-toast
    :is-open="taskcomplete"
    message="Safety briefing acknowledged"
    :duration="2500"
    color="success"
    @didDismiss="this.$router.go(-1);"
    position="top"
  ></ion-toast>
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
  IonToast,
} from "@ionic/vue";

export default {
  name: "Document",
  data: () => ({
    options: {
      penColor: "#c0f",
    },
    taskcomplete: false,
    signed: true,
  }),
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
    IonButton,
    TopToolbar,
    IonToast,
  },
  setup() {
    return {
      ellipsisVerticalSharp,
      arrowBack,
    };
  },
  mounted() {},
  methods: {
    back() {
      this.$router.back();
    },
    // show the event is completed
    presentAlert() {
      return alertController
        .create({
          message: "Safety briefing completed successfully!",
          buttons: [
            {
              text: "Return",
              handler: () => {
                
                this.$store.commit("changeTaskComplete", parseInt(this.id));
                console.log(this.$store.state.task4);
                this.taskcomplete = true;
              },
            },
          ],
        })
        .then((a) => a.present());
    },
  // show that user is clear with instructions
    presentAlertConfirm() {
      return alertController
        .create({
          header: "Confirm submission",
          message:
            "By proceeding, you acknowledge that you have read the safety guidelines.",
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
              handler: (blah) => {
                console.log("Confirm Cancel:", blah);
              },
            },
            {
              text: "Confirm",
              handler: () => {
                this.$store.commit(
                  "changeTaskComplete",
                  parseInt(this.$route.params.id)
                );
                this.presentAlert();
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
