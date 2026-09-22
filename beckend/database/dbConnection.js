import mongoose from 'mongoose'
import dns from "dns";



async function dbConnection() {

try{
    
dns.setServers(["8.8.8.8", "8.8.4.4"]);
    await mongoose.connect("mongodb+srv://M-khalil:E0oc647rPmJmf3Ks@cluster0.qbedz1i.mongodb.net/?appName=Cluster0",{
        dbName: "MKhalil"
    })

      
    console.log("The db is runnig");


}   catch (error) {

console.log(error, "The error from db connection");

}


    
}




export default dbConnection