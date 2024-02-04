import { Profile } from "./Profile";
import user from "data/user.json";

export const App = () => {
  return (
    <>
      <section>
        <Profile
          userName={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section></section>
    </>
  );
};
