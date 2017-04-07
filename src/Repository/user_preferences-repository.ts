import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {User_PreferencesSchema} from './../Account/schema/user_preferences-schema';
import {User_Preferences} from './../Account/user_preferences';

export class User_PreferencesRepository extends RepositoryBase<User_Preferences> implements IRepository<User_Preferences>  {
	constructor() {
		super(User_PreferencesSchema);
	}
};

Object.seal(User_PreferencesRepository);
