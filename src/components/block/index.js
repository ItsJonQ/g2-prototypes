import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "emotion-theming";
import { withControlPanel } from "../control-panel";
import Toolbar from "../toolbar";
import { BlockWrapper, ToolbarWrapper, ContentWrapper } from "./styles";

const ATTRIBUTES = {
  blockBorderAnimationSpeed: 0,
  alwaysHideBlockBorder: true,
  toolbarFadeAnimationSpeed: 300,
  toolbarTopOffset: -40
};

export function Block(props) {
  const [showToolbar, setShowToolbar] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const handleOnBodyClick = event => {
      const { target } = event;
      if (!node.contains(target) && node !== target) {
        setIsSelected(false);
      }
    };

    document.addEventListener("click", handleOnBodyClick);

    return () => {
      document.removeEventListener("click", handleOnBodyClick);
    };
  }, [ref, setIsSelected]);

  const theme = {
    ...props.attributes
  };

  return (
    <ThemeProvider theme={theme}>
      <BlockWrapper
        onMouseMove={() => setShowToolbar(true)}
        onMouseLeave={() => setShowToolbar(false)}
        onClick={() => setIsSelected(true)}
        ref={ref}
      >
        <ToolbarWrapper showToolbar={showToolbar}>
          <Toolbar disableControlPanel isExpanded />
        </ToolbarWrapper>
        <ContentWrapper isSelected={isSelected}>
          <p contentEditable={true} spellCheck="false">
            Cheesecake halvah muffin halvah pastry macaroon cupcake. Cookie
            lollipop ice cream toffee pudding lemon drops. Marshmallow dragée
            oat cake pudding gummies donut pudding. Marzipan macaroon jelly-o
            brownie soufflé. Chocolate candy donut icing donut sesame snaps.
            Toffee bear claw fruitcake apple pie danish jelly beans. Cheesecake
            sugar plum jelly-o sweet cookie. Oat cake pudding brownie. Jelly
            beans macaroon sweet. Danish sugar plum soufflé sweet roll chocolate
            cake. Jelly danish cookie candy canes jelly. Sweet roll gingerbread
            sweet roll tootsie roll lemon drops tart. Cake jujubes donut sweet
            roll candy canes chocolate cake biscuit sweet roll.
          </p>
        </ContentWrapper>
      </BlockWrapper>
    </ThemeProvider>
  );
}

Block.defaultProps = {
  attributes: {
    ...ATTRIBUTES
  }
};

export const ControlledBlock = withControlPanel(ATTRIBUTES)(Block);

export default Block;
