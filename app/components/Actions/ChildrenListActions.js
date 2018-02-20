export const addChildren = (id, birth) => {
  return {
    type: 'add_children',
    payload: { id, birth }
  };
};
