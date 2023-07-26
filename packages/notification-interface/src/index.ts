abstract class AbstractNotification{
    abstract sendNotification(
        params: object | any
    ): any;

    abstract getUserNotification(
        params: object | any
    ): any;

    abstract getUserSpamNotification(
        params: object | any
    ): any;

    abstract getSubscriptions(
        params: object | any
    ): any;

    abstract getChannelDetails(
        params: object | any
    ): any;

    abstract getChannelSubscribers(
        params: object | any
    ): any;

    abstract searchChannels(
        params: object | any
    ): any;

    abstract optInChannel(
        params: object | any
    ): any;

    abstract optOutChannel(
        params: object | any
    ): any;
}

export default AbstractNotification;