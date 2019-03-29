import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Admin} from '../models';
import {AdminRepository} from '../repositories';

export class AdminController {
  constructor(
    @repository(AdminRepository)
    public adminRepository : AdminRepository,
  ) {}

  @post('/admins', {
    responses: {
      '200': {
        description: 'Admin model instance',
        content: {'application/json': {schema: {'x-ts-type': Admin}}},
      },
    },
  })
  async create(@requestBody() admin: Admin): Promise<Admin> {
    return await this.adminRepository.create(admin);
  }

  @get('/admins/count', {
    responses: {
      '200': {
        description: 'Admin model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Admin)) where?: Where,
  ): Promise<Count> {
    return await this.adminRepository.count(where);
  }

  @get('/admins', {
    responses: {
      '200': {
        description: 'Array of Admin model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Admin}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Admin)) filter?: Filter,
  ): Promise<Admin[]> {
    return await this.adminRepository.find(filter);
  }

  @patch('/admins', {
    responses: {
      '200': {
        description: 'Admin PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() admin: Admin,
    @param.query.object('where', getWhereSchemaFor(Admin)) where?: Where,
  ): Promise<Count> {
    return await this.adminRepository.updateAll(admin, where);
  }

  @get('/admins/{id}', {
    responses: {
      '200': {
        description: 'Admin model instance',
        content: {'application/json': {schema: {'x-ts-type': Admin}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Admin> {
    return await this.adminRepository.findById(id);
  }

  @patch('/admins/{id}', {
    responses: {
      '204': {
        description: 'Admin PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() admin: Admin,
  ): Promise<void> {
    await this.adminRepository.updateById(id, admin);
  }

  @put('/admins/{id}', {
    responses: {
      '204': {
        description: 'Admin PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() admin: Admin,
  ): Promise<void> {
    await this.adminRepository.replaceById(id, admin);
  }

  @del('/admins/{id}', {
    responses: {
      '204': {
        description: 'Admin DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.adminRepository.deleteById(id);
  }
}
