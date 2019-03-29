import {Model, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Admin extends Model {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Admin>) {
    super(data);
  }
}
