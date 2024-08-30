import React, { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);
    // let count = 0;
    return(
        <div className="text-2xl font-medium text-white text-center">
            <p>The VSlue is Count is : {count}</p>
            <button className="p-2 bg-slate-200 shadow rounded text-gray-800 m-4 active:bg-slate-400" onClick={()=>
                setCount(count-1);
            }></button>
        </div>
    )
}