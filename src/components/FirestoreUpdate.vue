<template>
  <div class="firestore-update">
    <h1>Firestore Update</h1>
    <form>
      <div class="firestore-update__input-wrap">
        <label for="input-text" class="firestore-update__input-label">
          ID: 
        </label>
        <input v-model="id" id="input-text" type="text">
      </div>
      <div class="firestore-update__input-wrap">
        <label for="input-text" class="firestore-update__input-label">
          Title: 
        </label>
        <input v-model="title" id="input-text" type="text">
      </div>
      <div class="firestore-update__input-wrap">
        <label for="input-author" class="firestore-update__input-label">
          Author: 
        </label>
        <input v-model="author" id="input-author" type="text">
      </div>
      <div class="firestore-update__input-wrap">
        <label for="input-content" class="firestore-update__input-label">
          Content: 
        </label>
        <textarea v-model="content" id="input-content" type="text" />
      </div>
      <button @click.prevent="firestoreUpdate">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      title: '',
      author: '',
      content: ''
    };
  },
  methods: {
    async firestoreUpdate() {
      await this.$db.collection('posts').doc(this.id).update(
        {
          title: this.title,
          author: this.author,
          content: this.content
        }
      )
    }
  }
};
</script>

<style>
.firestore-update {
  width: 80%;
  margin: 40px auto;
}
.firestore-update__input-wrap {
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
}
.firestore-update__input-label {
  width: 100px;
}
</style>
