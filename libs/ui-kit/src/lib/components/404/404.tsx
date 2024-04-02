import { Container } from '../layout/layout';
import { Heading } from '../typography/heading';
import { Text } from '../typography/text';

export function ErrorPage() {
  return (
    <Container className="my-auto">
      <div className="relative flex h-full flex-col items-center justify-center">
        <Heading
          level={1}
          weight="extrabold"
          className="text-center"
          isStretched
        >
          404
        </Heading>
        <Text className="text-white/50">This page could not be found</Text>
        <div className="absolute select-none">
          <svg
            width="628"
            height="202"
            viewBox="0 0 628 202"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="63"
              y="0.5"
              width="77"
              height="101"
              stroke="#3A3A3A"
              strokeDasharray="2 2"
            />
            <rect
              x="488"
              y="0.5"
              width="77"
              height="101"
              stroke="#3A3A3A"
              strokeDasharray="2 2"
            />
            <rect
              x="63"
              y="101.5"
              width="77"
              height="100"
              stroke="#3A3A3A"
              strokeDasharray="2 2"
            />
            <rect
              x="488"
              y="101.5"
              width="77"
              height="100"
              stroke="#3A3A3A"
              strokeDasharray="2 2"
            />
            <path
              d="M62.5 102L0.5 102"
              stroke="#3A3A3A"
              strokeDasharray="2 2"
            />
            <path
              d="M565.5 102L627.5 102"
              stroke="#3A3A3A"
              strokeDasharray="2 2"
            />
            <rect
              x="140"
              y="0.5"
              width="348"
              height="201"
              stroke="#3A3A3A"
              strokeDasharray="2 2"
            />
          </svg>
        </div>
      </div>
    </Container>
  );
}
