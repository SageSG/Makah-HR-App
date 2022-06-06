<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-row class="ion-align-items-center back" @click="back()">
      <ion-col size="1" style="margin-bottom:8px;">
        <ion-icon :icon="arrowBack"></ion-icon>
      </ion-col>
    </ion-row>
    <ion-row
                  style="width:100%;"
                  class="ion-justify-content-center"
                >
                <div id="app" style="width:100%;">
                  <div style="width=90vw;" class="canvas-class">
                    <div class="col-md-12" style="height: 200px; margin-bottom:24px;">
                      <VueSignaturePad
                        id="signature"
                        width="100%"
                        height="100%"
                        ref="signaturePad"
                        :sigOption="options"
                        :options="{onBegin: () => {$refs.signaturePad.resizeCanvas()}}"
                      />
                    </div>
                    <div class="buttons">
                      <button class="undoButton" @click="clear();">Clear</button>
                      <button class="submitButton" @click="submit">Submit</button>
                    </div>
                  </div>
                </div>
                </ion-row>
                <ion-row>

                </ion-row>
                <ion-toast
    :is-open="taskcomplete"
    message="Company policy acknowledged"
    :duration="2500"
    @didDismiss="this.$router.go(-1);"
    color="success"
    position="top"
  ></ion-toast>
  <ion-toast
    :is-open="taskincomplete"
    message="Please sign first"
    :duration="4000"
    color="danger"
    position="top"
  ></ion-toast>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, alertController, modalController, IonRow, IonIcon, IonCol, IonToast } from '@ionic/vue';
import { arrowBack } from "ionicons/icons";

export default( {
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' },
    id: { type: String }
  },
  data: () => ({
    options: {
      penColor: "#000",
    },
  
    taskcomplete : false,
    taskincomplete: false,
  }),
  components: { IonContent, IonHeader, IonTitle, IonToolbar,IonRow, IonIcon, IonCol, IonToast },
  setup() {
    return{
      arrowBack,
    }
  },
  
  methods: {
    // check if user has signed the document
    
    back() {
      modalController.dismiss();
    },
    clear() {
      this.$refs.signaturePad.clearSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      if(!data){
        this.taskincomplete = true
        return false
      }
      console.log(isEmpty);
      return true
    },
    change() {
      this.options = {
        penColor: "#00f",
      };
    },
    resume() {
      this.options = {
        penColor: "#c0f",
      };
    },
    submit() {
      return alertController
        .create({
          header: 'Confirm submission',
          message: 'Are you sure you want to submit?',
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
              text: 'Submit',
              handler: () => {
                let done = this.save()
                if (!done){
                  return
                }

                setTimeout(() => {
                  modalController.dismiss();
                }, 2000);
                
                this.$store.commit("changeTaskComplete", parseInt(this.id)) 
                this.taskcomplete = true
                console.log(this.$store.state.task3)            
              },
            },
          ],
        })
        .then(a => a.present())
    },
  },
});
</script>

<style>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.undoButton {
  padding: 12px;
  width: 50%;
  margin: auto;
  background: var(--ion-color-danger);
  color:white
}

.submitButton {
  padding: 12px;
  width: 50%;
  margin: auto;
  color:white;
  background: var(--ion-color-primary)
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

canvas{
  width:100% !important;
  height:100% !important;
}
</style>