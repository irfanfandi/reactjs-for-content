import { useEffect, useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
      keepPreviousData: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

function Users() {
  const [page, setpage] = useState(0);

  const getUsers = async (param) => {
    return fetch(`https://dummyjson.com/users?${param}`).then(
      async (e) => await e.json()
    );
  };

  const { data, isFetching } = useQuery(["users", page], async () => {
    return await getUsers(`limit=5&skip=${page}`);
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isFetching ? (
          <h1>loading</h1>
        ) : (
          <ul>
            {data.users.map((user) => (
              <li key={user.id}>{user.firstName}</li>
            ))}
          </ul>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          disabled={page === 0}
          onClick={() => {
            setpage((prev) => prev - 1);
          }}
        >
          Prev page
        </button>
        <button
          onClick={() => {
            setpage((prev) => prev + 1);
          }}
        >
          Next page
        </button>
      </div>
    </div>
  );
}

export default App;
