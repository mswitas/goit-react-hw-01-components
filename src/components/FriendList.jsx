import { FriendListItem } from "./FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    const listItems = friends.map(friend => {
        return (
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        );
    });
    return (
        <ul className={css.friendList}>{listItems}</ul>
    );
}