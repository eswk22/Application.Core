import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Archive_Execute_DependencySchema} from './../Account/schema/archive_execute_dependency-schema';
import {Archive_Execute_Dependency} from './../Account/archive_execute_dependency';

export class Archive_Execute_DependencyRepository extends RepositoryBase<Archive_Execute_Dependency> implements IRepository<Archive_Execute_Dependency>  {
	constructor() {
		super(Archive_Execute_DependencySchema);
	}
};

Object.seal(Archive_Execute_DependencyRepository);
