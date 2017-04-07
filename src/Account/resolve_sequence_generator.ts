/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Sequence_Generator extends mongoose.Document {
  u_name : String,
  u_number : Number,
};
