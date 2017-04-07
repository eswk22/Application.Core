import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Mcp_File_ContentSchema} from './../Account/schema/mcp_file_content-schema';
import {Mcp_File_Content} from './../Account/mcp_file_content';

export class Mcp_File_ContentRepository extends RepositoryBase<Mcp_File_Content> implements IRepository<Mcp_File_Content>  {
	constructor() {
		super(Mcp_File_ContentSchema);
	}
};

Object.seal(Mcp_File_ContentRepository);
