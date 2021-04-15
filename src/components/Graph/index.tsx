import React, { useEffect, useState } from 'react';
import LoadingGraph from '../Shimmer/LoadingGraph';

const Graph: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  },[]);


  return isLoading ? (
    <div className="page-content">
      <div className="plot"><LoadingGraph /></div>
      <div className="plot"><LoadingGraph /></div>
      <div className="plot"><LoadingGraph /></div>
      <div className="plot"><LoadingGraph /></div>
      <div className="plot"><LoadingGraph /></div>
      <div className="plot"><LoadingGraph /></div>
      {/* <div className="plot"><LoadingGraph /></div> */}
    </div>
  ) : (
    <div className="page-content">
      <div className="plot"><h2>plot n</h2><img src="https://tests-alira.s3.sa-east-1.amazonaws.com/03.jpg" alt=""/></div>
      <div className="plot"><h2>plot n</h2><img src="https://tests-alira.s3.sa-east-1.amazonaws.com/01.jpg" alt=""/></div>
      <div className="plot"><h2>plot n</h2><img src="https://tests-alira.s3.sa-east-1.amazonaws.com/02.jpg" alt=""/></div>
      <div className="plot"><h2>plot n</h2><img src="https://tests-alira.s3.sa-east-1.amazonaws.com/06.jpg" alt=""/></div>
      <div className="plot"><h2>plot n</h2><img src="https://tests-alira.s3.sa-east-1.amazonaws.com/05.jpg" alt=""/></div>
      <div className="plot"><h2>plot n</h2><img src="https://tests-alira.s3.sa-east-1.amazonaws.com/04.jpg" alt=""/></div>
      {/* <div className="plot"><h2>plot n</h2><img src="https://tests-alira.s3.sa-east-1.amazonaws.com/1617772994843-graph.png" alt=""/></div> */}
    </div>
  );
}

export default Graph;
