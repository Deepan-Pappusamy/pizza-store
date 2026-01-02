export const fetchApi = async () => {
  const res = await fetch(
    "https://694bb9b026e870772068f43d.mockapi.io/api/pizzas/pizzas"
  );
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};
