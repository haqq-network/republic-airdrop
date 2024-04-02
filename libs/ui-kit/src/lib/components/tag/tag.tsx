import { Tooltip } from '../tooltip/tooltip';

interface TagProps {
  text: string;
  onClick?: () => void;
}
export function Tag({ text, onClick }: TagProps) {
  return (
    <Tooltip text={text}>
      <div className="relative flex flex-row items-center rounded-[10px] bg-white">
        <div className="max-w-[336px] truncate px-[10px] py-[5px] text-base font-[600] text-[#0D0D0E]">
          {text}
        </div>
        <div className="absolute right-[34px] h-full w-[1px] select-none bg-[#E7E7E7]" />
        <div
          className="cursor-pointer p-[6px] text-[#0D0D0E80] transition-colors duration-150 hover:text-[#0D0D0E]"
          onClick={onClick}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.746 15.3572C17.1398 15.7509 17.1398 16.3894 16.746 16.7832C16.3523 17.1769 15.7138 17.1769 15.32 16.7832L10.9914 12.4545L6.66271 16.7832C6.26893 17.1769 5.63049 17.1769 5.23671 16.7832C4.84294 16.3894 4.84294 15.7509 5.23671 15.3572L9.56538 11.0285L5.20842 6.67153C4.81464 6.27775 4.81464 5.63931 5.20842 5.24553C5.6022 4.85175 6.24064 4.85175 6.63442 5.24553L10.9914 9.60249L15.3483 5.24553C15.7421 4.85175 16.3806 4.85175 16.7743 5.24553C17.1681 5.63931 17.1681 6.27775 16.7743 6.67153L12.4174 11.0285L16.746 15.3572Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </Tooltip>
  );
}
