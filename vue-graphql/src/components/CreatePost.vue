<template>
  <div class='create'>
    <input v-model="title" placeholder="title">
    <input v-model="source" placeholder="source">
    <input v-model="author" placeholder="author">

    <button @click="create">Create Post</button>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  //creat data type
  const createShare = gql`
  mutation createShare($title: String!, $source: String!,$author: String!) {
    createShare(title: $title, source: $source , author: $author) {
      id
      source
      title
      author
    }
  }
`
  export default {
    data: () => ({
      title: '',
      source: '',
      author: ''
    }),

    // submit a strip of data
    methods: {
      create() {
        const title = this.title;
        const source = this.source;
        const author = this.author;

        this.title = '';
        this.source = '';
        this.author = '';

        // Mutation
        this.$apollo.mutate({
          mutation: createShare,
          variables: {
            title,
            source,
            author
          },
          //update query
          updateQueries: {
            allShares: (prev, { mutationResult }) => {
              return {
                // append at head of list because we sort the posts reverse chronological
                allShares: [mutationResult.data.createShare, ...prev.allShares],
              }
            },
          },
        }).then((data) => {
          // Result
          console.log(data)
        }).catch((error) => {
          // Error
          console.error(error)
        })
      },
    },
  }
</script>

<style>

  .create {
    text-align: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

</style>