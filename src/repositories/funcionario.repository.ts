import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Funcionario, FuncionarioRelations} from '../models';

export class FuncionarioRepository extends DefaultCrudRepository<
  Funcionario,
  typeof Funcionario.prototype.idFuncionario,
  FuncionarioRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Funcionario, dataSource);
  }
}
