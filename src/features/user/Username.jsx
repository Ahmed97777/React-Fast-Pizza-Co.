import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div
      className="hidden text-base font-medium
      md:block md:text-lg "
    >
      {username}
    </div>
  );
}

export default Username;
