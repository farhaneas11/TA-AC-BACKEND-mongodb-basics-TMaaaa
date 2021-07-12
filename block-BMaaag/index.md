writeCode

Write code to:-

- create a database named `mountains` : use mountains
- a collection inside that database named `himalayas` : db.createCollection('himalayas') 
- insert 1 document into that collection `{name: 'Dhauldhar range', height: '4000 mtrs'}` : db.himalayas.insert({
    name: 'Dhauldhar range', height: '4000 mtrs'
})

- insert multiple document using insertMany command
db..himalayas.insertMany([
    {name: 'Dhauldhar range', height: '4000 mtrs'},
    {name: 'Dhauldhar himas ', height: '4000 mtrs'}
    ])
- find all documents from mountains : db.himalayas.find().pretty()
- find a single document using name db.himalayas.find({name :'Dhauldhar himas ' })
db.himalayas.findOne({name :'Dhauldhar himas ' })


db.collection.update({name : 'dhauldahr himas'} , {$set : {email:'user2gm.com'}}) : updates specific set

db.collection.update({name : 'dhauldahr soul'} ,{email:'user2gm.com' , age : 20} , {upsert : true}) : add new  set instead of updating


db.collection.remove({age : 20}) : removes the only given data or document inside.

db.collection.remove({}) : removes all documents



