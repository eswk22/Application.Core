import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_AppsSchema} from './../Account/schema/resolve_apps-schema';
import {Resolve_Apps} from './../Account/resolve_apps';

export class Resolve_AppsRepository extends RepositoryBase<Resolve_Apps> implements IRepository<Resolve_Apps>  {
	constructor() {
		super(Resolve_AppsSchema);
	}
};

Object.seal(Resolve_AppsRepository);
