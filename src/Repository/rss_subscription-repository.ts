import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rss_SubscriptionSchema} from './../Account/schema/rss_subscription-schema';
import {Rss_Subscription} from './../Account/rss_subscription';

export class Rss_SubscriptionRepository extends RepositoryBase<Rss_Subscription> implements IRepository<Rss_Subscription>  {
	constructor() {
		super(Rss_SubscriptionSchema);
	}
};

Object.seal(Rss_SubscriptionRepository);
