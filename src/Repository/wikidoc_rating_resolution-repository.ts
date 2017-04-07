import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Wikidoc_Rating_ResolutionSchema} from './../Account/schema/wikidoc_rating_resolution-schema';
import {Wikidoc_Rating_Resolution} from './../Account/wikidoc_rating_resolution';

export class Wikidoc_Rating_ResolutionRepository extends RepositoryBase<Wikidoc_Rating_Resolution> implements IRepository<Wikidoc_Rating_Resolution>  {
	constructor() {
		super(Wikidoc_Rating_ResolutionSchema);
	}
};

Object.seal(Wikidoc_Rating_ResolutionRepository);
