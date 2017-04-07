import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Day_UsersSchema} from './../Account/schema/metric_day_users-schema';
import {Metric_Day_Users} from './../Account/metric_day_users';

export class Metric_Day_UsersRepository extends RepositoryBase<Metric_Day_Users> implements IRepository<Metric_Day_Users>  {
	constructor() {
		super(Metric_Day_UsersSchema);
	}
};

Object.seal(Metric_Day_UsersRepository);
