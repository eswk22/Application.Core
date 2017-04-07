import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_SessionSchema} from './../Account/schema/resolve_session-schema';
import {Resolve_Session} from './../Account/resolve_session';

export class Resolve_SessionRepository extends RepositoryBase<Resolve_Session> implements IRepository<Resolve_Session>  {
	constructor() {
		super(Resolve_SessionSchema);
	}
};

Object.seal(Resolve_SessionRepository);
