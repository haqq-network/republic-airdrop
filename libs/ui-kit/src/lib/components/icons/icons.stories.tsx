import { StoryFn } from '@storybook/react';
import {
  AlertIcon,
  BagIcon,
  BagWithMinusIcon,
  BagWithPlusIcon,
  BellIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CollectionIcon,
  CopyIcon,
  CrossIcon,
  CrossedOutBagIcon,
  DiscordIcon,
  ErrorIcon,
  EyeIcon,
  FilledStarIcon,
  GlobeIcon,
  ISLMIcon,
  ImageRemoveIcon,
  InfoIconCircle,
  LinkedInIcon,
  LogoutIcon,
  MagnifierIcon,
  MediumIcon,
  MinusSignIcon,
  PenIcon,
  PlusSignLargeIcon,
  PlusSignMediumIcon,
  PropertiesIcon,
  SendIcon,
  SettingIcon,
  ShareIcon,
  SlashIcon,
  StarIcon,
  TelegramIcon,
  TimerIcon,
  TrashIcon,
  TripleInterpunctIcon,
  TwitterIcon,
  UserIcon,
  WalletIcon,
  XMarkLargeIcon,
  XMarkMediumIcon,
  YoutubeIcon,
  InfoIconSquare,
} from './icons';

export default {
  title: 'ui-kit',
  parameters: {
    layout: 'centered',
  },
};

export const Icons: StoryFn = () => {
  return (
    <div className="flex flex-row gap-[10px] text-white transition-colors duration-150 hover:text-white/50">
      <AlertIcon />
      <BagIcon />
      <BagWithMinusIcon />
      <BagWithPlusIcon />
      <BellIcon />
      <CheckIcon />
      <ChevronRightIcon />
      <ChevronLeftIcon />
      <ChevronDownIcon />
      <ChevronUpIcon />
      <CollectionIcon />
      <CopyIcon />
      <CrossIcon />
      <CrossedOutBagIcon />
      <DiscordIcon />
      <ErrorIcon />
      <EyeIcon />
      <FilledStarIcon />
      <GlobeIcon />
      <ISLMIcon />
      <ImageRemoveIcon />
      <InfoIconCircle />
      <InfoIconSquare />
      <LinkedInIcon />
      <LogoutIcon />
      <MagnifierIcon />
      <MediumIcon />
      <MinusSignIcon />
      <PenIcon />
      <PlusSignLargeIcon />
      <PlusSignMediumIcon />
      <PropertiesIcon />
      <SendIcon />
      <SettingIcon />
      <ShareIcon />
      <SlashIcon />
      <StarIcon />
      <TelegramIcon />
      <TimerIcon />
      <TrashIcon />
      <TripleInterpunctIcon />
      <TwitterIcon />
      <UserIcon />
      <WalletIcon />
      <XMarkLargeIcon />
      <XMarkMediumIcon />
      <YoutubeIcon />
    </div>
  );
};
