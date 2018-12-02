import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class MapToolBarService {
  CreateEntity: string;
  @Output() change: EventEmitter<string> = new EventEmitter();

  ChangeEntity(createEntity: string) {
    this.CreateEntity = createEntity;
    this.change.emit(this.CreateEntity);
  }
}
