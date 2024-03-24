import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { url } from "inspector";

export const terms: { terms?: mongoDB.Collection } = {}

export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.NODE_ENV);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const termsCollection: mongoDB.Collection = db.collection(process.env.NODE_ENV);
 
  terms.terms = termsCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${termsCollection.collectionName}`);
 }