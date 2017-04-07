import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Alu_Cdma_Luce_TicketstoreSchema} from './../Account/schema/alu_cdma_luce_ticketstore-schema';
import {Alu_Cdma_Luce_Ticketstore} from './../Account/alu_cdma_luce_ticketstore';

export class Alu_Cdma_Luce_TicketstoreRepository extends RepositoryBase<Alu_Cdma_Luce_Ticketstore> implements IRepository<Alu_Cdma_Luce_Ticketstore>  {
	constructor() {
		super(Alu_Cdma_Luce_TicketstoreSchema);
	}
};

Object.seal(Alu_Cdma_Luce_TicketstoreRepository);
