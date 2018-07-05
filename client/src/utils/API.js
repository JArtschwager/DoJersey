import axios from "axios";

export default {
      //the search i believe needs to pull from the database by the flagged area of what they clicked on. find under home.js
      todoNJSearch: function(query) {
        return axios.get("/api/test", {params: query})
      },

      todoNJAll: function(query) {
        return axios.get("/api/activities")
      },

      //save the favorite.  attached this to a button? find under home.js
      // favoritesSave: function(favoritesInfo) {
      //   return axios.post("/api/favorites", favoritesInfo)
      // },


      //activities
      // retrieve all favorites from mongo
      activitiesRetrieve: function() {
        return axios.get("/api/activities")
      },

      // article delete by id
      // favoritesDelete: function(id) {
      //   return axios.delete(`/api/favorites/${id}`)
      // }
}


