writeCode

Write code to:-

- create a database named `sports`. : use sports
- list all databases present in local mongod server.: local , admin , config
- create 3 collections named `cricket`, `football`, `TT` in sports databse. 
 db.createCollection('')
- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`. : db.createCollection('',{})
- list all collections in sports database. : show collections
- rename `TT` collection to `tennis`.  db. TT. renameCollection('tennis')
- create a capped collection called `khokho` which should have max 3 documents.
 db.createCollection( khokho", { capped: true, size: 1000 , max:3 } )

  Try inserting more than 3 and see what happens?
- check whether a collection is capped or not? :  db. collection. isCapped() 
- drop all documents from `football` collection. db.football.drop()
- delete cricket collection completely. db.cricket.drop()
- delete sports database. :use sports , db.dropDatabse()
- check which database you are connected to ? db
- connect to test database : use test
