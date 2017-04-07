import {Resolve_Sequence_Generator} from "./../Resolve_Sequence_Generator";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_name:
  {
      type: String
  },
  u_number:
  {
      type: Number
  },
});

export let Resolve_Sequence_GeneratorSchema = mongooseConnection.model<Resolve_Sequence_Generator>('resolve_sequence_generator', schema);
