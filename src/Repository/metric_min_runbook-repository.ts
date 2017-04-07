import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Min_RunbookSchema} from './../Account/schema/metric_min_runbook-schema';
import {Metric_Min_Runbook} from './../Account/metric_min_runbook';

export class Metric_Min_RunbookRepository extends RepositoryBase<Metric_Min_Runbook> implements IRepository<Metric_Min_Runbook>  {
	constructor() {
		super(Metric_Min_RunbookSchema);
	}
};

Object.seal(Metric_Min_RunbookRepository);
