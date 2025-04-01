// import { QueuePort } from '@/core/ports/queue.port';
// import { ERoutesToProduce } from '@/infra/adapters/queue/queue.enum';

// type RunCheckWithoutLeadDto = {
//   location_name: string;
//   address_line_1: string;
//   address_line_2?: string;
//   cep: string;
//   city: string;
//   state: string;
//   country: string;
//   phone: string;
//   neighborhood: string;
//   business_hours: object;
//   reference_key: string;
//   calculate_diagnosis: boolean;
//   countryCode: string;
// };

// type SendUpdateWorkspaceIdInput = {
//   userId: string;
//   workspaceId: string;
// };

// interface SendLocationReplicationToBIInput {
//   id: string;
//   name: string;
//   address: string;
//   latitude: number;
//   longitude: number;
//   neighborhood: string;
//   city: string;
//   state: string;
//   workspaceId: string;
//   saas_company_name: string;
// }

// interface SendLocationSynchronizationToBIInput
//   extends Partial<SendLocationReplicationToBIInput> {
//   biLocationId: string;
// }

// class QueueService {
//   constructor(private readonly queuePort: QueuePort) {}

//   private async sendMessage(routingKey: ERoutesToProduce, content: any) {
//     if (typeof content !== 'string') content = JSON.stringify(content);

//     await this.queuePort.sendMessage(routingKey, content);
//     return true;
//   }

//   async sendUpdateWorkspaceId(input: SendUpdateWorkspaceIdInput) {
//     return this.sendMessage(ERoutesToProduce.UPDATE_LAST_WORKSPACE, input);
//   }

//   async sendRequestDigitalPresenceAnalysis(
//     runCheckWithoutLeadDto: RunCheckWithoutLeadDto,
//   ) {
//     return await this.sendMessage(
//       ERoutesToProduce.CHECK_REQUESTED,
//       runCheckWithoutLeadDto,
//     );
//   }

//   sendRequestConnectionDelete(locationId: string) {
//     return this.sendMessage(ERoutesToProduce.CONNECTION_DELETION_REQUESTED, {
//       locationId,
//     });
//   }

//   sendLocationReplicationToBI(location: SendLocationReplicationToBIInput) {
//     return this.sendMessage(
//       ERoutesToProduce.BI_LOCATION_REPLICATION_REQUESTED,
//       location,
//     );
//   }

//   sendLocationSynchronization(location: SendLocationSynchronizationToBIInput) {
//     return this.sendMessage(
//       ERoutesToProduce.BI_LOCATION_SYNCHRONIZATION,
//       location,
//     );
//   }
// }

// export { QueueService };
