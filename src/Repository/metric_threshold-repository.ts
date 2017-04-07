import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_ThresholdSchema} from './../Account/schema/metric_threshold-schema';
import {Metric_Threshold} from './../Account/metric_threshold';

export class Metric_ThresholdRepository extends RepositoryBase<Metric_Threshold> implements IRepository<Metric_Threshold>  {
	constructor() {
		super(Metric_ThresholdSchema);
	}
};

Object.seal(Metric_ThresholdRepository);
