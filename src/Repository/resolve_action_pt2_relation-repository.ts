import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Action_Pt2_RelationSchema} from './../Account/schema/resolve_action_pt2_relation-schema';
import {Resolve_Action_Pt2_Relation} from './../Account/resolve_action_pt2_relation';

export class Resolve_Action_Pt2_RelationRepository extends RepositoryBase<Resolve_Action_Pt2_Relation> implements IRepository<Resolve_Action_Pt2_Relation>  {
	constructor() {
		super(Resolve_Action_Pt2_RelationSchema);
	}
};

Object.seal(Resolve_Action_Pt2_RelationRepository);
