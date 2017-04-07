import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_ControlSchema} from './../Account/schema/meta_control-schema';
import {Meta_Control} from './../Account/meta_control';

export class Meta_ControlRepository extends RepositoryBase<Meta_Control> implements IRepository<Meta_Control>  {
	constructor() {
		super(Meta_ControlSchema);
	}
};

Object.seal(Meta_ControlRepository);
