import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Eric_EventsupplementinfoSchema} from './../Account/schema/eric_eventsupplementinfo-schema';
import {Eric_Eventsupplementinfo} from './../Account/eric_eventsupplementinfo';

export class Eric_EventsupplementinfoRepository extends RepositoryBase<Eric_Eventsupplementinfo> implements IRepository<Eric_Eventsupplementinfo>  {
	constructor() {
		super(Eric_EventsupplementinfoSchema);
	}
};

Object.seal(Eric_EventsupplementinfoRepository);
