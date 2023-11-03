import mongoose from 'mongoose'
declare global {
  var mongoose: any // This must be a `var` and not a `let / const`
}

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('connect to mongo')
      return mongoose
    })
  }
  try {
    cached.conn = await cached.promise
  } catch(e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect





// ================== //

// import mongoose from "mongoose";

// const URI: string | any = process.env.MONGODB_URI
// // track the connection
// let isConnected = false;

// const connectDB = async () => {
//   mongoose.set("strictQuery", true);
//   if (isConnected) {
//     console.log("DB connected already");
//     return;
//   }
//   try {
//     await mongoose.connect(URI);
//     isConnected = true;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectDB


// ================== //



// import mongoose from 'mongoose'

// const uri: string | any = process.env.MONGODB_URI

// const connectDB = async () => {
//   try {
//     if (mongoose.connection.readyState === 0) {
//       await mongoose.connect(uri)
//       console.log('connect to mongodb')
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// export default connectDB

// ================== //

// import { MongoClient } from 'mongodb'

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid environment variable: "MONGODB_URI"')
// }

// const uri = process.env.MONGODB_URI
// const options = {}

// let client
// let clientPromise: Promise<MongoClient>

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise


