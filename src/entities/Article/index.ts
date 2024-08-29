import { Article } from 'entities/Article/model/types/article';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export {
    Article, ArticleView, ArticleSortField, ArticleType,
} from './model/types/article';
export { ArticleDetailsShema } from './model/types/articleDetailsShema';

export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';
export { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector';
export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';
export { getArticleDetailsData } from './model/selectors/articleDetails';
