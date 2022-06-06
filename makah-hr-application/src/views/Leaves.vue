<template>
  <ion-page>
    <TopToolbar />
    <ion-content :fullscreen="true">
      <ion-grid class="grid-main">
        <ion-row class="ion-justify-content-start">
          <ion-col size="12">
            <h3 class="title">Leaves</h3>
          </ion-col>
        </ion-row>

        <ion-row class="taskTitle ion-justify-content-between">
          <ion-col size="6" style="margin: auto">
            <h5>Leave balances</h5>
          </ion-col>
          <ion-col size="6" style="text-align: right">
            <ion-button
              
              color="primary"
              class="apply-btn"
              @click="
                this.$router.push({
                  name: 'leaveform',
                  params: { type: 'annual' },
                })
              "
              >Apply leaves</ion-button
            >
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
                    <ion-row size="12"> Compassion</ion-row>
                    <ion-row size="12">
                      <b>&infin; Days</b>
                    </ion-row>
                  </ion-row>
                </ion-grid>
              </ion-slide>
            </ion-slides>
          </ion-col>
        </ion-row>
        <hr />
        <ion-row class="taskTitle ion-padding-top" style="padding-top:11px;">
          <ion-col size="6">
            <h5>Pending Requests</h5>
          </ion-col>
        </ion-row>


        <ion-row>
          <ion-col size="12">
              <ion-row size="12" class="taskList">
                <ion-col size="5"> Request </ion-col>
                <ion-col size="3">
                  <div style="text-align:center">Status</div>
                </ion-col>
              </ion-row>
              
              <ion-row size="12" class="ion-align-items-center singleTask" v-if="extraInfo!=''">
                <ion-col size="5">
                  {{extraInfo[0]}} <br />
                  {{extraInfo[1]}}
                </ion-col>
                <ion-col size="3">
                  <div style="text-align:center">{{extraInfo[3]}}</div>
                </ion-col>
                <ion-col size="2">
                  <div style="text-align:right">
                    <ion-icon :icon="createOutline" class= "edit-icon" size="small" @click="EditLeave(extraInfo[0], extraInfo[1], extraInfo[2], extraInfo[3])"></ion-icon>
                  </div>
                </ion-col>
                <ion-col size="2">
                  <div style="text-align:center">
                    <ion-icon :icon="trashBinOutline" class= "edit-icon" size="small" @click="DeleteLeave(extraInfo[0])"></ion-icon>
                  </div>
                </ion-col>
              </ion-row>
              <ion-row size="12" class="ion-align-items-center singleTask" v-if="bDeleted">
                <ion-col size="5">
                  {{leaveReq[0].name}} <br />
                  {{leaveReq[0].startdate}}
                </ion-col>
                <ion-col size="3">
                  <div style="text-align:center">{{leaveReq[0].leavestatus}}</div>
                </ion-col>
                <ion-col size="2">
                  <div style="text-align:right">
                    <ion-icon :icon="createOutline" class= "edit-icon" size="small" @click="EditLeave(leaveReq[0].name, leaveReq[0].startdate, leaveReq[0].enddate, leaveReq[0].leavestatus)"></ion-icon>
                  </div>
                </ion-col>
                <ion-col size="2">
                  <div style="text-align:center">
                    <ion-icon :icon="trashBinOutline" class= "edit-icon" size="small" @click="DeleteLeave(leaveReq[0].name, leaveReq[0].leavestatus)"></ion-icon>
                  </div>
                </ion-col>
              </ion-row>
              <ion-row size="12" class="ion-align-items-center singleTask">
                <ion-col size="5">
                  {{leaveReq[1].name}} <br />
                  {{leaveReq[1].startdate}}
                </ion-col>
                <ion-col size="3">
                  <div style="text-align:center">{{leaveReq[1].leavestatus}}</div>
                </ion-col>
                <ion-col size="2">
                  <div style="text-align:right">
                    <ion-icon :icon="createOutline" class= "edit-icon" size="small" @click="EditLeave(leaveReq[1].name, leaveReq[1].startdate, leaveReq[1].enddate, leaveReq[1].leavestatus)"></ion-icon>
                  </div>
                </ion-col>
                <ion-col size="2">
                  <div style="text-align:center">
                    <ion-icon :icon="trashBinOutline" class= "edit-icon" size="small" @click="DeleteLeave(leaveReq[1].name, leaveReq[1].leavestatus)"></ion-icon>
                  </div>
                </ion-col>
              </ion-row>

          </ion-col>
        </ion-row>

        <hr />
        <ion-row class="taskTitle ion-padding-top" style="padding-top:11px;">
          <ion-col size="6">
            <h5>Past Requests</h5>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
              <ion-row size="12" class="taskList">
                <ion-col size="5"> Request </ion-col>
                <ion-col size="4">
                  <div style="text-align:center">Status</div>
                </ion-col>
                <ion-col size="3">
                  <div style="text-align:center">Date</div>
                </ion-col>
              </ion-row>
              
              <ion-row size="12" class="ion-align-items-center singleTask" v-for="items in leaveReq.filter(item => item.leavestatus === 'Cancelled')" :key="items">
                <ion-col size="5">
                  {{items.name}}<br />
                  {{items.startdate}}
                </ion-col>
                <ion-col size="4">
                  <div style="text-align:center">{{items.leavestatus}}</div></ion-col
                >
                <ion-col size="3">
                  <div style="text-align:center">12/09/21</div></ion-col
                >
              </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import TopToolbar from "@/components/TopNav.vue";
import {
  createOutline,
  airplaneOutline,
  medicalOutline,
  peopleOutline,
  balloonOutline,
  roseOutline,
  trashBinOutline,
} from "ionicons/icons";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonSlide,
  IonSlides,
  IonGrid,
  IonIcon,
  IonButton,
  alertController
} from "@ionic/vue";

export default {
  name: "Leaves",
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonSlide,
    IonSlides,
    IonGrid,
    IonIcon,
    TopToolbar,
    IonButton,
  },
  setup() {
    const slideOpts = {
      slidesPerView: 3.5,
      initialSlide: 0,
      speed: 400,
      spaceBetween: 20,
    };
    return {
      slideOpts,
      createOutline,
      airplaneOutline,
      medicalOutline,
      peopleOutline,
      balloonOutline,
      roseOutline,
      trashBinOutline,
    };
  },
  data() {
    return {
      leaveReq: [{name: 'Birthday Leave', startdate: '2021-11-18', enddate: '2021-11-19', leavestatus:'Pending'}, 
                {name: 'Annual Leave', startdate: '2021-07-23', enddate: '2021-07-28', leavestatus:'Approved'},
                {name: 'Annual Leave', startdate: '2021-09-21', enddate: '2021-10-04', leavestatus:'Cancelled'}],
      bDeleted:true,
    }
  },
  computed: {
    leaves() {
      return [
        this.$store.state.annualLeaves,
        this.$store.state.medicalLeaves,
        this.$store.state.familyLeaves,
        this.$store.state.birthdayLeaves,
      ];
    },
    extraInfo(){
      return this.$store.state.information
    }
  },
  methods: {
    goToPage() {
      this.$router.push("/Leaves/Form");
    },
    //Remove the leave
    DeleteLeave(name, status){
      if (status == "Approved"){
                  this.presentAlert("Invalid Request", "", "Unable to cancel as your leave has already been approved.");
                  return;
                }
      return alertController
        .create({
          header: 'Cancel leave',
          message: 'Are you sure you want to cancel ' + name + '? \nThis action cannot be undone.',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                console.log('Confirm Cancel:', blah)
              },
            },
            {
              text: 'Confirm',
              handler: () => {
                this.presentAlert("Cancel successful", "", "Leave cancelled successfully.");
                this.bDeleted = false;
                this.leaveReq[0]['leavestatus'] = "Cancelled"
              },
            },
          ],
        })
        .then(a => a.present())
    },
    // Allow the user to edit leaves based on how many they already applied
    EditLeave(name, startdate, enddate, status){
      if (status == "Approved"){
                  this.presentAlert("Invalid Request", "", "Unable to edit as your leave has already been approved. Please submit a new leave application.");
                  return;
                }
      var date1 = new Date(startdate);
      var date2 = new Date(enddate);
      var diffTime = Math.abs(date2 - date1);
      var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return alertController
        .create({
          header: 'Edit Leaves',
          message: 'Assigned ' + diffDays + ' days',
          inputs: [
            {
              name: 'leaveName',
              value: name,
            },
            {
              name: 'leaveStart',
              type: 'date',
              value: startdate,
              min: startdate,
              max: '2021-12-31'
            },
            {
              name: 'leaveEnd',
              type: 'date',
              value: enddate,
              min: enddate,
              max: '2021-12-31'
            },
          ],
          buttons: [
            {
              text: "Cancel",
              handler: () => {
              },
            },
            {
              text: 'Save',
              handler: (alertData) => {
                if (!alertData.leaveName){
                  this.presentAlert("Invalid name", "Name is invalid", "Please try again.");
                  return;
                }else{  
                  // calculate amount of leaves to take
                var date3 = new Date(alertData.leaveStart);
                var date4 = new Date(alertData.leaveEnd);
                var checkTime = date4 - date3;
                var checkDays = Math.ceil(checkTime / (1000 * 60 * 60 * 24)); 
                console.log("leaves gonna take", checkDays)
                if(checkDays > diffDays){
                  this.presentAlert("Invalid Dates", "Too many leaves taken", "Please try again.");
                  return;
                }else if (checkDays < diffDays){
                  this.presentAlert("Invalid Dates", "Too few leaves taken", "Please try again.");
                  return;
                }else{
                  if(this.leaveReq[0]['startdate'] != alertData.leaveStart){
                  this.presentAlert("Update successful", "", "Leave will be updated accordingly.");
                  this.leaveReq[0]['name'] = alertData.leaveName
                  this.leaveReq[0]['startdate'] = alertData.leaveStart
                  this.leaveReq[0]['enddate'] = alertData.leaveEnd
                  return;
                  }
                  else if(this.leaveReq[0]['name'] != alertData.leaveName){
                    this.leaveReq[0]['name'] = alertData.leaveName
                    return;
                  }
                  else{
                    this.presentAlert("Nothing changed", "", "No changes were made.");
                    return;
                  }
                }
                
                }
              },
            },
          ],
        })
        .then(a => a.present())
    },
    // allow of alert modal creation
    presentAlert(title, subtitle, body) {
      return alertController.create({
          header: title,
          subHeader: subtitle,
          message: body,
          buttons: ['OK'],
        })
        .then(a => a.present())
    },
    
  },
};
</script>

<style scope>
.apply-btn {
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
  align-self: center;
}

.edit-icon{
  width:24px;
  height:24px;
  color: var(--ion-color-primary);
}

</style>