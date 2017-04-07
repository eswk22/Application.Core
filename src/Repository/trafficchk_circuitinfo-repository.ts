import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Trafficchk_CircuitinfoSchema} from './../Account/schema/trafficchk_circuitinfo-schema';
import {Trafficchk_Circuitinfo} from './../Account/trafficchk_circuitinfo';

export class Trafficchk_CircuitinfoRepository extends RepositoryBase<Trafficchk_Circuitinfo> implements IRepository<Trafficchk_Circuitinfo>  {
	constructor() {
		super(Trafficchk_CircuitinfoSchema);
	}
};

Object.seal(Trafficchk_CircuitinfoRepository);
