import loaderStyle from './style.module.css'

export const Loader = () => {
  return (
    <div className={loaderStyle.loaderDiv}>
      <div className={loaderStyle.loader}></div>
    </div>
  );
};
