/*
    The moudle to contain some constants
*/

export const MONGO_BASE_URL = process.env.NODE_ENV === "production" ? "https://floating-beyond-26711.herokuapp.com/api" : "http://localhost:8080/api"; // the base url of MongoDB
export const AZURE_BASE_URL = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080"; // the url of Azure