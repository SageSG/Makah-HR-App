<template>
  <ion-page>
    <TopToolbar />
    <ion-content :fullscreen="true">
      <div class="welcome-wrapper" style="margin-top: 4px">
        <ion-row class="ion-justify-content-start">
          <ion-col size="12">
            <h3 class="title" @click="goToPage()">Welcome, {{ homeName }}!</h3>
          </ion-col>
        </ion-row>
      </div>
      <ion-grid class="grid-main">
        <div class="card-wrapper" style="margin-top: 4px">
          <ion-row class="taskTitle ion-justify-content-between">
            <ion-col size="6" style="margin-bottom: 4px">
              <h5>Pending Tasks</h5>
            </ion-col>
            <ion-col size="6" style="text-align: right">
              <router-link class="link" to="/Onboarding">See More</router-link>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12" style="padding: 0">
              <ion-grid class="ion-grid">
                <ion-row size="12" class="taskList">
                  <ion-col size="10"> Task </ion-col>
                  <ion-col size="2" style="text-align: center"> Due </ion-col>
                </ion-row>
                <ion-row
                  size="12"
                  class="ion-align-items-center singleTask"
                  :hidden="taskCompleted[0]"
                  @click="goToTask(3)"
                >
                  <ion-col size="7" class="truncate">
                    Acknowledge company policy document
                  </ion-col>
                  <ion-col size="3" class="statusBox-ip"> In-Progess </ion-col>
                  <ion-col size="2" style="text-align: center"> 28/10 </ion-col>
                </ion-row>
                <ion-row
                  size="12"
                  class="ion-align-items-center singleTask"
                  :hidden="taskCompleted[1]"
                  @click="goToTask(4)"
                  v-if="!task4"
                >
                  <ion-col size="7" class="truncate"> Safety briefing </ion-col>
                  <ion-col v-if="!taskclick4" size="3" class="statusBox-ns">
                    Not Started
                  </ion-col>
                  <ion-col v-if="taskclick4" size="3" class="statusBox-ip">
                    In-Progress
                  </ion-col>
                  <ion-col size="2" style="text-align: center"> 31/10 </ion-col>
                </ion-row>
                <ion-row
                  size="12"
                  class="ion-align-items-center singleTask"
                  :hidden="taskCompleted[2]"
                  @click="goToTask(5)"
                  v-if="!task5"
                >
                  <ion-col size="7" class="truncate">
                    Complete HR quiz
                  </ion-col>
                  <ion-col v-if="!taskclick5" size="3" class="statusBox-ns">
                    Not Started
                  </ion-col>
                  <ion-col v-if="taskclick5" size="3" class="statusBox-ip">
                    In-Progress
                  </ion-col>
                  <ion-col size="2" style="text-align: center"> 3/11 </ion-col>
                </ion-row>
                <ion-row
                  size="12"
                  class="ion-align-items-center singleTask"
                  style="text-align: center"
                  v-if="task5"
                >
                  <ion-col size="12" class="truncate"
                    ><b> No Pending Tasks Left </b></ion-col
                  >
                </ion-row>
              </ion-grid>
            </ion-col>
          </ion-row>
        </div>
        <hr />
        <div class="card-wrapper">
          <ion-row
            class="taskTitle ion-padding-top ion-justify-content-between"
          >
            <ion-col size="6"><h5>Leaves</h5></ion-col>
            <ion-col size="6" style="text-align: right">
              <router-link class="link" to="/Leaves">See More</router-link>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-slides pager="false" :options="slideOpts">
                <ion-slide>
                  <ion-grid class="widget">
                    <ion-row class="ion-justify-content-end">
                      <ion-col size="3" class="ion-align-self-end">
                        <ion-icon :icon="airplaneOutline" />
                      </ion-col>
                      <ion-col size="3"> </ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-center">
                      <ion-row size="12"> Annual </ion-row>
                      <ion-row size="12">
                        <b>{{ leaves[0] }} Days</b>
                      </ion-row>
                    </ion-row>
                  </ion-grid>
                </ion-slide>

                <ion-slide>
                  <ion-grid class="widget">
                    <ion-row class="ion-justify-content-end">
                      <ion-col size="3" class="ion-align-self-end">
                        <ion-icon :icon="medicalOutline" />
                      </ion-col>
                      <ion-col size="3"> </ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-center">
                      <ion-row size="12"> Medical </ion-row>
                      <ion-row size="12">
                        <b>{{ leaves[1] }} Days</b>
                      </ion-row>
                    </ion-row>
                  </ion-grid>
                </ion-slide>

                <ion-slide>
                  <ion-grid class="widget">
                    <ion-row class="ion-justify-content-end">
                      <ion-col size="3" class="ion-align-self-end">
                        <ion-icon :icon="peopleOutline" />
                      </ion-col>
                      <ion-col size="3"> </ion-col>
                    </ion-row>
                    <ion-row
                      class="min-width: 77px; ion-justify-content-center"
                    >
                      <ion-row class="ion-justify-content-center">
                        <ion-row
                          size="12"
                          style="min-width: 77px; justify-content: center"
                        >
                          Family</ion-row
                        >
                        <ion-row size="12">
                          <b>{{ leaves[2] }} Days</b>
                        </ion-row>
                      </ion-row>
                    </ion-row>
                  </ion-grid>
                </ion-slide>

                <ion-slide>
                  <ion-grid class="widget">
                    <ion-row class="ion-justify-content-end">
                      <ion-col size="3" class="ion-align-self-end">
                        <ion-icon :icon="balloonOutline" />
                      </ion-col>
                      <ion-col size="3"> </ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-center">
                      <ion-row size="12"> Birthday </ion-row>
                      <ion-row size="12">
                        <b>{{ leaves[3] }} Days</b>
                      </ion-row>
                    </ion-row>
                  </ion-grid>
                </ion-slide>

                <ion-slide>
                  <ion-grid class="widget">
                    <ion-row class="ion-justify-content-end">
                      <ion-col size="3" class="ion-align-self-end">
                        <ion-icon :icon="roseOutline" />
                      </ion-col>
                      <ion-col size="3"> </ion-col>
                    </ion-row>
                    <ion-row class="ion-justify-content-center">
                      <ion-row size="12"> Compassion </ion-row>
                      <ion-row size="12">
                        <b>&infin; Days</b>
                      </ion-row>
                    </ion-row>
                  </ion-grid>
                </ion-slide>
              </ion-slides>
            </ion-col>
          </ion-row>
        </div>
        <hr />
        <div class="card-wrapper">
          <ion-row
            size="12"
            class="taskTitle ion-padding-top ion-justify-content-start"
          >
            <ion-col size="6" style="margin-bottom: 4px"
              ><h5>Payslips</h5></ion-col
            >
            <ion-col size="6" style="text-align: right">
              <router-link class="link" to="/Payslips">See More</router-link>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12">
              <ion-row size="12" class="taskList" style="margin-top: 10px">
                <ion-col size="6"> Payslip </ion-col>
                <ion-col size="6">
                  <div>Last updated</div>
                </ion-col>
              </ion-row>
              <ion-row size="12" class="ion-align-items-center singleTask">
                <ion-col size="6">
                  <div v-on:click="checkPassword('view', 1)">
                    <h6>October 2021 <br /></h6>
                    <p>Regular payroll</p>
                  </div>
                </ion-col>

                <ion-col size="3" style="padding: 0">
                  <div>31/10/21</div></ion-col
                >

                <ion-col size="3">
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
        </div>
      </ion-grid>
      <ion-toast
        :is-open="toast"
        message="Your Payslip is downloading..."
        :duration="2000"
        @didDismiss="setTest(false)"
        position="top"
      >
      </ion-toast>
      <ion-toast
        :is-open="downloaded"
        message="Your Payslip is downloaded"
        :duration="4000"
        color="primary"
        @didDismiss="downloaded = false"
        position="top"
      >
      </ion-toast>
      
    </ion-content>
  </ion-page>
</template>
<script>
import TopToolbar from "@/components/TopNav.vue";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonSlides,
  IonSlide,
  IonIcon,
  alertController,
  IonToast,
  // IonImg,
} from "@ionic/vue";
import {
  imageSharp,
  ellipsisVerticalSharp,
  airplaneOutline,
  medicalOutline,
  peopleOutline,
  balloonOutline,
  roseOutline,
  downloadOutline,
} from "ionicons/icons";

export default {
  name: "Home",
  components: {
    IonContent,
    IonPage,
    IonSlides,
    IonSlide,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
    TopToolbar,
    IonToast,
  },
  // configurations for slider
  setup() {
    const slideOpts = {
      slidesPerView: 3.5,
      initialSlide: 0,
      speed: 400,
      spaceBetween: 20,
    };

    return {
      imageSharp,
      ellipsisVerticalSharp,
      airplaneOutline,
      medicalOutline,
      peopleOutline,
      balloonOutline,
      roseOutline,
      slideOpts,
      downloadOutline,
    };
  },
  data() {
    return {
      docInfo: [
        [
          "October 2021",
          "October Pay",
          "This is a summary of your October Pay.",
        ],
        [
          "September 2021",
          "September Pay",
          "This is a summary of your September Pay.",
        ],
        ["August 2021", "August Pay", "This is a summary of your August Pay."],
      ],
      taskclick4: false,
      taskclick5: false,
      toast: false,
      downloaded: false,
    };
  },
  computed: {
    // computed data with data store
    homeName() {
      return this.$store.state.name;
    },
    leaves() {
      return [
        this.$store.state.annualLeaves,
        this.$store.state.medicalLeaves,
        this.$store.state.familyLeaves,
        this.$store.state.birthdayLeaves,
      ];
    },
    taskCompleted() {
      return [
        this.$store.state.task3,
        this.$store.state.task4,
        this.$store.state.task5,
      ];
    },
    task3: function () {
      // `this` points to the vm instance
      return this.$store.state.task3;
    },
    task4: function () {
      // `this` points to the vm instance
      return this.$store.state.task4;
    },
    task5: function () {
      // `this` points to the vm instance
      return this.$store.state.task5;
    },
  },
  methods: {
    // allow the user to select the task
    goToTask(num) {
      switch (num) {
        case 3:
          this.$router.push({ name: "Op", params: { id: 0 } });
          break;
        case 4:
          if (!this.task3) {
            this.doPrevTask(
              "Unable to start this task. Please complete the previous task first."
            );
            break;
          }
          this.taskclick4 = true;
          this.$router.push({ name: "St", params: { id: 1 } });
          break;
        case 5:
          if (!this.task4) {
            this.doPrevTask(
              "Unable to start this task. Please complete the previous task first."
            );
            break;
          }
          this.taskclick5 = true;
          this.$router.push({ name: "Qz", params: { id: 2 } });
          break;
        default:
          console.log("no such task");
          break;
      }
    },
    // check if the previous task is completed
    doPrevTask(alertText) {
      return alertController
        .create({
          header: "Task Incomplete",
          message: alertText,
          buttons: [
            {
              text: "Okay",
              handler: () => {
                console.log("Confirm Okay");
              },
            },
          ],
        })
        .then((a) => a.present());
    },
    // prompt for user to key in password
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
              handler: () => {
                console.log("Confirm Cancel");
              },
            },
            {
              text: "Proceed",
              handler: (alertData) => {
                if (
                  !alertData.password ||
                  alertData.password != this.$store.state.password
                ) {
                  this.enterPassword();
                  return;
                }
                if (type == "view") {
                  const data = this.docInfo[row - 1];
                  this.$router.push({ name: "ps", params: { data } });
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
    // allow the toast to show download has started
    downloadPayslip() {
      return alertController
        .create({
          header: "Download Payslip",
          message:
            "Are you sure you want to download this payslip?",
          buttons: [
            {
              text: "No",
              role: "cancel",
              cssClass: "secondary",
              handler: () => {
                console.log("Confirm Cancel");
              },
            },
            {
              text: "Yes",
              handler: () => {
                this.confirmedDownload();
                this.toastDownload();
              },
            },
          ],
        })
        .then((a) => a.present());
    },
    // show that the downlaod is completed
    confirmedDownload() {
      return alertController
        .create({
          header: "Download Successful",
          message: "Your payslip has been downloaded successfully!",
          buttons: ["Return"],
        })
        .then((a) => a.present());
    },
    // to open and close the toast
    toastDownload() {
      this.toast = true;
    },
    setTest(bol) {
      this.toast = bol;
      this.downloaded = true;
    },
    // tell user to re-enter password
    enterPassword() {
      return alertController
        .create({
          header: "Invalid Password",
          message: "Please key in the right password",
          buttons: ["Return"],
        })
        .then((a) => a.present());
    },
  },
};
</script>

<style scoped>

.welcome-wrapper {
  padding: 24px 4px 24px 18px;
  margin-top: 0px !important;
  background: linear-gradient(
    45deg,
    rgba(62, 49, 162, 1) 0%,
    rgba(97, 76, 249, 1) 53%,
    rgba(141, 125, 255, 1) 100%
  );
  color: white;
}

h6 {
  color: #614cf9;
}

.dl-icon {
  width: 24px;
  height: 24px;
  color: var(--ion-color-primary)
}

</style>