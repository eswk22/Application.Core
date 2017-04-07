import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_PermissionSchema} from './../Account/schema/resolve_permission-schema';
import {Resolve_Permission} from './../Account/resolve_permission';

export class Resolve_PermissionRepository extends RepositoryBase<Resolve_Permission> implements IRepository<Resolve_Permission>  {
	constructor() {
		super(Resolve_PermissionSchema);
	}
};

Object.seal(Resolve_PermissionRepository);
