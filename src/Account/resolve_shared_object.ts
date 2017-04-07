/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Shared_Object extends mongoose.Document {
  u_content : String,
  u_name : String,
  u_number : Number,
};
