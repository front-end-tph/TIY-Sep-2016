var appContainer = document.querySelector('#app-container')

var MoviesView = Backbone.View.extend({
   //
   el: '#app-container',

   _buildHTMLTemplate: function(){
      var bigStr = "<h1> Search for a country </h1>"
      bigStr += "<input type='text' class='form-control' id='country-name'>"
      bigStr += "<button class='btn btn-primary get-country-btn'>Get Country Info</button>"

      return bigStr
   },

   render: function(){
      // console.log(this._buildHTMLTemplate() )
      this.el.innerHTML = this._buildHTMLTemplate()
      return this
   }
})

var MovieModel = Backbone.Model.extend({
   //(3: 2nd Parse, to capture the relevant portion of the object for the model   )
   parse: function(parsedRes){
      console.log(parsedRes)
      return parsedRes.volumeInfo

   }
})

var MovieCollection = Backbone.Collection.extend({
   model: MovieModel,

   //(2: 1st Parse, to drill down to array of similar json objects )
   parse: function(rawJSONRes){
      console.log('parsing original response response', rawJSONRes)
      return rawJSONRes.items
   },
   url: "https://www.googleapis.com/books/v1/volumes?q=subject:fiction",

})


var AppRouter = Backbone.Router.extend({
   routes: {
      "*path" : "showMovie"
   },

   showMovie: function(){
      //(1) creating a new instance of a collection that points to
      //     https://www.googleapis.com/books/v1/volumes?q=subject:fiction
      var movieColl = new MovieCollection()
      movieColl.fetch().then(function(){
         console.log('PARSED Collection:', movieColl)
         appContainer.innerHTML = 'movieS!'
      })

   },

   initialize: function(){
      console.log('backbone ROUTING')
      Backbone.history.start()
   }
})

var app = new AppRouter()
