import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Sys_PerspectiverolesSchema} from './../Account/schema/sys_perspectiveroles-schema';
import {Sys_Perspectiveroles} from './../Account/sys_perspectiveroles';

export class Sys_PerspectiverolesRepository extends RepositoryBase<Sys_Perspectiveroles> implements IRepository<Sys_Perspectiveroles>  {
	constructor() {
		super(Sys_PerspectiverolesSchema);
	}
};

Object.seal(Sys_PerspectiverolesRepository);
