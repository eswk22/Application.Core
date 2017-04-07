import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_SourceSchema} from './../Account/schema/meta_source-schema';
import {Meta_Source} from './../Account/meta_source';

export class Meta_SourceRepository extends RepositoryBase<Meta_Source> implements IRepository<Meta_Source>  {
	constructor() {
		super(Meta_SourceSchema);
	}
};

Object.seal(Meta_SourceRepository);
