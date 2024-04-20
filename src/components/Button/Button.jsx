import btnStyle from './style.module.css'

export const Button = ({ onLoadMore, hasMore }) => {
  return (
      <div className={btnStyle.wrapper}>
      <button
        className={btnStyle.button}
        onClick={onLoadMore}
        disabled={!hasMore}
      >
        Load more
      </button>
    </div>
  );
};