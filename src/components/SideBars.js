//Возвращает виджеты нужных тематик
export default function Sidebars({ data }) {
    return (
      <aside id="down-sidebar">
        {data.filter(data.theme).map((item) => (
          <Widget data={item} key={item.title} />
        ))}
      </aside>
    );
}

//Возвращает виджет со списком тем и классом, в зависимости от тематики
function Widget({ data }) {
    return (
      <div className={'down-widget ' + data.theme}>
        <div className="widget-header">{data.theme}</div>
        <ul>
          <WidgetLink data={data.theme.links} />
        </ul>
      </div>
    );
}

//Возвращает элемент ссылок виджета, в зависимости от наличия картинки, времени и т.д.
//Можно было сделать и через children, просто попробовал разные варианты
function WidgetLink({ data }) {
    return data.map((item) => (
      <li>
        {item.img ? <img src={item.img} /> : null}
        {item.time ? <div>{item.time}</div> : null}
        {item.data}
        {item.link ? <a href={item.link.href}>{item.link.title}</a> : null}
      </li>
    ));
}