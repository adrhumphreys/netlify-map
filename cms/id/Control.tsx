import { Component } from "react";
import type { CmsWidgetControlProps } from "netlify-cms-core";
import { nanoid } from "nanoid";

class Control extends Component<CmsWidgetControlProps> {
  public constructor(props: CmsWidgetControlProps) {
    super(props);

    if (props.value) return;

    this.generateId();
  }

  public generateId() {
    const { onChange } = this.props;

    onChange(nanoid());
  }

  public componentDidUpdate() {
    if (this.props.value) return;

    this.generateId();
  }

  render() {
    const { classNameWrapper, forID, value } = this.props;
    return (
      <input className={classNameWrapper} id={forID} value={value} disabled />
    );
  }
}

export default Control;
