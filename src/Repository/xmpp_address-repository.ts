import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Xmpp_AddressSchema} from './../Account/schema/xmpp_address-schema';
import {Xmpp_Address} from './../Account/xmpp_address';

export class Xmpp_AddressRepository extends RepositoryBase<Xmpp_Address> implements IRepository<Xmpp_Address>  {
	constructor() {
		super(Xmpp_AddressSchema);
	}
};

Object.seal(Xmpp_AddressRepository);
