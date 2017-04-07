import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {OrganizationSchema} from './../Account/schema/organization-schema';
import {Organization} from './../Account/organization';

export class OrganizationRepository extends RepositoryBase<Organization> implements IRepository<Organization>  {
	constructor() {
		super(OrganizationSchema);
	}
};

Object.seal(OrganizationRepository);
