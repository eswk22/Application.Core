import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Archive_Action_ResultSchema} from './../Account/schema/archive_action_result-schema';
import {Archive_Action_Result} from './../Account/archive_action_result';

export class Archive_Action_ResultRepository extends RepositoryBase<Archive_Action_Result> implements IRepository<Archive_Action_Result>  {
	constructor() {
		super(Archive_Action_ResultSchema);
	}
};

Object.seal(Archive_Action_ResultRepository);
