import Image from "..";
import React from "react";
import Loading from "../../loading";

export default () => {
  return (
    <div>
      <Image
        loader={<Loading />}
        unloader={<span>加载错误</span>}
        width={200}
        height={200}
        src="https://t7.baidu.com/it/u=3203007717,1062852813&fm=193&f=GI"/>
    </div>
  )
}