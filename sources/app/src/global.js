import { reactive } from "vue";

// Global state configuration
const state = reactive({
  counter:0,
  user:null, //user data dict
  userLoggedIn:"initial" // initial, loading, success, failed
});

export default { state: state };