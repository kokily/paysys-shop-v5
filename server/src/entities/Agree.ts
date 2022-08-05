import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Agree extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  name!: string;

  @Column({ type: 'boolean', default: false })
  isAgree!: boolean;

  @Column('text')
  sign!: string;

  @Column('timestamptz')
  @CreateDateColumn()
  created_at!: Date;
}

export default Agree;
