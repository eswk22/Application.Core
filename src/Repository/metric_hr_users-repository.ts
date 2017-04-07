import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Hr_UsersSchema} from './../Account/schema/metric_hr_users-schema';
import {Metric_Hr_Users} from './../Account/metric_hr_users';

export class Metric_Hr_UsersRepository extends RepositoryBase<Metric_Hr_Users> implements IRepository<Metric_Hr_Users>  {
	constructor() {
		super(Metric_Hr_UsersSchema);
	}
};

Object.seal(Metric_Hr_UsersRepository);
