import {Entity, model, property} from '@loopback/repository';

@model()
export class Inmobiliaria extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
  })
  porcentajeAlquiler?: number;

  @property({
    type: 'number',
  })
  porcentajeVenta?: number;


  constructor(data?: Partial<Inmobiliaria>) {
    super(data);
  }
}

export interface InmobiliariaRelations {
  // describe navigational properties here
}

export type InmobiliariaWithRelations = Inmobiliaria & InmobiliariaRelations;
