import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rb_Connection_ParamSchema} from './../Account/schema/rb_connection_param-schema';
import {Rb_Connection_Param} from './../Account/rb_connection_param';

export class Rb_Connection_ParamRepository extends RepositoryBase<Rb_Connection_Param> implements IRepository<Rb_Connection_Param>  {
	constructor() {
		super(Rb_Connection_ParamSchema);
	}
};

Object.seal(Rb_Connection_ParamRepository);
