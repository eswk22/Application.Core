import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Trafficchk_MasterSchema} from './../Account/schema/trafficchk_master-schema';
import {Trafficchk_Master} from './../Account/trafficchk_master';

export class Trafficchk_MasterRepository extends RepositoryBase<Trafficchk_Master> implements IRepository<Trafficchk_Master>  {
	constructor() {
		super(Trafficchk_MasterSchema);
	}
};

Object.seal(Trafficchk_MasterRepository);
