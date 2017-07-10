<template>
  <div class="feed">
    <template>
      <ol class="container">
        <li v-for="share in allShares" :key="share.id">
          <post :share='share' class="share"></post>
        </li>
      </ol>
    </template>
  </div>
</template>

<style>
  .share {
    margin-bottom: 20px
  }

  .feed {
    margin-right: 200px;
  }

</style>

<script>
  import gql from 'graphql-tag'
  import Post from './Post.vue'

  // GraphQL query
  const FeedQuery = gql`
  query allShares {
   allShares(orderBy: createdAt_DESC) {
      id
     title
     source
     author
    }
  }
`

  // Component def
  export default {
    // Local state
    data: () => ({
      allShares: {}
    }),
    // Apollo GraphQL
    apollo: {
      allShares: {
        query: FeedQuery
      },
    },
    components: {
      'post': Post
    }
  }
</script>
