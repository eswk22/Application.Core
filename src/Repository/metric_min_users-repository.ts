import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Min_UsersSchema} from './../Account/schema/metric_min_users-schema';
import {Metric_Min_Users} from './../Account/metric_min_users';

export class Metric_Min_UsersRepository extends RepositoryBase<Metric_Min_Users> implements IRepository<Metric_Min_Users>  {
	constructor() {
		super(Metric_Min_UsersSchema);
	}
};

Object.seal(Metric_Min_UsersRepository);
