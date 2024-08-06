import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Cliente } from './Cliente.js';
import { Excursao } from './Excursao.js';

export const Reserva = sequelize.define('reserva', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quant: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false
  }
}, {
  tableName: "reservas"
});

Reserva.belongsTo(Cliente, {
  foreignKey: {
    name: 'cliente_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Cliente.hasMany(Reserva, {
  foreignKey: 'cliente_id'
})

Reserva.belongsTo(Excursao, {
  foreignKey: {
    name: 'excursao_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Excursao.hasMany(Reserva, {
  foreignKey: 'excursao_id'
})



INSERT INTO destinos (descricao, tipo_passagem, preco, dias_de_duracao, createdAt, updatedAt) VALUES ('Destino 1', 'Tipo 1', 100.00, 1, '2023-10-27 10:00:00', '2023-10-27 10:00:00');
INSERT INTO destinos (descricao, tipo_passagem, preco, dias_de_duracao, createdAt, updatedAt) VALUES ('Destino 2', 'Tipo 2', 120.00, 2, '2023-10-27 10:00:00', '2023-10-27 10:00:00');
INSERT INTO destinos (descricao, tipo_passagem, preco, dias_de_duracao, createdAt, updatedAt) VALUES ('Destino 3', 'Tipo 3', 150.00, 3, '2023-10-27 10:00:00', '2023-10-27 10:00:00');
INSERT INTO destinos (descricao, tipo_passagem, preco, dias_de_duracao, createdAt, updatedAt) VALUES ('Destino 4', 'Tipo 4', 180.00, 4, '2023-10-27 10:00:00', '2023-10-27 10:00:00');
