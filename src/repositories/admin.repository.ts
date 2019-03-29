import {DefaultCrudRepository} from '@loopback/repository';
import {Admin} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AdminRepository extends DefaultCrudRepository<
  Admin,
  typeof Admin.prototype.email
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Admin, dataSource);
  }
}
