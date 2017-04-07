import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Sequence_GeneratorSchema} from './../Account/schema/resolve_sequence_generator-schema';
import {Resolve_Sequence_Generator} from './../Account/resolve_sequence_generator';

export class Resolve_Sequence_GeneratorRepository extends RepositoryBase<Resolve_Sequence_Generator> implements IRepository<Resolve_Sequence_Generator>  {
	constructor() {
		super(Resolve_Sequence_GeneratorSchema);
	}
};

Object.seal(Resolve_Sequence_GeneratorRepository);
