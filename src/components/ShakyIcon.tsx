import React from "react";
import styled, { keyframes } from "styled-components";

interface ShakyIconProps {
  icon: React.ReactNode;
  size?: number;
  toolTip?: string;
}

const ShakyIcon: React.FC<ShakyIconProps> = ({ icon, size = 40, toolTip }) => {
  return (
    <IconWrapper>
      {/* Tooltip can be added here if needed */}
      {toolTip && <Tooltip>{toolTip}</Tooltip>}
      <IconInner style={{ width: size, height: size }}>
        {React.cloneElement(icon as React.ReactElement, {
          size: size,
        })}
      </IconInner>
    </IconWrapper>
  );
};

export default ShakyIcon;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-3px) rotate(-1deg); }
  20% { transform: translateX(3px) rotate(1deg); }
  30% { transform: translateX(-2px) rotate(-0.5deg); }
  40% { transform: translateX(2px) rotate(0.5deg); }
`;

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    animation: ${shake} 0.4s ease-in-out;
  }

  &:hover div.tooltip {
    opacity: 1;
    visibility: visible;
  }
`;

const Tooltip = styled.div.attrs({ className: "tooltip" })`
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 0.75rem;
  background-color: #333;
  color: #fff;
  font-size: 0.75rem;
  border-radius: 0.375rem;
  font-weight: bold;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
`;

const IconInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
