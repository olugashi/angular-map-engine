export class BaseEntity {
  public static EntityId: number = 0;

  public CreateEntityId() : number
  {
    return BaseEntity.EntityId++;
  }
}
