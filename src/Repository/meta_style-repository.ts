import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_StyleSchema} from './../Account/schema/meta_style-schema';
import {Meta_Style} from './../Account/meta_style';

export class Meta_StyleRepository extends RepositoryBase<Meta_Style> implements IRepository<Meta_Style>  {
	constructor() {
		super(Meta_StyleSchema);
	}
};

Object.seal(Meta_StyleRepository);
