import React from "react";
import VirtualList from "..";

const originalData:any[] = []
for (let i = 0; i < 200; i++) {
  originalData.push(i);
}

export default () => <VirtualList listData={originalData} itemSize={50} screenHeight={360}/>