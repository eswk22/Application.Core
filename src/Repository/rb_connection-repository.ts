import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rb_ConnectionSchema} from './../Account/schema/rb_connection-schema';
import {Rb_Connection} from './../Account/rb_connection';

export class Rb_ConnectionRepository extends RepositoryBase<Rb_Connection> implements IRepository<Rb_Connection>  {
	constructor() {
		super(Rb_ConnectionSchema);
	}
};

Object.seal(Rb_ConnectionRepository);
