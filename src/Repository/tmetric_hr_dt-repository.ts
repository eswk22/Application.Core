import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Tmetric_Hr_DtSchema} from './../Account/schema/tmetric_hr_dt-schema';
import {Tmetric_Hr_Dt} from './../Account/tmetric_hr_dt';

export class Tmetric_Hr_DtRepository extends RepositoryBase<Tmetric_Hr_Dt> implements IRepository<Tmetric_Hr_Dt>  {
	constructor() {
		super(Tmetric_Hr_DtSchema);
	}
};

Object.seal(Tmetric_Hr_DtRepository);
