import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Day_RunbookSchema} from './../Account/schema/metric_day_runbook-schema';
import {Metric_Day_Runbook} from './../Account/metric_day_runbook';

export class Metric_Day_RunbookRepository extends RepositoryBase<Metric_Day_Runbook> implements IRepository<Metric_Day_Runbook>  {
	constructor() {
		super(Metric_Day_RunbookSchema);
	}
};

Object.seal(Metric_Day_RunbookRepository);
