import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Ticket_StoreSchema} from './../Account/schema/ticket_store-schema';
import {Ticket_Store} from './../Account/ticket_store';

export class Ticket_StoreRepository extends RepositoryBase<Ticket_Store> implements IRepository<Ticket_Store>  {
	constructor() {
		super(Ticket_StoreSchema);
	}
};

Object.seal(Ticket_StoreRepository);
