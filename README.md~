#Meteor

- Deploy: $ meteor deploy myapp.meteor.com
- meteor mongo shell:  meteor mongo
- when hosting your app on *.meteor.com, you can also access your deployed app's Mongo 
console with meteor mongo myApp.
- And while we're at it, you can also get your app's logs by typing meteor logs myApp.
- Meteor's client-side Mongo implementation is called MiniMongo. 
-  On the client, what you are creating is a local, in-browser cache of the real Mongo 
collection. When we talk about a client-side collections being a “cache”, we mean it in 
the sense that it contains a subset of your data, and offers very quick access to this 
data.
- $ meteor reset : Reset's meteor, which erases the database and resets the project
- In Meteor, find() returns a cursor, which is a reactive data source. When we want to 
log its contents, we can then use fetch() on that cursor to transform it into an array.
- $ meteor remove autopublish
- Publish and Subscribe
- Router:- meteor add iron:router
- URL changes are happening using HTML5 pushState
- Session.set(), Session.get(), autorun
```
❯ Session.set('pageTitle', 'A brand new title');
❯ Session.get('pageTitle');
'A brand new title'
``` 
- accounts-ui:  $ meteor add ian:accounts-ui-bootstrap-3
- Reactivity: observe() cursor --> Meteor uses declarative behind the scenes
  * computation: reactivity is limited to specific areas of your code is called 
computations 
```
Deps.autorun(function() {
  console.log('There are ' + Posts.find().count() + ' posts');
});
```
** Behind the scenes, autorun creates a computation, and wires it up to re-evaluate 
whenever the data sources it depends on change. **

###Creating Posts
- Form template
- events

- $ meteor remove insecure
- Method: A Meteor Method is a server-side function that is called client-side.
- A stub is the Method simulation that Meteor runs on the client in parallel, while the 
“real” Method is being run on the server.

- Method calls are also more appropriate in a few other scenarios:

 * When you need to know or return values via callback rather than waiting for the 
reactivity and synchronization to propagate.
 * For heavy database functions that would be too expensive to ship a large collection 
over.
 * To summarize or aggregate data (e.g. count, average, sum).


