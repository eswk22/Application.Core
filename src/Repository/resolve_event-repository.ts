import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_EventSchema} from './../Account/schema/resolve_event-schema';
import {Resolve_Event} from './../Account/resolve_event';

export class Resolve_EventRepository extends RepositoryBase<Resolve_Event> implements IRepository<Resolve_Event>  {
	constructor() {
		super(Resolve_EventSchema);
	}
};

Object.seal(Resolve_EventRepository);
