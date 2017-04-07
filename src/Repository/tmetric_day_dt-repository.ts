import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Tmetric_Day_DtSchema} from './../Account/schema/tmetric_day_dt-schema';
import {Tmetric_Day_Dt} from './../Account/tmetric_day_dt';

export class Tmetric_Day_DtRepository extends RepositoryBase<Tmetric_Day_Dt> implements IRepository<Tmetric_Day_Dt>  {
	constructor() {
		super(Tmetric_Day_DtSchema);
	}
};

Object.seal(Tmetric_Day_DtRepository);
