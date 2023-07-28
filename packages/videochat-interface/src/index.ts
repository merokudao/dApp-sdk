abstract class VideoChatInterface {
  abstract initializeVideoObject(params: object | any): any;

  abstract createLocalMediaStream(params: object | any): any;

  abstract requestVideoCall(params: object | any): any;

  abstract acceptVideoCall(params: object | any): any;

  abstract connectToVideoCall(params: object | any): any;

  abstract disconnectVideoCall(params: object | any): any;

  abstract toggleVideo(params: object | any): any;

  abstract toggleAudio(params: object | any): any;
}

export default VideoChatInterface;
