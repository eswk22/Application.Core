import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Mcp_ComponentSchema} from './../Account/schema/mcp_component-schema';
import {Mcp_Component} from './../Account/mcp_component';

export class Mcp_ComponentRepository extends RepositoryBase<Mcp_Component> implements IRepository<Mcp_Component>  {
	constructor() {
		super(Mcp_ComponentSchema);
	}
};

Object.seal(Mcp_ComponentRepository);
