import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Config_LdapSchema} from './../Account/schema/config_ldap-schema';
import {Config_Ldap} from './../Account/config_ldap';

export class Config_LdapRepository extends RepositoryBase<Config_Ldap> implements IRepository<Config_Ldap>  {
	constructor() {
		super(Config_LdapSchema);
	}
};

Object.seal(Config_LdapRepository);
