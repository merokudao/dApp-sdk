import { CommonFunctionInterface } from './CommonFunctionInterface';

export default abstract class VideoMeetInterface extends CommonFunctionInterface {
  abstract joinMeet(): void;

  abstract leaveMeet(): void;

  abstract endMeet(): void;

  abstract createCohost(peerId: string): void;
}
