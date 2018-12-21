export interface IMessage {
  Source: string;
  Destination: string;
  MessageTyp: string;
}

export abstract class BaseMessage implements IMessage {
  public get MessageTyp(): string {
    return this._MessageTyp;
  }

  public get Destination(): string {
    return this._Destination;
  }

  public get Source(): string {
    return this._Source;
  }

  constructor(private _Source: string, private _Destination: string , private _MessageTyp: string ) {}
  public abstract foo();
}
