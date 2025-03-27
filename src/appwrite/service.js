import {Client,Databases,ID} from "appwrite"
import envConfig from "../envConfig/envConfig"

 export class Service {
    client = new Client()
    databases;

    constructor(){
        this.client
        .setEndpoint(envConfig.appWriteUrl)
        .setProject(envConfig.appWriteProjectId)

        this.databases = new Databases(this.client)
    }

    async postData({name,email,message}){
        try{
          return await this.databases.createDocument(
                envConfig.appWriteDatabaseId,
                envConfig.appWriteCollectionId,
                ID.unique(),
                {
                    name,
                    email,
                    message,
                }
            )

        }catch(error){
            console.log("Post data error",error);            
        };
    }
}

const service = new Service()
export default service

