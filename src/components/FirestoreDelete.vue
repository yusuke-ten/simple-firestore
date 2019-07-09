<template>
  <div class="firestore-delete">
    <h1>Firestore Delete</h1>
    <form>
      <div class="firestore-delete__input-wrap">
        <label for="input-text" class="firestore-delete__input-label">
          ID: 
        </label>
        <input v-model="id" id="input-text" type="text">
      </div>
      <button @click.prevent="firestoreDelete">Delete</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ''
    };
  },
  methods: {
    async firestoreDelete() {
      await this.$db.collection('posts').doc(this.id).delete()
      this.id = ''
    }
  }
};
</script>

<style>
.firestore-delete {
  width: 80%;
  margin: 40px auto;
}
.firestore-delete__input-wrap {
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
}
.firestore-delete__input-label {
  width: 100px;
}
</style>
