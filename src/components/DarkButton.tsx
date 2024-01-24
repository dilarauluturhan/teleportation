import React from "react";

type Props = {
  padding?: number;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
  border?: string;
  cursor?: string;
};

const DarkButton = ({
  padding = 11.2,
  backgroundColor = "#6d6d6d",
  color = "#bbd12c",
  borderRadius = 12,
  border = "none",
  cursor = "pointer",
}: Props) => {
  return (
    <div>
      <button
        style={{
          padding,
          backgroundColor,
          color,
          borderRadius,
          border,
          cursor,
        }}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default DarkButton;
