import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {CustomfilerespoitorySchema} from './../Account/schema/customfilerespoitory-schema';
import {Customfilerespoitory} from './../Account/customfilerespoitory';

export class CustomfilerespoitoryRepository extends RepositoryBase<Customfilerespoitory> implements IRepository<Customfilerespoitory>  {
	constructor() {
		super(CustomfilerespoitorySchema);
	}
};

Object.seal(CustomfilerespoitoryRepository);
