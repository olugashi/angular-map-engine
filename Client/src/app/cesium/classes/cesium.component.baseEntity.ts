export class BaseEntity {
  public static EntityId = 0;

  public CreateEntityId(): number
  {
    return ++BaseEntity.EntityId;
  }
}
