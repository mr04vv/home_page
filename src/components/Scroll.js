import React from "react"
import {ScrollWrapper, ScrollBarUnder, keyframes_under, keyframes_under_webkit} from '../utilities/Keyframe'

class Scroll extends React.Component {
  componentDidMount() {
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes_under_webkit, styleSheet.cssRules.length);
    styleSheet.insertRule(keyframes_under, styleSheet.cssRules.length);
  }

  render() {
      const {toId, toName} = this.props;
    return (
        <ScrollWrapper offset={() => 0} href={toId}><ScrollBarUnder></ScrollBarUnder>{toName}</ScrollWrapper>
    )
  }
}

export default Scroll
