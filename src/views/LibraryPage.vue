<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-row>
        <div class="img"></div>
        <h1>User Name</h1>
      </ion-row>
      <ion-row>
        <ion-chip :class="cat == 'tracks' ? 'selected' : ''" @click="cat = 'tracks'" color="success">Tracks</ion-chip>
        <ion-chip :class="cat == 'playlists' ? 'selected' : ''" @click="cat = 'playlists'"
          color="success">Playlists</ion-chip>
      </ion-row>
      <ion-list>
        <div v-if="cat == 'tracks'">
          <TrackComp v-for="a in 10" :key="a" :name="a" :artist="a" />
        </div>
        <div v-else-if="cat == 'playlists'">
            <PlaylistComp @click="$router.push(`/playlist/${a}`)" v-for="a in 10" :key="a" :name="a" :artist="a" />
        </div>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import TrackComp from '@/components/TrackComp.vue';
import PlaylistComp from '@/components/PlaylistComp.vue';
import { IonPage, IonContent, IonRow, IonChip, IonList } from '@ionic/vue';
import { ref } from 'vue';

const cat = ref('tracks');
const change = () => {
  if (cat.value == 'tracks')
    cat.value = 'playlists';
  else cat.value = 'tracks';
}
</script>

<style scoped>
ion-row {
  margin: 1rem 1rem;
  display: flex;
  align-items: center;
}

.img {
  width: 3rem;
  height: 3rem;
  background-color: red;
  border-radius: 50%;
}

h1 {
  margin-left: 15%;
}

.selected {
  background-color: #2dd36f;
  color: #121212;
  /* color: white; */
}
router-link > *{
  text-decoration: none;
}
</style>