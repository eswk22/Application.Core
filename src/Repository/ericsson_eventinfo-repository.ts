import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Ericsson_EventinfoSchema} from './../Account/schema/ericsson_eventinfo-schema';
import {Ericsson_Eventinfo} from './../Account/ericsson_eventinfo';

export class Ericsson_EventinfoRepository extends RepositoryBase<Ericsson_Eventinfo> implements IRepository<Ericsson_Eventinfo>  {
	constructor() {
		super(Ericsson_EventinfoSchema);
	}
};

Object.seal(Ericsson_EventinfoRepository);
