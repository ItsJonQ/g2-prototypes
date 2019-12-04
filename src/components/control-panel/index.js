import React, { useState } from "react";
import View from "../view";
import { ControlBox, Title, Input } from "./styles";

function Field({ label, value, onChange }) {
  return (
    <View mb={2}>
      <View mb={1}>{label}</View>
      <Input value={value} onChange={e => onChange(e.target.value)} />
    </View>
  );
}

function FloatingPanel({ attributes, setAttributes }) {
  const items = Object.keys(attributes);

  return (
    <ControlBox>
      <View mb={2}>
        <Title>CONTROL PANEL</Title>
      </View>
      {items.map(item => {
        const value = attributes[item];
        const onChange = nextValue => {
          setAttributes({ [item]: nextValue });
        };
        return <Field onChange={onChange} label={item} value={value} />;
      })}
    </ControlBox>
  );
}

export default function ControlPanel(props) {
  const { attributes, children } = props;
  const [state, setState] = useState(attributes);

  const setAttributes = nextState => {
    setState({ ...state, ...nextState });
  };

  return (
    <>
      <FloatingPanel attributes={state} setAttributes={setAttributes} />
      {children({ attributes: state, setAttributes })}
    </>
  );
}

export function withControlPanel(attributes = {}) {
  return WrappedComponent => {
    return () => (
      <ControlPanel attributes={attributes}>
        {controlPanelProps => <WrappedComponent {...controlPanelProps} />}
      </ControlPanel>
    );
  };
}
