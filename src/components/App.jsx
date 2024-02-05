import { Profile } from "./Profile";
import user from "data/user.json";
import { Statistics } from "./Statistics";
import stats from "data/stats.json";

export const App = () => {
  return (
    <>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={stats}
      />
    </>
  );
};
