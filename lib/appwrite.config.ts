import * as sdk from "node-appwrite";

// export const {
//   NEXT_PUBLIC_ENDPOINT: ENDPOINT,
//   PROJECT_ID,
//   API_KEY,
//   DATABASE_ID,
//   PATIENT_COLLECTION_ID,
//   DOCTOR_COLLECTION_ID,
//   APPOINTMENT_COLLECTION_ID,
//   NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
// } = process.env;


export const ENDPOINT = "https://cloud.appwrite.io/v1"
export const PROJECT_ID = "668a206d0011563bbc40"
export const API_KEY = "a5494b74efa6f7f559db474f2c52a2fe46d363e3ccb988902a81ae074a1e7b09c5954eaf079bfc934af94dac5f038f90fcce4c4725ce24468ec2ad1bc9f963d882c3ee0ff8630c552a03ee2961fdb19832497cbcc67b839387cec99d9086ba433375a054b47615c65fe036478a710e4b2a95a6c1525c52b0eaf7fb3a1c6beed1"
export const DB_ID= "668a31ec000cd02b2164"
export const PATIENT_COLLECTION_ID="668a321f003c6eda2865"
export const DOCTOR_COLLECTION_ID="668a32370002e3ce0acb"
export const APPOINTMENT_COLLECTION_ID="668a324f002dd94eeca1"
export const BUCKET_ID="668a32960029dc937bc2"


const client = new sdk.Client();

client.setEndpoint(ENDPOINT)
      .setProject(PROJECT_ID)
      .setKey(API_KEY);


export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);