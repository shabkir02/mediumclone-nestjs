import { UserType } from '@app/user/types/user.type';
import { UserEntity } from '@app/user/user.entity';

export type ProfileType = UserType & {
  following: boolean;
};
