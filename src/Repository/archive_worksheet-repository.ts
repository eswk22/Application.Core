import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Archive_WorksheetSchema} from './../Account/schema/archive_worksheet-schema';
import {Archive_Worksheet} from './../Account/archive_worksheet';

export class Archive_WorksheetRepository extends RepositoryBase<Archive_Worksheet> implements IRepository<Archive_Worksheet>  {
	constructor() {
		super(Archive_WorksheetSchema);
	}
};

Object.seal(Archive_WorksheetRepository);
