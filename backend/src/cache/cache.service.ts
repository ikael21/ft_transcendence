import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import {Cache} from "cache-manager";

@Injectable()
export class CacheService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
    static exp = -1;

    async addSet(key, value){
        await this.cacheManager.set(key, value, CacheService.exp);
    }

    async get(key) {
        return await this.cacheManager.get(key);
    }

    async clear(){
        return await this.cacheManager.reset();
    }

}