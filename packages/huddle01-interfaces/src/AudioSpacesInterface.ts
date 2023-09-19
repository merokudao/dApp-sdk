import { CommonFunctionInterface } from './CommonFunctionInterface';

export default abstract class AudioSpacesInterface extends CommonFunctionInterface {
  abstract joinSpace(): void;

  abstract leaveSpace(): void;

  abstract endSpace(): void;

  abstract createSpeaker(peerId: string): void;

  abstract createListener(peerId: string): void;

  abstract createCohost(peerId: string): void;
}
