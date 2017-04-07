import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Ericsson_FirmwareSchema} from './../Account/schema/ericsson_firmware-schema';
import {Ericsson_Firmware} from './../Account/ericsson_firmware';

export class Ericsson_FirmwareRepository extends RepositoryBase<Ericsson_Firmware> implements IRepository<Ericsson_Firmware>  {
	constructor() {
		super(Ericsson_FirmwareSchema);
	}
};

Object.seal(Ericsson_FirmwareRepository);
