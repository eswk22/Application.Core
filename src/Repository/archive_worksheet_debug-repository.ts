import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Archive_Worksheet_DebugSchema} from './../Account/schema/archive_worksheet_debug-schema';
import {Archive_Worksheet_Debug} from './../Account/archive_worksheet_debug';

export class Archive_Worksheet_DebugRepository extends RepositoryBase<Archive_Worksheet_Debug> implements IRepository<Archive_Worksheet_Debug>  {
	constructor() {
		super(Archive_Worksheet_DebugSchema);
	}
};

Object.seal(Archive_Worksheet_DebugRepository);
