// import { CacheRepository } from '@/core/repositories/cache.repository';

// export class CacheService {
//   constructor(private cacheRepository: CacheRepository) {}

//   async getFromCache(key: string): Promise<any | null> {
//     return await this.cacheRepository.get(key);
//   }

//   async setInCache(key: string, value: any, ttl?: number): Promise<void> {
//     return this.cacheRepository.set(key, value, ttl);
//   }

//   async deleteFromCacheWithFullKey(key: string): Promise<void> {
//     return this.cacheRepository.delete(key);
//   }

//   async deleteFromCacheWithPartialKey(key: string): Promise<void> {
//     const registeredKeys = await this.cacheRepository.all();

//     const keysToDelete = registeredKeys.filter((registeredKey) =>
//       registeredKey.includes(key),
//     );

//     keysToDelete.forEach(async (keyToDelete) =>
//       this.cacheRepository.delete(keyToDelete),
//     );
//   }

//   async getKeysCountFromKey(key: string): Promise<number> {
//     return this.cacheRepository.count(key);
//   }

//   async resetAllCache(): Promise<void> {
//     await this.cacheRepository.resetAll();
//   }
// }
