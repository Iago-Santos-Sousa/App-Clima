const Loading = ({ classErro }) => {
   return (
      <div id="loader" className={classErro ? "show" : "hide"}>
         <i className={"fa-solid fa-spinner"}></i>
      </div>
   );
};

export default Loading;
