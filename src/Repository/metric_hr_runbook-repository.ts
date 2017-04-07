import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Hr_RunbookSchema} from './../Account/schema/metric_hr_runbook-schema';
import {Metric_Hr_Runbook} from './../Account/metric_hr_runbook';

export class Metric_Hr_RunbookRepository extends RepositoryBase<Metric_Hr_Runbook> implements IRepository<Metric_Hr_Runbook>  {
	constructor() {
		super(Metric_Hr_RunbookSchema);
	}
};

Object.seal(Metric_Hr_RunbookRepository);
