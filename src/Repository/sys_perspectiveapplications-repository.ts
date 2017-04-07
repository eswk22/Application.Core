import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Sys_PerspectiveapplicationsSchema} from './../Account/schema/sys_perspectiveapplications-schema';
import {Sys_Perspectiveapplications} from './../Account/sys_perspectiveapplications';

export class Sys_PerspectiveapplicationsRepository extends RepositoryBase<Sys_Perspectiveapplications> implements IRepository<Sys_Perspectiveapplications>  {
	constructor() {
		super(Sys_PerspectiveapplicationsSchema);
	}
};

Object.seal(Sys_PerspectiveapplicationsRepository);
