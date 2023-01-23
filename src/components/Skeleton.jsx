import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <div className="col-6 col-md-3 mt-4">
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="0" y="25" rx="0" ry="0" width="255" height="255" />
      <rect x="0" y="300" rx="0" ry="0" width="200" height="20" />
      <rect x="0" y="330" rx="0" ry="0" width="100" height="20" />
      <rect x="0" y="360" rx="8" ry="8" width="255" height="40" />
    </ContentLoader>
  </div>
);

export default Skeleton;
