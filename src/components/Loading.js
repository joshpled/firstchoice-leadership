import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  opacity: 0.2;
`;

export default function Loading() {
  return (
    <div className="loading-component">
      <ScaleLoader color="#7692AC" loading={true} css={override} speedMultiplier={1} height={400} width={50} radius={40} margin={10} />
    </div>
  );
}
