import axios, { isAxiosError } from 'axios';
import {
  VideoMeetInterface,
  TRoomControls,
} from '@dapp-sdk/huddle01-interfaces';
import { IPeer, huddleClient } from '@huddle01/web-core';

export interface ICreateMeetResponse {
  message: string;
  data: {
    roomId: string;
  };
}

/**
 * @description Client for video meeting apps
 *
 */
export default class VideoMeetClient extends VideoMeetInterface {
  /**
   * @description Generates a new meeting id
   * @param {string} apiKey string
   * @param {string[]} hostWallets array of wallet addresses
   * @param {string} title title of the meeting
   * @returns {Promise<ICreateMeetResponse>} { message: string, data: { roomId: string } }
   * @see https://huddle01.com/docs/api-keys for more information on how to get an api key
   */
  public static async createMeet(
    apiKey: string,
    hostWallets: string[],
    title: string
  ) {
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

  /**
   * @description Joins a meeting lobby
   * @param roomId
   */
  public joinLobby(roomId: string) {
    huddleClient.joinLobby(roomId);
  }

  /**
   * @description Leaves a meeting lobby
   */
  public leaveLobby() {
    huddleClient.leaveLobby();
  }

  /**
   * @description Join the meeting from the lobby
   * @requires joinLobby to be called first
   */
  public joinMeet() {
    huddleClient.joinRoom(true);
  }

  /**
   * @description Leaves the meeting
   * @requires joinMeet to be called first
   */
  public leaveMeet(): void {
    huddleClient.leaveRoom();
  }

  /**
   * @description Ends the meeting
   * @requires joinMeet to be called first
   */
  public endMeet(): void {
    huddleClient.endRoom();
  }

  /**
   * @description Fetches the local audio stream from the microphone
   * @param deviceId optional
   * @returns {Promise<MediaStream>}
   * @see https://huddle01.com/docs/Javascript/methods/audio for more information
   */
  public async fetchAudioStream(
    deviceId?: string | undefined
  ): Promise<MediaStream> {
    return await huddleClient.fetchAudioStream(deviceId);
  }

  /**
   * @description Stops the local audio stream
   * @see https://huddle01.com/docs/Javascript/methods/audio for more information
   */
  public stopAudioStream(): void {
    huddleClient.stopAudioStream();
  }

  /**
   * @description Produces the audio stream, this is required to send audio to other peers
   * @param {MediaStream} micStream required
   * @param peerIds optional
   * @see https://huddle01.com/docs/Javascript/methods/audio for more information
   */
  public produceAudio(micStream: MediaStream, peerIds?: string[]): void {
    huddleClient.produceAudio(micStream, peerIds);
  }

  /**
   * @description Stops producing audio
   * @see https://huddle01.com/docs/Javascript/methods/audio for more information
   */
  public stopProducingAudio(): void {
    huddleClient.stopProducingAudio();
  }

  /**
   * @description Enumerates the microphone devices
   * @returns {Promise<MediaDeviceInfo[]>}
   * @see https://huddle01.com/docs/Javascript/methods/audio for more information
   */
  public async enumerateMicDevices(): Promise<MediaDeviceInfo[]> {
    return await huddleClient.enumerateMicDevices();
  }

  /**
   * @description Consume the audio stream from a peer
   * @param {string} peerId required
   * @see https://huddle01.com/docs/Javascript/methods/audio for more information
   */
  public createMicConsumer(peerId: string): void {
    huddleClient.createMicConsumer(peerId);
  }

  /**
   * @description Stops consuming the audio stream from a peer
   * @param {string} peerId required
   * @see https://huddle01.com/docs/Javascript/methods/audio for more information
   */
  public closeMicConsumer(peerId: string): void {
    huddleClient.closeMicConsumer(peerId);
  }

  /**
   * @description Fetches the local video stream from the camera
   * @param deviceId optional
   * @returns {Promise<MediaStream>}
   * @see https://huddle01.com/docs/Javascript/methods/video for more information
   */
  public async fetchVideoStream(
    deviceId?: string | undefined
  ): Promise<MediaStream> {
    return await huddleClient.fetchVideoStream(deviceId);
  }

  /**
   * @description Stops the local video stream
   * @see https://huddle01.com/docs/Javascript/methods/video for more information
   */
  public stopVideoStream(): void {
    huddleClient.stopVideoStream();
  }

  /**
   * @description Produces the video stream, this is required to send video to other peers
   * @param {MediaStream} camStream required
   * @param peerIds optional
   * @see https://huddle01.com/docs/Javascript/methods/video for more information
   */
  public produceVideo(
    camStream: MediaStream,
    peerIds?: string[] | undefined
  ): void {
    huddleClient.produceVideo(camStream, peerIds);
  }

  /**
   * @description Stops producing video
   * @see https://huddle01.com/docs/Javascript/methods/video for more information
   */
  public stopProducingVideo(): void {
    huddleClient.stopProducingVideo();
  }

  /**
   * @description Enumerates the camera devices
   * @returns {Promise<MediaDeviceInfo[]>}
   * @see https://huddle01.com/docs/Javascript/methods/video for more information
   */
  public async enumerateCamDevices(): Promise<MediaDeviceInfo[]> {
    return await huddleClient.enumerateCamDevices();
  }

  /**
   * @description Consume the video stream from a peer
   * @param {string} peerId required
   * @see https://huddle01.com/docs/Javascript/methods/video for more information
   */
  public createCamConsumer(peerId: string): void {
    huddleClient.createCamConsumer(peerId);
  }

  /**
   * @description Stops consuming the video stream from a peer
   * @param {string} peerId required
   * @see https://huddle01.com/docs/Javascript/methods/video for more information
   */
  public closeCamConsumer(peerId: string): void {
    huddleClient.closeCamConsumer(peerId);
  }

  /**
   * @description Get peerData by peerId
   * @param {string} peerId required
   * @returns {IPeer} Peer data object
   */
  public getPeer(peerId: string): IPeer {
    return huddleClient.getPeer(peerId);
  }

  /**
   * @description Get all peers
   * @returns {IPeer[]} Array of peer data objects
   */
  public getPeers(): IPeer[] {
    return huddleClient.getPeers();
  }

  /**
   * @description Get the current user's peerId
   * @returns {string} peerId
   */
  public getMeId(): string {
    return huddleClient.getMeId();
  }

  /**
   * @description Get the video and audio tracks of a peer
   * @param {string} peerId required
   * @returns {MediaStreamTrack[]} Array of tracks
   */
  public getPeerTracks(peerId: string): {
    video: MediaStreamTrack;
    audio: MediaStreamTrack;
  } {
    return huddleClient.getPeerTracks(peerId);
  }

  /**
   * @description Start recording the meeting
   * @param {string} sourceUrl required
   */
  public startRecording(sourceUrl: string): void {
    huddleClient.startRecording(sourceUrl);
  }

  /**
   * @description Stop recording the meeting, if ipfs is true, the recording will be uploaded to ipfs
   * @param {boolean} ipfs optional
   */
  public stopRecording(ipfs?: boolean | undefined): void {
    huddleClient.stopRecording(ipfs);
  }

  /**
   * @description Set the display name of the current user
   * @param {string} displayName required
   */
  public setDisplayName(displayName: string): void {
    huddleClient.setDisplayName(displayName);
  }

  /**
   * @description Set the avatar of the current user
   * @param {string} avatarUrl required
   */
  public setAvatar(avatarUrl: string): void {
    huddleClient.changeAvatarUrl(avatarUrl);
  }

  /**
   * @description Send data to other peers, if peerIds is '*', the data will be sent to all peers
   * @param {string[] | '*'} peerIds required, '*' or array of peerIds
   * @param {unknown} data required
   */
  public sendData(peerIds: string[] | '*', data: unknown): void {
    huddleClient.sendData(peerIds, data);
  }

  /**
   * @description Promote a peer to be a cohost
   * @param {string} peerId required
   */
  public createCohost(peerId: string): void {
    huddleClient.changePeerRole({
      peerId,
      role: 'coHost',
    });
  }

  /**
   *
   * @param {TRoomControls} type room wide control type
   * @param value boolean value
   */
  public hostControl(type: TRoomControls, value: boolean): void {
    huddleClient.changeRoomControls({ type, value });
  }

  /**
   * @description Remove a peer from the meeting
   * @param peerId peerId to kick
   */
  public kickPeer(peerId: string): void {
    huddleClient.kickPeer(peerId);
  }
}
