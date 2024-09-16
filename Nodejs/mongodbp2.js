const {MongoClient}=require('mongodb');
var url="mongodb+srv://admin:admin@cluster0.q4fm4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('employee1')
        const collection=db.collection('mycol');
        //Update
        const cursorupdate=await collection.updateOne(
            {"name":"azar"},{"$set":{"name":"xyz"}}
        )
         console.log(`${cursorupdate.modifiedCount} document was updated`);
         //Display

         const cf=collection.find()
         const data=await cf.toArray()
         console.table(data)
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)