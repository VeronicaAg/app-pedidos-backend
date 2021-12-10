import {Entity, model, property} from '@loopback/repository';

@model()
export class PedidoProducto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idPedidoP?: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaCreacion: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaEntrega: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoPedido: string;

  @property({
    type: 'string',
    required: true,
  })
  metodoPago: string;

  @property({
    type: 'string',
    required: true,
  })
  observaciones: string;


  constructor(data?: Partial<PedidoProducto>) {
    super(data);
  }
}

export interface PedidoProductoRelations {
  // describe navigational properties here
}

export type PedidoProductoWithRelations = PedidoProducto & PedidoProductoRelations;
