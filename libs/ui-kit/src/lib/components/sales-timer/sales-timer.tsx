import Countdown from 'react-countdown';

export function SalesTimer({ date, title }: { date: Date; title: string }) {
  return (
    <div className="flex flex-row items-center gap-x-[12px]">
      <div className="text-[#E3A13F]">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="17"
            cy="17"
            r="16"
            stroke="white"
            strokeOpacity="0.24"
            strokeWidth="2"
            strokeDasharray="2 3"
          />
          <path
            d="M32.9005 15.184C33.4471 15.1216 33.9439 15.5142 33.9742 16.0635C34.1478 19.2103 33.4434 22.3507 31.93 25.1299C30.2574 28.2015 27.6782 30.6824 24.5441 32.2344C21.4099 33.7864 17.8734 34.334 14.4166 33.8026C10.9598 33.2711 7.75112 31.6864 5.22796 29.2645C2.7048 26.8427 0.989992 23.7016 0.317363 20.2695C-0.355265 16.8374 0.0470184 13.2814 1.46936 10.0863C2.89171 6.89121 5.26488 4.21256 8.26531 2.41558C10.9802 0.789598 14.0892 -0.0429074 17.2404 0.00169108C17.7905 0.00947687 18.2031 0.489785 18.1631 1.03851C18.1231 1.58723 17.6456 1.99618 17.0954 1.99267C14.3536 1.97521 11.6522 2.70952 9.289 4.12486C6.64022 5.71123 4.54518 8.07594 3.28953 10.8966C2.03388 13.7172 1.67875 16.8565 2.27255 19.8863C2.86634 22.9162 4.38017 25.6892 6.60763 27.8272C8.83508 29.9652 11.6677 31.3641 14.7194 31.8333C17.771 32.3025 20.8931 31.8191 23.6599 30.4489C26.4267 29.0788 28.7037 26.8887 30.1802 24.1771C31.4975 21.7579 32.1206 19.0288 31.9908 16.2899C31.9648 15.7404 32.3538 15.2465 32.9005 15.184Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 9.875C14 9.46079 14.3358 9.125 14.75 9.125H19.25C19.6642 9.125 20 9.46079 20 9.875C20 10.2892 19.6642 10.625 19.25 10.625H14.75C14.3358 10.625 14 10.2892 14 9.875ZM17 23.375C19.8995 23.375 22.25 21.0245 22.25 18.125C22.25 15.2255 19.8995 12.875 17 12.875C14.1005 12.875 11.75 15.2255 11.75 18.125C11.75 21.0245 14.1005 23.375 17 23.375ZM17 24.875C20.7279 24.875 23.75 21.8529 23.75 18.125C23.75 14.3971 20.7279 11.375 17 11.375C13.2721 11.375 10.25 14.3971 10.25 18.125C10.25 21.8529 13.2721 24.875 17 24.875ZM17.75 14.375C17.75 13.9608 17.4142 13.625 17 13.625C16.5858 13.625 16.25 13.9608 16.25 14.375V17.5827C16.25 18.104 16.5865 18.5656 17.0828 18.7251L19.7705 19.589C20.1648 19.7158 20.5873 19.4989 20.714 19.1045C20.8408 18.7102 20.6238 18.2877 20.2295 18.161L17.75 17.364V14.375Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="flex flex-col items-start gap-y-[2px]">
        {title && (
          <div className="text-[14px] font-[500] leading-[20px] text-white/50">
            {title}
          </div>
        )}
        <Countdown
          date={date}
          renderer={({ days, hours, minutes, seconds }) => {
            return (
              <div className="flex flex-row gap-[8px] text-[14px] font-[800] leading-none text-white/50">
                {days > 0 && (
                  <div className="uppercase">
                    <span className="text-white">{days}</span>&nbsp;Days
                  </div>
                )}
                {hours > 0 && (
                  <div className="uppercase">
                    <span className="text-white">
                      {hours < 10 ? '0' + hours : hours}
                    </span>
                    &nbsp;Hours
                  </div>
                )}
                {minutes > 0 && (
                  <div className="uppercase">
                    <span className="text-white">
                      {minutes < 10 ? '0' + minutes : minutes}
                    </span>
                    &nbsp;Min
                  </div>
                )}
                <div className="uppercase">
                  <span className="text-white">
                    {seconds < 10 ? '0' + seconds : seconds}
                  </span>
                  &nbsp;Sec
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
