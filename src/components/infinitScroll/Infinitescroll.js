import React from 'react';

class Infinitescroll extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      per: 21,
      page: 1,
      total_pages: null,
    };
  }

  loadUser = () => {
    const {per, page} = this.state;
    this.props.fetchBeerStart({per, page});
  };

  componentDidMount () {
    this.loadUser();
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.extraData !== prevProps.extraData) {
      this.setState({
        per: 21,
        page: 1,
        total_pages: null,
      })
    }
  }

  loadMore = () => {
      this.setState(
        prevState => ({
          page: prevState.page + 1,
          scrolling: true,
        }),
        this.loadUser,
      );
  };

  handleScroll = () => {
    let lastLi = document.querySelector('ul.container > li:last-child');
    // if (lastLi) {
      let lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
      let pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastLiOffset) {
        this.loadMore();
      }
    // }
  };

  render () {
    const  {children,loadmore} = this.props;
    return (
      <React.Fragment>
        {children}
        {loadmore &&
        <button
          className="loadmore-btn"
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More
        </button>}
      </React.Fragment>
    );
  }
}

export default Infinitescroll;
