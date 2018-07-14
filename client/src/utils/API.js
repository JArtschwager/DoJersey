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
        return axios.post("/api/saved/", savedInfo)
      },

      savedRetrieved: function(savedContent) {
        return axios.get("/api/saved", savedContent)
      },

      savedDelete: function(id) {
        return axios.delete(`/api/saved/${id}`)
      },
    
      activitiesDelete: function(id) {
        return axios.delete(`/api/activities/${id}`)
      },

      activitiesByLocType: function(loc,type) {
        return axios.get('/api/activities/?location='+loc+'&interestType='+type)
      },
 
  login: function(loginCreds) {
    return axios.post('/api/users/login', loginCreds)
  },

  loginCheck: function() {
    return axios.get('/api/users/login')
  },

  logout: function() {
    return axios.get('/api/users/logout')
  },

  register: function(userInfo) {
    return axios.post("/api/users/register", userInfo)
  },


}


