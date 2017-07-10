import Vue from 'vue'
import App from './App.vue'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

//Creat GraphQL Backend
const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj4wqktpmj4py0130fztv3uze' });

//connect GraphQL Backend with the GraphQL server by apolloClient
const apolloClient = new ApolloClient({
  networkInterface,
});

// Install the vue plugin
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// Start the app
new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
});
