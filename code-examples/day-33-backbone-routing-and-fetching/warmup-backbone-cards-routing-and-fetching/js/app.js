



var AppRouter = Backbone.Router.extend({
   routes: {
      "nationality/:natty/gender/:gen" : "showOnlyGenderAndNatPage",
      "gender/:gendr" : "showGenderPage",
      "nationality/:natName": "showNatsPage",
      "": "showHomePage"
   },

   showOnlyGenderAndNatPage: function(n, g){
      var coll = new UserCollection("results=24&gender="+g+"&nat="+n)
      console.log(coll.url)
      coll.fetch().then(function(){
         var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
         view.render(coll)
      })

   },

   showGenderPage: function(genderType){
      var coll = new UserCollection("results=24&gender="+genderType)
      console.log(coll.url)
      coll.fetch().then(function(){
         var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
         view.render(coll)
      })
   },

   showNatsPage: function(natty){
      var coll = new UserCollection("results=24&nat="+natty)
      console.log(coll.url)
      coll.fetch().then(function(){
         console.log(coll)
         var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
         view.render(coll)
      })

   },

   showHomePage: function(){
      var coll = new UserCollection("results=24")
      console.log(coll.url)

      coll.fetch().then(function(){
         console.log(coll)
         var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
         view.render(coll)
      })


   },

   // showPage: function(nat){
   //    // var coll = new UserCollection(/*results=24&proper=query&string=required*/)
   //    var qryStr = Backbone.history.getFragment()
   //          .split("/").map(function(val, i){
   //                if ( (i + 1) % 2 === 0){
   //                   return  "=" + val
   //                } else {
   //                   return  "&" + val
   //                }
   //
   //             })
   //             .join('')
   //
   //    console.log('ROUTE: ', Backbone.history.getFragment())
   //    console.log('queryString: ',qryStr)
   //
   //    var coll = new UserCollection("results=24"+qryStr)
   //    coll.fetch().then(function(){
   //         console.log(coll)
   //         var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
   //         view.render(coll)
   //    })
   // },

   initialize: function(){
      Backbone.history.start()
   }
})

var app = new AppRouter();

// $.getJSON("https://randomuser.me/api?results=24")
//    .then((serverRes)=>{
//       var Mod = Backbone.Model.extend({idAttribute: 'email'})
//       var Coll = Backbone.Collection.extend({model: Mod})
//       var coll = new Coll()
//       coll.add(serverRes.results)
//
//       var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
//       view.render(coll)
//    })
