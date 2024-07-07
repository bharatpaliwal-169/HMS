import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("668a206d0011563bbc40")
      .setKey("a5494b74efa6f7f559db474f2c52a2fe46d363e3ccb988902a81ae074a1e7b09c5954eaf079bfc934af94dac5f038f90fcce4c4725ce24468ec2ad1bc9f963d882c3ee0ff8630c552a03ee2961fdb19832497cbcc67b839387cec99d9086ba433375a054b47615c65fe036478a710e4b2a95a6c1525c52b0eaf7fb3a1c6beed1");


export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);