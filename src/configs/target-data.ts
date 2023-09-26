import { MongoClient, Db, ServerApiVersion } from 'mongodb';
import { Config } from './config';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClient = new MongoClient(Config.DB_MONGODB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let _db: Db | null = null;

const initTargetDb = async (): Promise<Db> => {
  if (_db) {
    console.log('Database is already initialized!');
    return _db;
  }

  let client: MongoClient | null = null;

  try {
    client = await mongoClient.connect();
    _db = client.db('petshop');

    return _db;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    // Ensures that the client will close when you finish/error
    // if (client) {
    //   await client.close();
    // }
  }
};

const getTargetDb = (): Db => {
  if (!_db) {
    throw new Error('Database not initialized');
  }
  return _db;
};

export { initTargetDb, getTargetDb };
