import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metax_Form_View_PanelSchema} from './../Account/schema/metax_form_view_panel-schema';
import {Metax_Form_View_Panel} from './../Account/metax_form_view_panel';

export class Metax_Form_View_PanelRepository extends RepositoryBase<Metax_Form_View_Panel> implements IRepository<Metax_Form_View_Panel>  {
	constructor() {
		super(Metax_Form_View_PanelSchema);
	}
};

Object.seal(Metax_Form_View_PanelRepository);
