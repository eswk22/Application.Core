import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Mcp_ServerSchema} from './../Account/schema/mcp_server-schema';
import {Mcp_Server} from './../Account/mcp_server';

export class Mcp_ServerRepository extends RepositoryBase<Mcp_Server> implements IRepository<Mcp_Server>  {
	constructor() {
		super(Mcp_ServerSchema);
	}
};

Object.seal(Mcp_ServerRepository);
