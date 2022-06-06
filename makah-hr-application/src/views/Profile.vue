<template>
  <ion-page>
    <TopToolbar />
    <ion-content :fullscreen="true">
      <ion-grid class="grid-main">
        <ion-row style="margin-top: 8px">
          <ion-col style="padding-left: 0">
            <div class="ion-text-start">
              <h3 class="title" style="margin-top: 0">Profile</h3>
            </div>
          </ion-col>
        </ion-row>

        <div class="card-wrapper" style="margin-top: 4px">
          <ion-row class="ion-justify-content-between">
            <ion-col size="4" style="text-align: right">
              <ion-icon
                :icon="personCircleOutline"
                class="profile-icon"
                style=""
              ></ion-icon>
            </ion-col>

            <ion-col size="8">
              <h5>
                <b>{{ name }}</b>
              </h5>
              <p>{{ email }}@makah.com</p>
            </ion-col>
            <input type="file" id="test" @change="openDocument" hidden />
          </ion-row>
        </div>

        <ion-row
          v-if="!resetPassword"
          style="padding-top: 16px; padding-bottom: 16px"
        >
          <ion-col size="12" style="padding: 0">
            <ion-grid class="ion-grid">
              <ion-row size="12" class="taskList">
                <ion-col size="10"><b>Basic Information</b></ion-col>
              </ion-row>
              <div class="card-wrapper" style="margin-top: 4px">
                <ion-row size="12" class="ion-align-items-center singleTask">
                  <ion-col size="7" class="truncate">
                    Name: {{ name }} Tan
                  </ion-col>
                </ion-row>
                <ion-row size="12" class="ion-align-items-center singleTask">
                  <ion-col size="10" class="truncate">
                    Reporting Manager: Sally Kwok
                  </ion-col>
                </ion-row>
                <ion-row size="12" class="ion-align-items-center singleTask">
                  <ion-col size="10" class="truncate">
                    Designation: Finance
                  </ion-col>
                </ion-row>
                <ion-row size="12" class="ion-align-items-center singleTask">
                  <ion-col size="10" class="truncate">
                    Joined Date: 19 January 2019
                  </ion-col>
                </ion-row>
              </div>
            </ion-grid>
          </ion-col>
        </ion-row>

        <ion-row
          v-if="resetPassword"
          style="padding-top: 16px; padding-bottom: 24px"
        >
          <ion-col size="12" style="padding: 0">
            <ion-grid class="ion-grid">
              <ion-row size="12" class="taskList">
                <ion-col size="10"><b>Enter new password</b></ion-col>
              </ion-row>

              <div class="card-wrapper" style="margin-top: 4px">
                <ion-row size="12" class="ion-align-items-center singleTask">
                  <ion-col size="12" class="truncate">
                    <ion-row>
                      <ion-input
                        v-model="password"
                        placeholder="Enter new password"
                      ></ion-input>
                    </ion-row>
                  </ion-col>
                </ion-row>
              </div>
            </ion-grid>
          </ion-col>
        </ion-row>

        <div style="margin: auto" v-if="!this.resetPassword">
          <ion-row style="margin-top:16px;">
            <ion-col
              style="
                align-self: center;
                text-align: center;
                color: #614cf9;
                font-size: 16px;
                padding:0;
              "
              @click="visitGoogle()"
              size="6"
            >
              Visit HelpDesk
            </ion-col>

            <ion-col
              style="
                align-self: center;
                text-align: center;
                color: #614cf9;
                font-size: 16px;
                padding:0;
              "
              size="6"
              @click="this.resetPassword = true"
            > Reset Password
            </ion-col>
          </ion-row>

          <div style="margin: auto" v-if="!this.resetPassword">
            <ion-button expand="block" slot="fixed" @click="Logout()" style="margin-top:16px;"
              >Log Out</ion-button
            >
            <ion-row style="height: 10px"></ion-row>
          </div>
          <ion-row style="height: 10px"></ion-row>
        </div>
        <div style="margin: auto" v-if="this.resetPassword">
          <ion-button expand="block" slot="fixed" @click="newPassword()"
            >Submit</ion-button
          >
          <ion-button
            expand="block"
            style="margin-top: 20px"
            slot="fixed"
            @click="this.resetPassword = false"
            >Back</ion-button
          >
          <ion-row style="height: 10px"></ion-row>
        </div>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script>
import { personCircleOutline } from "ionicons/icons";
import TopToolbar from "@/components/TopNav.vue";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonButton,
  IonIcon,
  IonInput,
  alertController,
} from "@ionic/vue";

export default {
  name: "Home",
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    IonButton,
    IonIcon,
    TopToolbar,
    IonInput,
  },
  setup() {
    return {
      personCircleOutline,
    };
  },
  data() {
    return {
      resetPassword: false,
      password: "",
    };
  },
  computed: {
    // store information of user into the data store
    name() {
      return this.$store.state.name;
    },
    email() {
      return this.$store.state.name;
    },
  },
  methods: {
    Logout() {
      this.$store.commit("logged", false);
      this.$router.push("/");
    },
    visitGoogle(){
      this.$router.push("/google");
    },
    // change to new password
    newPassword() {
      console.log(this.password);
      var title;
      var alertContent;
      if (!this.password) {
        //empty password
        title = "Fail to change password";
        alertContent = "Please enter a password";
      }
      if (this.password.length < 8) {
        // password too short
        title = "Password length too short";
        alertContent = "Please enter a longer password";
      } else {
        this.$store.commit("userPassword", this.password);
        title = "Succesfully changed password";
        alertContent = "Password change is successful";
      }
      return alertController
        .create({
          header: title,
          message: alertContent,
          buttons: ["Okay"],
        })
        .then((a) => a.present());
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 8px;
}

.editbtn {
  align-self: center;
}

.profile-icon {
  height: 40px;
  width: 40px;
}
</style>
