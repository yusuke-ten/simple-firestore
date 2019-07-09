<template>
  <div id="app">
    <FirestoreWrite/>
    <FirestoreRead/>
    <FirestoreObserve/>
    <FirestoreUpdate/>
    <FirestoreDelete/>
  </div>
</template>

<script>
import FirestoreWrite from "./components/FirestoreWrite.vue";
import FirestoreRead from "./components/FirestoreRead.vue";
import FirestoreObserve from "./components/FirestoreObserve.vue";
import FirestoreUpdate from "./components/FirestoreUpdate.vue";
import FirestoreDelete from "./components/FirestoreDelete.vue";

export default {
  name: "app",
  components: {
    FirestoreWrite,
    FirestoreRead,
    FirestoreObserve,
    FirestoreUpdate,
    FirestoreDelete
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  margin: 10px auto;
}
</style>
