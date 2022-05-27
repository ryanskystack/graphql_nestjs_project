import * as React from 'react';
import ArticleList from '../components/ArticleList';
import ExcerptPage from './ExcerptPage';


const LatestArticlesPage = () => {
  const [isFiveMore, setIsFiveMore] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <div>
        <ArticleList setIsFiveMore={setIsFiveMore} />
      </div>
      <div>
        <div>
          <ExcerptPage isFiveMore={isFiveMore} 
           />
        </div>
      </div>
    </div>
  );
};



export default LatestArticlesPage;