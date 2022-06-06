<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <ion-img src="assets/Makah_2.png" class="splash-img"> </ion-img>
  </div>
</template>

<script>
import { IonImg } from '@ionic/vue';
export default {
  name: "Splash",
  props: ["isLoading"],
  components: { IonImg },
};
</script>

<style>
.loader {
  background: linear-gradient(
    45deg,
    rgba(62, 49, 162, 1) 0%,
    rgba(97, 76, 249, 1) 53%,
    rgba(141, 125, 255, 1) 100%
  );
  bottom: 0;
  color: white;
  display: block;
  font-size: 24px;
  left: 0;
  overflow: hidden;
  /* padding-top: 10vh; */
  padding: 40vh 5vw;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}

.splash-img {
  transform: scale(0.8);
}

.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
