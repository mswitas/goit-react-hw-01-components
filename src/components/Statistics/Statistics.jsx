import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
    const list = stats.slice(0, 4).map(item => {
        const colorHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
        return (
            <li className={css.item} key={item.id} style={{ backgroundColor: colorHex}} >
                <span className={css.label}>{item.label}</span>
                <span className={css.percentage}>{item.percentage}%</span>
            </li>
        );
    });
    return (
        <section className={css.statistics}>
            {title && (
                <h2 className={css.title}>{title}</h2>
            )}
            <ul className={css.statList}>{list}</ul>
        </section>
    );
}