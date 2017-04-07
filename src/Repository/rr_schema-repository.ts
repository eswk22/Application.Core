import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rr_SchemaSchema} from './../Account/schema/rr_schema-schema';
import {Rr_Schema} from './../Account/rr_schema';

export class Rr_SchemaRepository extends RepositoryBase<Rr_Schema> implements IRepository<Rr_Schema>  {
	constructor() {
		super(Rr_SchemaSchema);
	}
};

Object.seal(Rr_SchemaRepository);
