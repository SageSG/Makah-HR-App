<template>
  <ion-content :fullscreen="true">
      <ion-grid class="grid-main">
        <ion-row class="ion-align-items-center back" @click="back()">
          <ion-col size="1">
            <ion-icon :icon="arrowBack" style="margin-right:20px"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-grid>

    <ion-row style="margin-left: 20px">
      <h2><b>Notifications</b></h2>
    </ion-row>

    <ion-item-group style="background: #e9e6ff">
      <ion-item-divider>
        <ion-label>New</ion-label>
      </ion-item-divider>
      
      <ion-row style="margin-left:20px">
        <ion-label style="background: #e9e6ff">
          <ion-label class="ion-text-wrap" style="margin-top: 10px"><b>Payslip released</b></ion-label>
          <ion-label class="ion-text-wrap"
            >Your payslip for the month of October 2021 has been released.
          </ion-label>
          <ion-label class="nt-time"
            ><ion-icon slot="icon-only" :icon="timeOutline"></ion-icon
            >1h</ion-label
          >
        </ion-label>
      </ion-row>

      <ion-row style="margin-left:20px">
        <ion-label detail style="margin-bottom: 15px">
          <ion-label class="ion-text-wrap" style="margin-top: 10px"
            ><b>Annual Leave approved</b></ion-label
          >
          <ion-label class="ion-text-wrap"
            >Your annual leave application has been approved.
          </ion-label>
          <ion-label class="nt-time">
            <ion-icon slot="icon-only" :icon="timeOutline"></ion-icon>
            3h</ion-label
          >
        </ion-label>
      </ion-row>
    </ion-item-group>
    <ion-item-group>
      <ion-item-divider>
        <ion-label>Earlier</ion-label>
      </ion-item-divider>

      <ion-item lines="none">
        <ion-label detail>
          <ion-label class="ion-text-wrap"
            ><b>Complete HR Quiz uploaded</b></ion-label
          >
          <ion-label class="ion-text-wrap"
            >A new task 'Complete HR Quiz' has been added.</ion-label
          >
          <ion-label class="nt-time"
            ><ion-icon slot="icon-only" :icon="timeOutline"></ion-icon>
            1d</ion-label
          >
        </ion-label>
      </ion-item>
      <ion-item lines="none">
        <ion-label detail>
          <ion-label class="ion-text-wrap"
            ><b
              >Acknowledge company policy document is due in 3 days.</b
            ></ion-label
          >
          <ion-label class="ion-text-wrap"
            >Complete Acknowledge company policy document by 28 October 2021
            (11:59pm).</ion-label
          >
          <ion-label class="nt-time"
            ><ion-icon slot="icon-only" :icon="timeOutline"></ion-icon>
            2d</ion-label
          >
        </ion-label>
      </ion-item>
      <ion-item lines="none">
        <ion-label detail>
          <ion-label class="ion-text-wrap"
            ><b>Safety Briefing is due in 1 week.</b></ion-label
          >
          <ion-label class="ion-text-wrap"
            >Complete Safety Briefing by 31 October 2021 (11:59pm).</ion-label
          >
          <ion-label class="nt-time"
            ><ion-icon slot="icon-only" :icon="timeOutline"></ion-icon>
            1w</ion-label
          >
        </ion-label>
      </ion-item>
    </ion-item-group>
  </ion-content>
</template>

<script>
import { timeOutline, arrowBack } from "ionicons/icons";
import { IonContent, IonRow, IonCol, modalController } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    title: { type: String, default: "Super Modal" },
  },
  setup() {
    return {
      timeOutline,
      arrowBack,
    };
  },
  data() {
    return {
      content: "Content",
    };
  },
  components: { IonContent, IonRow, IonCol },
  methods: {
    back() {
      modalController.dismiss();
    },
  },
});
</script>

<style scoped>
ion-item-divider {
  --background: #f4f6fa;
  --padding-top: 15px;
  color: black;
  font-weight: bold;
  font-size: 16px;
  border: none;
}

ion-item-group > ion-item {
  /* padding-top: 10px; */
  padding-bottom: 5px;
}

ion-item {
  padding-right: 8px;
  border-bottom: 2px solid #f1f1f1;
}

.nt-time {
  color: #687c86;
  font-size: 12px;
  padding-top: 5px;
}

.text {
  display: inline-block;
  vertical-align: middle;
}
</style>