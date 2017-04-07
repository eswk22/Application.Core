import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Mcp_BlueprintSchema} from './../Account/schema/mcp_blueprint-schema';
import {Mcp_Blueprint} from './../Account/mcp_blueprint';

export class Mcp_BlueprintRepository extends RepositoryBase<Mcp_Blueprint> implements IRepository<Mcp_Blueprint>  {
	constructor() {
		super(Mcp_BlueprintSchema);
	}
};

Object.seal(Mcp_BlueprintRepository);
