import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Event_HandlerSchema} from './../Account/schema/resolve_event_handler-schema';
import {Resolve_Event_Handler} from './../Account/resolve_event_handler';

export class Resolve_Event_HandlerRepository extends RepositoryBase<Resolve_Event_Handler> implements IRepository<Resolve_Event_Handler>  {
	constructor() {
		super(Resolve_Event_HandlerSchema);
	}
};

Object.seal(Resolve_Event_HandlerRepository);
