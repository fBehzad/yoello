import React, { Component, Fragment } from 'react';
import './collapse.style.sass';

export class Collapse extends Component {
  connected = false;
  static defaultProps = {
    animationDuration: 200,
  };
  state = {
    visibility: false,
    active: false,
  };

  collapseRef = React.createRef();
  childrenRef = React.createRef();

  calculate = (visibility) => {
    const {auto} = this.props;
    const collapseView = this.collapseRef.current;
    const childrenView = this.childrenRef.current;

    if (!collapseView || !childrenView) {
      return;
    }

    const height = window.getComputedStyle(childrenView).height;

    if (visibility) {
      collapseView.style.height = auto ? 'auto' : height;
      collapseView.style.maxHeight = '380px';
    } else {
      collapseView.style.height = '0px';
    }

  };

  show = () => {
    if (this.state.visibility) {
      return;
    }
    this.props.onShow && this.props.onShow();
    this.setState({visibility: true}, () => {
      this.calculate(true);
      this.setState({active: true});
    });
  };

  hide = () => {
    const {animationDuration} = this.props;

    if (!this.state.visibility) {
      return;
    }
    this.setState({active: false}, () => {
      this.calculate(false);
      setTimeout(() => {
        if (!this.connected) {
          return;
        }
        this.setState({visibility: false}, () => {
          this.props.onHide && this.props.onHide();
        });
      }, animationDuration);
    });
  };

  setVisibility = (value) => {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  };

  refresh = () => {
    if (this.state.visibility) {
      this.calculate(this.state.visibility);
    }
  };


  componentDidMount () {
    const {flag} = this.props;
    if (typeof flag !== 'undefined') {
      this.state.visibility = flag;
      this.state.active = flag;
    }
    this.connected = true;
    this.refresh();
  }

  componentWillUnmount () {
    this.connected = false;
  }

  componentWillReceiveProps (nextProps, nextContext) {
    if (typeof nextProps.flag !== 'undefined' && this.props.flag !== nextProps.flag) {
      this.setVisibility(nextProps.flag);
    }
  }

  render () {
    const {visibility, active} = this.state;
    const {children, className, content, animationDuration, flag} = this.props;
    return (
      <Fragment>
        {content && content({
          visibility,
          flag,
          setVisibility: this.setVisibility,
          ref: null,
          refresh: this.refresh,
        })}
        <div
          ref={this.collapseRef}
          className={`collapse-wrapper ${className || ''} ${visibility ? 'visibility' : ''} ${active ? 'active' : ''}`}
          style={{transitionDuration: `${visibility ? animationDuration : 0}ms`}}
        >
          {(visibility && children) && children({
            visibility,
            flag,
            setVisibility: this.setVisibility,
            ref: this.childrenRef,
            refresh: this.refresh,
          })}
        </div>

      </Fragment>
    );
  }
}
