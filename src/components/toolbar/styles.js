import { css } from "@emotion/core";
import styled from "@emotion/styled";

const CONFIG = {
  size: {
    lg: 48,
    md: 40,
    sm: 36
  }
};

const animationStyles = props => {
  const { animationEasing, animationSpeed } = props.theme;
  return css`
    transition: all ${animationSpeed}ms ${animationEasing};
  `;
};

const size = props => {
  const sizes = CONFIG.size;
  const value = props.theme.size || sizes.md;

  return css`
    min-width: ${value}px;
    height: ${value}px;
  `;
};

export const ToolbarWrapper = styled.div`
  position: relative;
  border-radius: 2px;
`;

export const ToolbarBase = styled.div`
  ${animationStyles};
  ${size};
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid black;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  overflow: hidden;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    `
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${({ isAside }) =>
    isAside &&
    `
    border-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
`;

export const Group = styled.div`
  ${animationStyles};
  background: white;
  display: inline-flex;
  border-right: 1px solid black;
  height: 100%;
  padding: 4px;
  vertical-align: middle;

  ${({ isLast }) => isLast && `border-right: none;`}
`;
Group.defaultProps = {
  className: "ToolbarGroup"
};

const itemPrimaryStyles = props => {
  const { isPrimaryAction } = props;
  if (!isPrimaryAction) return "";

  return css`
    &::before {
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid currentColor;
      position: absolute;
      content: "";
      bottom: -6px;
      right: -8px;
      transform: rotate(135deg);
    }
  `;
};

const itemHoverStyles = props => {
  const { interactionColor, hoverAnimationSpeed } = props.theme;

  return css`
    transition: color ${hoverAnimationSpeed}ms linear;
    &:hover {
      color: ${interactionColor};
    }
  `;
};

export const Item = styled.div`
  color: black;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 4px 8px;
  position: relative;

  &:last-child {
    border-right: none;
  }

  ${itemPrimaryStyles};
  ${itemHoverStyles};

  > * {
    fill: currentColor;
    ${animationStyles};
  }
`;
Item.defaultProps = {
  className: "ToolbarItem"
};

export const DragSlider = styled.div`
  ${animationStyles};
  position: absolute;
  top: 0;
  left: 0;
  ${({ isActive }) =>
    isActive &&
    `
    transform: translateX(-45px);
  `}

  .react-draggable:hover & {
    cursor: grab;
  }
  .react-draggable-dragging & {
    cursor: grabbing !important;

    .ToolbarGroup {
      background: black;
      color: white;

      * {
        fill: white;
      }
    }
  }
`;

export const Slider = styled.div`
  ${animationStyles};
  width: 0;
  overflow: hidden;

  ${({ isExpanded }) =>
    isExpanded &&
    `
    width: 153px;
  `}
`;
