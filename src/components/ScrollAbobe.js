import React from "react"
import {ScrollWrapper, ScrollBarAbobe,keyframes_abobe_webkit,keyframes_abobe} from '../utilities/Keyframe'

class ScrollAbobe extends React.Component {
  componentDidMount() {
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes_abobe, styleSheet.cssRules.length);
    styleSheet.insertRule(keyframes_abobe_webkit, styleSheet.cssRules.length);
  }

  render() {
      const {toId, toName} = this.props;
    return (
        <ScrollWrapper offset={() => 0} href={toId}><ScrollBarAbobe></ScrollBarAbobe>{toName}</ScrollWrapper>
    )
  }
}


export default ScrollAbobe
