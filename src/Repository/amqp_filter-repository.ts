import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Amqp_FilterSchema} from './../Account/schema/amqp_filter-schema';
import {Amqp_Filter} from './../Account/amqp_filter';

export class Amqp_FilterRepository extends RepositoryBase<Amqp_Filter> implements IRepository<Amqp_Filter>  {
	constructor() {
		super(Amqp_FilterSchema);
	}
};

Object.seal(Amqp_FilterRepository);
