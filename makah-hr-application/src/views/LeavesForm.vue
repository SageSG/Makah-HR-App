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

        <ion-row class="ion-justify-content-start">
          <ion-col size="12">
            <h3 class="title">Apply leave</h3>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" class="taskTitle" style="margin-top:8px;"> Type of Leave </ion-col>
          <ion-col size="12">
            <ion-select
              v-model="typeOfLeaves"
              name="typeOfLeaves"
              id="typeOfLeaves"
              class="inputOption"
              placeholder="Select leave type: "
              okText="Okay"
              cancelText="Dismiss"
              interface="action-sheet">
              <ion-select-option value="annual">Annual Leaves</ion-select-option>
              <ion-select-option value="medical">Medical</ion-select-option>
              <ion-select-option value="family">Family</ion-select-option>
              <ion-select-option value="birthday">Birthday</ion-select-option>
              <ion-select-option value="compassionate">Compassionate</ion-select-option>
            </ion-select>
          </ion-col>
          <ion-col size="12" style="padding-top:0px;">
            <ion-label style="font-size: 12px">
              Leave balance: {{ leavesAvailable }} days
            </ion-label>
          </ion-col>
        </ion-row>

        <ion-row style="margin-top:16px;" class="ion-justify-content-between" v-if="typeOfLeaves == 'medical'">
          <ion-col size="4" style="padding-top:0px;">
          <ion-label> Document </ion-label>
          <ion-label style="font-size: 12px" v-if="typeOfLeaves == 'medical'"> Required* </ion-label>
          </ion-col>
          <ion-col size="5" style="padding-top:0px;">
          <input type="file" id="test" @change="openDocument" hidden />
            <label
              for="test"
              style="
                align-self: center;
                background: #614cf9;
                padding: 8px;
                color: white;
                border-radius: 4px;
                font-size: 16px;
                float: right;
              "
              >Upload
              </label>
              </ion-col>
        </ion-row>

        <ion-row style="margin-top:16px;" class="ion-justify-content-between" v-if="typeOfLeaves == 'compassionate'">
          <ion-col size="4" style="padding-top:0px;">
          <ion-label> Document </ion-label>
          <ion-label style="font-size: 12px" v-if="typeOfLeaves == 'compassionate'"> Optional* </ion-label>
          </ion-col>
          <ion-col size="5" style="padding-top:0px;">
          <input type="file" id="test" @change="openDocument" hidden />
            <label
              for="test"
              style="
                align-self: center;
                background: #614cf9;
                padding: 8px;
                color: white;
                border-radius: 4px;
                font-size: 16px;
                float: right;
              "
              >Upload
              </label>
              </ion-col>
        </ion-row>

        <ion-row style="margin-top:16px;">
          <ion-col size="6" class="taskTitle"> Start Date </ion-col>
          <ion-col size="6" class="taskTitle"> End Date </ion-col>
          <ion-col size="6">
            <input
              class="inputOption"
              type="date"
              id="start"
              name="trip-start"
              :min="today"
              v-model="startDate"
              max="2022-12-31"
              style="padding: 4px 8px;"
            />
          </ion-col>
          <ion-col size="6">
            <input
              class="inputOption"
              type="date"
              id="end"
              name="trip-start"
              :min="tommorrow"
              v-model="endDate"
              max="2022-12-31"
              style="padding: 4px 8px;"
            />
          </ion-col>
        </ion-row>

        <ion-row style="margin-top:16px;">
          <ion-col size="12" class="taskTitle"> Additional remarks </ion-col>
          <ion-col size="12">
            <ion-textarea class="remarksText" v-model="title"> </ion-textarea>
          </ion-col>
        </ion-row>

        <ion-row style="width: 100%; margin-top:16px;" class="ion-justify-content-center">
          <ion-button @click="presentAlertConfirm">Submit</ion-button>
        </ion-row>
      </ion-grid>
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
  IonTextarea,
  IonLabel,
  IonSelect,
  IonSelectOption,
  alertController,
  IonButton,
} from "@ionic/vue";

export default {
  name: "LeavesForm",
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
    IonTextarea,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    TopToolbar
  },
  setup() {
    return {
      ellipsisVerticalSharp,
      arrowBack,
    };
  },
  data() {
    return {
      typeOfLeaves: '',
      startDate: '',
      endDate: '',
      diffDays: 0,
      title: ''
    }
  },
  computed: {
    // check for today's date to set the calendar to be today onwards
    today() {
      return (
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate()
      );
    },
    tommorrow() {
      return (
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        (new Date().getDate() + 1)
      );
    },
    //calculate how much leaves are available
    leavesAvailable() {
      var value;
      if (this.typeOfLeaves == "annual") {
        value = this.$store.state.annualLeaves;
      } else if (this.typeOfLeaves == "medical") {
        value = this.$store.state.medicalLeaves;
      } else if (this.typeOfLeaves == "family") {
        value = this.$store.state.familyLeaves;
      } else if (this.typeOfLeaves == "birthday") {
        value = this.$store.state.birthdayLeaves;
      } else {
        value = "∞";
      }
      return value;
    },
  },
  methods: {
    back() {
      this.$router.back();
    },

    presentAlert() {
      return alertController
        .create({
          header: 'Leave applied successfully',
          buttons: [
            
            {
              text: 'Return',
              handler: () => {
                switch(this.typeOfLeaves){
                  case "annual":
                    this.$store.commit("decAnnual", this.diffDays);
                    break;
                  case "medical":
                    this.$store.commit("decMedical", this.diffDays);
                    break;
                  case "family":
                    this.$store.commit("decFamily", this.diffDays);
                    break;
                  case "birthday":
                    this.$store.commit("decBirthday", this.diffDays);
                    break;
                }

                var addList = [this.typeOfLeaves.charAt(0).toUpperCase() + this.typeOfLeaves.slice(1)+' Leave', this.startDate, this.endDate, 'Pending']
                this.$store.commit("insertData", addList)
              },
            },
          ],
        })
        .then((a) => a.present(this.back()));
    },
    // check if the leaves have been applied
    presentAlertConfirm() {
      if(this.typeOfLeaves==''){
        this.checkAgain("Unsuccessful Application", "", "Pick your leave");
        return;
      }
      if(this.startDate==''){
        this.checkAgain("Unsuccessful Application", "", "Please add a start date");
        return;
      }
      if(this.endDate==''){
        this.checkAgain("Unsuccessful Application", "", "Please add an end date");
        return;
      }
      
      return alertController
        .create({
          header: "Confirm submission",
          message: "Are you sure you want to submit this leave application?",
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
              text: "Submit",
              handler: () => {
                console.log(this.typeOfLeaves ,this.startDate, this.endDate)
                
                const date1 = new Date(this.startDate);
                const date2 = new Date(this.endDate);
                const diffTime = date2 - date1;
                this.diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                if(this.diffDays < 0){
                  this.checkAgain("Invalid Date Selection", "", "Please reselect your date")
                  return;
                }
                else if(this.diffDays > this.leavesAvailable){
                  this.checkAgain("Unsuccessful application", "Days exceed maximum leaves applicable", "Please try again");
                  return;
                }else{
                  this.presentAlert();
                }
                
              },
            },
          ],
        })
        .then((a) => a.present());
    },
    // error modal popup
    checkAgain(title, sub, body) {
      return alertController
        .create({
          header: title,
          subtitle: sub,
          message: body,
          buttons: [
            {
              text: 'Try again',
              handler: () => {
                console.log('Confirm Okay')
              },
            },
          ],
        })
        .then(a => a.present())
    },
  },
};
</script>

<style scoped>
.inputOption {
  width: 100%;
  height: 48px;
  background: white !important;
}

.remarksText {
  height: 88px;
  background: white;
  padding: 4px;
}

.documentTitle {
  text-align: center;
  margin: 24px;
}

.submitButton {
  margin: 24px;
  padding: 12px;
  width: 80%;
  background: lightgrey;
}
</style>
