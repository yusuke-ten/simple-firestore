<template>
  <div class="firestore-read">
    <h1>Firestore Observe</h1>
    <table border="1" bordercolor="#333333">
      <thead>
        <tr>
          <th width="300">Document ID</th>
          <th width="150">Title</th>
          <th width="150">Author</th>
          <th width="150">Content</th>
          <th width="150">Source</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(doc, key) in docs" :key="key">
          <td>{{ key }}</td>
          <td>{{ doc.title }}</td>
          <td>{{ doc.author }}</td>
          <td>{{ doc.content }}</td>
          <td>{{ doc.source }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docs: {}
    };
  },
  mounted() {
    this.$db.collection("posts").onSnapshot(
      {
        includeMetadataChanges: true
      },
      querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          const source = change.doc.metadata.hasPendingWrites
            ? "Local"
            : "Server";
          console.log(source)
          if (change.type === "added") {
            this.$set(this.docs, change.doc.id, {
              source: source,
              ...change.doc.data()
            });
          }
          if (change.type === "modified") {
            this.$set(this.docs, change.doc.id, {
              source: source,
              ...change.doc.data()
            });
          }
          if (change.type === "removed") {
            this.$delete(this.docs, change.doc.id);
          }
        });
      }
    );
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
