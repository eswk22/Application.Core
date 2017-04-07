import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Execute_DependencySchema} from './../Account/schema/resolve_execute_dependency-schema';
import {Resolve_Execute_Dependency} from './../Account/resolve_execute_dependency';

export class Resolve_Execute_DependencyRepository extends RepositoryBase<Resolve_Execute_Dependency> implements IRepository<Resolve_Execute_Dependency>  {
	constructor() {
		super(Resolve_Execute_DependencySchema);
	}
};

Object.seal(Resolve_Execute_DependencyRepository);
