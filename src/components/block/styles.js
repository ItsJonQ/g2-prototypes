import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const BlockWrapper = styled.div`
  position: relative;
`;

const toolbarThemeStyles = props => {
  const { toolbarTopOffset, toolbarFadeAnimationSpeed } = props.theme;

  return css`
    top: ${toolbarTopOffset}px;
    transition: all ${toolbarFadeAnimationSpeed}ms linear;
  `;
};

export const ToolbarWrapper = styled.div`
  ${toolbarThemeStyles};
  position: absolute;
  left: 0px;
  opacity: 0;
  z-index: 10;

  ${({ showToolbar }) =>
    showToolbar &&
    `
    opacity: 1;
  `}
`;

const contentThemeStyles = props => {
  const { blockBorderAnimationSpeed } = props.theme;
  return `transition: all ${blockBorderAnimationSpeed}ms linear`;
};

const contentBorderStyles = props => {
  const { isSelected } = props;
  const { alwaysHideBlockBorder } = props.theme;
  const shouldHideBorder = alwaysHideBlockBorder === "true" || alwaysHideBlockBorder === true

  if (shouldHideBorder) {
    return "";
  }

  if (isSelected) {
    return css`
      border-color: #ddd;
    `;
  }

  return "";
};

export const ContentWrapper = styled.div`
  ${contentThemeStyles};
  border: 1px solid rgba(0, 0, 0, 0);
  max-width: 640px;
  margin: 80px 0;
  padding: 20px;

  ${contentBorderStyles};

  p {
    margin: 0;
    outline: none;
  }
`;
