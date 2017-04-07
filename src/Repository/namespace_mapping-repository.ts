import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Namespace_MappingSchema} from './../Account/schema/namespace_mapping-schema';
import {Namespace_Mapping} from './../Account/namespace_mapping';

export class Namespace_MappingRepository extends RepositoryBase<Namespace_Mapping> implements IRepository<Namespace_Mapping>  {
	constructor() {
		super(Namespace_MappingSchema);
	}
};

Object.seal(Namespace_MappingRepository);
