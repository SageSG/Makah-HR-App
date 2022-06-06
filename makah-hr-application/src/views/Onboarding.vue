<template>
  <ion-page>
    <TopToolbar />
    <ion-content :fullscreen="true">
      <ion-grid class="grid-main">
        <ion-row class="ion-justify-content-start">
          <ion-col size="12" style="margin-bottom: 5px">
            <h3 class="title">Onboarding</h3>
          </ion-col>
        </ion-row>

        <ion-row class="taskTitle ion-justify-content-between">
          <ion-col size="6" style="margin-bottom: 5px">
            <h5>My Progress</h5>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" style="padding:0">
            <ion-row class="taskContainer">
              <ion-col><div class="doneTask taskBox">&#10003;</div></ion-col>
              <ion-col><div class="doneTask taskBox">&#10003;</div></ion-col>
              <ion-col
                ><div class="taskBox" v-if="!task3">3</div>
                <div class="doneTask taskBox" v-else>&#10003;</div></ion-col
              >
              <ion-col
                ><div class="taskBox" v-if="!task4">4</div>
                <div class="doneTask taskBox" v-else>&#10003;</div></ion-col
              >
              <ion-col
                ><div class="taskBox" v-if="!task5">5</div>
                <div class="doneTask taskBox" v-else>&#10003;</div></ion-col
              >
            </ion-row>
            <ion-row class="taskContainer">
              <ion-col style="padding-top:0; padding-bottom:0;"><div class="taskDesc">Task 1</div></ion-col>
              <ion-col style="padding-top:0; padding-bottom:0;"><div class="taskDesc">Task 2</div></ion-col>
              <ion-col style="padding-top:0; padding-bottom:0;"><div class="taskDesc">Task 3</div></ion-col>
              <ion-col style="padding-top:0; padding-bottom:0;"><div class="taskDesc">Task 4</div></ion-col>
              <ion-col style="padding-top:0; padding-bottom:0;"><div class="taskDesc">Task 5</div></ion-col>
            </ion-row>
          </ion-col>
        </ion-row>
        <hr />
        <ion-row class="taskTitle ion-padding-top ion-justify-content-between" style="margin-top: 12px">
          <ion-col size="6"><h5>Pending Tasks</h5></ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12">
            <ion-grid style="padding:0">
              <ion-row size="12" class="taskList">
                <ion-col size="10" :hidden="task5"> Task </ion-col>
                <ion-col size="2" style="text-align: center" :hidden="task5">
                  Due
                </ion-col>
              </ion-row>
              <ion-row
                size="12"
                class="ion-align-items-center singleTask"
                :hidden="taskCompleted[0]"
                @click="goToTask(3)"
                v-if="!task3"
              >
                <ion-col size="7" class="truncate">
                  Acknowledge company policy document
                </ion-col>
                <ion-col size="3" class="statusBox-ip"> In-Progress </ion-col>
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
                <ion-col size="7" class="truncate"> Complete HR quiz </ion-col>
                <ion-col v-if="!taskclick5" size="3" class="statusBox-ns">
                  Not Started
                </ion-col>
                <ion-col v-if="taskclick5" size="3" class="statusBox-ip">
                  In-Progress
                </ion-col>
                <ion-col size="2" style="text-align: center"> 3/11 </ion-col>
              </ion-row>
            </ion-grid>
          </ion-col>
        </ion-row>

        <hr />
        <ion-row class="taskTitle ion-padding-top ion-justify-content-between" style="margin-top: 12px">
          <ion-col size="6"><h5>Completed Tasks</h5></ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12">
            <ion-grid style="padding:0">
              <ion-row size="12" class="taskList">
                <ion-col size="10"> Task </ion-col>
                <ion-col size="2" style="text-align: center"> Due </ion-col>
              </ion-row>
              <ion-row
                size="12"
                class="ion-justify-content-between singleTask"
                @click="this.$router.push('/Onboarding/MakahEmail')"
              >
                <ion-col size="7" class="truncate">
                  Set-up MAKAH e-mail
                </ion-col>
                <ion-col size="3" class="statusBox-cpt"> Completed </ion-col>

                <ion-col size="2" style="text-align: center"> 19/10 </ion-col>
              </ion-row>
              <ion-row
                size="12"
                class="ion-justify-content-between singleTask"
                @click="this.$router.push('/Onboarding/PersonalParticulars')"
              >
                <ion-col size="7" class="truncate">
                  Complete personal particulars
                </ion-col>

                <ion-col size="3" class="statusBox-cpt"> Completed </ion-col>

                <ion-col size="2" style="text-align: center"> 20/10 </ion-col>
              </ion-row>
              <ion-row
                size="12"
                class="ion-justify-content-between singleTask"
                v-if="task3 || taskCompleted[0]"
                @click="goToTask(3)"
              >
                <ion-col size="7" class="truncate">
                  Acknowledge company policy document
                </ion-col>

                <ion-col size="3" class="statusBox-cpt"> Completed </ion-col>
                <ion-col size="2" style="text-align: center"> 28/10 </ion-col>
              </ion-row>
              <ion-row
                size="12"
                class="ion-justify-content-between singleTask"
                v-if="task4 || taskCompleted[1]"
                @click="goToTask(4)"
              >
                <ion-col size="7" class="truncate"> Safety briefing </ion-col>

                <ion-col size="3" class="statusBox-cpt"> Completed </ion-col>
                <ion-col size="2" style="text-align: center"> 28/10 </ion-col>
              </ion-row>
              <ion-row
                size="12"
                class="ion-justify-content-between singleTask"
                v-if="task5 || taskCompleted[2]"
                @click="goToTask(5)"
              >
                <ion-col size="7" class="truncate"> Complete HR quiz </ion-col>

                <ion-col size="3" class="statusBox-cpt"> Completed </ion-col>
                <ion-col size="2" style="text-align: center"> 28/10 </ion-col>
              </ion-row>
            </ion-grid>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  alertController,
} from "@ionic/vue";
import TopToolbar from "@/components/TopNav.vue";

export default {
  name: "Onboarding",
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    TopToolbar,
  },
  setup() {
    return {};
  },
  data() {
    return {
      taskclick4: false,
      taskclick5: false,
    };
  },
  computed: {
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
    taskCompleted() {
      return [
        this.$store.state.task3,
        this.$store.state.task4,
        this.$store.state.task5,
      ];
    },
  },
  methods: {
    // switch to a task that user selected
    goToTask(num) {
      switch (num) {
        case 3:
          this.$router.push({ name: "Op", params: { id: 0 } });
          break;
        case 4:
          if (!this.task3) {
            this.doPrevTask("Unable to start this task. Please complete the previous task first.");
            break;
          }
          this.taskclick4 = true;
          this.$router.push({ name: "St", params: { id: 1 } });
          break;
        case 5:
          if (!this.task4) {
            this.doPrevTask("Unable to start this task. Please complete the previous task first.");
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
    // check if user has done the previous task
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
  },
};
</script>

<style scoped>
.taskContainer {
  background: white;
  padding: 2px 8px 4px 8px ;
  margin-top:0;
}

.taskBox {
  border-radius: 30px;
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 38px;
  margin: auto;
}

.taskDesc {
  text-align: center;
  font-size: 12px;
}

.doneTask {
  background: linear-gradient(
    45deg,
    rgba(62, 49, 162, 1) 0%,
    rgba(97, 76, 249, 1) 53%,
    rgba(141, 125, 255, 1) 100%
  );
  bottom: 0;
  color: white;
  border:none;
  line-height: 40px;
}
</style>