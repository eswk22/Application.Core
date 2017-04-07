import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Ews_AddressSchema} from './../Account/schema/ews_address-schema';
import {Ews_Address} from './../Account/ews_address';

export class Ews_AddressRepository extends RepositoryBase<Ews_Address> implements IRepository<Ews_Address>  {
	constructor() {
		super(Ews_AddressSchema);
	}
};

Object.seal(Ews_AddressRepository);
