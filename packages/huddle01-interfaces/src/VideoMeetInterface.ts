import { IPeer } from '@huddle01/web-core';
import { TRoomControls } from './AudioSpacesInterface';

export default abstract class VideoMeetInterface {
  abstract joinLobby(spaceId: string): void;

  abstract leaveLobby(): void;

  abstract joinMeet(): void;

  abstract leaveMeet(): void;

  abstract endMeet(): void;

  abstract fetchAudioStream(deviceId?: string): Promise<MediaStream>;

  abstract stopAudioStream(): void;

  abstract produceAudio(micStream: MediaStream, peerIds?: string[]): void;

  abstract stopProducingAudio(): void;

  abstract enumerateMicDevices(): Promise<MediaDeviceInfo[]>;

  abstract createMicConsumer(peerId: string): void;

  abstract closeMicConsumer(peerId: string): void;

  abstract fetchVideoStream(deviceId?: string): Promise<MediaStream>;

  abstract stopVideoStream(): void;

  abstract produceVideo(camStream: MediaStream, peerIds?: string[]): void;

  abstract stopProducingVideo(): void;

  abstract enumerateCamDevices(): Promise<MediaDeviceInfo[]>;

  abstract createCamConsumer(peerId: string): void;

  abstract closeCamConsumer(peerId: string): void;

  abstract getPeer(peerId: string): IPeer;

  abstract getPeers(): IPeer[];

  abstract getPeerTracks(peerId: string): {
    video: MediaStreamTrack;
    audio: MediaStreamTrack;
  };

  abstract startRecording(sourceUrl: string): void;

  abstract stopRecording(ipfs?: boolean): void;

  abstract setDisplayName(displayName: string): void;

  abstract setAvatar(avatarUrl: string): void;

  abstract sendData(peerIds: string[] | '*', data: unknown): void;

  abstract createCohost(peerId: string): void;

  abstract hostControl(type: TRoomControls, value: boolean): void;

  abstract kickPeer(peerId: string): void;
}
