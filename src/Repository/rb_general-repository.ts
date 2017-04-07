import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rb_GeneralSchema} from './../Account/schema/rb_general-schema';
import {Rb_General} from './../Account/rb_general';

export class Rb_GeneralRepository extends RepositoryBase<Rb_General> implements IRepository<Rb_General>  {
	constructor() {
		super(Rb_GeneralSchema);
	}
};

Object.seal(Rb_GeneralRepository);
