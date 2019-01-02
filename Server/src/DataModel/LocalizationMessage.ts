import { injectable } from "inversify";
import "reflect-metadata";


import { BaseMessage, IMessage } from './IMessage';

export interface ILocalization extends IMessage
{
  
}
@injectable()
export class LocalizationMessage extends BaseMessage implements  ILocalization{

  constructor( source: string,  destination: string , messageTyp: string , latitude: number,  longitude: number) {
    super(source, destination, messageTyp);
    this.Latitude = latitude;
    this.Longitude = longitude;
  }

  private Latitude: number;
  private Longitude: number;

  public foo() {}

  public GetLatitude(): number {
    return this.Latitude;
  }

  public GetLongitude(): number {
    return this.Longitude;
  }
}
