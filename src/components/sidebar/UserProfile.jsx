import { PROFILE_IMAGE, USER_NAME } from '../../utils/constants';

export default function UserProfile() {
  return (
    <div className="flex items-center gap-2 p-2">
      <img src={PROFILE_IMAGE} className="w-8 h-8 rounded-full" alt="User" />
      <span className="text-sm">{USER_NAME}</span>
    </div>
  );
}