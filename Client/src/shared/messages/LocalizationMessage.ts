import { BaseMessage } from './IMessage';

 export class LocalizationMessage extends BaseMessage {

  constructor( source: string,  destination: string , messageTyp: string , latitude: number,  longitude: number) {
    super(source, destination, messageTyp);
    this.Latitude = latitude;
    this.Longitude = longitude;
    console.log('(${latitude},${longitude})');
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
