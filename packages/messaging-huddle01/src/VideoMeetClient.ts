import axios, { isAxiosError } from 'axios';
import { MeetInterface } from '../../huddle01-interfaces/dist';
import { TRoomControls } from '../../huddle01-interfaces/dist/AudioSpacesInterface';
import { IPeer, huddleClient } from '@huddle01/web-core';

interface ICreateMeet {
  title: string;
  hostWallets: string[];
  apiKey: string;
}

interface ICreateMeetResponse {
  message: string;
  data: {
    roomId: string;
    meetingLink: string;
  };
}

export default class VideoMeetClient extends MeetInterface {
  public static async createMeet({ apiKey, hostWallets, title }: ICreateMeet) {
    try {
      const { data } = await axios.request<ICreateMeetResponse>({
        method: 'POST',
        url: 'https://api.huddle01.com/api/v1/create-room',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        data: {
          title,
          hostWallets,
        },
      });

      const message = data.message;

      if (message !== 'Meeting Created Successfully') {
        throw new Error(message);
      }

      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || error.message);
      }

      console.error(error);
      throw new Error('Error in creating meet');
    }
  }

  constructor(projectId: string) {
    super();
    huddleClient.initialize(projectId);
  }

  public joinLobby(roomId: string) {
    huddleClient.joinLobby(roomId);
  }

  public leaveLobby() {
    huddleClient.leaveLobby();
  }

  public joinMeet() {
    huddleClient.joinRoom(true);
  }

  public leaveMeet(): void {
    huddleClient.leaveRoom();
  }

  public endMeet(): void {
    huddleClient.endRoom();
  }

  public async fetchAudioStream(
    deviceId?: string | undefined
  ): Promise<MediaStream> {
    return await huddleClient.fetchAudioStream(deviceId);
  }

  public stopAudioStream(): void {
    huddleClient.stopAudioStream();
  }

  public produceAudio(micStream: MediaStream, peerIds?: string[]): void {
    huddleClient.produceAudio(micStream, peerIds);
  }

  public stopProducingAudio(): void {
    huddleClient.stopProducingAudio();
  }

  public async enumerateMicDevices(): Promise<MediaDeviceInfo[]> {
    return await huddleClient.enumerateMicDevices();
  }

  public createMicConsumer(peerId: string): void {
    huddleClient.createMicConsumer(peerId);
  }

  public closeMicConsumer(peerId: string): void {
    huddleClient.closeMicConsumer(peerId);
  }

  public async fetchVideoStream(
    deviceId?: string | undefined
  ): Promise<MediaStream> {
    return await huddleClient.fetchVideoStream(deviceId);
  }

  public stopVideoStream(): void {
    huddleClient.stopVideoStream();
  }

  public produceVideo(
    camStream: MediaStream,
    peerIds?: string[] | undefined
  ): void {
    huddleClient.produceVideo(camStream, peerIds);
  }

  public stopProducingVideo(): void {
    huddleClient.stopProducingVideo();
  }

  public async enumerateCamDevices(): Promise<MediaDeviceInfo[]> {
    return await huddleClient.enumerateCamDevices();
  }

  public createCamConsumer(peerId: string): void {
    huddleClient.createCamConsumer(peerId);
  }

  public closeCamConsumer(peerId: string): void {
    huddleClient.closeCamConsumer(peerId);
  }

  public getPeer(peerId: string): IPeer {
    return huddleClient.getPeer(peerId);
  }

  public getPeers(): IPeer[] {
    return huddleClient.getPeers();
  }

  public getPeerTracks(peerId: string): {
    video: MediaStreamTrack;
    audio: MediaStreamTrack;
  } {
    return huddleClient.getPeerTracks(peerId);
  }

  public startRecording(sourceUrl: string): void {
    huddleClient.startRecording(sourceUrl);
  }

  public stopRecording(ipfs?: boolean | undefined): void {
    huddleClient.stopRecording(ipfs);
  }

  public setDisplayName(displayName: string): void {
    huddleClient.setDisplayName(displayName);
  }

  public setAvatar(avatarUrl: string): void {
    huddleClient.changeAvatarUrl(avatarUrl);
  }

  public sendData(peerIds: string[] | '*', data: unknown): void {
    huddleClient.sendData(peerIds, data);
  }

  public createCohost(peerId: string): void {
    huddleClient.changePeerRole({
      peerId,
      role: 'coHost',
    });
  }

  public hostControl(type: TRoomControls, value: boolean): void {
    huddleClient.changeRoomControls({ type, value });
  }

  public kickPeer(peerId: string): void {
    huddleClient.kickPeer(peerId);
  }
}
