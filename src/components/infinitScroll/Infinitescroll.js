import React from 'react';

class Infinitescroll extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      per: 21,
      page: 1,
      total_pages: null,
    };
  }

  loadUser = () => {
    const {per, page, data} = this.state;
    this.props.fetchBeerStart({per, page, data});
  };

  componentDidMount () {
    this.loadUser();
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e);
    });
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
    return (
      <React.Fragment>
        {this.props.children}

        <button
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More
        </button>
      </React.Fragment>
    );
  }
}

export default Infinitescroll;
