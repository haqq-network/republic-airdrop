import { useMemo } from 'react';
import clsx from 'clsx';
import { Tab, Tabs } from './tabs';
import { Dropdown } from '../dropdown/dropdown';
import { ChevronDownIcon } from '../icons/icons';

export function TabsWithMoreDropdown({
  current,
  variants,
  onChange,
  indexCollapse,
  className,
}: {
  current: string;
  variants: {
    id: string;
    label: string;
    counter?: number;
  }[];
  onChange: (id: string) => void;
  indexCollapse?: number;
  className?: string;
}) {
  const sliceIndex =
    typeof indexCollapse !== 'undefined' ? indexCollapse : variants.length;
  const tabsVariants = variants.slice(0, sliceIndex);
  const moreVariants = variants.slice(sliceIndex);

  const collapsedDropdownContent = useMemo(() => {
    return moreVariants.map(({ id, label, counter }) => {
      return (
        <Tab
          key={`tab-${id}`}
          counter={counter}
          onClick={() => {
            onChange(id);
          }}
          isActive={id === current}
          className="min-w-[250px] px-[18px] py-[10px]"
        >
          {label}
        </Tab>
      );
    });
  }, [moreVariants, current, onChange]);

  const moreActive = useMemo(() => {
    return moreVariants.find((v) => {
      return v.id === current;
    });
  }, [moreVariants, current]);

  return (
    <div
      className={clsx('flex flex-row gap-[24px] lg:gap-x-[36px]', className)}
    >
      <Tabs
        current={current}
        variants={tabsVariants}
        onChange={onChange}
        className={clsx('flex flex-row gap-[24px] lg:gap-x-[36px]', className)}
      />
      <Dropdown
        content={collapsedDropdownContent}
        positionVertical="bottom"
        positionHorizontal="left"
        classNameContainer="inline-flex"
      >
        <div
          className={clsx(
            'flex flex-row items-center leading-[50px] lg:text-[36px]',
            'transition-colors duration-300',
            'font-stretched cursor-pointer font-[800]',
            moreActive ? 'text-white' : 'text-white/50 hover:text-white/80',
          )}
        >
          <div className="flex leading-[30px] max-lg:text-[22px] lg:text-[36px] lg:leading-[50px]">
            {moreActive ? moreActive.label : 'More'}{' '}
            <ChevronDownIcon className="m-auto h-[30px] w-[30px]" />
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
