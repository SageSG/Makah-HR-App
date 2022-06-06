<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid class="grid-main">
        <ion-row class="ion-text-center ion-padding" style="padding-bottom: 0">
          <ion-col size="12" style="margin-top: 80px;">
            <ion-img src="assets/Makah_1.png" class="login-img" style="max-width: 500px; margin:auto;"> </ion-img>
            <h3 class="title">Login to MAKAH</h3>
          </ion-col>
        </ion-row>

        <div
          class="card-wrapper"
          style="margin-top: 30px"
          :hidden="this.recovery"
        >
          <ion-item lines="none">
            <ion-label
              color="primary"
              position="stacked"
              style="margin-top: 20px"
              >Username</ion-label
            >
            <ion-input
              type="text"
              placeholder="Username"
              v-model="user"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label
              color="primary"
              position="stacked"
              style="margin-top: 20px"
              >Password</ion-label
            >
            <ion-input
              type="password"
              placeholder="Password"
              v-model="password"
            ></ion-input>
          </ion-item>
          <ion-button
            type="submit"
            expand="block"
            style="margin: 30px 32px -4px 32px"
            @click="play();loginUser()"
            >Sign in</ion-button>
          <ion-col
            style="text-align: center; color: #614cf9"
            @click="this.recovery = true"
          >
            <div>Forgot password?</div>
          </ion-col>
        </div>

        <div
          class="card-wrapper"
          style="margin-top: 0px"
          :hidden="!this.recovery"
        >
          <ion-item lines="none">
            <ion-label
              color="primary"
              position="stacked"
              style="margin-top: 0px; color: #f4f5f8"
              >Email</ion-label
            >
            <ion-input
              style="border-bottom: 2px solid #f4f5f8"
              placeholder=""
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label
              color="primary"
              position="stacked"
              style="margin-top: 0px"
              >Email</ion-label
            >
            <ion-input
              type="email"
              placeholder="Enter your email address"
              v-model="email"
              spellcheck="false"
              autocapitalize="off"
              required
            ></ion-input>
          </ion-item>
          <ion-button
            expand="block"
            style="margin: 30px 24px 0 24px"
            @click="checkEmail()"
            >Send Recovery Email</ion-button
          >
          <ion-col
            style="text-align: center; color: #614cf9"
            @click="
              this.recovery = false;
              this.emailsent = 'none';
            "
          >
            <div>Return to login</div>
          </ion-col>
        </div>
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
  IonButton,
  IonItem,
  IonInput,
  IonLabel,
  alertController,
  IonImg,
} from "@ionic/vue";
import { alertOutline, checkmarkOutline } from "ionicons/icons";
import useSound from 'vue-use-sound'
import buttonSfx from '../../public/assets/ding.mp3'

export default {
  name: "Login",
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonGrid,
    IonButton,
    IonItem,
    IonInput,
    IonLabel,
    IonImg,
  },
  setup() {
     const [play] = useSound(buttonSfx)
    return {
      alertOutline,
      checkmarkOutline,
      play
    };
  },
  data() {
    return {
      email: "",
      user: "",
      password: "",
      recovery: false,
      emailsent: "none",
      bottomNav: true,
    };
  },
  methods: {
    //check if user entered all required information
    loginUser() {
      if (this.user == "" || this.password == "") {
        console.log("invalid password");
        this.invalidLogin();
        return;
      }
      this.$store.commit("userName", this.user);
      this.$store.commit("userPassword", this.password);
      this.$store.commit("logged", true);
      this.password = "";
      this.$router.push({ name: "Home" });
    },
    // check if user entered a proper email address
    checkEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(String(this.email).toLowerCase())) {
        this.emailsent = true;
        this.sentEmail();
      } else {
        this.emailsent = false;
        this.wrongEmail();
      }
    },
    // alert modal prompts input is invalid
    invalidLogin() {
      return alertController
        .create({
          header: "Invalid Login",
          message: "Please key in correct credentials",
          buttons: ["Return"],
        })
        .then((a) => a.present());
    },
    // alert modal prompts input is invalid
    sentEmail() {
      return alertController
        .create({
          header: "Recovery Email Sent",
          message: "Please reset your password from your email",
          buttons: ["Okay"],
        })
        .then((a) => a.present());
    },
    // alert modal prompts input is invalid
    wrongEmail() {
      return alertController
        .create({
          header: "Wrong Email Entered",
          message: "Please try again",
          buttons: ["Okay"],
        })
        .then((a) => a.present());
    },
  },
  onMounted() {

    this.$store.commit("logged", false);
  },
};
</script>

<style scoped>
img {

  width: 60%;
  /* height: 200px; */
}

h3 {
  margin-top: 24px;
}

.container {
  margin-top: 8px;
}

ion-input {
  border-bottom: 2px solid grey;
}
</style>