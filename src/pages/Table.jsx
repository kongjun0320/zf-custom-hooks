import useRequest from '../hooks/useRequest';

const URL = 'http://localhost:8000/api/users';

const Table = () => {
  // 用来请求远程接口，用来实现分页数据的获取
  const { data, options, setOptions } = useRequest(URL);
  const { totalPage, list } = data;

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {new Array(totalPage).fill(0).map((item, index) => {
            return (
              <li>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setOptions({ ...options, currentPage: index + 1 });
                  }}
                >
                  {index + 1}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Table;
