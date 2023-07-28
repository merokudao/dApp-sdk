export interface IFeeds {
  msg: IMessageIPFS;
  did: string;
  wallets: string;
  name: any;
  profilePicture: string | null;
  publicKey: string | null;
  about: string | null;
  threadhash: string | null;
  intent: string | null;
  intentSentBy: string | null;
  intentTimestamp: Date;
  combinedDID: string;
  cid?: string;
  chatId?: string;
  groupInformation?: GroupDTO;
}

export interface IMessageIPFS {
  fromCAIP10: string;
  toCAIP10: string;
  fromDID: string;
  toDID: string;
  messageType: string;
  messageContent: string;
  signature: string;
  sigType: string;
  link: string | null;
  timestamp?: number;
  encType: string;
  encryptedSecret: string;
}

export interface GroupDTO {
  members: {
    wallet: string;
    publicKey: string;
    isAdmin: boolean;
    image: string;
  }[];
  pendingMembers: {
    wallet: string;
    publicKey: string;
    isAdmin: boolean;
    image: string;
  }[];
  contractAddressERC20: string | null;
  numberOfERC20: number;
  contractAddressNFT: string | null;
  numberOfNFTTokens: number;
  verificationProof: string;
  groupImage: string | null;
  groupName: string;
  isPublic: boolean;
  groupDescription: string | null;
  groupCreator: string;
  chatId: string;
  scheduleAt?: Date | null;
  scheduleEnd?: Date | null;
  groupType: string;
}

export interface ChatsListProps {
  chats: IFeeds[];
  containerStyle?: React.CSSProperties;
  chatItemStyle?: React.CSSProperties;
  profilePictureStyle?: React.CSSProperties;
  chatInfoStyle?: React.CSSProperties;
  chatNameStyle?: React.CSSProperties;
  chatTimestampStyle?: React.CSSProperties;
  chatMessageStyle?: React.CSSProperties;
  dark?: Boolean;
  onChatItemClick?: (chat: IFeeds) => void;
}
