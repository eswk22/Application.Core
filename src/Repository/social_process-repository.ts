import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Social_ProcessSchema} from './../Account/schema/social_process-schema';
import {Social_Process} from './../Account/social_process';

export class Social_ProcessRepository extends RepositoryBase<Social_Process> implements IRepository<Social_Process>  {
	constructor() {
		super(Social_ProcessSchema);
	}
};

Object.seal(Social_ProcessRepository);
