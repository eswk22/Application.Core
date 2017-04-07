import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Shared_ObjectSchema} from './../Account/schema/resolve_shared_object-schema';
import {Resolve_Shared_Object} from './../Account/resolve_shared_object';

export class Resolve_Shared_ObjectRepository extends RepositoryBase<Resolve_Shared_Object> implements IRepository<Resolve_Shared_Object>  {
	constructor() {
		super(Resolve_Shared_ObjectSchema);
	}
};

Object.seal(Resolve_Shared_ObjectRepository);
