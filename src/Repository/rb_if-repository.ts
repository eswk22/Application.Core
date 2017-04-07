import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rb_IfSchema} from './../Account/schema/rb_if-schema';
import {Rb_If} from './../Account/rb_if';

export class Rb_IfRepository extends RepositoryBase<Rb_If> implements IRepository<Rb_If>  {
	constructor() {
		super(Rb_IfSchema);
	}
};

Object.seal(Rb_IfRepository);
