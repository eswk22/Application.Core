import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_BlueprintSchema} from './../Account/schema/resolve_blueprint-schema';
import {Resolve_Blueprint} from './../Account/resolve_blueprint';

export class Resolve_BlueprintRepository extends RepositoryBase<Resolve_Blueprint> implements IRepository<Resolve_Blueprint>  {
	constructor() {
		super(Resolve_BlueprintSchema);
	}
};

Object.seal(Resolve_BlueprintRepository);
