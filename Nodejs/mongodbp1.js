const {MongoClient}=require('mongodb')

var url="mongodb+srv://admin:admin@cluster0.q4fm4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client=new MongoClient(url);

async function run()
{
    try
    {
       const db=client.db('employee1')
       const collection=db.collection('mycol')
       var obj={name:"azar",age:33,email:"azar@gmail.com",salary:10000}
       await collection.insertOne(obj)
       console.log("Data Inserted value...")

       //find the data

       const result=await collection.find({}).toArray();
       console.log(result);
    }
    finally
    {
        await client.close()
    }
}
run().catch(console.error)