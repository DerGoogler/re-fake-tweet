type VerifiedData = {
  state: boolean;
  style: string;
};

type UserData = {
  nickname: string;
  name: string;
  avatar: string;
  verified: VerifiedData;
  affiliate: boolean;
  locked: boolean;
};

export default UserData;
