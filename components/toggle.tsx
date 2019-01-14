import * as React from "react";

type Toggler = () => void;

interface ToggleRenderProps {
  isOpen: boolean;
  onToggle: Toggler;
}

interface ToggleState {
  open: boolean;
}

interface ToggleProps {
  children: (x: ToggleRenderProps) => React.ReactNode
}


export default class Toggle extends React.Component<ToggleProps, ToggleState> {
  state = {
    open: true
  };

  onToggle: Toggler = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return this.props.children({
      isOpen: this.state.open,
      onToggle: this.onToggle
    } as ToggleRenderProps);
  }
}
