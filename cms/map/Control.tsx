import { Component } from "react";
import type { CmsWidgetControlProps } from "netlify-cms-core";
import MapField from "./MapField";

class Control extends Component<CmsWidgetControlProps> {
  public constructor(props: CmsWidgetControlProps) {
    super(props);
  }

  render() {
    const { classNameWrapper, forID, value } = this.props;

    return (
      <div>
        <p>hey</p>
        <MapField />
      </div>
    );
  }
}

export default Control;
