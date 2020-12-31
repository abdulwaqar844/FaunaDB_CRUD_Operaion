var faunadb = require('faunadb'),
  q = faunadb.query;
(()=>{
    var adminClient = new faunadb.Client({ secret: 'fnAD-asEZ0ACB-WFgSQuRdkVrpHEhlq41m7wx8oo' });
   /* adminClient.query(
        q.CreateDatabase({ name: 'my_app' })
      )
      .then((ret) => console.log(ret))
*/
/*adminClient.query(
    q.CreateKey({
      database: q.Database('my_app'),
      role: 'admin',
    })
  )
  .then((ret) => console.log(ret))
  */
 adminClient.query(
    //q.CreateCollection({ name: 'posts'})
   /* q.CreateIndex({
        name: 'post_by_detail',
        source: q.Collection('posts'),
        terms: [{ field: ['title', 'description'] }],
      })*/
     /* q.Create(
        q.Collection('details'),
        { data: { description: 'This is 2nd post detail.' } },
     )*/
    /* q.Map(
        [
          'My cat and other marvels',
          'Pondering during a commute',
          'Deep meanings in a latte',
        ],
        q.Lambda(
          'description',
          q.Create(
            q.Collection('posts'),
            { data: { description: q.Var('description') } },
          )
        ),
      )*/
       // q.Get(q.Ref(q.Collection('posts'), "286450502352242177"))
      //  q.Match(q.Index('post_by_detail'), 'Pondering during a commute')
      //q.Replace(
        //q.Ref(q.Collection('posts'), '286450502352242177'),
        //{ data: { description: "I am Updated Now" } },
      //)
      q.Delete(
        q.Ref(q.Collection('posts'), '286449210655506951')
      )
      )
  .then((result) => console.log(result))
  
})
()