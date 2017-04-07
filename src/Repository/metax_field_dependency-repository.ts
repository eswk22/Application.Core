import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metax_Field_DependencySchema} from './../Account/schema/metax_field_dependency-schema';
import {Metax_Field_Dependency} from './../Account/metax_field_dependency';

export class Metax_Field_DependencyRepository extends RepositoryBase<Metax_Field_Dependency> implements IRepository<Metax_Field_Dependency>  {
	constructor() {
		super(Metax_Field_DependencySchema);
	}
};

Object.seal(Metax_Field_DependencyRepository);
