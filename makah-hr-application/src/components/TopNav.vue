<template>    
    <ion-header>
      <ion-toolbar class="top-nav">
        <ion-img src="assets/Makah_1.png" class="top-logo" @click="this.$router.push('/Home')"></ion-img>
        <ion-avatar slot="end" >
      <ion-badge style="position: absolute; right:2.6rem; top:0.6rem; z-index: 10;" color="primary">2</ion-badge>
      
    </ion-avatar>
        <ion-icon :icon="notifications" slot="end" style="padding-right:16px;" @click="openNotif()"></ion-icon>
        <ion-icon :icon="personCircleOutline" slot="end" size="large" @click="this.$router.push('/Profile')"></ion-icon>
      </ion-toolbar>
    </ion-header>
    
</template>

<script>
import { imageSharp, personCircleOutline, notifications } from "ionicons/icons";
import { IonHeader, IonToolbar, IonIcon, IonImg, modalController, IonBadge, IonAvatar } from "@ionic/vue";
import NotifModal from '../modals/Notif.vue'

export default {
  name: "TopToolbar",
  components: {
    IonHeader,
    IonToolbar,
    IonIcon,
    IonImg,
    IonBadge,
    IonAvatar,

  },
  setup() {
    return {
      imageSharp,
      personCircleOutline,
      notifications,
    };
  },
  methods:{
    // open the notification modal to check for notification
      async openNotif() {
      const modal = await modalController
        .create({
          component: NotifModal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: 'Notification Page'
          },
        })
      return modal.present();
    },
  }
};
</script>

<style scope>

ion-icon{
    font-size:24px;
}
ion-header{
    background:white;
}

.top-nav{
  padding: 0 16px;
}

.top-logo{
  height:32px;
  width:80px;

}
</style>