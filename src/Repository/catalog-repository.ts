import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {CatalogSchema} from './../Account/schema/catalog-schema';
import {Catalog} from './../Account/catalog';

export class CatalogRepository extends RepositoryBase<Catalog> implements IRepository<Catalog>  {
	constructor() {
		super(CatalogSchema);
	}
};

Object.seal(CatalogRepository);
