<template>
<ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="home" href="/Home">
          <ion-icon :icon="homeSharp" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="onboarding" href="/Onboarding">
          <ion-icon :icon="peopleSharp" />
          <ion-label>Onboarding</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="leaves" href="/Leaves">
          <ion-icon :icon="calendarSharp" />
          <ion-label>Leaves</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="payslips" href="/Payslips">
          <ion-icon :icon="readerSharp"/>
          <ion-label>Payslips</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
</ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet, IonPage } from '@ionic/vue';
import { peopleSharp, calendarSharp, homeSharp, readerSharp } from 'ionicons/icons';

export default {
  name: 'Tabs',
  abstract: true,
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet, IonPage },
  setup() {
    return {
      peopleSharp, 
      calendarSharp,
      homeSharp,
      readerSharp,
    }
  },
  
}
</script>