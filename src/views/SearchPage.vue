<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-searchbar color="light" mode="ios" />
      <ion-list lines="none" style="background-color: #121212;">
        <TrackComp v-for="a in 10" :key="a" :name="a" :artist="a" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonSearchbar, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/vue';
import TrackComp from '@/components/TrackComp.vue';
</script>