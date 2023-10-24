import { useState, useEffect } from "react";

function Clock() {
  const [now, setNow] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => { // cleanup, destructeur
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Clock">
      {now.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
