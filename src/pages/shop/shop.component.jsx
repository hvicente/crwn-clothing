import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    console.log('useEffect');
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;
  //   fetchCollectionsStart();
  // }

  return (
    <div className="shop-page">
      {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
      <Route
        exact
        path={`${match.path}`}
        // render={props => (
        // <CollectionOverviewWithSpinner isLoading={isFetchingCollections} {...props} />
        component={CollectionsOverviewContainer}
        // )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
        // render={props => (
        //   <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
        // )}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
