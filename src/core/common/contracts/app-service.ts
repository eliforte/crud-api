export abstract class AppService<REQ, RES> {
  abstract execute(data: REQ): Promise<RES>;
}
