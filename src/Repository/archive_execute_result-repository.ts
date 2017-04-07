import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Archive_Execute_ResultSchema} from './../Account/schema/archive_execute_result-schema';
import {Archive_Execute_Result} from './../Account/archive_execute_result';

export class Archive_Execute_ResultRepository extends RepositoryBase<Archive_Execute_Result> implements IRepository<Archive_Execute_Result>  {
	constructor() {
		super(Archive_Execute_ResultSchema);
	}
};

Object.seal(Archive_Execute_ResultRepository);
