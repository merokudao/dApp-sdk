import { IPeer } from '@huddle01/web-core';

export type TRoomControls = 'muteEveryone';

export default abstract class AudioSpacesInterface {
  abstract joinLobby(spaceId: string): void;

  abstract leaveLobby(): void;

  abstract joinSpace(): void;

  abstract leaveSpace(): void;

  abstract endSpace(): void;

  abstract fetchAudioStream(deviceId?: string): Promise<MediaStream>;

  abstract stopAudioStream(): void;

  abstract produceAudio(micStream: MediaStream, peerIds?: string[]): void;

  abstract stopProducingAudio(): void;

  abstract enumerateMicDevices(): Promise<MediaDeviceInfo[]>;

  abstract createMicConsumer(peerId: string): void;

  abstract closeMicConsumer(peerId: string): void;

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

  abstract createSpeaker(peerId: string): void;

  abstract createListener(peerId: string): void;

  abstract createCohost(peerId: string): void;

  abstract hostControl(type: TRoomControls, value: boolean): void;

  abstract kickPeer(peerId: string): void;
}
