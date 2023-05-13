import { Injectable } from '@nestjs/common';
import { PostgresDataSource } from '../db/sources/postgres'

@Injectable()
export class DatabaseCheckService {
  manager = PostgresDataSource.manager

  async testConnection(): Promise<boolean> {
    try {
      this.manager.query('SELECT 1')
      return true
    } catch (error) {
      return false
    }
  }
}
