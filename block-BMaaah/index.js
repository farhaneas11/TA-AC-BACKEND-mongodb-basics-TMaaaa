//use blog;

db.createCollection("articles")

db.articles.insert({title:'',createdAt:0 , details:'',author:{name:'',email:'',age:0 },tags:['html','css']})

db.articles.find({_id:ObjectId("60ec87e6bb63f44b02a46ef9")})

db.articles.find({title : 'feas1'});

db.articles.update({title:'feas1'},{$set :{author:{name:'farhan1',email:'',age:0}}});


db.articles.update({"_id" : ObjectId("60ec87e6bb63f44b02a46ef9")},{$rename :{'details': 'description'}});

db.articles.updateMany({},{$rename :{'details': 'description'}});

db.articles.insertOne({title:'feas1'},{newtag : ''})

db.articles.findOneAndUpdate({_id:ObjectId("60ec87e6bb63f44b02a46ef9")},{$inc : {author : {age : 5}}})


db.articles.remove({_id:ObjectId("60ec87e6bb63f44b02a46ef9")});

db.users.find({},{sports:["cricket"],gender:"male"}).pretty()

db.users.update({name:"Steve Ortega"},{$set :{sports :["golf","cricket", "football", "hockey"]}})

db.users.find({},{sports:["cricket","football"]}).pretty()

