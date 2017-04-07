import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Emailserver_AddressSchema} from './../Account/schema/emailserver_address-schema';
import {Emailserver_Address} from './../Account/emailserver_address';

export class Emailserver_AddressRepository extends RepositoryBase<Emailserver_Address> implements IRepository<Emailserver_Address>  {
	constructor() {
		super(Emailserver_AddressSchema);
	}
};

Object.seal(Emailserver_AddressRepository);
