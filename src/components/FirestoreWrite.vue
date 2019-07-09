<template>
  <div class="firestore-write">
    <h1>Firestore Write</h1>
    <form>
      <div class="firestore-write__input-wrap">
        <label for="input-text" class="firestore-write__input-label">
          Title: 
        </label>
        <input v-model="title" id="input-text" type="text">
      </div>
      <div class="firestore-write__input-wrap">
        <label for="input-author" class="firestore-write__input-label">
          Author: 
        </label>
        <input v-model="author" id="input-author" type="text">
      </div>
      <div class="firestore-write__input-wrap">
        <label for="input-content" class="firestore-write__input-label">
          Content: 
        </label>
        <textarea v-model="content" id="input-content" type="text" />
      </div>
      <button @click.prevent="firestoreWrite">Write</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      author: '',
      content: ''
    }
  },
  methods: {
    async firestoreWrite() {
      await this.$db.collection('posts').add({
        title: this.title,
        author: this.author,
        content: this.content
      })
    }
  }
}
</script>

<style>
.firestore-write {
  width: 80%;
  margin: 40px auto;
}
.firestore-write__input-wrap {
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
}
.firestore-write__input-label {
  width: 100px;
}
</style>
