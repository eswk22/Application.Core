import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Sys_PerspectiveSchema} from './../Account/schema/sys_perspective-schema';
import {Sys_Perspective} from './../Account/sys_perspective';

export class Sys_PerspectiveRepository extends RepositoryBase<Sys_Perspective> implements IRepository<Sys_Perspective>  {
	constructor() {
		super(Sys_PerspectiveSchema);
	}
};

Object.seal(Sys_PerspectiveRepository);
