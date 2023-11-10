export const ContactData = ({ data }) => {
  return data.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}: {number}
      </li>
    );
  });
};
