import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class User extends Entity {
  @property({
    type: 'string',
    default: 'Stranger',
  })
  name?: string;

  @property({
    type: 'string',
    id: true,
    default: '00',
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    default: 'test@email.com',
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    default: 'password',
  })
  password: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
