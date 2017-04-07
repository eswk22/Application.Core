import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Social_User_NotificationSchema} from './../Account/schema/social_user_notification-schema';
import {Social_User_Notification} from './../Account/social_user_notification';

export class Social_User_NotificationRepository extends RepositoryBase<Social_User_Notification> implements IRepository<Social_User_Notification>  {
	constructor() {
		super(Social_User_NotificationSchema);
	}
};

Object.seal(Social_User_NotificationRepository);
