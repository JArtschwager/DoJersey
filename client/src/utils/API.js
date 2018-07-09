import axios from "axios";

export default {
      todoNJSearch: function(query) {
        return axios.get("/api/test", {params: query})
      },

      todoNJAll: function(query) {
        return axios.get("/api/activities")
      },

      // retrieve all favorites from mongo. USED
      activitiesRetrieve: function() {
        return axios.get("/api/activities")
      },

      // save to /saved page
      activitiesSave: function(savedInfo) {
        return axios.post("/api/activities", savedInfo)
      },
    
      // activities delete from /Saved page
      activitiesDelete: function(id) {
        return axios.delete(`/api/activities/${id}`)
      },

      /* 
    loginCreds = {username: "alex", "password": 12345Password!}
  */
  login: function(loginCreds) {
    return axios.post('/api/users/login', loginCreds)
  },
  /*
    Path to check if user is logged in
  */
  loginCheck: function() {
    return axios.get('/api/users/login')
  },
  /* 
    Path to log out
  */
  logout: function() {
    return axios.get('/api/users/logout')
  },
  /* 
    Path to register new user, you can have more fields than this but "username" and "password" must exist

    userInfo = {
      username: "alex",
      password: 12345Password!
    }
  */
  register: function(userInfo) {
    return axios.post("/api/users/register", userInfo)
  }
}


