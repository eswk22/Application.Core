import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Ericsson_EmselementmapSchema} from './../Account/schema/ericsson_emselementmap-schema';
import {Ericsson_Emselementmap} from './../Account/ericsson_emselementmap';

export class Ericsson_EmselementmapRepository extends RepositoryBase<Ericsson_Emselementmap> implements IRepository<Ericsson_Emselementmap>  {
	constructor() {
		super(Ericsson_EmselementmapSchema);
	}
};

Object.seal(Ericsson_EmselementmapRepository);
