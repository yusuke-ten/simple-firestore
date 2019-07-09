<template>
  <div class="firestore-read">
    <h1>Firestore Read</h1>
    <button class="firestore-read__button" @click.prevent="firestoreRead">Read</button>
    <button class="firestore-read__button" @click.prevent="reset">reset</button>
    <table border="1" bordercolor="#333333">
      <thead>
        <tr>
          <th width="300">Document ID</th>
          <th width="150">Title</th>
          <th width="150">Author</th>
          <th width="150">Content</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(doc, index) in docs" :key="`req-${index}`">
          <td>{{ doc.id }}</td>
          <td>{{ doc.title }}</td>
          <td>{{ doc.author }}</td>
          <td>{{ doc.content }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docs: []
    };
  },
  methods: {
    async firestoreRead() {
      this.docs = [];
      const querySnapshot = await this.$db.collection("posts").get();
      querySnapshot.forEach(doc => {
        this.docs.push({ id: doc.id, ...doc.data() });
      });
    },
    reset() {
      this.docs = []
    }
  }
};
</script>

<style>
.firestore-read {
  width: 80%;
  margin: 40px auto;
}
.firestore-read__button {
  margin-bottom: 10px;
}
</style>
