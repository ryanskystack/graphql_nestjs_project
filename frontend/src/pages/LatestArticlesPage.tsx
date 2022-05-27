import * as React from 'react';
import ArticleList from '../components/ArticleList';
import ExcerptPage from './ExcerptPage';


const LatestArticlesPage = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <div>
        <ArticleList />
      </div>
      <div>
        <div>
          <ExcerptPage />
        </div>
      </div>
    </div>
  );
};



export default LatestArticlesPage;