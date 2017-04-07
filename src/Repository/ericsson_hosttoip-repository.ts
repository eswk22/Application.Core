import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Ericsson_HosttoipSchema} from './../Account/schema/ericsson_hosttoip-schema';
import {Ericsson_Hosttoip} from './../Account/ericsson_hosttoip';

export class Ericsson_HosttoipRepository extends RepositoryBase<Ericsson_Hosttoip> implements IRepository<Ericsson_Hosttoip>  {
	constructor() {
		super(Ericsson_HosttoipSchema);
	}
};

Object.seal(Ericsson_HosttoipRepository);
