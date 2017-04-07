import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Netcool_AlarmsSchema} from './../Account/schema/netcool_alarms-schema';
import {Netcool_Alarms} from './../Account/netcool_alarms';

export class Netcool_AlarmsRepository extends RepositoryBase<Netcool_Alarms> implements IRepository<Netcool_Alarms>  {
	constructor() {
		super(Netcool_AlarmsSchema);
	}
};

Object.seal(Netcool_AlarmsRepository);
