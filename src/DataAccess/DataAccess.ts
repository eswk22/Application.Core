    /// <reference path="./../../typings/index.d.ts" />
    import logger = require("application.common/lib/js/logger/logger");
    import Mongoose = require("mongoose");
    import Constants = require("./../config/constants/Constants");
    
    export class DataAccess {
        static mongooseInstance: any;
        static mongooseConnection: Mongoose.Connection;
        
        constructor () {
            DataAccess.connect(); 
        }  
        
        static connect (): Mongoose.Connection {
            if(this.mongooseInstance) return this.mongooseInstance;
            
            this.mongooseConnection  = Mongoose.connection;
            this.mongooseConnection.once("open", () => {              
               logger.warn("Connectd to mongodb.");
            });

            // CONNECTION EVENTS
            // When successfully connected
            this.mongooseConnection.on('connected', function () {  
                 console.log('Mongoose default connection open to ' + Constants.DB_CONNECTION_STRING);
            }); 

            // If the connection throws an error
            this.mongooseConnection.on('error',function (err) {  
                console.log('Mongoose default connection error: ' + err);
            }); 

            // When the connection is disconnected
            this.mongooseConnection.on('disconnected', function () {  
                console.log('Mongoose default connection disconnected'); 
            });

            // If the Node process ends, close the Mongoose connection 
            process.on('SIGINT', function() {  
            this.mongooseConnection.close(function () { 
                console.log('Mongoose default connection disconnected through app termination'); 
                process.exit(0); 
            }); 
            }); 

           this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
           return this.mongooseInstance;
        }
        
    }
    
    DataAccess.connect();
     