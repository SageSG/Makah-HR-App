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
            <ion-col size="12" style="text-align:center;"> <h5>MAKAH Employee Quiz</h5> </ion-col>
          </ion-row>

    <ion-radio-group v-for="(items, index) in quizQns" :key="index">
      <ion-list-header>
        <ion-label style="margin-top:16px;">
          Q{{ index + 1 }} {{ items.question }}
        </ion-label>
      </ion-list-header>

      <ion-item v-for="answer in items.answers" :key="answer">
        <ion-label>{{ answer }}</ion-label>
        <ion-radio :value="answer"></ion-radio>
      </ion-item>
    </ion-radio-group>

        <ion-button @click="CompleteQuiz()" style="width: 100%; margin: 24px 0"
          >Submit quiz</ion-button
        >
      </ion-grid>
      <ion-toast
    :is-open="taskcomplete"
    message="Quiz is completed"
    :duration="2500"
    color="success"
    @didDismiss="this.$router.go(-1)"
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
  IonLabel,
  IonItem,
  IonButton,
  IonRadioGroup,
  IonRadio,
  IonListHeader,
  IonToast
} from "@ionic/vue";

export default {
  name: "Document",

  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
    IonLabel,
    IonItem,
    IonButton,
    IonRadioGroup,
    IonRadio,
    IonListHeader,
    TopToolbar,
    IonToast,
  },
  data() {
    return {
      taskcomplete : false,
      quizQns: [
        {
          question: "Where are we located at?",
          answers: ["SIT@NYP", "SIT@Dover", "SIT@SP", "SIT@TP"],
        },
        {
          question: "Where does the Sun set?",
          answers: ["North", "South", "East", "West"],
        },
      ],
    };
  },
  setup() {
    return {
      ellipsisVerticalSharp,
      arrowBack,
    };
  },
  mounted() {},
  methods: {
    back(){
        this.$router.back();
    },

    // check if the quiz has been completed
    CompleteQuiz(){
        return alertController
        .create({
          header: "Confirm submission",
          message:
            "Are you sure you want to submit this quiz?",
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel')
              },
            },
            {
              text: 'Submit',
              handler: () => {
                console.log('Confirm Okay')
                this.$store.commit("changeTaskComplete", parseInt(this.$route.params.id));
                console.log(this.$store.state.task5)
                this.taskcomplete = true
                
              },
            },
          ],
        })
        .then(a => a.present())
    }
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
