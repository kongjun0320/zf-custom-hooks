import { useEffect, useState } from 'react';

function useRequest(url) {
  // 查询参数
  const [options, setOptions] = useState({
    currentPage: 1,
    pageSize: 5,
  });
  // 接口返回的数据
  const [data, setData] = useState({
    totalPage: 0,
    list: [],
  });

  /**
   * 调用接口，返回数据
   */
  function getData() {
    let { currentPage, pageSize } = options;
    fetch(`${url}?currentPage=${currentPage}&pageSize=${pageSize}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }

  useEffect(getData, [options, url]);

  return { data, options, setOptions };
}

export default useRequest;
