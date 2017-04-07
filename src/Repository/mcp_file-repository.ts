import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Mcp_FileSchema} from './../Account/schema/mcp_file-schema';
import {Mcp_File} from './../Account/mcp_file';

export class Mcp_FileRepository extends RepositoryBase<Mcp_File> implements IRepository<Mcp_File>  {
	constructor() {
		super(Mcp_FileSchema);
	}
};

Object.seal(Mcp_FileRepository);
