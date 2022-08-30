import React, { useEffect, useRef, useState } from 'react';
import './style.css';

export default function VirtualList(props: {
  listData: any[];
  itemSize: number;
  screenHeight: number;
}) {
  const bufferScale: number = 1;
  const { listData, itemSize, screenHeight } = props;
  const listHeight = listData.length * itemSize;
  const visibleCount = Math.ceil(screenHeight / itemSize);

  const listRef = useRef<HTMLDivElement | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(visibleCount);
  const [offset, setOffset] = useState(0);
  const [showData, setShowData] = useState<any[]>([]);


  const handleScroll = () => {
    let scrollTop = listRef.current!.scrollTop;  // 当前滚动位置
    let newStartIndex = Math.floor(scrollTop / itemSize);
    let newEndIndex = newStartIndex + visibleCount;
    let newOffset = scrollTop - (scrollTop % itemSize);
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
    setOffset(newOffset);
  }

  useEffect(() => {
    const aboveCount = Math.min(startIndex, bufferScale * visibleCount);
    const belowCount = Math.min(listData.length - endIndex, bufferScale * visibleCount);
    const realStartIndex = startIndex - aboveCount;
    const realEndIndex = endIndex + belowCount;
    const newShowData = listData.slice(realStartIndex, realEndIndex);
    setShowData(newShowData);
  }, [startIndex, endIndex, listData])

  return (
    <div ref={listRef} className="infinite-list-container"
      style={{ height: screenHeight }}
      onScroll={handleScroll}>
      <div className="infinite-list-phantom" style={{ height: listHeight }}></div>
      <ul className="infinite-list" style={{ transform: `translate3d(0,${offset}px,0)` }}>
        {
          showData.map((data, index) => {
            return (
              <li className='infinite-list-row' style={{ height: itemSize }} key={index}>
                {data}
              </li>
            )
          })
        }
      </ul >
    </div >

  )
}
