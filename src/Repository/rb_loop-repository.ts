import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rb_LoopSchema} from './../Account/schema/rb_loop-schema';
import {Rb_Loop} from './../Account/rb_loop';

export class Rb_LoopRepository extends RepositoryBase<Rb_Loop> implements IRepository<Rb_Loop>  {
	constructor() {
		super(Rb_LoopSchema);
	}
};

Object.seal(Rb_LoopRepository);
