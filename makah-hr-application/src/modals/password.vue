<template>
  <IonVuePage :title="'Alert'">
    <ion-button @click="presentAlertPrompt">Show Alert (prompt)</ion-button>
  </IonVuePage>
</template>

<script>

import {
  alertController
} from "@ionic/vue";
export default {
    components: {
    
  },
  methods: {

    presentAlertPrompt() {
      return alertController
        .create({
          header: 'Enter Password',
          message: 'This document is protected. Enter password to continue.',
          inputs: [
            {
              name: 'password',
              type: 'password',
              placeholder: 'Enter your password',
            },
            
          ],
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
              text: 'Ok',
              handler: () => {
                this.$router.push("/Payslips/Document")
              },
            },
          ],
        })
        .then(a => a.present())
    },

  },
}
</script>
